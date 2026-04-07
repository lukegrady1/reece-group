'use client'

import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { useHydrated } from '@/hooks/useHydrated'
import { AnnotationLabel } from '@/components/ui/AnnotationLabel'
import { RuledDivider } from '@/components/ui/RuledDivider'
import { CTABanner } from '@/components/sections/CTABanner'
import { testimonials } from '@/data/testimonials'

const GOOGLE_REVIEWS_URL = 'https://www.google.com/maps/place/Reece+Group+LLC/@42.2626,-71.8023,17z/data=!4m8!3m7!1s0x89e4068b0e1c4c0b:0x123456789!8m2!3d42.2626!4d-71.8023!9m1!1b1'

function StarRating() {
  return (
    <span
      style={{
        color: 'var(--color-gold)',
        fontSize: '16px',
        letterSpacing: '2px',
      }}
      aria-label="5 out of 5 stars"
    >
      ★★★★★
    </span>
  )
}

function ReviewCard({
  quote,
  name,
  index,
}: {
  quote: string
  name: string
  index: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const hydrated = useHydrated()
  const h = hydrated

  return (
    <motion.div
      ref={ref}
      initial={h ? { opacity: 0, y: 24 } : { opacity: 1 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
      style={{
        background: 'var(--color-surface)',
        border: '1px solid var(--color-border)',
        borderRadius: '4px',
        padding: 'clamp(28px, 3vw, 40px)',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
      }}
    >
      <StarRating />

      <blockquote
        style={{
          fontFamily: '"DM Sans", system-ui, sans-serif',
          fontSize: '15px',
          lineHeight: 1.7,
          color: 'var(--color-ink)',
          margin: 0,
          flex: 1,
        }}
      >
        &ldquo;{quote}&rdquo;
      </blockquote>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '12px',
          borderTop: '1px solid var(--color-border)',
          paddingTop: '16px',
          marginTop: 'auto',
        }}
      >
        <span
          style={{
            fontFamily: '"DM Sans", system-ui, sans-serif',
            fontWeight: 600,
            fontSize: '14px',
            color: 'var(--color-ink)',
          }}
        >
          {name}
        </span>
        <span
          style={{
            fontFamily: '"DM Sans", system-ui, sans-serif',
            fontSize: '11px',
            fontWeight: 500,
            textTransform: 'uppercase',
            letterSpacing: '0.12em',
            color: 'var(--color-ink-mid)',
          }}
        >
          Google Review
        </span>
      </div>
    </motion.div>
  )
}

export function ReviewsContent() {
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
            Reviews
          </span>
        </nav>
      </div>

      {/* Page Hero */}
      <motion.div
        initial={h ? { opacity: 0, y: 12 } : { opacity: 1 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
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
        <AnnotationLabel text="Testimonials" />
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
          Client Reviews
        </h1>
        <p
          style={{
            fontFamily: '"DM Sans", system-ui, sans-serif',
            fontStyle: 'italic',
            fontWeight: 300,
            fontSize: '18px',
            color: 'var(--color-ink-mid)',
            margin: '0 0 24px',
            maxWidth: '640px',
          }}
        >
          74 five-star reviews and a perfect 5.0 rating on Google — because quality work speaks for itself.
        </p>

        <a
          href={GOOGLE_REVIEWS_URL}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            fontFamily: '"DM Sans", system-ui, sans-serif',
            fontWeight: 600,
            fontSize: '12px',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: 'var(--color-primary)',
            textDecoration: 'none',
            borderBottom: '1.5px solid var(--color-gold)',
            paddingBottom: '4px',
          }}
        >
          <span style={{ color: 'var(--color-gold)', fontSize: '14px' }}>★★★★★</span>
          <span>View All Reviews on Google</span>
          <span aria-hidden="true">&rarr;</span>
        </a>
      </motion.div>

      <RuledDivider />

      {/* Reviews Grid */}
      <section
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
          padding: 'clamp(48px, 6vw, 80px) 24px',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(320px, 100%), 1fr))',
            gap: 'clamp(20px, 2.5vw, 32px)',
          }}
        >
          {testimonials.map((t, i) => (
            <ReviewCard
              key={t.name}
              quote={t.quote}
              name={t.name}
              index={i}
            />
          ))}
        </div>
      </section>

      <RuledDivider />

      {/* CTA Section */}
      <section
        style={{
          background: 'var(--color-primary)',
          padding: 'clamp(72px, 10vw, 120px) 24px',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div
            style={{
              width: '40px',
              height: '2px',
              background: 'var(--color-gold)',
              margin: '0 auto 28px',
            }}
          />
          <h2
            style={{
              fontFamily: '"Fraunces", serif',
              fontWeight: 900,
              fontSize: 'clamp(32px, 5vw, 56px)',
              color: '#F8F7F5',
              letterSpacing: '-0.02em',
              marginBottom: '20px',
              lineHeight: 1.1,
            }}
          >
            Had a Great Experience?
          </h2>
          <p
            style={{
              fontFamily: '"DM Sans", system-ui, sans-serif',
              fontStyle: 'italic',
              fontWeight: 300,
              fontSize: '20px',
              color: 'rgba(248,247,245,0.72)',
              marginBottom: '44px',
              maxWidth: '560px',
              margin: '0 auto 44px',
            }}
          >
            We appreciate every review. Share your experience on Google or get in touch for your next electrical project.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: '#F8F7F5',
                color: 'var(--color-primary)',
                fontFamily: '"DM Sans", system-ui, sans-serif',
                fontWeight: 700,
                fontSize: '12px',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                padding: '17px 44px',
                borderRadius: '2px',
                textDecoration: 'none',
                display: 'inline-block',
              }}
            >
              Leave a Review
            </a>
            <Link
              href="/contact"
              style={{
                background: 'transparent',
                color: '#F8F7F5',
                fontFamily: '"DM Sans", system-ui, sans-serif',
                fontWeight: 600,
                fontSize: '12px',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                padding: '17px 44px',
                borderRadius: '2px',
                textDecoration: 'none',
                border: '1.5px solid rgba(248,247,245,0.35)',
                display: 'inline-block',
              }}
            >
              Schedule an Estimate
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
