'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function PageFooter({ nextText, nextHref }) {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0.8, 0.95], [0, 1]);
  const scale = useTransform(scrollYProgress, [0.8, 1], [0.8, 1]);

  return (
    <section style={{ height: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', borderTop: '4px solid var(--border)' }}>
      <motion.div
        style={{ opacity, scale, textAlign: 'center' }}
      >
        <span style={{ color: 'var(--primary)', fontWeight: 900, letterSpacing: '0.2em', textTransform: 'uppercase', fontSize: '1rem' }}>
          Up Next
        </span>
        <Link href={nextHref} style={{ display: 'block', marginTop: '1rem' }}>
          <motion.h2 
            whileHover={{ x: 20 }}
            style={{ fontSize: 'clamp(3rem, 10vw, 8rem)', fontWeight: 900, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '2rem', textTransform: 'uppercase', textShadow: '6px 6px 0px var(--accent)' }}
          >
            {nextText} <ArrowRight size={80} strokeWidth={3} />
          </motion.h2>
        </Link>
      </motion.div>
      
      <div style={{ marginTop: '4rem', display: 'flex', gap: '4rem' }}>
        <a href="#" className="nav-link" style={{ fontWeight: 900, textTransform: 'uppercase' }}>GitHub</a>
        <a href="#" className="nav-link" style={{ fontWeight: 900, textTransform: 'uppercase' }}>LinkedIn</a>
        <a href="#" className="nav-link" style={{ fontWeight: 900, textTransform: 'uppercase' }}>Twitter</a>
        <a href="#" className="nav-link" style={{ fontWeight: 900, textTransform: 'uppercase' }}>Instagram</a>
      </div>
      
      <p style={{ marginTop: '4rem', color: 'var(--foreground)', fontSize: '0.9rem', fontWeight: 600 }}>
        © 2024 Danish Khan. Crafted with passion.
      </p>
    </section>
  );
}
