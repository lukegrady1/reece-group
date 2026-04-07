'use client'

import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { useHydrated } from '@/hooks/useHydrated'
import { AnnotationLabel } from '@/components/ui/AnnotationLabel'
import { ServiceCard } from '@/components/ui/ServiceCard'
import { Button } from '@/components/ui/Button'
import { services } from '@/data/services'

const servicePageLinks: Record<string, string> = {
  'residential': '/services/residential-electrician-worcester',
  'commercial': '/services/commercial-electrician-worcester',
  'panel-upgrades': '/services/panel-upgrade-worcester-ma',
  'ev-charger': '/services/ev-charger-installation-worcester',
  'lighting': '/services',
  'inspections': '/services/electrical-inspection-worcester',
}

export function ServicesGrid() {
  const hydrated = useHydrated()
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section style={{ background: 'var(--color-surface)', padding: 'clamp(64px, 8vw, 100px) 24px', borderTop: '1px solid var(--color-border-dark)', borderBottom: '1px solid var(--color-border-dark)' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        {/* Section header */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr auto',
            alignItems: 'flex-end',
            gap: '24px',
            marginBottom: '48px',
          }}
          className="services-header"
        >
          <div>
            <AnnotationLabel index="02" text="What We Do" />
            <h2
              style={{
                fontFamily: '"Fraunces", serif',
                fontWeight: 700,
                fontSize: 'clamp(36px, 5vw, 56px)',
                color: 'var(--color-ink)',
                letterSpacing: '-0.02em',
                margin: '0',
                lineHeight: 1.1,
              }}
            >
              Complete Electrical<br />Solutions
            </h2>
          </div>
          <div style={{ paddingBottom: '4px' }}>
            <p
              style={{
                fontFamily: '"DM Sans", system-ui, sans-serif',
                fontSize: '17px',
                color: 'var(--color-ink-mid)',
                maxWidth: '320px',
                lineHeight: 1.7,
                margin: 0,
              }}
            >
              From routine repairs to full commercial builds — licensed, insured, and done right.
            </p>
          </div>
        </div>

        {/* Cards grid */}
        <div
          ref={ref}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '20px',
          }}
        >
          {services.slice(0, 6).map((service, i) => (
            <motion.div
              key={service.id}
              initial={hydrated ? { opacity: 0 } : { opacity: 1 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              style={{ height: '100%' }}
            >
              <ServiceCard
                title={service.title}
                description={service.shortDescription}
                annotationIndex={service.number}
                annotationText={service.title.split(' ')[0].toUpperCase()}
                linkTo={servicePageLinks[service.id] || '/services'}
              />
            </motion.div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '48px' }}>
          <Link href="/services" style={{ textDecoration: 'none' }}>
            <Button variant="secondary">View All Services →</Button>
          </Link>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .services-header { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
