import type { Metadata } from 'next'
import { ServicePageContent } from '@/components/pages/ServicePageContent'
import { breadcrumbSchema } from '@/lib/structuredData'

export const metadata: Metadata = {
  title: 'Lighting Installation Worcester MA | LED, Recessed & Outdoor — Reece Group LLC',
  description:
    'Master electrician lighting installation in Worcester, MA. Recessed lighting, LED retrofits, outdoor fixtures, and smart systems — IC-rated, code-compliant, no subcontractors. (508) 793-8788.',
  alternates: {
    canonical: 'https://reecegroupllc.com/services/lighting-installation-worcester',
  },
  openGraph: {
    title: 'Lighting Installation Worcester MA | LED, Recessed & Outdoor — Reece Group LLC',
    description:
      'Master electrician lighting installation in Worcester, MA. Recessed lighting, LED retrofits, outdoor fixtures, and smart systems — IC-rated, code-compliant, no subcontractors. (508) 793-8788.',
    type: 'website',
    url: 'https://reecegroupllc.com/services/lighting-installation-worcester',
    images: [{ url: '/reece-group-og.png', width: 1200, height: 630, alt: 'Reece Group LLC' }],
  },
  twitter: { card: 'summary_large_image', images: ['/reece-group-og.png'] },
}

