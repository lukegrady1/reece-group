import type { Metadata } from 'next'
import { ServicePageContent } from '@/components/pages/ServicePageContent'
import { breadcrumbSchema } from '@/lib/structuredData'

export const metadata: Metadata = {
  title: 'Commercial Electrician Worcester MA | Business Electrical Services — Reece Group LLC',
  description:
    'Licensed commercial electrician in Worcester, MA. Office fit-outs, three-phase power, LED retrofits, code compliance upgrades. Master electrician on every job. MA #9036A1.',
  alternates: { canonical: 'https://reecegroupllc.com/services/commercial-electrician-worcester' },
  openGraph: {
    title: 'Commercial Electrician Worcester MA | Business Electrical Services — Reece Group LLC',
    description:
      'Licensed commercial electrician in Worcester, MA. Office fit-outs, three-phase power, LED retrofits, code compliance upgrades. Master electrician on every job. MA #9036A1.',
    type: 'website',
    url: 'https://reecegroupllc.com/services/commercial-electrician-worcester',
    images: [{ url: '/reece-group-og.png', width: 1200, height: 630, alt: 'Reece Group LLC' }],
  },
  twitter: { card: 'summary_large_image', images: ['/reece-group-og.png'] },
}

export default function CommercialElectricianPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: 'Home', url: '/' },
              { name: 'Services', url: '/services' },
              { name: 'Commercial Electrician Worcester', url: '/services/commercial-electrician-worcester' },
            ])
          ),
        }}
      />
      <ServicePageContent
        title="Commercial Electrician in Worcester, MA"
        subtitle="Three-phase power, tenant fit-outs, and code-compliant electrical systems for Worcester businesses."
        intro="Commercial electrical work is a different discipline from residential. The loads are bigger, the codes are stricter, and the coordination is more involved. At Reece Group LLC, we handle the full scope of commercial electrical — from a 400-amp service upgrade in a Canal District warehouse to wiring a new retail space at Kelley Square. Anthony Reece, master electrician (MA License #9036A1), is on every job. No subcontractors, no hand-offs."
        sections={[
          {
            heading: 'Office and Retail Fit-Outs',
            content:
              'Tenant improvement work is a big part of what we do in Worcester. When a new business moves into an existing commercial space, the electrical almost always needs reworking — new circuits for equipment, relocated panels, additional lighting. We work directly with general contractors and property managers on fit-outs throughout downtown Worcester, the Canal District, and the Kelley Square redevelopment area. We handle permitting with the Worcester Building Department and coordinate inspections so your project stays on schedule.',
          },
          {
            heading: 'Commercial Panels and Distribution',
            content:
              'Commercial buildings need more than a 200-amp residential panel. We install and upgrade three-phase services, 400A+ main distribution panels, sub-distribution panels, and demand metering systems. If your building has an older electrical service that cannot support new equipment loads — HVAC units, commercial kitchen appliances, manufacturing equipment — we size the new service correctly the first time and coordinate with National Grid on the utility side.',
            items: [
              'Three-phase 208V/480V service installations',
              '400A and 600A main distribution panels',
              'Sub-panel installations for tenant spaces',
              'Demand metering and load management',
            ],
          },
          {
            heading: 'Commercial Lighting Systems',
            content:
              'Lighting is typically the largest electrical load in a commercial building, and it is also where the biggest energy savings are. We do LED retrofits for warehouses and office spaces, install parking lot lighting, and wire emergency and exit lighting to meet NFPA 101 life safety requirements. Massachusetts energy code requires occupancy sensors and daylight harvesting controls in most commercial spaces — we install compliant lighting control systems that actually reduce your electric bill.',
            items: [
              'LED retrofits for warehouses, offices, and retail',
              'Parking lot and exterior security lighting',
              'Emergency and exit lighting per NFPA 101',
              'Occupancy sensors and lighting controls for energy code compliance',
            ],
          },
          {
            heading: 'Code Compliance and Upgrades',
            content:
              'Many commercial buildings in Worcester were wired decades ago. If you are renovating, changing use, or just getting flagged by an inspector, you likely need electrical upgrades to meet the current National Electrical Code and Massachusetts amendments. We handle arc-fault and ground-fault protection upgrades, grounding system corrections, panel labeling, and ADA-compliant outlet and switch placement. We also coordinate fire alarm and life safety wiring with your alarm contractor to make sure everything passes inspection.',
            items: [
              'NEC and Massachusetts electrical code compliance',
              'ADA-compliant outlet heights and accessible switches',
              'Fire alarm and life safety wiring coordination',
              'Grounding system upgrades and bonding corrections',
            ],
          },
          {
            heading: 'Data and Low-Voltage Rough-In',
            content:
              'Modern commercial spaces need more than power — they need clean data infrastructure. We install structured cabling pathways, dedicated 20-amp circuits for server rooms and network closets, and properly grounded and isolated power for sensitive equipment. If you are building out a server room or IT closet, we make sure the electrical supports your technology needs from day one.',
          },
          {
            heading: 'How Commercial Work Differs',
            content:
              'Commercial projects require a different approach than residential. We schedule work around your business hours so you do not lose a day of revenue. On larger projects, we phase the work — keeping parts of the building operational while we upgrade others. We coordinate with general contractors, plumbers, HVAC techs, and fire alarm companies. We carry the commercial insurance and bonding that property managers and GCs require, and we pull permits and handle inspections directly.',
          },
        ]}
        faqs={[
          {
            question: 'Can you do electrical work in my building while the business stays open?',
            answer:
              'Yes. We plan phased shutdowns so only the section being worked on loses power, and we schedule heavy work for evenings or weekends when possible. For retail and restaurant spaces, we typically do rough-in work before you open and finish work after you close.',
          },
          {
            question: 'How long does a commercial panel upgrade take?',
            answer:
              'Most commercial panel upgrades take one to two days, depending on the service size and whether National Grid needs to disconnect and reconnect the utility feed. We coordinate the utility shutdown in advance so there are no surprises. A straightforward 400-amp panel swap in an accessible mechanical room is usually a single-day job.',
          },
          {
            question: 'Do you handle the permitting for commercial electrical work in Worcester?',
            answer:
              'We pull all electrical permits through the Worcester Building Department and schedule all required inspections. For larger tenant fit-outs, we coordinate with the general contractor on the overall permit package. You do not need to visit city hall — we handle it.',
          },
          {
            question: 'What is the difference between your commercial and residential rates?',
            answer:
              'Commercial work is priced based on the scope, not a different hourly rate. The costs are typically higher because commercial jobs involve larger materials (bigger panels, heavier wire, three-phase equipment) and more coordination. We provide detailed written estimates before starting so you know exactly what the job will cost.',
          },
        ]}
        relatedServices={[
          { title: 'Panel Upgrades', href: '/services/panel-upgrade-worcester-ma' },
          { title: 'Safety Inspections', href: '/services/electrical-inspection-worcester' },
          { title: 'Residential Electrical', href: '/services/residential-electrician-worcester' },
        ]}
      />
    </>
  )
}
