'use client';

import { motion } from 'framer-motion';
import { Terminal, Mail } from 'lucide-react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa6';
import SectionTransition from './animations/SectionTransition';
import PerspectiveCard from './animations/PerspectiveCard';
import ImageReveal from './animations/ImageReveal';
import TextReveal from './animations/TextReveal';
import Magnetic from './animations/Magnetic';

export default function About() {
  return (
    <SectionTransition>
      <section id="about" className="section-padding" style={{ borderTop: '4px solid var(--border)' }}>
        <div className="container">
          <div className="grid-2 mobile-column" style={{ alignItems: 'center' }}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              style={{ position: 'relative' }}
            >
              <PerspectiveCard>
                <div className="card" style={{ padding: 0, borderRadius: '32px', overflow: 'hidden', aspectRatio: '4/5' }}>
                  <ImageReveal 
                    src="/profile_main.png" 
                    alt="Daniel - Full Stack Engineer" 
                    style={{ width: '100%', height: '100%' }}
                  />
                </div>
              </PerspectiveCard>
                <div style={{ 
                position: 'absolute', 
                bottom: '-20px', 
                right: '-20px', 
                background: 'var(--primary)', 
                padding: '2rem', 
                border: '4px solid var(--border)',
                boxShadow: '8px 8px 0px var(--border)'
              }}>
                <Terminal color="var(--border)" size={32} />
              </div>
            </motion.div>

            <div>
              <motion.span 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                style={{ 
                  color: 'var(--primary)', 
                  fontWeight: 900, 
                  letterSpacing: '0.1em', 
                  fontSize: '0.9rem', 
                  display: 'inline-block', 
                  marginBottom: '1.5rem',
                  border: '4px solid var(--border)',
                  padding: '0.5rem 1rem',
                  background: 'var(--background)',
                  boxShadow: '4px 4px 0px var(--border)',
                  textTransform: 'uppercase'
                }}
              >
                BIOGRAPHY
              </motion.span>
              <TextReveal>
                <h2 style={{ fontSize: 'clamp(2.5rem, 8vw, 3.5rem)', marginBottom: '2rem', fontWeight: 900, textTransform: 'uppercase', textShadow: '3px 3px 0px var(--primary)' }}>
                  I craft digital experiences with precision.
                </h2>
              </TextReveal>
              <div style={{ color: 'var(--foreground)', fontSize: '1.2rem', gap: '1.5rem', display: 'flex', flexDirection: 'column', fontWeight: 600 }}>
                <p>
                  I&apos;m Daniel, a multidisciplinary product designer and developer based in San Francisco. I specialize in building digital products that bridge the gap between aesthetics and functionality.
                </p>
                <p>
                  My approach is rooted in bold design principles and clean, maintainable code. I believe that the best products are those that feel alive and indispensable.
                </p>
                
                <div style={{ marginTop: '2rem', display: 'flex', gap: 'clamp(1.5rem, 5vw, 3rem)', flexWrap: 'wrap' }}>
                  <div>
                    <h3 style={{ fontSize: 'clamp(2rem, 6vw, 3rem)', color: 'var(--accent)', fontWeight: 900, textShadow: '2px 2px 0px var(--border)' }}>5+</h3>
                    <p style={{ fontSize: '0.75rem', color: 'var(--foreground)', letterSpacing: '0.1em', fontWeight: 900, textTransform: 'uppercase' }}>YEARS EXP.</p>
                  </div>
                  <div>
                    <h3 style={{ fontSize: 'clamp(2rem, 6vw, 3rem)', color: 'var(--accent)', fontWeight: 900, textShadow: '2px 2px 0px var(--border)' }}>40+</h3>
                    <p style={{ fontSize: '0.75rem', color: 'var(--foreground)', letterSpacing: '0.1em', fontWeight: 900, textTransform: 'uppercase' }}>PROJECTS</p>
                  </div>
                  <div>
                    <h3 style={{ fontSize: 'clamp(2rem, 6vw, 3rem)', color: 'var(--accent)', fontWeight: 900, textShadow: '2px 2px 0px var(--border)' }}>12</h3>
                    <p style={{ fontSize: '0.75rem', color: 'var(--foreground)', letterSpacing: '0.1em', fontWeight: 900, textTransform: 'uppercase' }}>AWARDS</p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1.5rem', marginTop: '2rem' }}>
                  <Magnetic><motion.a whileHover={{ scale: 1.1, color: 'var(--primary)' }} href="#" style={{ color: 'var(--border)' }}><FaGithub size={32} /></motion.a></Magnetic>
                  <Magnetic><motion.a whileHover={{ scale: 1.1, color: 'var(--primary)' }} href="#" style={{ color: 'var(--border)' }}><FaLinkedin size={32} /></motion.a></Magnetic>
                  <Magnetic><motion.a whileHover={{ scale: 1.1, color: 'var(--primary)' }} href="#" style={{ color: 'var(--border)' }}><FaTwitter size={32} /></motion.a></Magnetic>
                  <Magnetic><motion.a whileHover={{ scale: 1.1, color: 'var(--primary)' }} href="#" style={{ color: 'var(--border)' }}><Mail size={32} /></motion.a></Magnetic>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SectionTransition>
  );
}
