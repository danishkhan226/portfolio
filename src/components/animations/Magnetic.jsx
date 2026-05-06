'use client';

import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useRef } from 'react';

export default function Magnetic({ children }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { type: "spring", stiffness: 150, damping: 15, mass: 0.1 };
  const quickX = useSpring(x, springConfig);
  const quickY = useSpring(y, springConfig);

  const rectRef = useRef(null);

  const handleMouseEnter = (e) => {
    rectRef.current = e.currentTarget.getBoundingClientRect();
  };

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    if (!rectRef.current) return;
    const { width, height, left, top } = rectRef.current;
    const targetX = clientX - (left + width / 2);
    const targetY = clientY - (top + height / 2);
    x.set(targetX * 0.4);
    y.set(targetY * 0.4);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ 
        display: 'inline-block',
        x: quickX,
        y: quickY,
        willChange: 'transform'
      }}
    >
      {children}
    </motion.div>
  );
}
