'use client';

import { motion } from 'framer-motion';
import { Code2, Palette, Cpu } from 'lucide-react';
import TextReveal from './animations/TextReveal';
import SectionTransition from './animations/SectionTransition';

const skills = [
  { name: "Frontend Development", level: 95 },
  { name: "UI/UX Design", level: 90 },
  { name: "Backend Architecture", level: 85 },
  { name: "WebGL / 3D Graphics", level: 80 },
  { name: "Product Strategy", level: 88 }
];

export default function Expertise() {
  return (
    <SectionTransition>
      <section id="expertise" style={{ borderTop: '4px solid var(--border)' }}>
        <div className="container">
          <div className="grid-2 mobile-column">
            <div>
              <TextReveal>
                <h2 style={{ fontSize: 'clamp(2rem, 8vw, 2.5rem)', marginBottom: '3rem', fontWeight: 900, textTransform: 'uppercase', textShadow: '3px 3px 0px var(--accent)' }}>Core Expertise</h2>
              </TextReveal>
              <div style={{ display: 'grid', gap: '2rem' }}>
                {[
                  { icon: <Code2 />, title: 'Full-stack Development', desc: 'Building robust backend architectures and highly interactive frontend interfaces.' },
                  { icon: <Palette />, title: 'Visual Design', desc: 'Crafting unique brand identities and high-fidelity UI components with motion design.' },
                  { icon: <Cpu />, title: 'System Design', desc: 'Architecting scalable applications with a focus on performance and maintainability.' }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.8 }}
                    style={{ display: 'flex', gap: '1.5rem' }}
                  >
                    <div style={{ color: 'var(--primary)', marginTop: '0.5rem', padding: '0.5rem', border: '3px solid var(--border)', background: 'var(--background)', boxShadow: '3px 3px 0px var(--border)' }}>{item.icon}</div>
                    <div>
                      <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', fontWeight: 900, textTransform: 'uppercase' }}>{item.title}</h4>
                      <p style={{ color: 'var(--foreground)', fontSize: '1rem', fontWeight: 600 }}>{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <TextReveal>
                <h2 style={{ fontSize: 'clamp(2rem, 8vw, 2.5rem)', marginBottom: '3rem', fontWeight: 900, textTransform: 'uppercase', textShadow: '3px 3px 0px var(--primary)' }}>Technical Skills</h2>
              </TextReveal>
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  visible: { transition: { staggerChildren: 0.1 } }
                }}
                style={{ display: 'grid', gap: '1.5rem' }}
              >
                {skills.map((skill, i) => (
                  <motion.div 
                    key={i}
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: { opacity: 1, x: 0 }
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                      <span style={{ fontWeight: 900, fontSize: '1.1rem', textTransform: 'uppercase' }}>{skill.name}</span>
                      <span style={{ color: 'var(--primary)', fontWeight: 900 }}>{skill.level}%</span>
                    </div>
                    <div style={{ height: '12px', background: 'var(--background)', border: '2px solid var(--border)' }}>
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                        style={{ height: '100%', background: 'var(--primary)', borderRight: '2px solid var(--border)' }}
                      />
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </SectionTransition>
  );
}
