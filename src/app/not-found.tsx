import Link from 'next/link'
import { AnnotationLabel } from '@/components/ui/AnnotationLabel'
import { Button } from '@/components/ui/Button'

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: '80vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '120px 24px 80px',
        textAlign: 'center',
      }}
    >
      <AnnotationLabel text="404 — Page Not Found" />
      <h1
        style={{
          fontFamily: '"Fraunces", serif',
          fontWeight: 800,
          fontSize: 'clamp(48px, 8vw, 96px)',
          color: 'var(--color-border)',
          letterSpacing: '-0.03em',
          margin: '24px 0 0',
          lineHeight: 1,
        }}
      >
        404
      </h1>
      <p
        style={{
          fontFamily: '"DM Sans", system-ui, sans-serif',
          fontStyle: 'italic',
          fontSize: '20px',
          color: 'var(--color-ink-mid)',
          margin: '16px 0 40px',
        }}
      >
        This page doesn't exist. Let's get you back on track.
      </p>
      <Link href="/" style={{ textDecoration: 'none' }}>
        <Button variant="primary" size="lg">Back to Home</Button>
      </Link>
    </div>
  )
}
