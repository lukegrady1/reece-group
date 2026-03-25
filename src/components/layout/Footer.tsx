import Link from 'next/link'
import { RuledDivider } from '@/components/ui/RuledDivider'

export function Footer() {
  return (
    <footer style={{ background: 'var(--color-primary)' }}>
      {/* Ornamental divider at top of footer */}
      <div style={{ padding: '32px 24px 0' }}>
        <RuledDivider />
      </div>

      {/* Main grid */}
      <div
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
          padding: '40px 24px 48px',
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '64px',
        }}
        className="footer-grid"
      >
        {/* Col 1: Logo + tagline */}
        <div>
          <img src="/logo.PNG" alt="Reece Group LLC" style={{ height: '36px', width: 'auto', display: 'block', marginBottom: '16px' }} />
          <p style={{ fontFamily: '"DM Sans", system-ui, sans-serif', fontStyle: 'italic', fontWeight: 300, fontSize: '15px', color: 'rgba(248,247,245,0.75)', lineHeight: 1.7, margin: 0 }}>
            Precision electrical work for homes and businesses. Built to code, done right the first time.
          </p>
          <div style={{ display: 'flex', gap: '16px', marginTop: '20px' }}>
            <a href="https://www.instagram.com/reeceelectric/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" style={{ color: 'rgba(248,247,245,0.65)', transition: 'color 200ms ease' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            </a>
            <a href="https://www.facebook.com/Reeceelectriccorp" target="_blank" rel="noopener noreferrer" aria-label="Facebook" style={{ color: 'rgba(248,247,245,0.65)', transition: 'color 200ms ease' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
          </div>
        </div>

        {/* Col 2: Quick Links */}
        <div>
          <div style={{ fontFamily: '"DM Sans", system-ui, sans-serif', fontWeight: 600, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--color-gold)', marginBottom: '20px' }}>
            Quick Links
          </div>
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {[
              { label: 'Home', path: '/' },
              { label: 'Services', path: '/services' },
              { label: 'About', path: '/about' },
              { label: 'Blog', path: '/blog' },
              { label: 'Contact', path: '/contact' },
            ].map(link => (
              <Link
                key={link.path}
                href={link.path}
                style={{ fontFamily: '"DM Sans", system-ui, sans-serif', fontSize: '16px', color: 'rgba(248,247,245,0.85)', textDecoration: 'none' }}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Col 3: Contact */}
        <div>
          <div style={{ fontFamily: '"DM Sans", system-ui, sans-serif', fontWeight: 600, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--color-gold)', marginBottom: '20px' }}>
            Contact Us
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {/* TODO: Replace with real contact details */}
            <a href="tel:+15087938788" style={{ fontFamily: '"DM Sans", system-ui, sans-serif', fontSize: '16px', color: 'rgba(248,247,245,0.85)', textDecoration: 'none' }}>
              (508) 793-8788
            </a>
            <a href="mailto:reecegroupllc@gmail.com" style={{ fontFamily: '"DM Sans", system-ui, sans-serif', fontSize: '16px', color: 'rgba(248,247,245,0.85)', textDecoration: 'none' }}>
              reecegroupllc@gmail.com
            </a>
            <span style={{ fontFamily: '"DM Sans", system-ui, sans-serif', fontSize: '16px', color: 'rgba(248,247,245,0.7)' }}>
              Worcester, MA · Central Massachusetts
            </span>
            <span style={{ fontFamily: '"DM Sans", system-ui, sans-serif', fontSize: '16px', color: 'rgba(248,247,245,0.7)' }}>
              Mon–Fri: 7am – 6pm
            </span>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          borderTop: '1px solid rgba(255,255,255,0.15)',
          background: 'var(--color-primary-dark)',
          padding: '16px 24px',
        }}
      >
        <div
          style={{
            maxWidth: '1100px',
            margin: '0 auto',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '8px',
          }}
        >
          <span style={{ fontFamily: '"DM Sans", system-ui, sans-serif', fontWeight: 400, fontSize: '11px', color: 'rgba(248,247,245,0.55)' }}>
            © 2025 Reece Group LLC. All rights reserved.
          </span>
          <span style={{ fontFamily: '"DM Sans", system-ui, sans-serif', fontWeight: 400, fontSize: '11px', color: 'rgba(248,247,245,0.55)' }}>
            Licensed Electrician · Massachusetts Lic #9036A1 {/* TODO: Replace with real license # */}
          </span>
          <span style={{ fontFamily: '"DM Sans", system-ui, sans-serif', fontWeight: 400, fontSize: '11px', color: 'rgba(248,247,245,0.45)' }}>
            Designed & built by{' '}
            <a href="https://gradydigital.com/" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(248,247,245,0.55)', textDecoration: 'none' }}>
              Grady Digital
            </a>
          </span>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: 1fr !important; gap: 36px !important; }
        }
      `}</style>
    </footer>
  )
}
