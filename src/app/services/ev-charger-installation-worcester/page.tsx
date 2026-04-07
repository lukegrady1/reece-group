import type { Metadata } from 'next'
import { ServicePageContent } from '@/components/pages/ServicePageContent'
import { breadcrumbSchema } from '@/lib/structuredData'

export const metadata: Metadata = {
  title: 'EV Charger Installation Worcester MA | Level 2 Home Charging — Reece Group LLC',
  description:
    'Licensed master electrician EV charger installation in Worcester, MA. Level 2 240V charging, panel upgrades, and MassSave rebate guidance. MA License #9036A1.',
  alternates: {
    canonical: 'https://reecegroupllc.com/services/ev-charger-installation-worcester',
  },
  openGraph: {
    title: 'EV Charger Installation Worcester MA | Level 2 Home Charging — Reece Group LLC',
    description:
      'Licensed master electrician EV charger installation in Worcester, MA. Level 2 240V charging, panel upgrades, and MassSave rebate guidance. MA License #9036A1.',
    type: 'website',
    url: 'https://reecegroupllc.com/services/ev-charger-installation-worcester',
    images: [
      { url: '/reece-group-og.png', width: 1200, height: 630, alt: 'Reece Group LLC' },
    ],
  },
  twitter: { card: 'summary_large_image', images: ['/reece-group-og.png'] },
}

