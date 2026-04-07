'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useHydrated } from '@/hooks/useHydrated'
import { AnnotationLabel } from '@/components/ui/AnnotationLabel'
import { RuledDivider } from '@/components/ui/RuledDivider'
import { CTABanner } from '@/components/sections/CTABanner'
import { Button } from '@/components/ui/Button'

interface LocationPageProps {
  city: string
  state: string
  headline: string
  intro: string
  sections: {
    heading: string
    content: string
    items?: string[]
  }[]
  services: { title: string; href: string }[]
  faqs?: { question: string; answer: string }[]
}

export function LocationPageContent({
  city,
  state,
  headline,
  intro,
  sections,
  services,
  faqs,
}: LocationPageProps) {
  const hydrated = useHydrated()
  const h = hydrated

  return (
    <>
      {/* Breadcrumb */}
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '88px 24px 0' }}>
        <nav aria-label="Breadcrumb">
          <span style={{ fontFamily: '"DM Sans", system-ui, sans-serif', fontSize: '12px', color: 'var(--color-ink-faint)' }}>
            <Link href="/" style={{ color: 'var(--color-primary)', textDecoration: 'none' }}>Home</Link>
            {' / '}
            <Link href="/services" style={{ color: 'var(--color-primary)', textDecoration: 'none' }}>Services</Link>
            {' / '}
            Electrician {city}, {state}
          </span>
        </nav>
      </div>

      {/* Hero */}
      <div
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
          padding: '40px 24px clamp(48px, 6vw, 80px)',
          minHeight: '30vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <AnnotationLabel text={`Serving ${city}, ${state}`} />
        <motion.h1
          initial={h ? { opacity: 0, y: 12 } : { opacity: 1 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            fontFamily: '"Fraunces", serif',
            fontWeight: 700,
            fontSize: 'clamp(36px, 5vw, 64px)',
            color: 'var(--color-ink)',
            letterSpacing: '-0.02em',
            margin: '20px 0 16px',
            lineHeight: 1.1,
          }}
        >
          {headline}
        </motion.h1>
      </div>

      <RuledDivider />

      {/* Intro */}
      <section style={{ maxWidth: '780px', margin: '0 auto', padding: 'clamp(48px, 6vw, 80px) 24px' }}>
        <p
          style={{
            fontFamily: '"DM Sans", system-ui, sans-serif',
            fontSize: '18px',
            lineHeight: 1.85,
            color: 'var(--color-ink)',
          }}
        >
          {intro}
        </p>
      </section>

      {/* Content sections */}
      {sections.map((section, i) => (
        <div key={i}>
          <RuledDivider />
          <section style={{ maxWidth: '780px', margin: '0 auto', padding: 'clamp(40px, 5vw, 72px) 24px' }}>
            <h2
              style={{
                fontFamily: '"Fraunces", serif',
                fontWeight: 700,
                fontSize: 'clamp(24px, 3vw, 36px)',
                color: 'var(--color-ink)',
                letterSpacing: '-0.02em',
                marginBottom: '20px',
                lineHeight: 1.2,
              }}
            >
              {section.heading}
            </h2>
            <p
              style={{
                fontFamily: '"DM Sans", system-ui, sans-serif',
                fontSize: '17px',
                lineHeight: 1.85,
                color: 'var(--color-ink-mid)',
                marginBottom: section.items ? '24px' : '0',
              }}
            >
              {section.content}
            </p>
            {section.items && (
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {section.items.map((item, j) => (
                  <li key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                    <span style={{ fontFamily: '"DM Sans", system-ui, sans-serif', fontSize: '13px', color: 'var(--color-gold)', flexShrink: 0, marginTop: '3px', fontWeight: 600 }}>&#9656;</span>
                    <span style={{ fontFamily: '"DM Sans", system-ui, sans-serif', fontSize: '16px', color: 'var(--color-ink)', lineHeight: 1.6 }}>{item}</span>
                  </li>
                ))}
              </ul>
            )}
          </section>
        </div>
      ))}

      {/* Services offered */}
      <RuledDivider />
      <section style={{ maxWidth: '780px', margin: '0 auto', padding: 'clamp(40px, 5vw, 64px) 24px' }}>
        <h2
          style={{
            fontFamily: '"Fraunces", serif',
            fontWeight: 700,
            fontSize: 'clamp(24px, 3vw, 36px)',
            color: 'var(--color-ink)',
            letterSpacing: '-0.02em',
            marginBottom: '20px',
          }}
        >
          Electrical Services in {city}
        </h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
          {services.map((s, i) => (
            <Link key={i} href={s.href} style={{ textDecoration: 'none' }}>
              <Button variant="secondary" size="sm">{s.title} &rarr;</Button>
            </Link>
          ))}
        </div>
      </section>

      {/* FAQs */}
      {faqs && faqs.length > 0 && (
        <>
          <RuledDivider />
          <section style={{ maxWidth: '780px', margin: '0 auto', padding: 'clamp(48px, 6vw, 80px) 24px' }}>
            <h2
              style={{
                fontFamily: '"Fraunces", serif',
                fontWeight: 700,
                fontSize: 'clamp(24px, 3vw, 36px)',
                color: 'var(--color-ink)',
                letterSpacing: '-0.02em',
                marginBottom: '32px',
                lineHeight: 1.2,
              }}
            >
              Common Questions from {city} Homeowners
            </h2>
            {faqs.map((faq, i) => (
              <div key={i} style={{ marginBottom: '28px' }}>
                <h3
                  style={{
                    fontFamily: '"DM Sans", system-ui, sans-serif',
                    fontWeight: 700,
                    fontSize: '17px',
                    color: 'var(--color-ink)',
                    marginBottom: '8px',
                  }}
                >
                  {faq.question}
                </h3>
                <p
                  style={{
                    fontFamily: '"DM Sans", system-ui, sans-serif',
                    fontSize: '16px',
                    lineHeight: 1.75,
                    color: 'var(--color-ink-mid)',
                  }}
                >
                  {faq.answer}
                </p>
              </div>
            ))}
          </section>
        </>
      )}

      {/* CTA */}
      <div style={{ marginTop: '24px' }}>
        <Link href="/contact" style={{ display: 'block', maxWidth: '780px', margin: '0 auto', padding: '0 24px 48px', textDecoration: 'none' }}>
          <Button variant="primary" size="lg" fullWidth>Get a Free Estimate in {city} &rarr;</Button>
        </Link>
      </div>

      <RuledDivider />
      <CTABanner />
    </>
  )
}
