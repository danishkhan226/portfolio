'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Globe, Send, CheckCircle2 } from 'lucide-react';
import SectionTransition from './animations/SectionTransition';
import Magnetic from './animations/Magnetic';

import { sendEmail } from '@/app/actions';

export default function Contact() {
  const [formState, setFormState] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormState('sending');
    
    const formData = new FormData(e.target);
    const result = await sendEmail(formData);
    
    if (result.success) {
      setFormState('success');
    } else {
      setFormState('error');
      console.error(result.error);
    }
  };

  return (
    <SectionTransition>
      <section id="contact" className="section-padding" style={{ borderTop: '4px solid var(--border)' }}>
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
                GET IN TOUCH
              </motion.span>
              <h2 style={{ fontSize: 'clamp(2.5rem, 8vw, 3.5rem)', marginBottom: '2rem', fontWeight: 900, textTransform: 'uppercase', textShadow: '4px 4px 0px var(--accent)' }}>Let&apos;s build something exceptional.</h2>
              <p style={{ color: 'var(--foreground)', fontWeight: 600, fontSize: 'clamp(1rem, 4vw, 1.2rem)', marginBottom: '3rem', maxWidth: '500px' }}>
                I&apos;m currently available for freelance projects and full-time opportunities. Have a question or just want to say hi?
              </p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                  <div style={{ width: '64px', height: '64px', background: 'var(--primary)', border: '3px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--border)', boxShadow: '4px 4px 0px var(--border)' }}>
                    <Mail size={28} strokeWidth={2.5} />
                  </div>
                  <div>
                    <p style={{ color: 'var(--foreground)', fontSize: '0.9rem', fontWeight: 900, textTransform: 'uppercase' }}>Email</p>
                    <p style={{ fontSize: 'clamp(1rem, 4vw, 1.2rem)', fontWeight: 600 }}>hello@danish.dev</p>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                  <div style={{ width: '64px', height: '64px', background: 'var(--accent)', border: '3px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--border)', boxShadow: '4px 4px 0px var(--border)' }}>
                    <Globe size={28} strokeWidth={2.5} />
                  </div>
                  <div>
                    <p style={{ color: 'var(--foreground)', fontSize: '0.9rem', fontWeight: 900, textTransform: 'uppercase' }}>Location</p>
                    <p style={{ fontSize: '1.2rem', fontWeight: 600 }}>San Francisco, CA</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card">
              {formState === 'success' ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  style={{ textAlign: 'center', padding: '2rem' }}
                >
                  <div style={{ color: 'var(--primary)', marginBottom: '1.5rem' }}>
                    <CheckCircle2 size={64} style={{ margin: '0 auto' }} />
                  </div>
                  <h3 style={{ fontSize: '2.5rem', marginBottom: '1rem', fontWeight: 900, textTransform: 'uppercase' }}>Message Sent!</h3>
                  <p style={{ color: 'var(--foreground)', fontWeight: 600 }}>Thank you for reaching out. I&apos;ll get back to you as soon as possible.</p>
                  <button 
                    onClick={() => setFormState('idle')}
                    className="btn-outline" 
                    style={{ marginTop: '2rem' }}
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  <div className="grid-2 mobile-column" style={{ gap: '1.5rem' }}>
                    <div className="form-group">
                      <label>Name</label>
                      <input name="name" type="text" placeholder="John Doe" required />
                    </div>
                    <div className="form-group">
                      <label>Email</label>
                      <input name="email" type="email" placeholder="john@example.com" required />
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Subject</label>
                    <input name="subject" type="text" placeholder="Project Inquiry" required />
                  </div>
                  <div className="form-group">
                    <label>Message</label>
                    <textarea name="message" placeholder="Tell me about your project..." rows={5} required></textarea>
                  </div>
                  <button 
                    type="submit" 
                    className="btn-primary" 
                    disabled={formState === 'sending'}
                    style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.8rem', marginTop: '1rem' }}
                  >
                    {formState === 'sending' ? 'Sending...' : (
                      <>Send Message <Send size={18} /></>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </SectionTransition>
  );
}
