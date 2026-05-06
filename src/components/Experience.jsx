'use client';

import { motion } from 'framer-motion';
import TextReveal from './animations/TextReveal';
import SectionTransition from './animations/SectionTransition';

const experience = [
  {
    year: '2022 - Present',
    role: 'Senior Full Stack Developer',
    company: 'TechFlow Systems',
    desc: 'Leading a team of developers to build scalable enterprise solutions and modernizing legacy infrastructures.'
  },
  {
    year: '2020 - 2022',
    role: 'Product Engineer',
    company: 'Starlight Interactive',
    desc: 'Developed immersive web experiences and high-performance interactive dashboards for creative clients.'
  },
  {
    year: '2018 - 2020',
    role: 'Frontend Developer',
    company: 'Pulse Media',
    desc: 'Focused on pixel-perfect UI implementation and improving web performance across multiple platforms.'
  }
];

export default function Experience() {
  return (
    <SectionTransition>
      <section id="experience" style={{ borderTop: '4px solid var(--border)' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center' }}>
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
                RESUME
              </motion.span>
            </div>
            <TextReveal>
              <h2 style={{ fontSize: '3rem', marginBottom: '4rem', textAlign: 'center', fontWeight: 900, textTransform: 'uppercase', textShadow: '4px 4px 0px var(--primary)' }}>Professional Journey</h2>
            </TextReveal>
            
            <div style={{ position: 'relative', paddingLeft: '2rem' }}>
              <motion.div 
                initial={{ height: 0 }}
                whileInView={{ height: '100%' }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                style={{ 
                  position: 'absolute', 
                  left: 0, 
                  top: 0, 
                  width: '4px', 
                  background: 'var(--border)',
                  zIndex: 0
                }} 
              />

              <div style={{ display: 'grid', gap: '3rem' }}>
                {experience.map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    whileHover={{ x: 10 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                    style={{ 
                      position: 'relative', 
                      padding: '2rem', 
                      background: 'var(--background)', 
                      border: '4px solid var(--border)',
                      boxShadow: '8px 8px 0px var(--border)',
                      transition: 'all 0.1s ease'
                    }}
                    className="experience-item"
                  >
                    <div style={{ 
                      position: 'absolute', 
                      left: '-2.4rem', 
                      top: '2.5rem', 
                      width: '16px', 
                      height: '16px', 
                      background: 'var(--primary)', 
                      border: '3px solid var(--border)',
                      borderRadius: '50%',
                      zIndex: 1
                    }} />

                    <span style={{ color: 'var(--primary)', fontSize: '1rem', fontWeight: 900, marginBottom: '0.5rem', display: 'block', textTransform: 'uppercase' }}>
                      {item.year}
                    </span>
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', fontWeight: 900, textTransform: 'uppercase' }}>{item.role}</h3>
                    <p style={{ color: 'var(--foreground)', fontSize: '1.1rem', marginBottom: '1rem', fontWeight: 900 }}>
                      {item.company}
                    </p>
                    <p style={{ color: 'var(--foreground)', fontSize: '1.1rem', maxWidth: '600px', fontWeight: 600 }}>
                      {item.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </SectionTransition>
  );
}
