import type { Metadata } from 'next'
import { ServicesContent } from '@/components/pages/ServicesContent'
import { faqSchema, breadcrumbSchema } from '@/lib/structuredData'
import { faqs } from '@/data/faqs'

export const metadata: Metadata = {
  title: 'Electrical Services | Reece Group LLC — Worcester, MA',
  description: 'From panel upgrades to EV charger installation, Reece Group LLC offers comprehensive electrical services. Licensed & insured. Serving all of Massachusetts.',
  alternates: { canonical: 'https://reecegroupllc.com/services' },
  openGraph: {
    title: 'Electrical Services | Reece Group LLC — Worcester, MA',
    description: 'From panel upgrades to EV charger installation, Reece Group LLC offers comprehensive electrical services. Licensed & insured. Serving all of Massachusetts.',
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
