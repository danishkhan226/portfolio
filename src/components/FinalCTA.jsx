'use client';

import { motion } from 'framer-motion';
import Magnetic from './animations/Magnetic';
import SectionTransition from './animations/SectionTransition';

export default function FinalCTA() {
  return (
    <SectionTransition>
      <section style={{ borderTop: '4px solid var(--border)', overflow: 'hidden', background: 'var(--background)' }}>
        <div className="container" style={{ position: 'relative' }}>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            style={{ 
              background: 'var(--accent)',
              padding: '8rem 4rem',
              borderRadius: '0',
              border: '4px solid var(--border)',
              boxShadow: '16px 16px 0px var(--border)',
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            {/* Decorative elements */}
            <div style={{ position: 'absolute', top: '-50px', left: '-50px', width: '200px', height: '200px', background: 'var(--primary)', border: '4px solid var(--border)', pointerEvents: 'none' }} />
            <div style={{ position: 'absolute', bottom: '-50px', right: '-50px', width: '200px', height: '200px', background: 'var(--background)', border: '4px solid var(--border)', pointerEvents: 'none' }} />

            <h2 style={{ fontSize: 'clamp(3rem, 7vw, 5.5rem)', marginBottom: '3rem', lineHeight: 1, fontWeight: 900, textTransform: 'uppercase', color: 'var(--background)', textShadow: '6px 6px 0px var(--border)', WebkitTextStroke: '2px var(--border)' }}>Ready to start your <br /> next project?</h2>
            <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center' }}>
              <Magnetic>
                <a href="#contact">
                  <button className="btn-primary" style={{ height: '72px', padding: '0 4rem', fontSize: '1.2rem' }}>Get Started</button>
                </a>
              </Magnetic>
              <Magnetic>
                <button className="btn-outline" style={{ height: '72px', padding: '0 4rem', fontSize: '1.2rem' }}>Book a Call</button>
              </Magnetic>
            </div>
          </motion.div>
        </div>
      </section>
    </SectionTransition>
  );
}