export default function EVChargerPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: 'Home', url: '/' },
              { name: 'Services', url: '/services' },
              {
                name: 'EV Charger Installation Worcester',
                url: '/services/ev-charger-installation-worcester',
              },
            ])
          ),
        }}
      />
      <ServicePageContent
        title="EV Charger Installation in Worcester, MA"
        subtitle="Dedicated 240V circuits and Level 2 charger installations by a master electrician — no subcontractors, ever."
        intro="If you just bought an EV or you're thinking about it, the charging situation at home matters more than most people expect. Plugging into a standard wall outlet works in a pinch, but it's painfully slow. We install dedicated Level 2 charging circuits throughout Worcester and Central Massachusetts, and a master electrician handles every job personally. That means your installation is done right the first time — correct wire sizing, proper breaker protection, and a clean permit close-out with the City of Worcester."
        sections={[
          {
            heading: 'Level 1 vs Level 2: What You Actually Need',
            content:
              'Level 1 charging uses the 120V outlet already in your garage. It adds roughly 3 to 5 miles of range per hour. If you drive 40 miles a day, you need 8 to 13 hours plugged in just to break even. For a lot of people, that math doesn\'t work. Level 2 charging runs on a dedicated 240V/50A circuit and delivers 25 to 30 miles of range per hour. Most drivers go from empty to full overnight. That\'s the setup we install, and it\'s what we recommend for anyone using their EV as a daily driver.',
          },
          {
            heading: 'What the Installation Involves',
            content:
              'An EV charger installation isn\'t just plugging in a box. We run a dedicated 240V circuit from your electrical panel to the charging location. That means properly sized wire — typically 6 AWG copper for runs under 50 feet on a 50A circuit, stepping up to 4 AWG for longer distances to account for voltage drop. You can choose a NEMA 14-50 outlet, which lets you unplug and take your charger if you move, or a hardwired unit for a cleaner permanent installation. We handle the full scope:',
            items: [
              'Load calculation on your existing panel to confirm capacity',
              'Dedicated 50A double-pole breaker installation',
              'Wire run from panel to charging location (garage, carport, or driveway)',
              'Mounting and connecting the charging unit',
              'Permit filing and inspection coordination with the City of Worcester',
            ],
          },
          {
            heading: 'Do You Need a Panel Upgrade?',
            content:
              'This is the question that catches people off guard. A Level 2 charger draws 40A continuous on a 50A circuit — that\'s a significant load. If your home has a 100A or 150A panel that\'s already running central air, an electric dryer, and an electric range, you may not have room for another 50A breaker. We do a load calculation before every install. If your panel is at or near capacity, we\'ll recommend a panel upgrade to 200A service or adding a sub-panel before the charger goes in. It costs more upfront, but it\'s the only way to do it safely and to code. We won\'t cut corners on this.',
          },
          {
            heading: 'MassSave Rebates and Massachusetts Incentives',
            content:
              'Massachusetts has some of the better EV incentives in the country. MassSave offers rebates for residential EV charger installation through participating utilities, including National Grid and Eversource — both of which serve Worcester. The federal government also offers a tax credit of up to 30% on charger equipment and installation costs (up to $1,000 for residential) through the Alternative Fuel Vehicle Refueling Property Credit. We help customers understand which rebates apply and make sure the installation meets program requirements so you don\'t leave money on the table.',
          },
          {
            heading: 'Outdoor vs Garage Installation',
            content:
              'Not every home has a garage, and that\'s fine. We install outdoor EV chargers regularly. The key differences are weatherproofing and code compliance. Outdoor installations require a NEMA 4 or NEMA 4X rated enclosure to handle rain, snow, and Worcester winters. NEC 625.54 requires GFCI protection for all EV charging equipment — most modern Level 2 units have this built in, but we verify it on every install. For outdoor runs, we use weatherproof conduit and junction boxes rated for the exposure. Garage installs are more straightforward but still need proper circuit protection and correct mounting height.',
          },
          {
            heading: 'Charger Brands We Work With',
            content:
              'We\'re not a dealer for any specific brand, which means we\'ll give you honest advice about what works. We install and have experience with all the major residential and commercial units:',
            items: [
              'Tesla Wall Connector — required for maximum charge speed on Tesla vehicles, hardwired installation',
              'ChargePoint Home Flex — adjustable amperage (16A to 50A), works well when panel capacity is tight',
              'Emporia Smart Charger — solid budget option with energy monitoring built in',
              'JuiceBox — good app-based scheduling and utility time-of-use integration',
              'Grizzl-E — simple, durable, and built for cold climates like ours',
            ],
          },
          {
            heading: 'Commercial EV Charging for Businesses',
            content:
              'If you own commercial property in Worcester, adding EV charging stations is increasingly a smart investment — for tenants, employees, and customers. Commercial installs are more complex than residential. We handle multi-unit installations with load management systems that prevent your building\'s electrical service from being overwhelmed. ADA compliance matters too: at least one charging station must be on an accessible route with proper clearances. We work with property managers and business owners to design systems that scale as demand grows, including conduit and panel capacity for future stations.',
          },
          {
            heading: 'Permits and Inspections in Worcester',
            content:
              'Worcester requires an electrical permit for EV charger installation. We pull the permit, schedule the inspection, and handle any follow-up. The process is straightforward when the work is done correctly the first time — which is why having a licensed master electrician matters. We carry MA Electrical License #9036A1 and are fully insured. Typical permit turnaround in Worcester is a few business days, and inspection is usually scheduled within a week of completion.',
          },
        ]}
        faqs={[
          {
            question: 'How long does an EV charger installation take?',
            answer:
              'Most residential installations take 3 to 5 hours, assuming your panel has capacity and the wire run is straightforward. If a panel upgrade is needed, that adds a separate half-day of work. We\'ll give you a clear timeline during the estimate.',
          },
          {
            question: 'Can I install an EV charger if I have an older home with a 100A panel?',
            answer:
              'It depends on your current electrical load. A 100A panel with minimal demand — gas heat, gas dryer, gas stove — might have room for a 50A EV circuit. But if you have electric appliances already using most of that capacity, you\'ll need a panel upgrade to 200A first. We run the numbers during our site visit so there are no surprises.',
          },
          {
            question: 'What\'s the difference between a NEMA 14-50 outlet and a hardwired charger?',
            answer:
              'A NEMA 14-50 outlet lets you plug in a portable charger and take it with you if you move — good for renters or people who might relocate. A hardwired installation connects the charger directly to the circuit with no plug, which looks cleaner and is required by some charger manufacturers like Tesla for their Wall Connector at full power. Both options use the same circuit and deliver the same charging speed.',
          },
          {
            question: 'Do you handle the permit and inspection?',
            answer:
              'Yes. We pull the electrical permit with the City of Worcester, coordinate the inspection, and make sure everything passes. You don\'t have to deal with any of the paperwork or scheduling.',
          },
        ]}
        relatedServices={[
          { title: 'Panel Upgrades', href: '/services/panel-upgrade-worcester-ma' },
          {
            title: 'Residential Electrical',
            href: '/services/residential-electrician-worcester',
          },
          {
            title: 'Commercial Electrical',
            href: '/services/commercial-electrician-worcester',
          },
        ]}
      />
    </>
  )
}
