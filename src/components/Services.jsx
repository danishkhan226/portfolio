'use client';

import { motion } from 'framer-motion';
import { Globe, Palette, Cpu } from 'lucide-react';
import SectionTransition from './animations/SectionTransition';
import PerspectiveCard from './animations/PerspectiveCard';

const services = [
  {
    title: 'Web Application Development',
    desc: 'High-performance Next.js applications built with scalability and user experience in mind.',
    features: ['Custom Dashboards', 'E-commerce Solutions', 'CMS Integration'],
    icon: <Globe />
  },
  {
    title: 'Visual Identity & Design',
    desc: 'Creating premium brand identities and high-fidelity UI/UX designs that stand out.',
    features: ['UI/UX Design', 'Logo & Branding', 'Motion Design'],
    icon: <Palette />
  },
  {
    title: 'Performance Optimization',
    desc: 'Audit and optimization of existing applications for maximum speed and SEO.',
    features: ['Core Web Vitals', 'SEO Strategy', 'Code Refactoring'],
    icon: <Cpu />
  }
];

export default function Services() {
  return (
    <SectionTransition>
      <section id="services" style={{ borderTop: '4px solid var(--border)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
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
              WHAT I OFFER
            </motion.span>
            <h2 style={{ fontSize: '3.5rem', marginBottom: '1.5rem', fontWeight: 900, textTransform: 'uppercase', textShadow: '4px 4px 0px var(--accent)' }}>Premium Services</h2>
            <p style={{ color: 'var(--foreground)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto', fontWeight: 600 }}>
              I provide end-to-end solutions for businesses looking to make a significant impact in the digital space.
            </p>
          </div>

          <div className="grid-3 mobile-column">
            {services.map((service, i) => (
              <PerspectiveCard key={i}>
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.8 }}
                  viewport={{ once: true }}
                  className="card"
                  style={{ height: '100%', display: 'flex', flexDirection: 'column', gap: '2rem' }}
                >
                  <div style={{ width: '64px', height: '64px', background: 'var(--accent)', border: '3px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--border)', boxShadow: '4px 4px 0px var(--border)' }}>
                    {service.icon}
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem', fontWeight: 900, textTransform: 'uppercase' }}>{service.title}</h3>
                    <p style={{ color: 'var(--foreground)', fontSize: '1.05rem', lineHeight: 1.6, marginBottom: '2rem', fontWeight: 600 }}>{service.desc}</p>
                    
                    <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                      {service.features.map((feature, idx) => (
                        <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: 'var(--foreground)', fontSize: '1rem', fontWeight: 600 }}>
                          <div style={{ width: '8px', height: '8px', background: 'var(--primary)', border: '2px solid var(--border)' }} />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div style={{ marginTop: 'auto', paddingTop: '2rem' }}>
                    <button className="btn-outline" style={{ width: '100%', fontSize: '0.9rem' }}>Learn More</button>
                  </div>
                </motion.div>
              </PerspectiveCard>
            ))}
          </div>
        </div>
      </section>
    </SectionTransition>
  );
}
