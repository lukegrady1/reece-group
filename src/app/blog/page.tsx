import type { Metadata } from 'next'
import { BlogContent } from '@/components/pages/BlogContent'

export const metadata: Metadata = {
  title: 'Electrical Tips & Local Guides | Reece Group LLC',
  description: 'Electrical tips, safety guides, and local resources for Massachusetts homeowners and businesses from Reece Group LLC.',
  alternates: { canonical: 'https://reecegroupllc.com/blog' },
}

export default function BlogPage() {
  return <BlogContent />
}
