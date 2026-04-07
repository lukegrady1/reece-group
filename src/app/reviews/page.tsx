import type { Metadata } from 'next'
import { breadcrumbSchema } from '@/lib/structuredData'
import { ReviewsContent } from '@/components/pages/ReviewsContent'

export const metadata: Metadata = {
  title: 'Client Reviews | Reece Group LLC — Worcester, MA Electrician',
  description: 'Read 74 five-star Google reviews for Reece Group LLC. See why Worcester homeowners and businesses trust Reece Electric for professional electrical services.',
  alternates: { canonical: 'https://reecegroupllc.com/reviews' },
  openGraph: {
    title: 'Client Reviews | Reece Group LLC — Worcester, MA Electrician',
    description: 'Read 74 five-star Google reviews for Reece Group LLC. See why Worcester homeowners and businesses trust Reece Electric for professional electrical services.',
    type: 'website',
    url: 'https://reecegroupllc.com/reviews',
    images: [{ url: '/reece-group-og.png', width: 1200, height: 630, alt: 'Reece Group LLC' }],
  },
  twitter: { card: 'summary_large_image', images: ['/reece-group-og.png'] },
}

export default function ReviewsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Reviews', url: '/reviews' },
          ]))
        }}
      />
      <ReviewsContent />
    </>
  )
}
