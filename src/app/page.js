'use client';

import { motion, useScroll, useSpring } from 'framer-motion';
import PageFooter from '@/components/PageFooter';
import VelocityText from '@/components/animations/VelocityText';
import HeroTransition from '@/components/animations/HeroTransition';

import Hero from '@/components/Hero';
import About from '@/components/About';
import ClientsTicker from '@/components/ClientsTicker';
import Expertise from '@/components/Expertise';
import Experience from '@/components/Experience';
import Workflow from '@/components/Workflow';
import Services from '@/components/Services';
import Portfolio from '@/components/Portfolio';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import FinalCTA from '@/components/FinalCTA';
import Contact from '@/components/Contact';

export default function Home() {
  const { scrollYProgress: pageScrollY } = useScroll();
  const scaleX = useSpring(pageScrollY, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <main className="snap-container">
      {/* Progress Bar */}
      <motion.div
        style={{
          scaleX,
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          background: 'var(--primary)',
          transformOrigin: '0%',
          zIndex: 2000,
          boxShadow: '0 0 15px var(--primary-glow)'
        }}
      />
      

      <HeroTransition />
      <Hero />

      <div style={{ padding: '4rem 0', background: 'rgba(255,255,255,0.01)', borderY: '1px solid var(--glass-border)' }}>
        <VelocityText baseVelocity={-2}>DESIGN • DEVELOPMENT • INNOVATION • STRATEGY • </VelocityText>
      </div>

      <About />

      <ClientsTicker />

      <Expertise />

      <Experience />

      <Workflow />

      <Services />

      <div style={{ padding: '8rem 0', background: 'rgba(255,255,255,0.01)', borderY: '1px solid var(--glass-border)', overflow: 'hidden' }}>
        <VelocityText baseVelocity={3}>DIGITAL ARCHITECT • CREATIVE CODER • PRODUCT DESIGNER • FULL STACK ENGINEER • </VelocityText>
        <div style={{ height: '2rem' }} />
        <VelocityText baseVelocity={-3}>MODERN SOLUTIONS • PERFORMANCE OPTIMIZED • SCALABLE ARCHITECTURE • USER CENTRIC • </VelocityText>
      </div>

      <Portfolio />

      <Testimonials />

      <FAQ />

      <FinalCTA />

      <Contact />

      <PageFooter nextText="Home" nextHref="#home" />
    </main>
  );
}
