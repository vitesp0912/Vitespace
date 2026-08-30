'use client';

import SolutionPage from '@/components/solutions/SolutionPage';

const page = {
  index: '02',
  eyebrow: 'Grow',
  headline: 'We help more people',
  headlineMuted: 'find your business.',
  support:
    'A good website only helps if people can find it. We combine search, ads and marketing, online and offline, to reach the right customers.',
  image: '/GROW.png',
  listEyebrow: 'What we do',
  listTitle: 'Search, ads, and marketing that bring people in.',
  services: [
    'Search Engine Optimization',
    'Google Ads',
    'Meta Ads',
    'Brand & creative work',
    'Offline marketing',
  ],
  helpTitle: 'Found first. Then chosen.',
  help: [
    {
      title: 'Search that lasts',
      text: 'We set up the site and content so people who are already looking for what you do can find you on Google.',
    },
    {
      title: 'Ads with a clear job',
      text: 'Google and Meta ads are built to bring enquiries, not just traffic. You see what you spent and what came back.',
    },
    {
      title: 'A brand people trust',
      text: 'Look, words, and creative should feel like one business. That makes the next click easier to say yes to.',
    },
    {
      title: 'Online and offline',
      text: 'Some customers still find you on the street, in print, or through a partner. We plan those channels with the same care.',
    },
  ],
  related: [
    {
      index: '01',
      title: 'Build',
      line: 'Build the digital systems your business needs.',
      href: '/solutions/digital-infrastructure',
    },
    {
      index: '03',
      title: 'Automate',
      line: 'Systems that reduce repetitive work.',
      href: '/solutions/ai-automation-systems',
    },
  ],
};

export default function GrowthMarketingPage() {
  return <SolutionPage page={page} />;
}
