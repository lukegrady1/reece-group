import type { Metadata } from 'next'
import { ServicePageContent } from '@/components/pages/ServicePageContent'
import { breadcrumbSchema } from '@/lib/structuredData'

export const metadata: Metadata = {
  title: 'Electrical Inspection Worcester MA | Safety & Code Compliance — Reece Group LLC',
  description: 'Licensed electrician inspections in Worcester, MA — pre-purchase, insurance compliance, code violation checks for older homes. Master electrician on every job.',
  alternates: { canonical: 'https://reecegroupllc.com/services/electrical-inspection-worcester' },
  openGraph: {
    title: 'Electrical Inspection Worcester MA | Safety & Code Compliance — Reece Group LLC',
    description: 'Licensed electrician inspections in Worcester, MA — pre-purchase, insurance compliance, code violation checks for older homes. Master electrician on every job.',
    type: 'website',
    url: 'https://reecegroupllc.com/services/electrical-inspection-worcester',
    images: [{ url: '/reece-group-og.png', width: 1200, height: 630, alt: 'Reece Group LLC' }],
  },
  twitter: { card: 'summary_large_image', images: ['/reece-group-og.png'] },
}

export default function ElectricalInspectionPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify(breadcrumbSchema([
          { name: 'Home', url: '/' },
          { name: 'Services', url: '/services' },
          { name: 'Electrical Inspection Worcester', url: '/services/electrical-inspection-worcester' },
        ]))
      }} />
      <ServicePageContent
        title="Electrical Inspection & Code Compliance in Worcester, MA"
        subtitle="Thorough electrical evaluations by a master electrician — for home buyers, insurers, and homeowners who want to know exactly what they're dealing with."
        intro="Most of the housing stock in Worcester was built before modern electrical codes existed. Knob-and-tube wiring, undersized panels, missing ground wires, and decades of handyman additions are common in neighborhoods like Main South, Grafton Hill, and the East Side. An electrical inspection tells you what's safe, what's not, and what needs to happen next. At Reece Group, a master electrician handles every inspection personally — no subcontractors, no general overview. We open the panel, test circuits, and give you a real assessment."
        sections={[
          {
            heading: 'Pre-Purchase Home Inspections',
            content: 'Buying an older Worcester home means inheriting its entire electrical history. A general home inspector will flag obvious problems — an exposed wire, a missing cover plate — but they are not licensed to open panels or evaluate wiring methods. We go deeper. We identify the wiring type (knob-and-tube, cloth-wrapped Romex, aluminum branch wiring), assess panel capacity, check for double-tapped breakers, and evaluate whether the system can handle modern loads like central air, EV chargers, or a home office. If you are buying a house built before 1960, an electrician inspection is not optional — it is how you avoid a surprise $15,000 rewire after closing.',
          },
          {
            heading: 'What We Actually Inspect',
            content: 'Every inspection covers the full electrical system, not just what is visible from the basement stairs. Here is what we evaluate:',
            items: [
              'Panel condition — breaker brand, bus bar integrity, signs of overheating, proper labeling, and adequate capacity for the home',
              'Wiring type and condition — identifying knob-and-tube, aluminum, cloth-insulated, or modern NM cable throughout accessible areas',
              'Grounding and bonding — verifying the system is properly grounded to water pipes or ground rods per NEC requirements',
              'GFCI protection in kitchens, bathrooms, garages, exteriors, and basements as required by current code',
              'AFCI protection on bedroom circuits (required since 1999 NEC) and additional areas under current code',
              'Smoke and CO detector compliance — placement, type, interconnection, and power source',
              'Outlet testing — checking polarity, ground integrity, and identifying bootleg grounds',
              'Visible code violations — open splices, improper junction boxes, overloaded circuits, and amateur wiring work',
            ],
          },
          {
            heading: 'Insurance Compliance Inspections',
            content: 'Several insurance carriers in Massachusetts require an electrical inspection before writing or renewing a homeowner policy — especially for homes with Federal Pacific or Zinsco panels, knob-and-tube wiring, or fuse boxes. We perform these inspections regularly and provide a detailed written report your insurer can use. If remediation work is needed, we quote that separately and can often handle it before your policy deadline. Common insurance-required fixes include replacing Federal Pacific panels (a known fire risk), removing active knob-and-tube circuits, and upgrading from fuses to breakers.',
          },
          {
            heading: 'Smoke & CO Detector Compliance',
            content: 'Massachusetts law (527 CMR 31.00 and M.G.L. c. 148 s. 26F) requires hard-wired, interconnected smoke and CO detectors at point of sale. This is enforced by the local fire department, and you cannot close on a property without a certificate of compliance. Many older Worcester homes still have battery-only detectors or units in the wrong locations. We verify detector placement, power source, and interconnection during every inspection and can install compliant detectors on the spot if needed. This is one of the most common holdups in real estate transactions, and we handle it daily.',
          },
          {
            heading: 'Home Inspector vs. Licensed Electrician',
            content: 'A home inspector gives you a general overview — they walk through the house, note visible concerns, and recommend further evaluation by a specialist. They are not licensed to remove panel covers, test individual circuits, or evaluate wiring methods behind walls. A licensed electrician inspection goes further: we pull the panel cover, check torque on connections, identify specific code violations, and tell you what repairs will actually cost. If your home inspector flagged electrical concerns, that is exactly when you call us. We give you the technical detail needed to negotiate repairs or plan a budget.',
          },
          {
            heading: 'Common Code Violations in Worcester Homes',
            content: 'After years of inspecting older homes across Worcester, these are the violations we see most often:',
            items: [
              'Open-splice junction boxes — wires connected with tape or wire nuts and no cover plate, often found in attics and basements',
              'Missing ground wires — two-prong outlets that have been swapped to three-prong without adding a ground path',
              'Double-tapped breakers — two wires landed on a single breaker terminal not rated for it',
              'Improper bathroom and kitchen circuits — shared circuits where dedicated 20-amp circuits are required',
              'Undersized panels — 60-amp or 100-amp service feeding a home that now pulls far more than the original design',
              'Knob-and-tube wiring buried under blown-in insulation — a fire hazard that is invisible without inspection',
            ],
          },
        ]}
        faqs={[
          {
            question: 'How long does an electrical inspection take?',
            answer: 'Most residential inspections take 1 to 2 hours depending on the size and age of the home. Older homes with multiple additions or previous renovation work take longer because there is more to evaluate. We provide a written report within 24 hours.',
          },
          {
            question: 'Do I need an electrical inspection before buying a home?',
            answer: 'It is not legally required, but for any Worcester home built before 1970, we strongly recommend it. A general home inspection will not catch wiring issues inside the panel or behind walls. The cost of an electrical inspection is minimal compared to discovering a major wiring problem after you have already closed.',
          },
          {
            question: 'Can you do the repairs if you find problems during the inspection?',
            answer: 'Yes. We provide a separate quote for any remediation work identified during the inspection. Because we are a full-service electrical contractor — not just an inspection company — we can schedule repairs immediately. For real estate transactions with tight deadlines, this saves significant time.',
          },
          {
            question: 'What is the difference between a municipal electrical inspection and your inspection?',
            answer: 'A municipal wire inspector visits after permitted electrical work is completed to verify it meets code. Our inspection is a voluntary, comprehensive evaluation of your entire electrical system — we are looking at everything, not just new work. Think of it as a full physical versus a post-surgery checkup.',
          },
        ]}
        relatedServices={[
          { title: 'Panel Upgrades', href: '/services/panel-upgrade-worcester-ma' },
          { title: 'Residential Electrical', href: '/services/residential-electrician-worcester' },
          { title: 'Emergency Electrician', href: '/services/emergency-electrician-worcester' },
        ]}
      />
    </>
  )
}
