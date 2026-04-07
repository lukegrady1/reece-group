import type { Metadata } from 'next'
import { ServicePageContent } from '@/components/pages/ServicePageContent'
import { breadcrumbSchema } from '@/lib/structuredData'

export const metadata: Metadata = {
  title: 'Panel Upgrade Worcester MA | Electrical Panel Replacement — Reece Group LLC',
  description:
    'Licensed master electrician panel upgrades in Worcester, MA. 100A to 200A, Federal Pacific replacement, sub-panels. Permit-ready work with transparent pricing.',
  alternates: { canonical: 'https://reecegroupllc.com/services/panel-upgrade-worcester-ma' },
  openGraph: {
    title: 'Panel Upgrade Worcester MA | Electrical Panel Replacement — Reece Group LLC',
    description:
      'Licensed master electrician panel upgrades in Worcester, MA. 100A to 200A, Federal Pacific replacement, sub-panels. Permit-ready work with transparent pricing.',
    type: 'website',
    url: 'https://reecegroupllc.com/services/panel-upgrade-worcester-ma',
    images: [{ url: '/reece-group-og.png', width: 1200, height: 630, alt: 'Reece Group LLC' }],
  },
  twitter: { card: 'summary_large_image', images: ['/reece-group-og.png'] },
}

export default function PanelUpgradePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: 'Home', url: '/' },
              { name: 'Services', url: '/services' },
              { name: 'Panel Upgrade Worcester MA', url: '/services/panel-upgrade-worcester-ma' },
            ])
          ),
        }}
      />
      <ServicePageContent
        title="Panel Upgrade & Replacement in Worcester, MA"
        subtitle="Your electrical panel is the heart of your home's wiring. When it can't keep up, everything downstream suffers."
        intro="Most homes in Worcester were built with 60-amp or 100-amp electrical panels — enough for the 1960s, but nowhere close to what a modern household demands. Between central air, heat pumps, EV chargers, home offices, and kitchen renovations, older panels get pushed past their limits. When breakers trip constantly, or you can't add a single new circuit without something giving out, it's time for an upgrade. At Reece Group, Anthony Reece — a licensed master electrician — handles every panel upgrade personally. No subcontractors, no apprentice-only crews. You get the expertise you're paying for."
        sections={[
          {
            heading: 'Signs Your Panel Needs Replacement',
            content:
              'Not every electrical issue means you need a new panel, but certain signs are hard to ignore. If your panel still uses fuses instead of breakers, that alone is reason enough — fuse panels haven\'t been installed in decades, and finding replacement fuses is getting harder every year. Double-tapped breakers (two wires crammed into a single breaker slot) are another red flag. You might also notice a faint burning smell near the panel, warm or discolored breaker faces, or breakers that trip and won\'t reset. Any of these warrants a professional evaluation, not a DIY fix.',
            items: [
              'Federal Pacific or Zinsco brand panel — known fire hazards with breakers that fail to trip',
              'Fuse box instead of circuit breakers',
              'Breakers that trip frequently under normal household loads',
              'Burning smell, scorch marks, or warm spots on the panel cover',
              'Insurance company requesting panel replacement as a condition of coverage',
            ],
          },
          {
            heading: 'Federal Pacific & Zinsco Panels: Don\'t Wait',
            content:
              'If your home has a Federal Pacific Electric (FPE) Stab-Lok panel or a Zinsco panel, replacement isn\'t optional — it\'s urgent. Independent testing has shown that FPE breakers fail to trip up to 60% of the time during an overcurrent event. That means the breaker sits there while wires overheat behind your walls. Zinsco panels have a similar problem: the breakers fuse to the bus bar over time, making them impossible to trip even manually. Both brands are directly linked to house fires. Many insurance companies in Massachusetts now refuse to write or renew policies on homes with these panels. If you\'re buying or selling a home in Worcester and the inspection turns up either brand, expect the lender or insurer to require replacement before closing.',
          },
          {
            heading: 'The 100A to 200A Upgrade',
            content:
              'This is the most common panel upgrade we do. A 100-amp panel was standard for decades, but it simply can\'t power a modern home safely. A 200-amp upgrade gives you the capacity to run your existing loads comfortably plus room for additions like an EV charger (which alone can draw 40–50 amps), a heat pump, or a finished basement. The process involves replacing the panel box, the main breaker, and usually the meter base outside. In Worcester, we pull a permit through the city\'s building department, and the work gets inspected by the wire inspector before the utility reconnects your meter. National Grid (formerly Mass Electric) has specific requirements for meter base height, grounding, and service entrance cable — we handle all of that coordination so you don\'t have to chase down utility reps yourself.',
          },
          {
            heading: 'Sub-Panel Installations',
            content:
              'Sometimes you don\'t need a full panel swap — you need a sub-panel. This is common when you\'re finishing a basement, adding a detached garage or workshop, or installing a hot tub or pool equipment far from the main panel. A sub-panel is fed from your main panel and gives you a dedicated set of breakers for that area. It\'s cheaper than a full upgrade if your main panel still has available amperage, and it keeps your wire runs shorter and more efficient. We size sub-panels based on the actual loads you\'re planning to add, not some cookie-cutter guess. If your main panel is already maxed out, we\'ll tell you — and we\'ll explain why a main panel upgrade should come first.',
          },
          {
            heading: 'How Reece Group Handles Panel Work',
            content:
              'Here\'s what makes our approach different: Anthony Reece, a Massachusetts master electrician (License #9036A1), is on-site for every panel upgrade. He\'s not dispatching a van full of apprentices to figure it out — he\'s the one pulling the permit, sizing the service, landing the wires, and walking the inspector through the finished work. We give you a written quote before any work starts, broken down by labor, materials, and permit fees. No surprises. The typical panel upgrade takes one day. We coordinate the temporary disconnect with National Grid ahead of time so your power outage is as short as possible — usually four to six hours. For emergencies, like a panel that\'s actively sparking or a breaker that won\'t shut off, we offer 1-hour response anywhere in Worcester.',
          },
        ]}
        faqs={[
          {
            question: 'How long does a panel upgrade take, and will I be without power?',
            answer:
              'Most panel upgrades are completed in a single day — typically six to eight hours of on-site work. Your power will be off for a portion of that time (usually four to six hours) while we swap the panel and the utility reconnects the meter. We schedule the National Grid disconnect in advance and let you know exactly when to expect the outage so you can plan around it.',
          },
          {
            question: 'Do I need a permit for a panel upgrade in Worcester?',
            answer:
              'Yes. All electrical panel work in Worcester requires a permit from the city\'s building department, and the finished job must pass inspection by the municipal wire inspector. We handle the entire permit process — application, fees, scheduling the inspection — so you don\'t have to deal with city hall. Working without a permit is illegal and can void your homeowner\'s insurance.',
          },
          {
            question: 'How much does a 200-amp panel upgrade cost in Worcester?',
            answer:
              'It depends on the specifics of your home. A straightforward 100A-to-200A upgrade with a new meter base typically runs between $2,500 and $4,500. Factors that affect price include the condition of your existing wiring, whether the service entrance cable needs replacement, the distance from the meter to the panel, and any code corrections required. We provide a detailed written estimate before starting any work — no ballpark guesses over the phone.',
          },
          {
            question: 'Will my insurance company require me to replace my Federal Pacific panel?',
            answer:
              'Increasingly, yes. Many insurers in Massachusetts are either refusing to write new policies or declining to renew existing ones on homes with Federal Pacific or Zinsco panels. Even if your current insurer hasn\'t flagged it yet, a known hazard panel can complicate a future claim. If your home has one of these panels, replacement isn\'t just a safety decision — it\'s a financial one.',
          },
        ]}
        relatedServices={[
          { title: 'Residential Electrical', href: '/services/residential-electrician-worcester' },
          { title: 'EV Charger Installation', href: '/services/ev-charger-installation-worcester' },
          { title: 'Safety Inspections', href: '/services/electrical-inspection-worcester' },
        ]}
      />
    </>
  )
}
