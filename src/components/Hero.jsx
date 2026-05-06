'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Magnetic from './animations/Magnetic';

export default function Hero() {
  return (
    <section className="snap-section hero" id="home">
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          style={{ textAlign: 'center', maxWidth: '1000px', margin: '0 auto' }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              style={{ color: 'var(--accent)', fontWeight: 900, letterSpacing: '0.3em', fontSize: '1rem', display: 'block', marginBottom: '1.5rem', textShadow: '2px 2px 0px #000' }}
            >
              PRODUCT DESIGNER & FULL STACK ENGINEER
            </motion.span>
            <h1 className="text-gradient" style={{ fontSize: 'clamp(4rem, 12vw, 8.5rem)', marginBottom: '2rem', lineHeight: 0.85, fontWeight: 800 }}>
              Crafting Digital <br /> Excellence.
            </h1>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            style={{ maxWidth: '650px', margin: '0 auto 4rem', color: 'var(--foreground)', fontSize: '1.25rem', lineHeight: 1.6, fontWeight: 700 }}
          >
            I bridge the gap between imagination and reality through high-performance engineering and premium visual design.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            style={{ display: 'flex', gap: '2rem', justifyContent: 'center' }}
          >
            <Magnetic>
              <a href="#works">
                <button className="btn-primary" style={{ height: '64px', padding: '0 3rem', fontSize: '1.1rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  View Projects <ArrowRight size={20} />
                </button>
              </a>
            </Magnetic>
            <Magnetic>
              <a href="#about">
                <button className="btn-outline" style={{ height: '64px', padding: '0 3rem', fontSize: '1.1rem' }}>My Story</button>
              </a>
            </Magnetic>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Animated Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        style={{ 
          position: 'absolute', 
          bottom: '2rem', 
          left: '50%', 
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.5rem'
        }}
      >
        <span style={{ fontSize: '0.9rem', fontWeight: 800, color: 'var(--foreground)', letterSpacing: '0.1em' }}>SCROLL</span>
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          style={{ width: '20px', height: '30px', border: '3px solid #000', borderRadius: '10px', position: 'relative', background: '#fff' }}
        >
          <div style={{ width: '4px', height: '8px', background: 'var(--accent)', position: 'absolute', top: '4px', left: '50%', transform: 'translateX(-50%)', borderRadius: '2px' }} />
        </motion.div>
      </motion.div>


    </section>
  );
}
