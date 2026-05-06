'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';
import Magnetic from './animations/Magnetic';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [time, setTime] = useState('');
  const { scrollY } = useScroll();

  // Comic style relies on solid bold colors instead of transparency
  const backgroundColor = '#fdf8e7';
  const borderBottomColor = '#000000';


  const links = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Experience', href: '#experience' },
    { name: 'Works', href: '#works' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const sections = ['home', 'about', 'services', 'experience', 'works', 'testimonials', 'contact'];
    
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((section) => {
      const el = document.getElementById(section);
      if (el) observer.observe(el);
    });

    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString('en-US', { 
        hour12: true, 
        hour: '2-digit', 
        minute: '2-digit',
        timeZone: 'America/Los_Angeles' 
      }));
    };

    updateTime();
    const interval = setInterval(updateTime, 60000); // Only update once per minute
    
    return () => {
      observer.disconnect();
      clearInterval(interval);
    };
  }, []);

  return (
    <motion.nav
      style={{
        backgroundColor: 'var(--primary)',
        borderBottom: `4px solid #000`,
        color: '#000',
        padding: '1rem 5vw'
      }}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 1.5 }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
        <a href="#home" className="logo" onClick={(e) => {
          e.preventDefault();
          document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
          setIsMenuOpen(false);
        }}>
          <motion.span 
            whileHover={{ scale: 1.05 }}
            style={{ fontWeight: 900, fontSize: '1.5rem', letterSpacing: '-0.05em', cursor: 'pointer', display: 'flex', alignItems: 'center' }}
          >
            DANISH<span style={{ color: '#fff', textShadow: '2px 2px 0px #000' }}>.</span>
          </motion.span>
        </a>

        {/* Status Indicator (Desktop Only) */}
        <div className="status-indicator mobile-hide" style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', fontSize: '0.7rem', color: 'var(--secondary)', fontWeight: 500, letterSpacing: '0.05em' }}>
          <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
            <div style={{ width: '6px', height: '6px', background: '#10b981', borderRadius: '50%' }} />
            <motion.div 
              animate={{ scale: [1, 1.8, 1], opacity: [0.5, 0, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              style={{ position: 'absolute', width: '6px', height: '6px', background: '#10b981', borderRadius: '50%' }} 
            />
          </div>
          <span>AVAILABLE FOR NEW PROJECTS</span>
          <span style={{ opacity: 0.3 }}>|</span>
          <span>{time} PST</span>
        </div>
      </div>
      
      <div className={`nav-links ${isMenuOpen ? 'mobile-active' : ''}`}>
        {links.map((link) => (
          <Magnetic key={link.href}>
            <a 
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                setIsMenuOpen(false);
              }}
              className={`nav-link ${activeSection === link.href.slice(1) ? 'active' : ''}`}
            >
              {link.name}
              {activeSection === link.href.slice(1) && !isMenuOpen && (
                <motion.div 
                  layoutId="nav-underline"
                  style={{ 
                    position: 'absolute', 
                    bottom: '-5px', 
                    left: 0, 
                    right: 0, 
                    height: '4px', 
                    background: '#000',
                  }} 
                />
              )}
            </a>
          </Magnetic>
        ))}
        {/* Close button for mobile menu */}
        {isMenuOpen && (
          <button 
            onClick={() => setIsMenuOpen(false)}
            style={{ position: 'absolute', top: '2rem', right: '2rem', background: 'none', border: 'none', fontSize: '2.5rem', fontWeight: 900, cursor: 'pointer' }}
          >
            ✕
          </button>
        )}
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <Magnetic>
          <a href="#contact" className="mobile-hide" onClick={(e) => {
            e.preventDefault();
            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
          }}>
            <button className="btn-primary" style={{ padding: '0.6rem 1.5rem', fontSize: '0.85rem', fontWeight: 700 }}>
              Let&apos;s Talk
            </button>
          </a>
        </Magnetic>

        {/* Mobile Toggle */}
        <button 
          className="mobile-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          style={{ 
            display: 'none', 
            background: 'var(--background)', 
            border: '3px solid #000', 
            padding: '0.5rem', 
            boxShadow: '4px 4px 0px #000',
            cursor: 'pointer',
            fontWeight: 900
          }}
        >
          MENU
        </button>
      </div>
    </motion.nav>
  );
}
