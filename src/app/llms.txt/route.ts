import { services } from '@/data/services'
import { faqs } from '@/data/faqs'
import { posts } from '@/data/posts'

// /llms.txt (llmstxt.org): a plain-markdown summary of the business for AI
// assistants and AI search, built from the same data as the pages.
export const dynamic = 'force-static'

const SITE = 'https://reecegroupllc.com'

// Same routes as servicePageLinks in components/sections/ServicesGrid.tsx.
const servicePageLinks: Record<string, string> = {
  residential: '/services/residential-electrician-worcester',
  commercial: '/services/commercial-electrician-worcester',
  'panel-upgrades': '/services/panel-upgrade-worcester-ma',
  'ev-charger': '/services/ev-charger-installation-worcester',
  lighting: '/services/lighting-installation-worcester',
  inspections: '/services/electrical-inspection-worcester',
}

// The license number on the site is still a placeholder (see the TODO in
// Footer.tsx), so the FAQ that quotes it stays out of this file until it's real.
const publicFaqs = faqs.filter((f) => !f.a.includes('9036A1'))

export function GET() {
  const lines = [
    '# Reece Group LLC',
    '',
    '> Licensed electrical contractor based in Worcester, MA, founded by master electrician Anthony Reece. Residential and commercial electrical work, panel upgrades, EV charger installation, lighting and electrical safety inspections across Massachusetts, with free written estimates and 1-hour emergency response.',
    '',
    '## Business details',
    '',
    '- Name: Reece Group LLC',
    '- Address: 10 Greenfield St, Worcester, MA 01604',
    '- Phone: (508) 793-8788',
    '- Email: reecegroupllc@gmail.com',
    '- Hours: Monday–Friday, 6 AM – 10 PM',
    '- Service area: all of Massachusetts; most often Worcester, Shrewsbury, Holden, Auburn, Millbury, Grafton, Northborough, Westborough and Spencer',
    '',
    '## Services',
    '',
    ...services.map(
      (s) => `- [${s.title}](${SITE}${servicePageLinks[s.id] ?? '/services'}): ${s.shortDescription}`,
    ),
    `- [Emergency Electrician](${SITE}/services/emergency-electrician-worcester): 1-hour emergency response in the Worcester area.`,
    '',
    '## Service areas',
    '',
    `- [Electrician in Shrewsbury, MA](${SITE}/electrician-shrewsbury-ma)`,
    `- [Electrician in Holden, MA](${SITE}/electrician-holden-ma)`,
    `- [Electrician in Auburn, MA](${SITE}/electrician-auburn-ma)`,
    '',
    '## Frequently asked questions',
    '',
    ...publicFaqs.flatMap((f) => [`### ${f.q}`, '', f.a, '']),
    '## Blog',
    '',
    ...posts.map((p) => `- [${p.title}](${SITE}/blog/${p.slug}) (${p.date}): ${p.excerpt}`),
    '',
    '## Pages',
    '',
    `- [Home](${SITE}/)`,
    `- [Services](${SITE}/services)`,
    `- [About](${SITE}/about)`,
    `- [Reviews](${SITE}/reviews)`,
    `- [Blog](${SITE}/blog)`,
    `- [Contact and free estimate](${SITE}/contact)`,
    '',
  ]

  return new Response(lines.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  })
}
