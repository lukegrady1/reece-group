import type { Metadata } from 'next'
import { ServicesContent } from '@/components/pages/ServicesContent'
import { faqSchema, breadcrumbSchema } from '@/lib/structuredData'
import { faqs } from '@/data/faqs'

export const metadata: Metadata = {
  title: 'Electrical Services Worcester MA | Licensed Electrician — Reece Group LLC',
  description: 'Residential and commercial electrical services in Worcester, MA. Panel upgrades, EV chargers, rewiring, inspections. Master electrician on every job. Free estimates.',
  alternates: { canonical: 'https://reecegroupllc.com/services' },
  openGraph: {
    title: 'Electrical Services Worcester MA | Licensed Electrician — Reece Group LLC',
    description: 'Residential and commercial electrical services in Worcester, MA. Panel upgrades, EV chargers, rewiring, inspections. Master electrician on every job. Free estimates.',
    type: 'website',
    url: 'https://reecegroupllc.com/services',
    images: [{ url: '/reece-group-og.png', width: 1200, height: 630, alt: 'Reece Group LLC' }],
  },
  twitter: { card: 'summary_large_image', images: ['/reece-group-og.png'] },
}

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Services', url: '/services' },
          ]))
        }}
      />
      <ServicesContent />
    </>
  )
}
