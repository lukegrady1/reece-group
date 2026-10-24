'use client'

import { motion } from 'framer-motion'
import { useHydrated } from '@/hooks/useHydrated'
import { AnnotationLabel } from '@/components/ui/AnnotationLabel'
import { GhlForm } from '@/components/forms/GhlForm'

export function Hero() {
  const hydrated = useHydrated()
  const h = hydrated
  return (
    <section
      style={{
        background: 'var(--color-primary)',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        borderBottom: '1px solid var(--color-border)',
      }}
    >
      <div
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
          padding: 'clamp(100px, 12vw, 140px) 24px clamp(64px, 8vw, 100px)',
          width: '100%',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 'clamp(40px, 6vw, 80px)',
          alignItems: 'center',
        }}
        className="hero-grid"
      >
        {/* Left: text */}
        <div>
          <motion.div
            initial={h ? { opacity: 0, y: 12 } : { opacity: 1 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <AnnotationLabel text="Licensed Electrician · Worcester, MA" inverted />
          </motion.div>

          <motion.h1
            initial={h ? { opacity: 0, y: 16 } : { opacity: 1 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            style={{
              fontFamily: '"Raleway", sans-serif',
              fontWeight: 800,
              fontSize: 'clamp(42px, 6vw, 76px)',
              color: '#F8F7F5',
              lineHeight: 0.95,
              letterSpacing: '-0.03em',
              margin: '20px 0 0',
            }}
          >
            Licensed Electrician in{' '}
            <span style={{ whiteSpace: 'nowrap' }}>Worcester, MA</span>
          </motion.h1>

          <motion.p
            initial={h ? { opacity: 0, y: 12 } : { opacity: 1 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            style={{
              fontFamily: '"Raleway", sans-serif',
              fontWeight: 600,
              fontSize: 'clamp(16px, 2.2vw, 22px)',
              color: 'rgba(248,247,245,0.65)',
              letterSpacing: '-0.01em',
              margin: '12px 0 0',
              lineHeight: 1.3,
            }}
          >
            Reece Group LLC — Electrical Contracting
          </motion.p>

          <motion.div
            initial={h ? { opacity: 0, scaleX: 0 } : { opacity: 1 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
            style={{
              width: '64px',
              height: '3px',
              background: 'var(--color-gold)',
              margin: '36px 0',
              transformOrigin: 'left',
            }}
          />

          <motion.p
            initial={h ? { opacity: 0, y: 10 } : { opacity: 1 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
            style={{
              fontFamily: '"DM Sans", system-ui, sans-serif',
              fontSize: 'clamp(15px, 1.6vw, 18px)',
              fontStyle: 'italic',
              color: 'rgba(248,247,245,0.72)',
              lineHeight: 1.7,
              marginBottom: '40px',
              fontWeight: 300,
            }}
          >
            Expert electrical services for homes and businesses across Massachusetts.
            Built to code. Done right the first time.
          </motion.p>

          {/* Trust strip */}
          <motion.div
            initial={h ? { opacity: 0 } : { opacity: 1 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="hero-trust-stats"
            style={{
              paddingTop: '32px',
              borderTop: '1px solid rgba(248,247,245,0.15)',
              display: 'flex',
              gap: 'clamp(24px, 4vw, 48px)',
              flexWrap: 'wrap',
            }}
          >
            {[
              { number: '351', label: 'MA Cities Served' },
              { number: '500+', label: 'Happy Customers' },
              { number: '1hr', label: 'Response Time' },
            ].map((stat, i) => (
              <div key={i}>
                <div style={{
                  fontFamily: '"Fraunces", serif',
                  fontWeight: 700,
                  fontSize: 'clamp(24px, 3vw, 36px)',
                  color: 'var(--color-gold)',
                  lineHeight: 1,
                  marginBottom: '4px',
                  letterSpacing: '-0.02em',
                }}>
                  {stat.number}
                </div>
                <div style={{
                  fontFamily: '"DM Sans", system-ui, sans-serif',
                  fontWeight: 500,
                  fontSize: '10px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.16em',
                  color: 'rgba(248,247,245,0.5)',
                }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right: lead capture form */}
        <motion.div
          initial={h ? { opacity: 0, y: 20 } : { opacity: 1 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Form card */}
          <div
            style={{
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(248,247,245,0.12)',
              borderTop: '3px solid var(--color-gold)',
              padding: 'clamp(28px, 4vw, 40px)',
              backdropFilter: 'blur(8px)',
            }}
          >
            {/* Card header */}
            <div style={{ marginBottom: '24px' }}>
              <div style={{
                fontFamily: '"DM Sans", system-ui, sans-serif',
                fontWeight: 700,
                fontSize: '11px',
                textTransform: 'uppercase',
                letterSpacing: '0.2em',
                color: 'var(--color-gold)',
                marginBottom: '8px',
              }}>
                Free Estimate
              </div>
              <div style={{
                fontFamily: '"Fraunces", serif',
                fontWeight: 700,
                fontSize: '22px',
                color: '#F8F7F5',
                letterSpacing: '-0.01em',
                lineHeight: 1.2,
              }}>
                Request a Free Estimate
              </div>
            </div>

            {/* GoHighLevel "Website Hero Form" (Your Name, Phone Number, Service Needed) */}
            <GhlForm form="hero" />

            <p style={{ fontFamily: '"DM Sans", system-ui, sans-serif', fontSize: '11px', color: 'rgba(248,247,245,0.4)', textAlign: 'center', margin: '16px 0 0' }}>
              No obligation. We respond within 1 hour.
            </p>
          </div>

          {/* Below card: or call directly */}
          <div style={{
            marginTop: '16px',
            textAlign: 'center',
            fontFamily: '"DM Sans", system-ui, sans-serif',
            fontSize: '13px',
            color: 'rgba(248,247,245,0.5)',
          }}>
            Or call us directly:{' '}
            <a
              href="tel:+15087938788"
              style={{ color: 'var(--color-gold)', textDecoration: 'none', fontWeight: 600 }}
            >
              (508) 793-8788
            </a>
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-trust-stats { display: none !important; }
        }
      `}</style>
    </section>
  )
}
