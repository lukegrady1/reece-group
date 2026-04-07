import type { Metadata } from 'next'
import { LocationPageContent } from '@/components/pages/LocationPageContent'
import { breadcrumbSchema } from '@/lib/structuredData'

export const metadata: Metadata = {
  title: 'Electrician Auburn MA | Licensed Master Electrician — Reece Group LLC',
  description:
    'Licensed master electrician serving Auburn, MA. Panel upgrades, EV chargers, commercial wiring & emergency service. 10 minutes from our Worcester base. Call (508) 793-8788.',
  alternates: { canonical: 'https://reecegroupllc.com/electrician-auburn-ma' },
  openGraph: {
    title: 'Electrician Auburn MA | Licensed Master Electrician — Reece Group LLC',
    description:
      'Licensed master electrician serving Auburn, MA. Panel upgrades, EV chargers, commercial wiring & emergency service. 10 minutes from our Worcester base. Call (508) 793-8788.',
    type: 'website',
    url: 'https://reecegroupllc.com/electrician-auburn-ma',
    images: [
      {
        url: '/reece-group-og.png',
        width: 1200,
        height: 630,
        alt: 'Reece Group LLC',
      },
    ],
  },
  twitter: { card: 'summary_large_image', images: ['/reece-group-og.png'] },
}

