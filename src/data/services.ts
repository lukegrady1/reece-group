export interface Service {
  id: string
  number: string
  title: string
  shortDescription: string
  fullDescription: string
  features: string[]
  seoKeywords: string[]
}

export const services: Service[] = [
  {
    id: 'residential',
    number: '01',
    title: 'Residential Electrical',
    shortDescription: 'Complete home electrical services for Worcester-area homeowners, from simple outlet repairs to full rewires. We specialize in updating older homes with outdated wiring to meet modern safety standards and electrical demands.',
    fullDescription: 'Worcester is full of homes built between the 1920s and 1960s, and we see the same problems over and over: knob-and-tube wiring hidden in walls, ungrounded two-prong outlets, Federal Pacific panels that should have been replaced decades ago, and circuits that trip every time you run a microwave and a hair dryer at the same time. These are not cosmetic issues — they are fire and shock hazards that get worse with age. We handle everything from adding a few outlets in a kitchen remodel to complete whole-house rewires. Every job is done by Anthony Reece, a master electrician — not a journeyman, not a helper, not a subcontractor. That means the person pulling your permits, doing the work, and standing behind it is the same person. We run dedicated circuits for home offices, install GFCI protection in kitchens and bathrooms, add AFCI breakers where code requires them, and make sure your grounding and bonding are correct. If your home still has a 60-amp fuse box or aluminum branch wiring, we can bring it up to current NEC standards while keeping disruption to your daily life as minimal as possible.',
    features: [
      'Outlet & switch installation',
      'Home rewiring & circuit additions',
      'Ceiling fan & light fixture installation',
      'Recessed LED lighting',
      'GFCI & AFCI upgrades',
    ],
    seoKeywords: ['residential electrician Worcester MA', 'home electrical repair Worcester MA', 'house rewiring Worcester MA', 'electrician near me Worcester'],
  },
  {
    id: 'commercial',
    number: '02',
    title: 'Commercial Electrical',
    shortDescription: 'Electrical installation, maintenance, and upgrades for Worcester-area businesses. From tenant fit-outs in the Canal District to three-phase power for Route 9 industrial spaces, we keep your operations running without unnecessary downtime.',
    fullDescription: 'Commercial electrical work has different stakes than residential — when your power is out, your business is losing money. We get that, which is why we schedule around your operating hours whenever possible and communicate clearly about what to expect before we start. We handle tenant improvement buildouts, new construction wiring, three-phase power installations, and ongoing maintenance for offices, restaurants, retail stores, and light industrial facilities across Worcester County. Whether you are opening a new space in the Canal District, renovating a downtown office building, or upgrading an older property on Route 9, we handle the full scope: load calculations, panel sizing, lighting layouts, dedicated circuits for commercial equipment, and emergency circuits where required. We pull all permits and coordinate directly with the Worcester building department and your general contractor. Anthony Reece personally oversees every commercial project, so you have one point of contact from bid to final inspection. We also handle code compliance upgrades for businesses that have received violations or need to meet updated NEC requirements for insurance or lease purposes.',
    features: [
      'Commercial wiring & panel work',
      'Office & retail fit-outs',
      'Lighting design & installation',
      'Code compliance upgrades',
      'Tenant improvement work',
    ],
    seoKeywords: ['commercial electrician Worcester MA', 'business electrical contractor Worcester MA', 'tenant improvement electrician Worcester', 'three-phase power Worcester MA'],
  },
  {
    id: 'panel-upgrades',
    number: '03',
    title: 'Panel Upgrades & Replacements',
    shortDescription: 'Upgrade your electrical panel from 100A to 200A or replace a hazardous Federal Pacific or Zinsco panel. Essential before adding EV chargers, central AC, or other high-draw equipment to your home.',
    fullDescription: 'Your electrical panel is the heart of your home\'s electrical system, and if it cannot handle the load you are putting on it, you get tripped breakers, flickering lights, and in the worst case, a fire inside your wall. The most common upgrade we do is taking a 100-amp panel to 200 amps, which gives you the capacity for modern demands like EV chargers, central air conditioning, heat pumps, and home offices with heavy equipment. If you have a Federal Pacific Stab-Lok or Zinsco panel, replacement is not optional — these panels have well-documented failure rates where breakers do not trip during overloads, and most insurance companies either will not cover them or charge higher premiums. We handle the full process: load calculation, permit application with the City of Worcester, installation, and scheduling the electrical inspection. The utility company coordinates the meter disconnect and reconnect, and we manage that timeline so you are not left without power longer than necessary. A panel upgrade typically takes one day, and we leave your circuits labeled clearly so you actually know what each breaker controls. If your home only needs a sub-panel for a garage or workshop, we do that too.',
    features: [
      '100A to 200A+ upgrades',
      'Federal Pacific & Zinsco replacements',
      'Sub-panel installations',
      'Breaker replacements',
      'Load calculations',
    ],
    seoKeywords: ['panel upgrade Worcester MA', 'electrical panel replacement Worcester MA', '200 amp panel upgrade Worcester', 'Federal Pacific panel replacement Worcester MA'],
  },
  {
    id: 'ev-charger',
    number: '04',
    title: 'EV Charger Installation',
    shortDescription: 'Professional Level 2 EV charger installation with dedicated 240V circuits. We work with all major charger brands and handle permits, panel capacity assessment, and MassSave rebate paperwork.',
    fullDescription: 'A Level 2 charger runs on a dedicated 240-volt, 50-amp circuit and will fully charge most EVs overnight — compared to the 24-plus hours you would wait on a standard 120-volt outlet. The installation itself is straightforward, but the electrical work behind it matters. We start by evaluating your panel capacity, because if you are running a 100-amp panel that is already near its limit, you will need a panel upgrade before adding a 50-amp circuit. We run the dedicated circuit from your panel to the charger location using appropriately sized copper wire, install a NEMA 14-50 outlet or hardwire the unit directly depending on the charger model, and mount everything to code. We work with all major brands — Tesla Wall Connector, ChargePoint, Grizzl-E, JuiceBox, Emporia, and others. For outdoor installations, we use weatherproof enclosures and GFCI-protected circuits rated for wet locations. Massachusetts residents can take advantage of MassSave rebates and utility incentives that offset a significant portion of the installation cost — we help you identify which programs apply and handle the required documentation. We also install commercial EV charging stations for businesses, apartment complexes, and municipal parking areas.',
    features: [
      'Level 2 (240V) charger installation',
      'All major EV brands supported',
      'Permit & inspection handling',
      'Outdoor weatherproof installations',
      'Commercial EV charging stations',
    ],
    seoKeywords: ['EV charger installation Worcester MA', 'electric car charger electrician Worcester MA', 'Tesla Wall Connector installation Worcester', 'Level 2 charger installer Worcester MA'],
  },
  {
    id: 'lighting',
    number: '05',
    title: 'Lighting Installation',
    shortDescription: 'Residential and commercial lighting design and installation, including LED retrofits, recessed lighting, landscape lighting, and smart lighting systems. We help you pick the right fixtures and get them wired properly.',
    fullDescription: 'Good lighting changes how a space looks and feels, but the electrical work behind it has to be done right or you end up with flickering LEDs, buzzing dimmers, and junction boxes buried behind drywall with no access. We handle the full range — recessed lighting, pendant fixtures, under-cabinet lights, track lighting, landscape and outdoor lighting, and commercial LED retrofits. In older Worcester homes, recessed lighting can be tricky because of limited ceiling depth, balloon framing, or plaster-and-lath ceilings. We know how to work with these conditions and choose the right low-profile housings and IC-rated cans for insulation contact. For outdoor and landscape lighting, we install weather-rated fixtures built to handle New England winters — path lights, uplighting for trees and architectural features, and security floodlights on dedicated circuits with timers or photocells. On the commercial side, LED retrofits are one of the fastest-payback upgrades a business can make. We replace outdated fluorescent troffers and HID fixtures with LED equivalents that cut energy use by 50-70 percent and last years longer. We also install smart lighting systems like Lutron Caseta and other platforms that give you app and voice control over every zone in your home or office.',
    features: [
      'Recessed & track lighting',
      'Landscape & outdoor lighting',
      'Under-cabinet & accent lighting',
      'Commercial LED retrofits',
      'Smart lighting systems',
    ],
    seoKeywords: ['lighting installation Worcester MA', 'electrician lighting upgrade Worcester MA', 'LED retrofit Worcester MA', 'recessed lighting installation Worcester'],
  },
  {
    id: 'inspections',
    number: '06',
    title: 'Safety Inspections & Code Compliance',
    shortDescription: 'Detailed electrical inspections for home buyers, insurance requirements, and code compliance. We go far beyond what a general home inspector checks and provide a written report of every issue found.',
    fullDescription: 'A general home inspector spends maybe five minutes at your electrical panel and checks a few outlets. That is not an electrical inspection. We open the panel, examine every breaker and wire connection, check for double-tapped breakers, aluminum wiring, signs of overheating, and improper grounding. We test every accessible outlet for correct wiring polarity and ground integrity, verify GFCI protection in kitchens, bathrooms, garages, and exteriors, and check AFCI protection where current code requires it. For Worcester home buyers, this is critical — many homes on the market have deferred electrical maintenance going back decades, and the purchase price should reflect what it will cost to bring the system up to a safe, code-compliant condition. We also handle insurance compliance inspections when your carrier requires documentation that your electrical system meets current standards. Massachusetts law under 527 CMR 31.00 has specific requirements for smoke and carbon monoxide detectors — interconnected, in every bedroom, on every level, and within 10 feet of sleeping areas. We verify compliance and install or relocate detectors as needed. After every inspection, you get a written report detailing what we found, what needs immediate attention, and what can wait, with cost estimates so there are no surprises.',
    features: [
      'Pre-purchase home inspections',
      'Insurance compliance reports',
      'GFCI & AFCI testing',
      'Smoke detector compliance',
      'NEC code violation remediation',
    ],
    seoKeywords: ['electrical inspection Worcester MA', 'electrical code compliance Worcester MA', 'home buyer electrical inspection Worcester', 'smoke detector compliance Massachusetts'],
  },
]
