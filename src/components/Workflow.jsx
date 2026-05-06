'use client';

import { motion } from 'framer-motion';
import SectionTransition from './animations/SectionTransition';

const workflowSteps = [
  { step: '01', title: 'Strategy', desc: 'Deep dive into requirements, market research, and defining the core problem we are solving.' },
  { step: '02', title: 'Design', desc: 'Crafting the visual identity, user flows, and high-fidelity interactive prototypes.' },
  { step: '03', title: 'Development', desc: 'Engineering a robust, scalable architecture using modern tech stacks and best practices.' },
  { step: '04', title: 'Launch', desc: 'Rigorous testing, performance optimization, and seamless deployment to production.' }
];

export default function Workflow() {
  return (
    <SectionTransition>
      <section id="workflow" style={{ borderTop: '4px solid var(--border)', background: 'var(--background)' }}>
        <div className="container">
          <div className="grid-2 mobile-column" style={{ alignItems: 'start' }}>
            <div style={{ position: 'sticky', top: '150px' }}>
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
                MY PROCESS
              </motion.span>
              <h2 style={{ fontSize: '3.5rem', marginBottom: '2rem', fontWeight: 900, textTransform: 'uppercase', textShadow: '4px 4px 0px rgba(0,0,0,0.1)' }}>How I bring ideas to life.</h2>
              <p style={{ color: 'var(--secondary)', fontSize: '1.2rem', maxWidth: '400px', fontWeight: 600 }}>
                A structured approach to design and development ensures that every project is delivered with precision and excellence.
              </p>
            </div>

            <div style={{ display: 'grid', gap: '3rem' }}>
              {workflowSteps.map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.8 }}
                  className="card"
                  style={{ 
                    display: 'flex', 
                    gap: '2rem', 
                    padding: '3rem',
                    background: 'var(--background)',
                    border: '4px solid var(--border)',
                    boxShadow: '8px 8px 0px var(--border)',
                    borderRadius: '0',
                    alignItems: 'flex-start'
                  }}
                >
                  <span style={{ 
                    fontSize: '3rem', 
                    fontWeight: 900, 
                    color: 'var(--background)', 
                    WebkitTextStroke: '2px var(--border)',
                    textShadow: '4px 4px 0px var(--primary)',
                    lineHeight: 1
                  }}>{item.step}</span>
                  <div>
                    <h3 style={{ fontSize: '2rem', marginBottom: '1rem', fontWeight: 900, textTransform: 'uppercase' }}>{item.title}</h3>
                    <p style={{ color: 'var(--secondary)', fontSize: '1.1rem', lineHeight: 1.7, fontWeight: 600 }}>{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </SectionTransition>
  );
}