export default function AuburnPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: 'Home', url: '/' },
              { name: 'Services', url: '/services' },
              { name: 'Electrician Auburn MA', url: '/electrician-auburn-ma' },
            ])
          ),
        }}
      />
      <LocationPageContent
        city="Auburn"
        state="MA"
        headline="Licensed Electrician Serving Auburn, MA"
        intro="Auburn sits right on Worcester's southern border, and that proximity is exactly why Reece Group LLC treats it like a home territory rather than a service extension. Our trucks are typically on-site within 10 minutes. Whether you own a cape on Pakachoag Hill with knob-and-tube wiring that needs replacing, or you manage a commercial building along the Route 20 corridor, Anthony Reece and his team bring a master electrician to every single job — no subcontractors, no exceptions."
        sections={[
          {
            heading: 'Why Auburn Is a Unique Service Area',
            content:
              'Most towns lean residential or commercial. Auburn is genuinely both. The neighborhoods around Pakachoag Hill and along Bryn Mawr Avenue are filled with homes dating from the 1950s through the 1970s — solid housing stock, but with electrical systems that were never designed for modern loads. Meanwhile, the Auburn Industrial Park, the Route 12 commercial strip along Southbridge Street, and the retail and restaurant businesses near Auburn Mall all demand reliable commercial electrical work. We handle both sides of that equation daily, which means our crew moves fluently between a 100-amp residential panel upgrade in the morning and a three-phase commercial installation in the afternoon.',
          },
          {
            heading: 'Common Electrical Needs in Auburn Homes',
            content:
              'Auburn\'s housing stock tells a clear story. Many homes were built during the mid-century building boom when 100-amp service was considered generous. Today, between central air, home offices, EV chargers, and modern kitchens, those panels are maxed out. Older homes near Drury Square and along the Pakachoag Hill area sometimes still have original wiring that no longer meets code. We see the same issues again and again across Auburn neighborhoods:',
            items: [
              'Panel upgrades from 100-amp to 200-amp service to support modern electrical loads',
              'Knob-and-tube or aluminum wiring replacement in pre-1970s homes',
              'Dedicated circuits for home offices, workshops, and EV chargers',
              'Whole-house surge protection — essential with National Grid\'s distribution network',
              'Outdoor lighting and landscape wiring for Auburn\'s larger residential lots',
              'Code corrections flagged during home sales and insurance inspections',
            ],
          },
          {
            heading: 'Commercial Electrical Work Along Routes 12 and 20',
            content:
              'Auburn\'s commercial corridors are busy and growing. The stretch of Route 12 running south from the Worcester line through to Oxford sees steady tenant turnover and renovation activity — each changeover typically requires updated wiring, new circuits, or panel work to meet the incoming business\'s needs. The Route 20 corridor between Drury Square and the Auburn Mall area carries the same demand. We work with property managers, restaurant owners, and retail operators who need electrical work done right and done on schedule. That means pulling permits through Auburn\'s building department, coordinating with the town\'s wire inspector, and making sure the finished work passes on the first inspection — not the third.',
          },
          {
            heading: 'Auburn Permits and Inspections',
            content:
              'All electrical work in Auburn requiring a permit goes through the Auburn Building Department, with inspections handled by the town\'s own wire inspector. This is a separate process from Worcester, and the requirements can differ. We pull permits and schedule inspections as part of every job — it\'s included in our pricing, not an afterthought. Because we work in Auburn regularly, we know the local inspection expectations and keep jobs moving without delays. If you\'ve been quoted by an electrician who doesn\'t mention permits, that should be a red flag.',
          },
          {
            heading: 'Fastest Response Times in Auburn',
            content:
              'Our shop on Greenfield Street in Worcester is roughly six miles from central Auburn — straight down Route 12 or across on Route 20. For emergency calls, that translates to a response time well within our 1-hour guarantee, and often closer to 10 or 15 minutes depending on traffic. We also serve the neighboring towns of Oxford and Millbury from the same base, so there\'s frequently a crew already working in the area that can respond even faster. When your power goes out at 2 AM or you smell burning from a panel, response time matters more than anything else on this page.',
          },
        ]}
        services={[
          { title: 'Panel Upgrades', href: '/services/panel-upgrade-worcester-ma' },
          { title: 'EV Charger Installation', href: '/services/ev-charger-installation-worcester' },
          { title: 'Residential Electrical', href: '/services/residential-electrician-worcester' },
          { title: 'Commercial Electrical', href: '/services/commercial-electrician-worcester' },
          { title: 'Safety Inspections', href: '/services/electrical-inspection-worcester' },
          { title: 'Emergency Electrician', href: '/services/emergency-electrician-worcester' },
        ]}
        faqs={[
          {
            question: 'Do I need a separate permit for electrical work in Auburn, or does my Worcester permit cover it?',
            answer:
              'Auburn has its own building department and wire inspector — a Worcester permit does not apply. Every town in Massachusetts handles electrical permits independently. We pull the Auburn-specific permit for you and coordinate directly with the town\'s wire inspector to schedule the required inspection. This is built into our process and our pricing.',
          },
          {
            question: 'My Auburn home was built in the 1960s. Should I be concerned about the wiring?',
            answer:
              'Homes from that era in Auburn were typically wired with 100-amp service and may have aluminum branch wiring, which is a known fire risk at connection points. Even if nothing seems wrong, it\'s worth having the system evaluated — especially if you\'re adding loads like an EV charger or central AC. We offer thorough electrical safety inspections that check your panel, wiring, grounding, and receptacles against current code.',
          },
          {
            question: 'How quickly can you get to an electrical emergency in Auburn?',
            answer:
              'Auburn is about a 10-minute drive from our Worcester base. We guarantee a 1-hour response for emergencies, but for Auburn we\'re typically there much faster — often within 15 minutes. If we already have a crew working in Auburn, Oxford, or Millbury that day, response can be nearly immediate.',
          },
          {
            question: 'Can you handle commercial electrical work for businesses near Auburn Mall or along Route 20?',
            answer:
              'Absolutely. We work with commercial clients throughout Auburn\'s retail and industrial corridors. Whether it\'s tenant fit-out wiring for a new storefront, three-phase power for industrial equipment in the Auburn Industrial Park, or lighting retrofits for a restaurant, we carry the appropriate licensing for commercial work in Massachusetts and pull all required permits through Auburn\'s building department.',
          },
        ]}
      />
    </>
  )
}
