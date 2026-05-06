'use client';

import { motion } from 'framer-motion';
import SectionTransition from './animations/SectionTransition';
import Image from 'next/image';

const testimonials = [
  {
    name: 'Sarah Jenkins',
    role: 'CEO at InnovateX',
    content: 'Daniel is a rare talent who combines technical mastery with an incredible eye for design. Our platform is light years ahead of the competition thanks to him.',
    avatar: 'https://i.pravatar.cc/150?u=sarah'
  },
  {
    name: 'Michael Chen',
    role: 'Product Lead at FlowState',
    content: 'The level of detail and polish Daniel brings to every project is unmatched. He doesn&apos;t just build features; he builds experiences that users love.',
    avatar: 'https://i.pravatar.cc/150?u=michael'
  },
  {
    name: 'Elena Rodriguez',
    role: 'Creative Director',
    content: 'Working with Daniel was a breeze. He took our complex vision and turned it into a seamless, high-performance reality. Truly exceptional.',
    avatar: 'https://i.pravatar.cc/150?u=elena'
  }
];

export default function Testimonials() {
  return (
    <SectionTransition>
      <section id="testimonials" style={{ background: 'var(--background)', borderTop: '4px solid var(--border)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              style={{ 
                color: 'var(--border)', 
                fontWeight: 900, 
                letterSpacing: '0.1em', 
                fontSize: '0.9rem', 
                display: 'inline-block', 
                marginBottom: '1.5rem',
                border: '4px solid var(--border)',
                background: 'var(--accent)',
                padding: '0.5rem 1rem',
                boxShadow: '4px 4px 0px var(--border)',
                textTransform: 'uppercase'
              }}
            >
              TESTIMONIALS
            </motion.span>
            <h2 style={{ fontSize: '4rem', marginBottom: '1.5rem', fontWeight: 900, textTransform: 'uppercase', textShadow: '4px 4px 0px var(--primary)' }}>Voices of satisfaction.</h2>
            <p style={{ color: 'var(--secondary)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto', fontWeight: 600 }}>Don&apos;t just take my word for it. Here&apos;s what some of my amazing clients have to say.</p>
          </div>

          <div className="grid-3 mobile-column">
            {testimonials.map((t, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
                className="card"
                style={{ 
                  display: 'flex', 
                  flexDirection: 'column', 
                  justifyContent: 'space-between',
                  background: 'var(--background)',
                  border: '4px solid var(--border)',
                  boxShadow: '8px 8px 0px var(--border)',
                  borderRadius: '0',
                  padding: '2.5rem'
                }}
              >
                <p style={{ fontStyle: 'italic', fontWeight: 800, color: 'var(--border)', fontSize: '1.2rem', marginBottom: '2.5rem', lineHeight: 1.6 }}>
                  &quot;{t.content}&quot;
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem' }}>
                  <div style={{ width: '60px', height: '60px', borderRadius: '0', overflow: 'hidden', border: '4px solid var(--border)', position: 'relative', boxShadow: '4px 4px 0px var(--primary)' }}>
                    <Image 
                      src={t.avatar} 
                      alt={t.name} 
                      fill 
                      sizes="60px"
                      style={{ objectFit: 'cover', filter: 'grayscale(100%) contrast(120%)' }} 
                    />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.2rem', marginBottom: '0.2rem', fontWeight: 900, textTransform: 'uppercase' }}>{t.name}</h4>
                    <p style={{ fontSize: '0.9rem', color: 'var(--primary)', fontWeight: 900, textTransform: 'uppercase' }}>{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </SectionTransition>
  );
}
