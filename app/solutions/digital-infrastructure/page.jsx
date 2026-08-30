'use client';

import SolutionPage from '@/components/solutions/SolutionPage';

const page = {
  index: '01',
  eyebrow: 'Build',
  headline: 'Build the digital systems',
  headlineMuted: 'your business needs.',
  support:
    'From your first website to the software your team uses every day, we build around how you actually work, not a fixed template.',
  image: '/BUILD.png',
  listEyebrow: 'What we build',
  listTitle: 'Sites and systems made for how you work.',
  services: [
    'Business websites',
    'Web & mobile apps',
    'Custom software systems',
    'ERPs & CRMs',
    'Internal dashboards and tools',
  ],
  helpTitle: 'Built around the business, not a theme.',
  help: [
    {
      title: 'Around your process',
      text: 'We learn how you sell, serve, and keep records, then design the site or software to match that, not the other way around.',
    },
    {
      title: 'One place to work from',
      text: 'Websites, apps, CRMs, and dashboards can sit together so your team is not jumping between five tools that do not talk.',
    },
    {
      title: 'Ready to grow',
      text: 'The first version should ship and work. The next version should be easy to add when you need more pages, users, or features.',
    },
    {
      title: 'Yours to run',
      text: 'You get something your team can actually use. We stay close after launch for fixes, updates, and the next piece.',
    },
  ],
  related: [
    {
      index: '02',
      title: 'Grow',
      line: 'We help more people find your business.',
      href: '/solutions/growth-marketing',
    },
    {
      index: '03',
      title: 'Automate',
      line: 'Systems that reduce repetitive work.',
      href: '/solutions/ai-automation-systems',
    },
  ],
};

export default function DigitalInfrastructurePage() {
  return <SolutionPage page={page} />;
}
