import type { Metadata } from 'next'
import { LocationPageContent } from '@/components/pages/LocationPageContent'
import { breadcrumbSchema } from '@/lib/structuredData'

export const metadata: Metadata = {
  title: 'Electrician Shrewsbury MA | Licensed Master Electrician — Reece Group LLC',
  description:
    'Licensed master electrician serving Shrewsbury, MA. Panel upgrades, EV chargers & rewiring for 1960s–80s homes. SELCO-experienced. 1-hour emergency response from Worcester.',
  alternates: { canonical: 'https://reecegroupllc.com/electrician-shrewsbury-ma' },
  openGraph: {
    title: 'Electrician Shrewsbury MA | Licensed Master Electrician — Reece Group LLC',
    description:
      'Licensed master electrician serving Shrewsbury, MA. Panel upgrades, EV chargers & rewiring for 1960s–80s homes. SELCO-experienced. 1-hour emergency response from Worcester.',
    type: 'website',
    url: 'https://reecegroupllc.com/electrician-shrewsbury-ma',
    images: [{ url: '/reece-group-og.png', width: 1200, height: 630, alt: 'Reece Group LLC' }],
  },
  twitter: { card: 'summary_large_image', images: ['/reece-group-og.png'] },
}

export default function ShrewsburyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: 'Home', url: '/' },
              { name: 'Services', url: '/services' },
              { name: 'Electrician Shrewsbury MA', url: '/electrician-shrewsbury-ma' },
            ])
          ),
        }}
      />
      <LocationPageContent
        city="Shrewsbury"
        state="MA"
        headline="Licensed Electrician Serving Shrewsbury, MA"
        intro="Reece Group LLC is a Worcester-based electrical contractor that has served Shrewsbury homeowners and businesses for years. Our shop on Greenfield Street is just 8 miles from the center of Shrewsbury — about a 15-minute drive straight down Route 9. When you call us, a master electrician shows up. We don't subcontract, we don't send apprentices alone, and we handle Shrewsbury's permitting process directly so you never have to chase paperwork."
        sections={[
          {
            heading: 'Why Shrewsbury Homeowners Call Reece Group',
            content:
              'Shrewsbury sits directly east of Worcester, and our proximity means we can be at your door fast — often within the hour for emergencies. But speed isn\'t the only reason Shrewsbury residents choose us. Unlike large outfits that dispatch whoever is available, every Reece Group job is led by Anthony Reece, a licensed master electrician (MA License #9036A1). That matters when you\'re dealing with the older wiring common in Shrewsbury\'s established neighborhoods or navigating SELCO\'s specific requirements for service connections.',
          },
          {
            heading: 'Common Electrical Issues in Shrewsbury Homes',
            content:
              'Much of Shrewsbury\'s housing stock dates from the 1960s through the 1980s, when the town experienced its biggest residential building boom. Homes in the White City neighborhood, along Lakeway, and in the older sections near Main Street frequently have electrical systems that weren\'t designed for modern loads. We see the same issues in these homes again and again:',
            items: [
              '100-amp panels that can\'t keep up with central air, home offices, and EV chargers — most of these homes need a 200-amp upgrade',
              'Aluminum branch wiring (common in late-60s and 70s construction) that poses a fire risk at connections and outlets',
              'Ungrounded two-prong outlets throughout the house, especially in bedrooms and bathrooms',
              'Federal Pacific and Zinsco panels — known defective brands that inspectors flag and insurers refuse to cover',
              'Outdated knob-and-tube remnants in some of the older homes closer to downtown Shrewsbury',
            ],
          },
          {
            heading: 'Electrical Permits and Inspections in Shrewsbury',
            content:
              'Shrewsbury has its own building department and electrical inspector — permits are not handled through Worcester. Any electrical work beyond a simple fixture swap requires a permit pulled through the Town of Shrewsbury\'s permitting office. We handle this for every job. We pull the permit before work begins, schedule the inspection with the Shrewsbury electrical inspector when the work is complete, and make sure everything passes the first time. This is especially important for panel upgrades, new circuits, and EV charger installations where the inspector will want to verify load calculations and proper grounding.',
          },
          {
            heading: 'Working with SELCO: Shrewsbury\'s Municipal Utility',
            content:
              'One thing that sets Shrewsbury apart from neighboring towns is its municipal electric utility — Shrewsbury Electric and Cable Operations (SELCO). Unlike the surrounding communities served by National Grid, Shrewsbury residents get their power from SELCO. This matters for electrical work. Panel upgrades require coordination with SELCO for the meter disconnect and reconnect, and their process differs from National Grid\'s. If you\'re installing solar panels, SELCO has its own net metering program and interconnection requirements. For EV charger installations, SELCO\'s rates and demand charges affect which charger setup makes the most financial sense. We\'ve done enough work in Shrewsbury to know SELCO\'s procedures and timelines, so there are no surprises on your end.',
          },
          {
            heading: 'EV Charger Installation for Shrewsbury Households',
            content:
              'Shrewsbury\'s suburban character — detached garages, long driveways, dedicated parking — makes it one of the better towns in the area for home EV charging. We install Level 2 (240V) chargers from all major brands including Tesla Wall Connector, ChargePoint, and Emporia. The typical installation in a Shrewsbury home involves running a dedicated 50-amp circuit from the panel to the garage, which often means a panel upgrade first if you\'re still on 100 amps. We handle the full scope: load calculation, panel work if needed, circuit run, charger mounting, and the Shrewsbury permit and inspection.',
          },
          {
            heading: 'Neighborhoods and Areas We Serve in Shrewsbury',
            content:
              'We work throughout all of Shrewsbury, from the older neighborhoods near the town center to the newer developments off Route 20 and around Dean Park. Whether your home is in one of the established areas that needs a full rewire or a newer subdivision where you want to add an EV charger or home office circuit, we\'re familiar with the housing stock and local requirements.',
            items: [
              'White City and Lakeway — 1950s–70s homes, often the first to need panel and wiring upgrades',
              'Route 9 corridor — newer construction and commercial spaces with modern electrical needs',
              'Edgemere and Colonial Drive areas — mid-century homes with original wiring',
              'Centech Park and Julio Drive — commercial and industrial electrical service',
              'New developments off Route 20 — additions, finished basements, and accessory dwelling units',
            ],
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
            question: 'Do I need a separate permit for electrical work in Shrewsbury, or does my Worcester permit cover it?',
            answer:
              'Shrewsbury has its own building department and electrical inspector — a Worcester permit does not apply. All permitted electrical work in Shrewsbury must go through the Town of Shrewsbury\'s permitting office. We handle the permit application, scheduling, and inspection for every job so you don\'t have to deal with the town directly.',
          },
          {
            question: 'My Shrewsbury home still has a 100-amp panel. Is that a problem?',
            answer:
              'For a modern household, almost always yes. A 100-amp panel was adequate when these homes were built in the 1960s and 70s, but today\'s electrical loads — central AC, multiple computers, electric dryers, and especially EV chargers — regularly exceed that capacity. We recommend upgrading to a 200-amp panel, which also brings your service entrance up to current code. The upgrade requires coordination with SELCO for the meter disconnect, and we manage that entire process.',
          },
          {
            question: 'Does it matter that Shrewsbury uses SELCO instead of National Grid?',
            answer:
              'Yes, particularly for panel upgrades, solar installations, and EV chargers. SELCO has its own procedures for meter disconnects, net metering agreements, and interconnection standards that differ from National Grid. Their rates and demand structures are also different, which can affect decisions like what size EV charger to install. We\'re familiar with SELCO\'s requirements and coordinate directly with them on your behalf.',
          },
          {
            question: 'How quickly can you respond to an electrical emergency in Shrewsbury?',
            answer:
              'We\'re based in Worcester, about 15 minutes from most Shrewsbury neighborhoods. For true emergencies — an outage, burning smell, sparking panel, or exposed wiring — we offer 1-hour emergency response. Call us directly at (508) 793-8788 and you\'ll reach a licensed electrician, not a dispatcher.',
          },
        ]}
      />
    </>
  )
}
