import type { Metadata } from 'next'
import { BlogContent } from '@/components/pages/BlogContent'

export const metadata: Metadata = {
  title: 'Electrical Tips & Local Guides | Reece Group LLC',
  description: 'Electrical tips, safety guides, and local resources for Massachusetts homeowners and businesses from Reece Group LLC.',
  alternates: { canonical: 'https://reecegroupllc.com/blog' },
  openGraph: {
    title: 'Electrical Tips & Local Guides | Reece Group LLC',
    description: 'Electrical tips, safety guides, and local resources for Massachusetts homeowners and businesses from Reece Group LLC.',
    type: 'website',
    url: 'https://reecegroupllc.com/blog',
    images: [{ url: '/logo.PNG', width: 1200, height: 630, alt: 'Reece Group LLC' }],
  },
  twitter: { card: 'summary_large_image', images: ['/logo.PNG'] },
}

export default function BlogPage() {
  return <BlogContent />
}
