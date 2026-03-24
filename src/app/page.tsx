import type { Metadata } from 'next'
import { PageWrapper } from '@/components/ui/PageWrapper'
import { Hero } from '@/components/sections/Hero'
import { TrustBar } from '@/components/sections/TrustBar'
import { ServicesGrid } from '@/components/sections/ServicesGrid'
import { WhyUs } from '@/components/sections/WhyUs'
import { StatsRow } from '@/components/sections/StatsRow'
import { Testimonials } from '@/components/sections/Testimonials'
import { CTABanner } from '@/components/sections/CTABanner'
import { localBusinessSchema } from '@/lib/structuredData'

export const metadata: Metadata = {
  title: 'Licensed Electrician in Worcester, MA | Reece Group LLC',
  description: 'Reece Group LLC provides expert electrical services across Massachusetts. Residential, commercial, panel upgrades & EV chargers. Call for a free estimate.',
  alternates: { canonical: 'https://reecegroupllc.com/' },
  openGraph: {
    title: 'Licensed Electrician in Worcester, MA | Reece Group LLC',
    description: 'Reece Group LLC provides expert electrical services across Massachusetts. Residential, commercial, panel upgrades & EV chargers. Call for a free estimate.',
    type: 'website',
    url: 'https://reecegroupllc.com/',
  },
  twitter: { card: 'summary_large_image' },
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <PageWrapper>
        <Hero />
        <TrustBar />
        <ServicesGrid />
        <WhyUs />
        <StatsRow />
        <Testimonials />
        <CTABanner />
      </PageWrapper>
    </>
  )
}
