import type { Metadata } from 'next'
import { ServicePageContent } from '@/components/pages/ServicePageContent'
import { breadcrumbSchema } from '@/lib/structuredData'

export const metadata: Metadata = {
  title: 'Residential Electrician Worcester MA | Home Electrical Services — Reece Group LLC',
  description:
    'Licensed master electrician serving Worcester homes since day one. Knob-and-tube replacement, panel upgrades, rewiring, and code-compliant repairs — no subcontractors, transparent pricing.',
  alternates: {
    canonical: 'https://reecegroupllc.com/services/residential-electrician-worcester',
  },
  openGraph: {
    title: 'Residential Electrician Worcester MA | Home Electrical Services — Reece Group LLC',
    description:
      'Licensed master electrician serving Worcester homes since day one. Knob-and-tube replacement, panel upgrades, rewiring, and code-compliant repairs — no subcontractors, transparent pricing.',
    type: 'website',
    url: 'https://reecegroupllc.com/services/residential-electrician-worcester',
    images: [{ url: '/reece-group-og.png', width: 1200, height: 630, alt: 'Reece Group LLC' }],
  },
  twitter: { card: 'summary_large_image', images: ['/reece-group-og.png'] },
}

export default function ResidentialElectricianPage() {
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
                name: 'Residential Electrician Worcester',
                url: '/services/residential-electrician-worcester',
              },
            ])
          ),
        }}
      />
      <ServicePageContent
        title="Residential Electrician in Worcester, MA"
        subtitle="A master electrician on every job — not an unsupervised apprentice."
        intro="Most of the homes we work in around Worcester were built between the 1920s and 1960s. That means knob-and-tube wiring, aluminum branch circuits, undersized 60-amp panels, and ungrounded two-prong outlets are things we deal with every single week. Whether you need a simple outlet replaced or a full rewire, Anthony Reece or a licensed journeyman does the work personally. We pull the permits, schedule the inspections, and make sure everything is up to current Massachusetts code."
        sections={[
          {
            heading: 'Outlets, Switches & Circuit Work',
            content:
              'Outdated outlets are one of the most common issues in older Worcester homes. If your kitchen or bathroom still has standard two-prong outlets, they almost certainly need GFCI protection — that is a code requirement, not a suggestion. Bedrooms built or renovated after 2014 require AFCI breakers under NEC 210.12, which protect against arc faults that cause house fires. We also add dedicated 20-amp circuits for home offices, window AC units, and kitchen appliances that keep tripping your breaker.',
            items: [
              'GFCI outlet installation for kitchens, bathrooms, garages, and exteriors',
              'AFCI breaker upgrades for bedrooms and living areas',
              'Dedicated circuits for home offices, workshops, and heavy appliances',
              'Two-prong to three-prong outlet upgrades with proper grounding',
            ],
          },
          {
            heading: 'Home Rewiring',
            content:
              'A full rewire sounds intimidating, but sometimes it is the safest and most cost-effective option — especially if your home still has knob-and-tube or cloth-insulated wiring. Insurance companies in Massachusetts are increasingly refusing to cover homes with these older systems. We run new Romex through existing walls and use fish tape and flex bits to minimize drywall damage. Most two-bedroom homes take three to five days. We protect your floors and furniture, patch any access holes, and leave the house cleaner than we found it.',
          },
          {
            heading: 'Lighting & Ceiling Fans',
            content:
              'Installing a ceiling fan is not the same as swapping a light fixture. Fans need an electrical box rated for the weight and vibration — a standard fixture box will eventually pull loose, and that is a serious hazard. We also handle recessed lighting layouts, under-cabinet LED installs, and dimmer switches. If you are adding recessed lights, we check your circuit loading first so you are not overloading an already-busy circuit with six new cans.',
            items: [
              'Ceiling fan installation with fan-rated junction boxes',
              'Recessed lighting design and installation',
              'LED upgrades and dimmer switch wiring',
              'Exterior and landscape lighting circuits',
            ],
          },
          {
            heading: 'Surge Protection & Storm Safety',
            content:
              'Worcester gets serious weather — ice storms, summer thunderstorms, and the occasional nor\'easter. A single power surge can destroy your HVAC system, refrigerator, or home electronics in a fraction of a second. Whole-house surge protectors install right at your electrical panel and absorb voltage spikes before they reach your devices. It is one of the most affordable things you can do to protect thousands of dollars in equipment. We install them during panel upgrades or as a standalone job.',
          },
          {
            heading: 'Smoke Detector Compliance',
            content:
              'Massachusetts has stricter smoke detector rules than most states. Under 527 CMR, you need hard-wired, interconnected smoke detectors — when one goes off, they all go off. Living areas require photoelectric detectors, and you need carbon monoxide detectors on every habitable level. If you are selling your home, the fire department will inspect these before closing. We bring homes into full compliance and handle the inspection coordination.',
          },
          {
            heading: 'Why a Licensed Electrician Matters',
            content:
              'Hiring a handyman for electrical work is one of the riskiest decisions a homeowner can make. In Massachusetts, all electrical work requires a permit and inspection — a handyman cannot legally pull one. Unpermitted work voids your insurance, creates liability when you sell, and often violates code in ways you cannot see behind the walls. At Reece Group, Anthony holds MA License #9036A1. Every job gets a permit, every job gets inspected, and you get the peace of mind that comes with knowing the work was done right.',
          },
        ]}
        faqs={[
          {
            question: 'How do I know if my home needs rewiring?',
            answer:
              'The clearest signs are knob-and-tube or cloth-insulated wiring visible in your attic or basement, frequent breaker trips, flickering lights, or discolored outlet covers that feel warm to the touch. If your home was built before 1960 and has never had electrical work updated, it is worth having us take a look. We do free assessments and will tell you honestly whether a full rewire is necessary or if targeted repairs will solve the problem.',
          },
          {
            question: 'Do I need a permit for small electrical jobs?',
            answer:
              'In Massachusetts, yes — almost all electrical work beyond changing a light bulb requires a permit. That includes adding outlets, swapping a panel breaker, or installing a ceiling fan where one did not exist before. We handle all permit applications and schedule the city inspection, so you do not have to deal with any of that.',
          },
          {
            question: 'How long does it take to upgrade a panel?',
            answer:
              'A standard 100-amp or 200-amp panel upgrade typically takes one day. We coordinate with your utility company to schedule the disconnect, swap the panel, and have power restored the same day. If your meter base also needs replacement, that can add a few hours but we plan for it upfront so there are no surprises.',
          },
          {
            question: 'What is the difference between GFCI and AFCI protection?',
            answer:
              'GFCI outlets protect against ground faults — the kind of shock you could get from a plugged-in appliance near water. They are required in kitchens, bathrooms, garages, and outdoor areas. AFCI breakers detect dangerous arc faults caused by damaged or deteriorating wiring, which are a leading cause of electrical fires. Current code requires AFCI protection in bedrooms, living rooms, and most other habitable rooms.',
          },
        ]}
        relatedServices={[
          { title: 'Panel Upgrades', href: '/services/panel-upgrade-worcester-ma' },
          { title: 'Safety Inspections', href: '/services/electrical-inspection-worcester' },
          { title: 'EV Charger Installation', href: '/services/ev-charger-installation-worcester' },
        ]}
      />
    </>
  )
}
