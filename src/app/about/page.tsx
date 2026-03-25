import type { Metadata } from 'next'
import { AboutContent } from '@/components/pages/AboutContent'
import { breadcrumbSchema } from '@/lib/structuredData'

export const metadata: Metadata = {
  title: 'About Reece Group LLC | Licensed Electrician — Worcester, MA',
  description: 'Meet Anthony Reece, founder of Reece Group LLC — a licensed electrician committed to quality, safety, and transparent pricing across Massachusetts.',
  alternates: { canonical: 'https://reecegroupllc.com/about' },
  openGraph: {
    title: 'About Reece Group LLC | Licensed Electrician — Worcester, MA',
    description: 'Meet Anthony Reece, founder of Reece Group LLC — a licensed electrician committed to quality, safety, and transparent pricing across Massachusetts.',
    type: 'website',
    url: 'https://reecegroupllc.com/about',
    images: [{ url: '/logo.PNG', width: 1200, height: 630, alt: 'Reece Group LLC' }],
  },
  twitter: { card: 'summary_large_image', images: ['/logo.PNG'] },
}

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'About', url: '/about' },
          ]))
        }}
      />
      <AboutContent />
    </>
  )
}