export default function LightingInstallationPage() {
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
                name: 'Lighting Installation Worcester',
                url: '/services/lighting-installation-worcester',
              },
            ])
          ),
        }}
      />
      <ServicePageContent
        title="Lighting Installation in Worcester, MA"
        subtitle="From recessed cans to commercial LED retrofits — wired right the first time."
        intro="Lighting is one of the most common reasons people call us. Maybe the kitchen feels dark and dated, or the parking lot floods every time it rains because the old HID fixtures finally died. Whatever the project, Reece Group handles the full scope — fixture selection guidance, circuit work, installation, and dimmer programming. Anthony Reece or a licensed journeyman does the work personally. No subcontractors, no helpers winging it alone. We pull the permits, schedule the inspections, and make sure every connection is solid and code-compliant."
        sections={[
          {
            heading: 'Recessed Lighting',
            content:
              'Recessed lighting is far and away our most requested lighting job. The basics: you are choosing between new construction housings (which mount to joists before drywall goes up) and remodel housings (which clip into a hole cut in the finished ceiling). For almost every retrofit job in an existing home, you are using remodel cans. The housings must be IC-rated — meaning safe for direct contact with insulation — which is essentially mandatory in Worcester homes where blown-in or batt insulation sits right on top of the ceiling plane. A non-IC-rated can in contact with insulation is a fire hazard, full stop. For the fixtures themselves, integrated LED recessed lights have mostly replaced the old setup of a housing plus a separate trim and bulb. They run cooler, last 50,000-plus hours, and dim smoothly when paired with a compatible dimmer. If you already have older 5- or 6-inch cans, LED retrofit kits snap into the existing housing and give you the same result without tearing anything out. Spacing matters more than people think. The general rule is to space recessed lights at roughly half the ceiling height — so in an 8-foot room, about 4 feet apart. Four-inch cans work well for focused task lighting and tighter spacing in kitchens, while 6-inch cans give broader coverage for living rooms and basements.',
            items: [
              'IC-rated housings for insulation contact (required in most Worcester ceilings)',
              'LED retrofit kits for upgrading existing 5-inch and 6-inch cans',
              'Proper spacing layouts for even, shadow-free coverage',
              'Compatible LED dimmers to eliminate flicker and buzzing',
            ],
          },
          {
            heading: 'Older Worcester Homes: Plaster, Lath & Balloon Framing',
            content:
              'A lot of the homes we work in were built between 1900 and 1950, and that changes how we approach recessed lighting. Plaster-and-lath ceilings are harder and messier to cut than drywall. The plaster cracks if you are not careful, and the lath strips behind it can grab a hole saw and make a mess fast. We use oscillating multi-tools to cut clean openings without damaging the surrounding ceiling. Balloon-frame construction is the bigger concern. In balloon framing, the wall studs run continuously from the sill plate to the roof — there are no horizontal fire stops between floors like modern platform framing has. When you cut a hole in a ceiling or wall for a recessed light or junction box, you can open up a cavity that runs the full height of the house. If a fire starts on the first floor, it races straight up that open cavity to the attic. We install fire-stopping material around every penetration to close those pathways, which is both a code requirement and common sense. Some rooms in older homes have as little as 3 to 4 inches of ceiling depth between the plaster and the floor joists above. Standard recessed housings will not fit. We use slim or ultra-thin LED panels that mount flush and only need about an inch of clearance, connected to a remote junction box tucked between the joists.',
          },
          {
            heading: 'Outdoor & Landscape Lighting',
            content:
              'Worcester gets dark early for months at a stretch, and icy walkways are a liability problem waiting to happen. Good outdoor lighting is functional before it is decorative. We install path lights along walkways and driveways, accent uplighting for facades and landscaping, security floodlights with motion sensors, and post lights at the end of driveways. Every outdoor fixture must be wet-rated — not damp-rated, which is only suitable for covered porches and similar protected locations. A wet-rated fixture is sealed to handle direct exposure to rain, snow, and ice. All outdoor receptacles and lighting circuits require GFCI protection per NEC 210.8. For landscape lighting, low-voltage systems using a 12-volt transformer are the most common approach. The transformer steps your 120V household power down to 12V, which means the wire running through your garden beds is not a shock hazard and does not need to be buried as deep as line-voltage cable. We mount the transformer near an outdoor GFCI outlet, run the low-voltage cable to each fixture, and set up a timer or photocell so the lights come on at dusk automatically.',
            items: [
              'Wet-rated fixtures for direct exposure to New England weather',
              'GFCI-protected outdoor circuits per NEC requirements',
              'Low-voltage 12V landscape systems with transformer and timer',
              'Motion-sensor security floodlights on dedicated circuits',
            ],
          },
          {
            heading: 'Commercial LED Retrofits',
            content:
              'If your office or warehouse still runs fluorescent T8 or T12 tubes, switching to LED is one of the fastest-payback upgrades you can make. Energy savings typically run 50 to 70 percent, and LED tubes last three to five times longer than fluorescents, which means fewer maintenance calls for burnt-out lamps in high ceilings. There are three types of LED tube replacements, and the differences matter. Type A tubes are ballast-compatible — you just pull out the fluorescent tube and drop in the LED tube. Easy swap, but the existing ballast still draws some power and will eventually fail, at which point you are paying for another service call. Type B tubes bypass the ballast entirely. We rewire the tombstones (lamp holders) for direct line voltage, remove the ballast, and the LED tube runs independently. This is the approach we recommend for most commercial jobs because it eliminates the ballast as a failure point and maximizes energy savings. Type C tubes use an external LED driver, similar to how a ballast works but purpose-built for LEDs. These offer the best dimming control and are worth the extra cost in spaces where you need precise light levels. For new installations, 2x4 LED flat panels are replacing fluorescent troffers entirely. They drop right into the existing grid ceiling and produce better, more even light with no flicker.',
            items: [
              'Type A, B, and C LED tube options explained and installed',
              'Ballast bypass (Type B) for maximum efficiency and reliability',
              'LED flat panel replacements for drop-ceiling troffers',
              'Occupancy sensors and daylight harvesting for energy code compliance',
            ],
          },
          {
            heading: 'Under-Cabinet & Accent Lighting',
            content:
              'Under-cabinet lighting in kitchens is one of those upgrades that makes a bigger difference than people expect. LED tape light (also called strip light) is the most popular option — it produces even, continuous light across the full length of the cabinet. Puck lights are the alternative, but they create brighter hot spots with darker gaps between them. We hardwire under-cabinet lights to a dedicated switch rather than using plug-in transformers that clutter your counter and leave visible cords. If there is already a switched circuit nearby, we can often tap into it without running a new home run back to the panel. Color temperature is worth thinking about. For kitchens and dining areas, 2700K gives a warm, incandescent-like glow. If the lights are primarily for task work — food prep, reading recipes — 3000K to 3500K is a better choice because it is brighter and more neutral without feeling clinical. For commercial settings like retail displays or offices, 4000K and above provides a clean, daylight-quality light.',
          },
          {
            heading: 'Smart Lighting Systems',
            content:
              'Smart lighting means different things to different people, so here is what actually works well long-term. Smart switches are almost always a better investment than smart bulbs. A smart switch controls any bulb you put in the fixture, works with standard wall plates, and still functions as a normal switch if your WiFi goes down. Smart bulbs lose their programming when someone flips the wall switch off, and you end up telling everyone in the house not to touch the switch. We install Lutron Caseta most often for residential projects — it uses its own radio frequency protocol instead of WiFi, which makes it more reliable and eliminates the smart-home problem of overloading your router with dozens of devices. For larger homes or new construction, Lutron RadioRA 3 offers whole-house control with keypads, occupancy sensors, and shade integration. One important detail for older Worcester homes: most smart switches require a neutral wire at the switch box. Homes built before the 1980s often do not have a neutral wire pulled to the switch — the circuit runs power through the switch to the fixture and back, with no neutral in the box. We can run a neutral wire to the switch location, or in some cases, use the few smart switches on the market that work without one.',
          },
          {
            heading: 'Ceiling Fan Installation',
            content:
              'Ceiling fans come up in almost every lighting conversation. The critical thing most people do not realize is that a standard octagon electrical box is not rated for a ceiling fan. Fans are heavy and they vibrate — a regular fixture box will loosen over time and can eventually pull free from the ceiling, dropping a 30-pound fan on whoever is below. Fan-rated boxes are reinforced and mount with a brace bar that spans between two joists, distributing the weight and handling the vibration. If your existing box is not fan-rated, we replace it before the fan goes up. If there is no electrical box in the location where you want the fan, we cut in a new fan-rated box, run the circuit, and install a wall switch — or a combination fan-and-light switch if the fan has a separate light kit.',
          },
        ]}
        faqs={[
          {
            question: 'How many recessed lights do I need in a room?',
            answer:
              'It depends on the room size, ceiling height, and the purpose of the lighting. A general guideline is to space recessed lights about half the ceiling height apart — so roughly 4 feet apart in a room with 8-foot ceilings. A typical 10x12 kitchen usually needs six 4-inch cans for good task lighting. A 12x14 living room might use four to six 6-inch cans for general illumination. We lay out the plan before cutting any holes so you can see the spacing and adjust if needed.',
          },
          {
            question: 'Can I add recessed lights to a room with plaster ceilings?',
            answer:
              'Yes, and we do it regularly in Worcester homes. Plaster-and-lath ceilings require more careful cutting than drywall — we use oscillating tools instead of hole saws to get clean openings without cracking the surrounding plaster. The bigger consideration is ceiling depth. If the space between your plaster ceiling and the joists above is shallow, we use ultra-thin LED panels that only need about an inch of clearance instead of standard recessed housings that need 6 to 8 inches.',
          },
          {
            question: 'Do smart switches work in older homes without neutral wires?',
            answer:
              'Most smart switches require a neutral wire at the switch box, and many pre-1980s Worcester homes were wired without one at the switch location. You have two options: we can run a neutral wire from the nearest junction box to the switch, which is the most reliable fix, or you can use one of the few smart switches designed to work without a neutral — Lutron Caseta dimmers being the most common example. We will check your switch boxes and recommend the best approach for your situation.',
          },
          {
            question: 'Is it worth replacing fluorescent lights with LED in my business?',
            answer:
              'Almost always, yes. LED replacements cut energy use by 50 to 70 percent and last three to five times longer than fluorescent tubes. For a typical small office running 40 fluorescent fixtures, the energy savings usually pay back the installation cost within 18 to 24 months. We recommend Type B (direct wire, ballast bypass) LED tubes for most commercial spaces because they eliminate the ballast as a maintenance item and maximize the efficiency gains.',
          },
        ]}
        relatedServices={[
          { title: 'Residential Electrical', href: '/services/residential-electrician-worcester' },
          { title: 'Commercial Electrical', href: '/services/commercial-electrician-worcester' },
          { title: 'Safety Inspections', href: '/services/electrical-inspection-worcester' },
        ]}
      />
    </>
  )
}
