import type { Metadata } from 'next'
import { ServicePageContent } from '@/components/pages/ServicePageContent'
import { breadcrumbSchema } from '@/lib/structuredData'

export const metadata: Metadata = {
  title: 'Emergency Electrician Worcester MA | 1-Hour Response — Reece Group LLC',
  description:
    '24/7 emergency electrician in Worcester, MA. A licensed master electrician arrives within 1 hour — not a callback, an actual person on-site. Call (508) 793-8788 now.',
  alternates: { canonical: 'https://reecegroupllc.com/services/emergency-electrician-worcester' },
  openGraph: {
    title: 'Emergency Electrician Worcester MA | 1-Hour Response — Reece Group LLC',
    description:
      '24/7 emergency electrician in Worcester, MA. A licensed master electrician arrives within 1 hour — not a callback, an actual person on-site. Call (508) 793-8788 now.',
    type: 'website',
    url: 'https://reecegroupllc.com/services/emergency-electrician-worcester',
    images: [{ url: '/reece-group-og.png', width: 1200, height: 630, alt: 'Reece Group LLC' }],
  },
  twitter: { card: 'summary_large_image', images: ['/reece-group-og.png'] },
}

export default function EmergencyElectricianPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: 'Home', url: '/' },
              { name: 'Services', url: '/services' },
              { name: 'Emergency Electrician Worcester', url: '/services/emergency-electrician-worcester' },
            ])
          ),
        }}
      />
      <ServicePageContent
        title="Emergency Electrician in Worcester, MA"
        subtitle="A licensed master electrician at your door within 1 hour — day, night, weekend, or holiday."
        intro="If you smell burning near your electrical panel, see sparks coming from an outlet, or just lost all power and the utility says it's not on their end — call (508) 793-8788 right now. At Reece Group, our 1-hour emergency response means a Massachusetts-licensed master electrician (Anthony Reece, License #9036A1) arrives at your home or business within 60 minutes to assess the situation and begin work immediately. Not a dispatcher. Not a callback. A qualified electrician on-site with the tools and parts to fix the problem."
        sections={[
          {
            heading: 'What Counts as an Electrical Emergency',
            content:
              'Not every electrical issue warrants a midnight call, but some problems cannot wait until morning. If you notice any of the following, treat it as an emergency — the risk of fire or electrocution is real and escalates fast.',
            items: [
              'Burning smell coming from outlets, switches, or your electrical panel',
              'Sparking or arcing from any outlet, fixture, or wiring',
              'Complete power loss in your home when neighbors still have power',
              'Exposed or damaged live wires — from storm damage, renovation accidents, or rodent damage',
              'Water in contact with electrical systems — flooded basements, burst pipes near panels or outlets',
              'Loud buzzing or humming from your breaker panel that wasn\'t there before',
            ],
          },
          {
            heading: 'What to Do While You Wait',
            content:
              'After you call us, there are a few things you can do to keep your household safe until we arrive. If you can safely reach your main breaker, turn it off — this cuts power to the entire house and eliminates the immediate risk of fire or shock. Do not touch any electrical equipment that has been in contact with water. Keep your family and pets away from the affected area, especially if you see exposed wiring or smell burning. If the situation feels dangerous — smoke, visible flames, or a strong burning odor — call 911 first, then call us.',
          },
          {
            heading: 'Storm Damage and Severe Weather Response',
            content:
              'Worcester gets hit hard by nor\'easters, severe thunderstorms, and ice storms. Downed power lines in your yard, surge damage that fried your panel, a flooded basement with a submerged sub-panel — these are the calls we get after every major storm. Never approach a downed power line, even if it looks dead. Call National Grid to report it, then call us for everything on your side of the meter. We handle storm-related surge damage, generator hookups for extended outages, and temporary power restoration to keep your refrigerator, sump pump, and heating system running while permanent repairs are planned.',
          },
          {
            heading: 'Common Emergency Repairs',
            content:
              'Most emergency calls fall into a handful of categories. Knowing what we typically handle can give you a sense of what to expect when we arrive.',
            items: [
              'Main breaker failure — the breaker trips and won\'t reset, or it fails to trip when it should',
              'Arc fault breakers tripping repeatedly — could indicate damaged wiring behind walls',
              'Generator hookup during extended power outages — safe transfer switch installation',
              'Temporary power restoration to critical systems (sump pump, furnace, medical equipment)',
              'Burnt or melted outlets and switches — often a sign of loose connections or overloaded circuits',
              'Post-accident wire repair — vehicle hit a utility pole, tree fell on your service entrance',
            ],
          },
          {
            heading: 'Why You Should Not Wait',
            content:
              'Electrical problems do not fix themselves, and they rarely stay the same — they get worse. A smoldering connection behind a wall can ignite insulation within hours. An exposed conductor in a damp basement is an electrocution hazard every second it stays live. Arc faults that trip a breaker repeatedly are your panel\'s way of telling you something is actively failing. Resetting the breaker and hoping for the best is how house fires start. If something feels wrong with your electrical system, trust that instinct. The cost of a late-night service call is nothing compared to the cost of a fire or a trip to the emergency room.',
          },
          {
            heading: 'Transparent Emergency Pricing',
            content:
              'We know that calling an emergency electrician at 2 AM feels like handing someone a blank check. That\'s not how we operate. When Anthony arrives, he\'ll assess the problem, explain exactly what needs to happen, and give you a clear price before any work begins. Our emergency rate is straightforward — a flat trip charge plus time and materials at published rates. No bait-and-switch, no inflated "emergency markup" that triples the bill. You approve the cost, or we don\'t start. That same policy applies at midnight, on Christmas, and during a nor\'easter.',
          },
        ]}
        faqs={[
          {
            question: 'How do I reach Reece Group for an after-hours emergency?',
            answer:
              'Call (508) 793-8788 any time — day, night, weekends, or holidays. The same number reaches us 24/7. You\'ll speak with a real person, not an answering service, and a licensed electrician will be dispatched to your location within one hour.',
          },
          {
            question: 'What does "1-hour response" actually mean?',
            answer:
              'It means a licensed master electrician physically arrives at your property within 60 minutes of your call, ready to assess the problem and begin work. It does not mean a phone callback or a promise to schedule something the next day. We carry common parts and materials on the truck so most emergency repairs can be completed in a single visit.',
          },
          {
            question: 'How much does an emergency electrician visit cost?',
            answer:
              'We charge a flat trip fee for emergency calls plus time and materials at our standard published rates. There is no hidden "emergency multiplier." Before any work begins, you\'ll receive a clear breakdown of the expected cost and you decide whether to proceed. We\'ll never pressure you or start work without your approval.',
          },
          {
            question: 'Should I turn off my main breaker before calling?',
            answer:
              'If you can safely access your main breaker and you smell burning, see sparks, or have water near electrical equipment — yes, shut it off. This cuts all power to your home and reduces the immediate risk of fire or shock. If you cannot reach the panel safely, or if the panel itself is the problem, leave it alone, evacuate, and call 911 followed by our number.',
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
