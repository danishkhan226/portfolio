'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

const BACKGROUND_VIDEO_URL = 'https://assets.mixkit.co/videos/preview/mixkit-abstract-flowing-purple-and-blue-gradient-background-27244-large.mp4';

export default function BackgroundVideo() {
  const [isMounted, setIsMounted] = useState(false);
  const { scrollYProgress } = useScroll();
  const videoRef = useRef(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const opacity = useTransform(scrollYProgress, [0, 0.8, 1], [0.6, 0.4, 0.2]);
  
  if (!isMounted) return null;

  return (
    <div style={{ 
      position: 'fixed', 
      top: 0, 
      left: 0, 
      width: '100%', 
      height: '100%', 
      zIndex: -2, 
      overflow: 'hidden',
      backgroundColor: '#050505'
    }}>
      <motion.div
        style={{
          width: '100%',
          height: '100%',
          scale,
          opacity,
        }}
      >
        <video
          ref={videoRef}
          muted
          loop
          playsInline
          autoPlay
          preload="auto"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            willChange: 'opacity'
          }}
        >
          <source src={BACKGROUND_VIDEO_URL} type="video/mp4" />
        </video>
      </motion.div>

      {/* Premium Overlays */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(circle at center, transparent 0%, rgba(5,5,5,0.4) 100%)',
        pointerEvents: 'none'
      }} />
      
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(to bottom, rgba(5,5,5,0.8) 0%, transparent 20%, transparent 80%, rgba(5,5,5,0.8) 100%)',
        pointerEvents: 'none'
      }} />
    </div>
  );
}




