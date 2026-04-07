import type { Metadata } from 'next'
import { LocationPageContent } from '@/components/pages/LocationPageContent'
import { breadcrumbSchema } from '@/lib/structuredData'

export const metadata: Metadata = {
  title: 'Electrician Holden MA | Licensed Master Electrician — Reece Group LLC',
  description:
    'Licensed master electrician serving Holden, MA. Generator installs, panel upgrades, storm damage repair & full-service electrical for older homes. Call (508) 793-8788.',
  alternates: { canonical: 'https://reecegroupllc.com/electrician-holden-ma' },
  openGraph: {
    title: 'Electrician Holden MA | Licensed Master Electrician — Reece Group LLC',
    description:
      'Licensed master electrician serving Holden, MA. Generator installs, panel upgrades, storm damage repair & full-service electrical for older homes. Call (508) 793-8788.',
    type: 'website',
    url: 'https://reecegroupllc.com/electrician-holden-ma',
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

export default function HoldenPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: 'Home', url: '/' },
              { name: 'Services', url: '/services' },
              { name: 'Electrician Holden MA', url: '/electrician-holden-ma' },
            ])
          ),
        }}
      />
      <LocationPageContent
        city="Holden"
        state="MA"
        headline="Licensed Electrician Serving Holden, MA"
        intro="Holden sits just northwest of Worcester — close enough that we're usually on-site within 20 minutes, but far enough out that you need an electrician who understands rural residential wiring, long service runs, and the reality of living under a heavy tree canopy. Reece Group LLC has been handling electrical work for Holden homeowners and businesses since we opened our doors. Every job is led by a master electrician — no subcontractors, no apprentices working unsupervised."
        sections={[
          {
            heading: 'Why Holden Homes Need Specialized Electrical Work',
            content:
              'Holden\'s housing stock tells the story of the town itself. In neighborhoods like Jefferson and Chaffins, you\'ll find colonials and capes from the 1940s and 50s still running on original 100-amp panels with fuse boxes. Head out toward the reservoir or along Route 31, and properties sit on larger lots with electrical service runs of 200 feet or more from the road — runs that need to be sized correctly or you\'ll see voltage drop that damages appliances and dims lights. The newer subdivisions off Salisbury Street have modern wiring, but even those homes are now 20-plus years old and starting to need attention. We know this town\'s building stock because we work in it regularly, not because we read about it on a map.',
          },
          {
            heading: 'Generator Installation & Transfer Switches',
            content:
              'If there\'s one service that defines electrical work in Holden, it\'s whole-house generator installation. The town\'s dense tree cover means that when a nor\'easter or ice storm rolls through, Holden loses power — and it can stay out for days while National Grid works through downed lines on narrow, tree-lined roads. A properly sized standby generator with an automatic transfer switch keeps your heat, refrigeration, sump pump, and well pump running without you lifting a finger. We handle the full scope: load calculation, concrete pad, gas line coordination, transfer switch installation, and the electrical permit through Holden\'s building department. We also install manual transfer switches and interlock kits for homeowners who want a more affordable option with a portable generator.',
            items: [
              'Whole-house standby generators (Generac, Kohler, Briggs & Stratton)',
              'Automatic and manual transfer switches',
              'Load calculations sized to your home\'s actual demand',
              'Coordination with gas utility for fuel line installation',
              'Full permitting through Holden\'s building department',
            ],
          },
          {
            heading: 'Navigating Holden\'s Permit Process',
            content:
              'Holden has its own building department and wire inspector — electrical permits are not handled through Worcester. Any work beyond a simple fixture swap requires a permit and inspection. We pull permits directly with Holden\'s building department, coordinate the inspection schedule with the town\'s wire inspector, and make sure the work is signed off before we consider the job complete. This is especially important for panel upgrades, generator installations, and any work that involves opening up walls in older homes. Homeowners shouldn\'t have to navigate this process themselves — that\'s part of what you\'re hiring us for.',
          },
          {
            heading: 'Storm Damage & Emergency Electrical Response',
            content:
              'When a storm takes out power or drops a tree limb across your service entrance cable, you need someone who can respond fast and knows what they\'re looking at. Our 1-hour emergency response covers Holden — we\'re only about ten miles from our Worcester base. We handle downed service entrance repairs, damaged meter bases, surge damage to panels and equipment, and temporary power setups to keep you safe until permanent repairs are complete. If you\'re on a well and your power goes out, that means no water — we understand the urgency and prioritize accordingly.',
            items: [
              'Downed service entrance cable repair',
              'Storm surge and lightning damage assessment',
              'Temporary power for well pumps and critical systems',
              'Coordination with National Grid for service restoration',
            ],
          },
        ]}
        services={[
          {
            title: 'Panel Upgrades',
            href: '/services/panel-upgrade-worcester-ma',
          },
          {
            title: 'EV Charger Installation',
            href: '/services/ev-charger-installation-worcester',
          },
          {
            title: 'Residential Electrical',
            href: '/services/residential-electrician-worcester',
          },
          {
            title: 'Commercial Electrical',
            href: '/services/commercial-electrician-worcester',
          },
          {
            title: 'Safety Inspections',
            href: '/services/electrical-inspection-worcester',
          },
          {
            title: 'Emergency Electrician',
            href: '/services/emergency-electrician-worcester',
          },
        ]}
        faqs={[
          {
            question:
              'Do I need a permit for electrical work in Holden?',
            answer:
              'Yes. Holden has its own building department and wire inspector, separate from Worcester. Any work beyond basic fixture replacements — panel upgrades, new circuits, generator installations, EV charger wiring — requires an electrical permit and inspection. We handle the entire permit process so you don\'t have to deal with the paperwork or scheduling.',
          },
          {
            question:
              'How long does it take you to get to Holden for an emergency?',
            answer:
              'We\'re based in Worcester, about ten miles from Holden center. In an emergency, we\'re typically on-site within an hour — often faster during normal business hours. If a storm has knocked out your power and you\'re on a well or have a sump pump situation, let us know when you call so we can prioritize.',
          },
          {
            question:
              'Is a whole-house generator worth it in Holden?',
            answer:
              'Holden is one of the towns where it genuinely makes sense. The heavy tree canopy and National Grid\'s overhead lines mean extended outages during ice storms and nor\'easters are not unusual. If you rely on a well pump for water, have a sump pump keeping your basement dry, or just want to keep the heat on during a three-day outage in January, a standby generator pays for itself in peace of mind. We\'ll do a load calculation specific to your home so you\'re not oversized or undersized.',
          },
          {
            question:
              'My home in Holden still has a fuse box. Do I need to upgrade?',
            answer:
              'A fuse box isn\'t automatically dangerous, but it\'s a sign your electrical system is decades old and likely undersized for modern demand. Many older homes in Jefferson, Chaffins, and along the main corridors still have 100-amp fuse panels. If you\'re tripping fuses regularly, want to add an EV charger or central air, or your insurance company is asking questions, it\'s time to upgrade to a modern 200-amp breaker panel. We\'ll inspect what you have and give you a straight answer on whether it needs replacement.',
          },
        ]}
      />
    </>
  )
}
