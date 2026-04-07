import type { Metadata } from 'next'
import { ContactContent } from '@/components/pages/ContactContent'
import { breadcrumbSchema } from '@/lib/structuredData'

export const metadata: Metadata = {
  title: 'Free Electrical Estimate Worcester MA | Contact Reece Group LLC',
  description: 'Request a free electrical estimate in Worcester, MA. Licensed master electrician — no subcontractors. Call (508) 793-8788 or fill out our form. 1-hour response time.',
  alternates: { canonical: 'https://reecegroupllc.com/contact' },
  openGraph: {
    title: 'Free Electrical Estimate Worcester MA | Contact Reece Group LLC',
    description: 'Request a free electrical estimate in Worcester, MA. Licensed master electrician — no subcontractors. Call (508) 793-8788 or fill out our form. 1-hour response time.',
    type: 'website',
    url: 'https://reecegroupllc.com/contact',
    images: [{ url: '/reece-group-og.png', width: 1200, height: 630, alt: 'Reece Group LLC' }],
  },
  twitter: { card: 'summary_large_image', images: ['/reece-group-og.png'] },
}

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Contact', url: '/contact' },
          ]))
        }}
      />
      <ContactContent />
    </>
  )
}
