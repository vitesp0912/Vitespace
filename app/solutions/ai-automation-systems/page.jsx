'use client';

import SolutionPage from '@/components/solutions/SolutionPage';

const page = {
  index: '03',
  eyebrow: 'Automate',
  headline: 'Systems that reduce',
  headlineMuted: 'repetitive work.',
  support:
    'Not every task needs a person behind it. We build practical AI for routine conversations, follow-ups and workflows, so your team can focus on what matters.',
  image: '/AUTOMATE.png',
  listEyebrow: 'What we build',
  listTitle: 'Systems that handle the work that repeats.',
  services: [
    'AI chatbots',
    'Voice agents',
    'Automated workflows',
    'Lead qualification',
    'Business process automation',
  ],
  helpTitle: 'Less chasing. More real work.',
  help: [
    {
      title: 'First replies, covered',
      text: 'Chat and voice can greet people, answer the usual questions, and pass a real lead to your team.',
    },
    {
      title: 'Follow-up that does not slip',
      text: 'Reminders, status updates, and next steps can run on their own so nothing sits in an inbox for a week.',
    },
    {
      title: 'Leads, sorted',
      text: 'We qualify who is ready to talk and who needs more information, so your team spends time on the right people.',
    },
    {
      title: 'The same process, every time',
      text: 'Once a workflow is set, it runs the same way for every enquiry. Fewer missed steps as you grow.',
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
      index: '02',
      title: 'Grow',
      line: 'We help more people find your business.',
      href: '/solutions/growth-marketing',
    },
  ],
};

export default function AIAutomationSystemsPage() {
  return <SolutionPage page={page} />;
}
