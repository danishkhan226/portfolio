'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function PageLoader() {
  const [isVisible, setIsVisible] = useState(true);
  const [isMounted, setIsMounted] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  if (!isMounted) return null;

  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: isVisible ? 0 : "-100%" }}
      onAnimationComplete={() => !isVisible && setIsMounted(false)}
      transition={{ duration: 1.2, ease: [0.85, 0, 0.15, 1], delay: 0.5 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        willChange: 'transform',
        backgroundColor: '#050505',
        zIndex: 10000,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div style={{ overflow: 'hidden' }}>
        <motion.h1
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          style={{ 
            fontSize: '2rem', 
            color: 'white', 
            fontWeight: 300, 
            letterSpacing: '0.2em',
            margin: 0
          }}
        >
          DANIEL.DEV
        </motion.h1>
      </div>
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        style={{
          width: '100px',
          height: '1px',
          backgroundColor: 'var(--primary)',
          marginTop: '1rem',
          transformOrigin: 'left'
        }}
      />
    </motion.div>
  );
}
