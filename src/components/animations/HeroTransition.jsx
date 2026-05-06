'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion, AnimatePresence } from 'framer-motion';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Cinematic HeroTransition Component
 * Implements: 
 * 1. Pull-focus swap between text and character.
 * 2. High-performance canvas frame sequence.
 * 3. Automated slide-up exit on completion.
 */
export default function HeroTransition() {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const textRef = useRef(null);
  const wrapperRef = useRef(null);
  
  const [images, setImages] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);

  const frameCount = 171;
  const getFrameUrl = (index) => `/invincible-sequence/ezgif-frame-${index.toString().padStart(3, '0')}.jpg`;

  // 1. High-Performance Image Preloading
  useEffect(() => {
    let loadedCount = 0;
    const preloadedImages = [];

    const preload = () => {
      for (let i = 1; i <= frameCount; i++) {
        const img = new Image();
        img.src = getFrameUrl(i);
        img.onload = () => {
          loadedCount++;
          setLoadingProgress(Math.floor((loadedCount / frameCount) * 100));
          if (loadedCount === frameCount) {
            setImages(preloadedImages);
            setIsLoaded(true);
          }
        };
        img.onerror = () => {
          console.error(`Failed to load frame: ${getFrameUrl(i)}`);
          loadedCount++;
          if (loadedCount === frameCount) {
            setImages(preloadedImages);
            setIsLoaded(true);
          }
        };
        preloadedImages[i - 1] = img;
      }
    };

    preload();
  }, []);

  // 2. Main Animation Logic (GSAP + Canvas)
  useEffect(() => {
    if (!isLoaded || images.length === 0 || !canvasRef.current || !containerRef.current) return;

    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    const textLayer = textRef.current;
    const wrapper = wrapperRef.current;
    
    // Internal state for GSAP to manipulate
    const animeState = { 
      frame: 0,
      characterBlur: 8,
      textBlur: 0,
      textOpacity: 1,
      yOffset: 0,
      scale: 1,
      charOpacity: 1,
      hintOpacity: 1 // For "Keep Scrolling" text
    };

    const setCanvasSize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      context.scale(dpr, dpr);
      render();
    };

    const render = () => {
      const img = images[Math.round(animeState.frame)];
      if (img) {
        context.clearRect(0, 0, window.innerWidth, window.innerHeight);
        
        // SOURCE CROPPING: Draw only the middle part of the 1920x1080 frame
        // Increased crop margin to ensure no thin black lines remain.
        const sourceWidth = 624; // Even tighter to kill those 1-2px lines
        const sourceX = (img.width - 640) / 2 + 8; // Offset deeper into the frame
        const sourceHeight = img.height;
        
        const targetWidth = Math.min(window.innerWidth * 0.9, 500); 
        const scale = targetWidth / sourceWidth;
        const drawWidth = sourceWidth * scale * animeState.scale;
        const drawHeight = sourceHeight * scale * animeState.scale;
        
        const x = (window.innerWidth - drawWidth) / 2;
        const y = (window.innerHeight - drawHeight) / 2 + animeState.yOffset;

        // Apply Focus Blur via Canvas Filter
        context.filter = `blur(${animeState.characterBlur}px)`;
        
        context.globalAlpha = animeState.charOpacity;
        
        context.drawImage(
          img, 
          sourceX, 0, sourceWidth, sourceHeight, 
          x, y, drawWidth, drawHeight
        );
      }

      // Sync Text Effects
      if (textLayer) {
        gsap.set(textLayer, {
          filter: `blur(${animeState.textBlur}px)`,
          opacity: animeState.textOpacity,
          color: '#000'
        });
      }
    };

    window.addEventListener('resize', setCanvasSize);
    setCanvasSize();

    // 3. Cinematic GSAP Timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=700%", // Even more depth for smoothness
        scrub: 1.8,
        pin: true,
        onUpdate: () => render(),
        onLeave: () => {
          // AUTOMATED EXIT: Slide entire window up
          gsap.to(wrapper, {
            yPercent: -100,
            duration: 1.5,
            ease: "power4.inOut"
          });
        },
        onEnterBack: () => {
          // REVERSE ENTRY: Slide window back down when scrolling back up
          gsap.to(wrapper, {
            yPercent: 0,
            duration: 1.2,
            ease: "power4.out"
          });
        }
      }
    });

    // ACT 1: Pull-Focus (First 20% of Scroll)
    tl.to(animeState, {
      characterBlur: 0,
      textBlur: 12,
      textOpacity: 0,
      hintOpacity: 0, // Logic for internal state if needed
      duration: 0.2, 
      ease: "power1.inOut"
    }, 0);

    // Sync hint text and container opacity
    tl.to(".scroll-hint-container", {
      opacity: 0,
      y: 20,
      duration: 0.1,
      ease: "power1.out"
    }, 0);

    // Fade in Scroll Back button as we reach the end of the transition
    tl.to(".scroll-back-btn", {
      opacity: 1,
      pointerEvents: "auto",
      duration: 0.2,
      ease: "power2.out"
    }, 0.8); // Appears at 80% through the timeline

    // ACT 2: Character Flight Scrubbing (171 Frames)
    tl.to(animeState, {
      frame: frameCount - 1,
      duration: 0.8,
      ease: "none"
    }, 0.2);

    // Cinematic Takeoff: Fly towards camera and off-screen
    tl.to(animeState, {
      scale: 3.5, 
      yOffset: -window.innerHeight - 1500, 
      charOpacity: 0,
      duration: 0.8,
      ease: "power3.in"
    }, 0.2);

    return () => {
      window.removeEventListener('resize', setCanvasSize);
      if (tl.scrollTrigger) tl.scrollTrigger.kill();
      tl.kill();
    };
  }, [isLoaded, images]);

  return (
    <section ref={containerRef} className="hero-transition-root" style={{
      position: 'relative',
      width: '100%',
      height: '100vh',
      background: '#ededed', // Updated to match asset background precisely
      zIndex: 2000,
      overflow: 'hidden'
    }}>
      <div ref={wrapperRef} style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, background: '#ededed' }}>
        
        {/* Preloader Overlay */}
        <AnimatePresence>
          {!isLoaded && (
            <motion.div
              exit={{ opacity: 0 }}
              style={{
                position: 'absolute',
                inset: 0,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                background: '#ededed',
                zIndex: 100
              }}
            >
              <div style={{ color: '#000', fontSize: '0.7rem', fontWeight: 800, letterSpacing: '0.5em', marginBottom: '1rem' }}>
                INITIALIZING SEQUENCE {loadingProgress}%
              </div>
              <div style={{ width: '120px', height: '2px', background: 'rgba(0,0,0,0.1)' }}>
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${loadingProgress}%` }}
                  style={{ height: '100%', background: '#000' }}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {isLoaded && (
          <>
            {/* Pull-Focus Typography Layer */}
            <div 
              ref={textRef}
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                zIndex: 20, 
                textAlign: 'center',
                width: '100%',
                pointerEvents: 'none'
              }}
            >
              <h1 style={{
                color: '#000',
                fontSize: 'clamp(4rem, 15vw, 12rem)',
                fontWeight: 900,
                letterSpacing: '-0.02em',
                lineHeight: 0.8,
                margin: 0
              }}>
                DANISH<br/>DEV
              </h1>
            </div>

            {/* Cinematic Character Canvas */}
            <motion.div 
              initial={{ y: 0 }}
              animate={{ y: [0, -15, 0] }} // Subtle Idle Floating
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              style={{ 
                width: '100%', 
                height: '100%', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                zIndex: 10
              }}
            >
              <canvas ref={canvasRef} style={{ display: 'block' }} />
            </motion.div>

            {/* KEEP SCROLLING HINT */}
            <div 
              className="scroll-hint-container"
              style={{
                position: 'absolute',
                bottom: '40px',
                left: '50%',
                transform: 'translateX(-50%)',
                zIndex: 30,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '12px'
              }}
            >
              <motion.div
                className="scroll-hint-text"
                style={{
                  color: 'rgba(0,0,0,0.6)',
                  fontSize: '0.65rem',
                  fontWeight: 900,
                  letterSpacing: '0.4em',
                  textTransform: 'uppercase',
                }}
              >
                KEEP SCROLLING
              </motion.div>
              <motion.div 
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                style={{ width: '1px', height: '30px', background: 'rgba(0,0,0,0.3)' }}
              />
            </div>

            {/* SCROLL BACK / REPLAY BUTTON */}
            <motion.button
              className="scroll-back-btn"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              initial={{ opacity: 0, pointerEvents: 'none' }}
              style={{
                position: 'absolute',
                top: '40px',
                right: '40px',
                zIndex: 100,
                background: 'rgba(0,0,0,0.05)',
                border: '1px solid rgba(0,0,0,0.1)',
                padding: '12px 20px',
                borderRadius: '100px',
                color: '#000',
                fontSize: '0.65rem',
                fontWeight: 900,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                cursor: 'pointer',
                backdropFilter: 'blur(10px)',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
              whileHover={{ scale: 1.05, background: 'rgba(0,0,0,0.1)' }}
              whileTap={{ scale: 0.95 }}
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 15l-6-6-6 6"/>
              </svg>
              SCROLL BACK
            </motion.button>
          </>
        )}
      </div>
    </section>
  );
}
