'use client';

import { motion } from 'framer-motion';
import SectionTransition from './animations/SectionTransition';
import PerspectiveCard from './animations/PerspectiveCard';
import ImageReveal from './animations/ImageReveal';
import VelocityText from './animations/VelocityText';

const projects = [
  { 
    title: 'Lumina Analytics',
    tag: 'SAAS PLATFORM',
    stack: 'Next.js • Node.js • D3.js',
    img: '/lumina_analytics.png',
    delay: 0
  },
  { 
    title: 'Verda Platform', 
    tag: 'E-COMMERCE', 
    stack: 'Next.js • Tailwind • Shopify', 
    img: '/verda_platform.png',
    delay: 0.1
  },
  { 
    title: 'Aura Mobile', 
    tag: 'MOBILE APP', 
    stack: 'React Native • Expo • Firebase', 
    img: '/aura_mobile.png',
    delay: 0.05
  },
  { 
    title: 'Nexus API', 
    tag: 'INFRASTRUCTURE', 
    stack: 'Go • AWS • Kubernetes', 
    img: '/nexus_api.png',
    delay: 0.15
  }
];

const awards = [
  { award: 'Site of the Day', platform: 'Awwwards', year: '2023' },
  { award: 'Best UI/UX', platform: 'CSS Design Awards', year: '2022' },
  { award: 'Site of the Day', platform: 'FWA', year: '2021' },
  { award: 'Featured Interaction', platform: 'Behance', year: '2020' }
];

export default function Portfolio() {
  return (
    <SectionTransition>
      <section id="works" className="section-padding">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{ marginBottom: 'clamp(3rem, 10vw, 6rem)' }}
          >
            <motion.span style={{ 
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
            }}>PORTFOLIO</motion.span>
            <div>
              <h2 style={{ fontSize: 'clamp(2.5rem, 8vw, 4.5rem)', marginBottom: '1.5rem', lineHeight: 1, textTransform: 'uppercase', textShadow: '4px 4px 0px var(--primary)' }}>Selected Works</h2>
              <p style={{ color: 'var(--secondary)', fontSize: '1.2rem', maxWidth: '600px', fontWeight: 600 }}>A collection of high-end digital solutions focused on aesthetics and scalability.</p>
            </div>
          </motion.div>

          <div className="grid-auto-fit">
            {projects.map((project, i) => (
              <PerspectiveCard key={i}>
                <motion.div 
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: project.delay }}
                  viewport={{ once: true }}
                  className="card" 
                  style={{ padding: 0, overflow: 'hidden', height: 'clamp(400px, 60vh, 500px)', cursor: 'pointer' }}
                >
                  <div style={{ height: '65%', position: 'relative', overflow: 'hidden' }}>
                    <ImageReveal 
                      src={project.img} 
                      alt={project.title}
                      style={{ width: '100%', height: '100%' }}
                    />
                  </div>
                  <div style={{ padding: 'clamp(1.5rem, 5vw, 2rem)' }}>
                    <span style={{ fontSize: '0.8rem', color: 'var(--primary)', fontWeight: 900, letterSpacing: '0.1em', display: 'block', marginBottom: '0.5rem', textTransform: 'uppercase' }}>{project.tag}</span>
                    <h4 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', fontWeight: 900, textTransform: 'uppercase' }}>{project.title}</h4>
                    <p style={{ color: 'var(--secondary)', fontSize: '1rem', fontWeight: 600 }}>{project.stack}</p>
                  </div>
                </motion.div>
              </PerspectiveCard>
            ))}
          </div>

          <div style={{ marginTop: 'clamp(6rem, 15vw, 10rem)', borderTop: '4px solid var(--border)', paddingTop: 'clamp(4rem, 10vw, 6rem)' }}>
            <div className="grid-2 mobile-column">
              <div>
                <h3 style={{ fontSize: 'clamp(2rem, 6vw, 2.5rem)', marginBottom: '1.5rem', fontWeight: 900, textTransform: 'uppercase' }}>Awards & Recognition</h3>
                <p style={{ color: 'var(--secondary)', fontWeight: 600, marginBottom: '2rem' }}>Honored to be recognized by the industry for excellence in design and technology.</p>
              </div>
              <div style={{ display: 'grid', gap: '4px', background: 'var(--border)', border: '4px solid var(--border)', borderRadius: '4px', overflow: 'hidden', boxShadow: '8px 8px 0px var(--border)' }}>
                {awards.map((item, i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ backgroundColor: 'var(--primary)', color: 'var(--background)' }}
                    style={{ 
                      background: 'var(--background)', 
                      padding: 'clamp(1rem, 5vw, 2rem)', 
                      display: 'flex', 
                      justifyContent: 'space-between', 
                      alignItems: 'center',
                      transition: 'background-color 0.1s ease-in-out'
                    }}
                  >
                    <div>
                      <span style={{ fontSize: '0.9rem', color: 'inherit', display: 'block', marginBottom: '0.2rem', fontWeight: 900, textTransform: 'uppercase' }}>{item.platform}</span>
                      <span style={{ fontSize: '1.1rem', fontWeight: 900 }}>{item.award}</span>
                    </div>
                    <span style={{ fontVariantNumeric: 'tabular-nums', fontWeight: 900 }}>{item.year}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
          
          <div style={{ marginTop: '8rem' }}>
            <VelocityText baseVelocity={3}>MODERN • INTERACTIVE • PERFORMANCE • SCALABILITY • </VelocityText>
          </div>
        </div>
      </section>
    </SectionTransition>
  );
}
