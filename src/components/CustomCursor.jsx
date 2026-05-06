'use client';

import { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);
  const mouseRef = useRef({ x: -100, y: -100 });
  const cursorPos = useRef({ x: -100, y: -100 });
  const followerPos = useRef({ x: -100, y: -100 });
  const scaleRef = useRef(1);
  const hoverRef = useRef(false); // Using Ref instead of State for animation stability
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    console.log('CustomCursor mounted');
    const checkTouch = () => {
      setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
    };
    checkTouch();

    if (isTouchDevice) return;

    const handleMouseMove = (e) => {
      if (!isVisible) setIsVisible(true);
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    const handleMouseOver = (e) => {
      const target = e.target;
      if (!target) return;
      
      const isClickable = 
        target.closest('button') || 
        target.closest('a') || 
        target.closest('input') ||
        target.closest('textarea') ||
        window.getComputedStyle(target).cursor === 'pointer';
      
      hoverRef.current = !!isClickable;
    };

    let animationId;
    const updatePosition = () => {
      const cursorLerp = 0.2; 
      const followerLerp = 0.1; 
      const scaleLerp = 0.02; // Fixed ultra-slow expansion speed

      // Position interpolation
      cursorPos.current.x += (mouseRef.current.x - cursorPos.current.x) * cursorLerp;
      cursorPos.current.y += (mouseRef.current.y - cursorPos.current.y) * cursorLerp;
      
      followerPos.current.x += (mouseRef.current.x - followerPos.current.x) * followerLerp;
      followerPos.current.y += (mouseRef.current.y - followerPos.current.y) * followerLerp;

      // Scale interpolation
      const targetScale = hoverRef.current ? 1.8 : 1;
      scaleRef.current += (targetScale - scaleRef.current) * scaleLerp;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${cursorPos.current.x}px, ${cursorPos.current.y}px, 0)`;
        cursorRef.current.style.opacity = isVisible ? 1 : 0;
      }
      
      if (followerRef.current) {
        followerRef.current.style.transform = `translate3d(${followerPos.current.x}px, ${followerPos.current.y}px, 0) scale(${scaleRef.current})`;
        followerRef.current.style.opacity = isVisible ? 1 : 0;
        followerRef.current.style.borderColor = hoverRef.current ? '#000' : 'rgba(0, 0, 0, 0.5)';
        followerRef.current.style.background = hoverRef.current ? 'rgba(253, 224, 71, 0.5)' : 'transparent';
      }

      animationId = requestAnimationFrame(updatePosition);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseover', handleMouseOver, { passive: true });
    window.addEventListener('mouseenter', handleMouseEnter);
    window.addEventListener('mouseleave', handleMouseLeave);
    
    animationId = requestAnimationFrame(updatePosition);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationId);
    };
  }, [isVisible, isTouchDevice]); // Removed hoverRef and mouseRef from dependencies

  if (isTouchDevice) return null;

  return (
    <div className="custom-cursor-container" style={{ 
      position: 'fixed', 
      top: 0, 
      left: 0, 
      width: '100%', 
      height: '100%', 
      pointerEvents: 'none', 
      zIndex: 99999
    }}>
      <div 
        ref={cursorRef} 
        className="cursor-dot"
        style={{ 
          position: 'absolute',
          top: 0,
          left: 0,
          width: '6px',
          height: '6px',
          margin: '-3px 0 0 -3px',
          background: '#000',
          borderRadius: '50%',
          willChange: 'transform',
          transition: 'opacity 0.2s ease',
          boxShadow: 'none'
        }} 
      />
      <div 
        ref={followerRef} 
        className="cursor-follower"
        style={{ 
          position: 'absolute',
          top: 0,
          left: 0,
          width: '40px',
          height: '40px',
          margin: '-20px 0 0 -20px',
          border: '3px solid #000',
          borderRadius: '50%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          willChange: 'transform',
          transition: 'opacity 0.2s ease, border-color 0.2s ease, width 0.2s ease, height 0.2s ease, background 0.2s ease'
        }}
      >
      </div>
    </div>
  );
}

