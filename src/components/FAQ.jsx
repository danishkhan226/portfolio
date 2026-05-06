'use client';

import { motion } from 'framer-motion';
import { Plus, HelpCircle } from 'lucide-react';
import SectionTransition from './animations/SectionTransition';

const faq = [
  { 
    q: "How do you approach a new project?", 
    a: "I start by understanding the problem space and user needs. Then I move into strategy, wireframing, and interactive prototyping before finalizing the design and code." 
  },
  { 
    q: "What is your typical timeline?", 
    a: "Most projects take between 4-8 weeks depending on complexity. I prioritize quality over speed but always respect deadlines." 
  },
  { 
    q: "Do you offer post-launch support?", 
    a: "Yes, I provide monthly maintenance and support packages to ensure your product continues to perform optimally." 
  },
  { 
    q: "Can you work with existing teams?", 
    a: "Absolutely. I've worked with teams of all sizes and can easily integrate into your existing workflow using tools like Figma, Git, and Slack." 
  }
];

export default function FAQ() {
  return (
    <SectionTransition>
      <section id="faq" className="section-padding" style={{ borderTop: '4px solid var(--border)', background: 'var(--background)' }}>
        <div className="container">
          <div className="grid-2 mobile-column" style={{ gap: 'clamp(2rem, 10vw, 5rem)' }}>
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
                QUESTIONS
              </motion.span>
              <h2 style={{ fontSize: 'clamp(2.5rem, 8vw, 3.5rem)', marginBottom: '1.5rem', fontWeight: 900, textTransform: 'uppercase', textShadow: '4px 4px 0px rgba(0,0,0,0.1)' }}>Common Queries</h2>
              <p style={{ color: 'var(--secondary)', fontSize: '1.2rem', fontWeight: 600, marginBottom: '2rem' }}>
                Everything you need to know about working with me.
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--primary)' }}>
                <HelpCircle size={40} />
                <span style={{ fontSize: '0.9rem', fontWeight: 600 }}>Still have questions? <br /> <a href="#contact" style={{ textDecoration: 'underline' }}>Get in touch.</a></span>
              </div>
            </div>

            <div style={{ display: 'grid', gap: '1rem' }}>
              {faq.map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="card"
                  style={{ 
                    padding: '2rem',
                    background: 'var(--background)',
                    border: '4px solid var(--border)',
                    boxShadow: '8px 8px 0px var(--border)',
                    borderRadius: '0'
                  }}
                >
                  <details className="faq-details">
                    <summary style={{ listStyle: 'none', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '1.3rem', fontWeight: 900, textTransform: 'uppercase' }}>
                      {item.q}
                      <div className="faq-icon" style={{ color: 'var(--primary)' }}>
                        <Plus size={24} strokeWidth={3} className="plus" />
                      </div>
                    </summary>
                    <p style={{ marginTop: '1.5rem', color: 'var(--secondary)', lineHeight: 1.7, fontSize: '1.1rem', fontWeight: 600 }}>
                      {item.a}
                    </p>
                  </details>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        <style jsx>{`
          .faq-details summary::-webkit-details-marker { display: none; }
          .faq-details[open] .faq-icon { transform: rotate(45deg); }
          .faq-icon { transition: transform 0.3s ease; }
        `}</style>
      </section>
    </SectionTransition>
  );
}
