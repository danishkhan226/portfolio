'use client';

import { motion } from 'framer-motion';
import Magnetic from './animations/Magnetic';
import SectionTransition from './animations/SectionTransition';

export default function FinalCTA() {
  return (
    <SectionTransition>
      <section className="section-padding" style={{ borderTop: '4px solid var(--border)', overflow: 'hidden', background: 'var(--background)' }}>
        <div className="container" style={{ position: 'relative' }}>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            style={{ 
              background: 'var(--accent)',
              padding: 'clamp(4rem, 15vw, 8rem) clamp(1.5rem, 5vw, 4rem)',
              borderRadius: '0',
              border: '4px solid var(--border)',
              boxShadow: 'clamp(8px, 2vw, 16px) clamp(8px, 2vw, 16px) 0px var(--border)',
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            {/* Decorative elements */}
            <div style={{ position: 'absolute', top: '-50px', left: '-50px', width: '200px', height: '200px', background: 'var(--primary)', border: '4px solid var(--border)', pointerEvents: 'none', opacity: 0.5 }} />
            <div style={{ position: 'absolute', bottom: '-50px', right: '-50px', width: '200px', height: '200px', background: 'var(--background)', border: '4px solid var(--border)', pointerEvents: 'none', opacity: 0.5 }} />

            <h2 style={{ fontSize: 'clamp(2.5rem, 8vw, 5.5rem)', marginBottom: '3rem', lineHeight: 1, fontWeight: 900, textTransform: 'uppercase', color: 'var(--background)', textShadow: '4px 4px 0px var(--border)', WebkitTextStroke: '1px var(--border)' }}>Ready to start your <br /> next project?</h2>
            <div className="mobile-column" style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center' }}>
              <Magnetic>
                <a href="#contact" style={{ display: 'block', width: '100%' }}>
                  <button className="btn-primary" style={{ height: '72px', padding: '0 4rem', fontSize: '1.2rem', width: '100%' }}>Get Started</button>
                </a>
              </Magnetic>
              <Magnetic>
                <button className="btn-outline" style={{ height: '72px', padding: '0 4rem', fontSize: '1.2rem', width: '100%' }}>Book a Call</button>
              </Magnetic>
            </div>
          </motion.div>
        </div>
      </section>
    </SectionTransition>
  );
}
