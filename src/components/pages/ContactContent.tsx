'use client'

import Link from 'next/link'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import { AnnotationLabel } from '@/components/ui/AnnotationLabel'
import { RuledDivider } from '@/components/ui/RuledDivider'
import { GhlForm } from '@/components/forms/GhlForm'

const contactRows = [
  { icon: Phone, label: 'Phone', value: '(508) 793-8788', href: 'tel:+15087938788' },
  { icon: Mail, label: 'Email', value: 'reecegroupllc@gmail.com', href: 'mailto:reecegroupllc@gmail.com' },
  { icon: MapPin, label: 'Location', value: 'Worcester, MA · Central Massachusetts', href: undefined },
  { icon: Clock, label: 'Hours', value: 'Mon–Fri: 6am – 10pm', href: undefined },
]

export function ContactContent() {
  return (
    <>
      {/* Breadcrumb */}
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '88px 24px 0' }}>
        <nav aria-label="Breadcrumb">
          <span style={{ fontFamily: '"DM Sans", system-ui, sans-serif', fontSize: '12px', color: 'var(--color-ink-faint)' }}>
            <Link href="/" style={{ color: 'var(--color-primary)', textDecoration: 'none' }}>Home</Link>
            {' / '}
            Contact
          </span>
        </nav>
      </div>

      {/* Page Hero */}
      <div
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
          padding: '40px 24px clamp(40px, 5vw, 64px)',
          minHeight: '30vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <h1
          style={{
            fontFamily: '"Fraunces", serif',
            fontWeight: 700,
            fontSize: 'clamp(40px, 6vw, 72px)',
            color: 'var(--color-ink)',
            letterSpacing: '-0.02em',
            margin: '0 0 16px',
            lineHeight: 1.1,
          }}
        >
          Get in Touch
        </h1>
        <p
          style={{
            fontFamily: '"DM Sans", system-ui, sans-serif',
            fontStyle: 'italic',
            fontWeight: 300,
            fontSize: '18px',
            color: 'var(--color-ink-mid)',
          }}
        >
          Free estimates. Prompt responses. No pressure.
        </p>
      </div>

      <RuledDivider />

      {/* Main content */}
      <div
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
          padding: 'clamp(48px, 6vw, 96px) 24px',
          display: 'grid',
          gridTemplateColumns: '40fr 60fr',
          gap: '80px',
          alignItems: 'start',
        }}
        className="contact-grid"
      >
        {/* Left: Contact info */}
        <div>
          <AnnotationLabel text="Reach Us" />
          <h2
            style={{
              fontFamily: '"Fraunces", serif',
              fontWeight: 700,
              fontSize: 'clamp(24px, 3vw, 36px)',
              color: 'var(--color-ink)',
              letterSpacing: '-0.02em',
              margin: '16px 0 32px',
            }}
          >
            Reach Us Directly
          </h2>

          <div style={{ marginBottom: '32px' }}>
            {contactRows.map(({ icon: Icon, label, value, href }, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '14px',
                  padding: '20px 0',
                  borderBottom: '1px solid var(--color-border)',
                }}
              >
                <Icon size={16} color="var(--color-primary)" style={{ marginTop: '3px', flexShrink: 0 }} />
                <div>
                  <div style={{ fontFamily: '"DM Sans", system-ui, sans-serif', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--color-ink-faint)', marginBottom: '4px' }}>
                    {label}
                  </div>
                  {href ? (
                    <a
                      href={href}
                      style={{ fontFamily: '"DM Sans", system-ui, sans-serif', fontSize: '16px', color: 'var(--color-ink)', textDecoration: 'none' }}
                    >
                      {/* TODO: Replace with real contact details */}
                      {value}
                    </a>
                  ) : (
                    <span style={{ fontFamily: '"DM Sans", system-ui, sans-serif', fontSize: '16px', color: 'var(--color-ink)' }}>
                      {/* TODO: Replace with real contact details */}
                      {value}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Emergency card */}
          <div style={{ background: 'var(--color-primary)', padding: '32px' }}>
            <div style={{ fontFamily: '"DM Sans", system-ui, sans-serif', fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.2em', color: 'rgba(248,247,245,0.65)', marginBottom: '12px' }}>
              Emergency Service
            </div>
            <p style={{ fontFamily: '"DM Sans", system-ui, sans-serif', fontStyle: 'italic', fontWeight: 300, fontSize: '15px', color: 'rgba(248,247,245,0.9)', marginBottom: '16px', lineHeight: 1.6 }}>
              Electrical emergency? We respond fast — day or night.
            </p>
            <a href="tel:+15087938788" style={{ fontFamily: '"DM Sans", system-ui, sans-serif', fontSize: '16px', color: 'var(--color-gold)', textDecoration: 'none', fontWeight: 600 }}>
              (508) 793-8788
            </a>
          </div>
        </div>

        {/* Right: Contact form — GoHighLevel "Website Contact Form"
            (Full Name, Phone Number, Email Address, Service Needed, Project Details) */}
        <div>
          <GhlForm form="contact" />
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </>
  )
}
