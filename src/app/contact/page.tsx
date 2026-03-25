import type { Metadata } from 'next'
import { ContactContent } from '@/components/pages/ContactContent'
import { breadcrumbSchema } from '@/lib/structuredData'

export const metadata: Metadata = {
  title: 'Contact Reece Group LLC | Free Electrical Estimate',
  description: 'Get a free estimate from Reece Group LLC. Call, email, or fill out our contact form. Serving Worcester, Central Massachusetts, and all 351 MA cities and towns.',
  alternates: { canonical: 'https://reecegroupllc.com/contact' },
  openGraph: {
    title: 'Contact Reece Group LLC | Free Electrical Estimate',
    description: 'Get a free estimate from Reece Group LLC. Call, email, or fill out our contact form. Serving Worcester, Central Massachusetts, and all 351 MA cities and towns.',
    type: 'website',
    url: 'https://reecegroupllc.com/contact',
    images: [{ url: '/logo.PNG', width: 1200, height: 630, alt: 'Reece Group LLC' }],
  },
  twitter: { card: 'summary_large_image', images: ['/logo.PNG'] },
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
