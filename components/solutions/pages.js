import { paths } from '@/components/solutions/paths';
import {
  IconAds,
  IconAutomation,
  IconBrand,
  IconChat,
  IconContent,
  IconMobile,
  IconPerformance,
  IconSeo,
  IconSoftware,
  IconSystem,
  IconVoice,
  IconWebApp,
  IconWebsite,
} from '@/components/solutions/icons';

export const productsPage = {
  index: '01',
  eyebrow: 'Digital products',
  headline: 'Websites, apps and software',
  headlineMuted: 'made for the way you work.',
  support:
    'From a site that brings people in to the software your team uses every day, we build around your goals, not a template.',
  visual: 'arch',
  offerEyebrow: 'What we build',
  offerTitle: 'Four ways in. One studio.',
  offerings: [
    {
      n: '01',
      title: 'Websites',
      line: 'Sites that turn attention into customers, built around how you sell.',
      Icon: IconWebsite,
    },
    {
      n: '02',
      title: 'Web applications',
      line: 'Logged-in tools and customer platforms that match real use, not a generic template.',
      Icon: IconWebApp,
    },
    {
      n: '03',
      title: 'Mobile applications',
      line: 'Thoughtful apps for iOS and Android when the work belongs in someone\'s pocket.',
      Icon: IconMobile,
    },
    {
      n: '04',
      title: 'Custom software',
      line: 'Software shaped around the way your business already works.',
      Icon: IconSoftware,
    },
  ],
  panel: {
    eyebrow: 'Business systems',
    title: 'The tools behind the work.',
    text: 'ERP systems, dashboards and internal software that make everyday work easier to manage.',
    visual: 'system',
  },
  helpTitle: 'Built around the business, not a theme.',
  help: [
    {
      title: 'Around your process',
      text: 'We learn how you sell, serve, and keep records, then design the site or software to match that.',
    },
    {
      title: 'One place to work from',
      text: 'Websites, apps, CRMs, and dashboards can sit together so your team is not jumping between five tools.',
    },
    {
      title: 'Ready to grow',
      text: 'The first version should ship and work. The next version should be easy to add.',
    },
    {
      title: 'Yours to run',
      text: 'You get something your team can actually use. We stay close after launch for fixes and the next piece.',
    },
  ],
  related: [
    { index: '02', title: 'Growth', line: 'Then make sure people find it.', href: paths.growth },
    { index: '03', title: 'Automation', line: 'Let the repetitive work run itself.', href: paths.automation },
  ],
};

export const growthPage = {
  index: '02',
  eyebrow: 'Growth',
  headline: 'Build something good.',
  headlineMuted: 'Then make sure people find it.',
  support: 'Search, ads, brand work, and the places people still find you offline.',
  visual: 'growth',
  offerEyebrow: 'What we do',
  offerTitle: 'Search, ads, brand, and the world outside the screen.',
  offerings: [
    { title: 'Search Engine Optimization', line: 'Get found by the people already looking.', Icon: IconSeo },
    { title: 'Google Ads', line: 'Reach people who are searching, and turn the click into an enquiry.', Icon: IconAds },
    { title: 'Meta Ads', line: 'Reach the right audience on the platforms they already use.', Icon: IconPerformance },
    { title: 'Brand & creative work', line: 'A look and feel people remember.', Icon: IconBrand },
    { title: 'Offline marketing', line: 'Print, signage, and the places people still find you in person.', Icon: IconContent },
  ],
  helpTitle: 'Found first. Then chosen.',
  help: [
    {
      title: 'Search that lasts',
      text: 'We set up the site and content so people who are already looking for what you do can find you.',
    },
    {
      title: 'Ads with a clear job',
      text: 'Ads are built to bring enquiries, not just traffic. You see what you spent and what came back.',
    },
    {
      title: 'A brand people trust',
      text: 'Look, words, and creative should feel like one business. That makes the next click easier.',
    },
    {
      title: 'Online and offline',
      text: 'Some customers still find you on the street or through a partner. We plan those channels with the same care.',
    },
  ],
  related: [
    { index: '01', title: 'Digital products', line: 'Websites, apps and software.', href: paths.products },
    { index: '03', title: 'Automation', line: 'Let the repetitive work run itself.', href: paths.automation },
  ],
};

export const automationPage = {
  index: '03',
  eyebrow: 'Automation',
  headline: 'Let the repetitive work',
  headlineMuted: 'run itself.',
  support: 'Practical automation for sales, support and everyday workflows. Added when it solves a real problem.',
  visual: 'automation',
  compact: true,
  offerEyebrow: 'What we add',
  offerTitle: 'Only when it earns its place.',
  offerings: [
    {
      title: 'AI automation',
      line: 'Workflows that handle the work that repeats, from follow-ups to hand-offs.',
      Icon: IconAutomation,
    },
    {
      title: 'AI chatbots',
      line: 'First replies that stay on-brief, any hour.',
      Icon: IconChat,
      href: paths.chatbots,
    },
    {
      title: 'AI voice agents',
      line: 'Calls answered, qualified, and passed to your team.',
      Icon: IconVoice,
      href: paths.voice,
      quiet: true,
    },
  ],
  helpTitle: 'Less chasing. More real work.',
  help: [
    {
      title: 'First replies, covered',
      text: 'Chat and voice can greet people, answer the usual questions, and pass a real lead to your team.',
    },
    {
      title: 'Follow-up that does not slip',
      text: 'Reminders and next steps can run on their own so nothing sits in an inbox for a week.',
    },
    {
      title: 'The same process, every time',
      text: 'Once a workflow is set, it runs the same way for every enquiry.',
    },
  ],
  related: [
    { index: '01', title: 'Digital products', line: 'Websites, apps and software.', href: paths.products },
    { index: '02', title: 'Growth', line: 'Then make sure people find it.', href: paths.growth },
  ],
};

export const chatbotsPage = {
  index: '03',
  eyebrow: 'Automation',
  headline: 'First replies',
  headlineMuted: 'that stay on-brief.',
  support: 'A chatbot that answers the usual questions, qualifies the person, and hands a real lead to your team.',
  visual: 'chat',
  compact: true,
  offerEyebrow: 'Where it lives',
  offerTitle: 'On the channels people already use.',
  offerings: [
    { title: 'Website', line: 'On your site, ready when someone is already looking.', Icon: IconWebsite },
    { title: 'WhatsApp', line: 'Where a lot of enquiries already start.', Icon: IconChat },
    { title: 'Instagram & Messenger', line: 'Same answers, same next step, on the apps you already run.', Icon: IconContent },
  ],
  helpTitle: 'Useful, not noisy.',
  help: [
    {
      title: 'The usual questions, handled',
      text: 'Hours, pricing, availability, and next steps, written in your voice.',
    },
    {
      title: 'A real lead, passed on',
      text: 'When someone is ready, your team gets the name, the need, and the context.',
    },
    {
      title: 'Tied to the rest of the work',
      text: 'It can sit with your CRM or inbox so nothing lives in a separate chat window.',
    },
  ],
  related: [
    { index: '03', title: 'Automation', line: 'The wider workflow around the bot.', href: paths.automation },
    { index: '03', title: 'Voice', line: 'The same idea, on the phone.', href: paths.voice },
  ],
};

export const voicePage = {
  index: '03',
  eyebrow: 'Automation',
  headline: 'Calls answered,',
  headlineMuted: 'then passed to your team.',
  support: 'A voice agent that picks up, answers the usual questions, and sends a real enquiry to someone who can close it.',
  visual: 'voice',
  compact: true,
  offerEyebrow: 'What it does',
  offerTitle: 'Inbound first. Outbound when it helps.',
  offerings: [
    { title: 'Inbound', line: 'Answers when you cannot. Qualifies. Books or passes the call on.', Icon: IconVoice },
    { title: 'Follow-up', line: 'Calls back the people who already reached out, so they are not left waiting.', Icon: IconAutomation },
    { title: 'Handoff', line: 'Your team gets the recording, the notes, and who to call next.', Icon: IconSystem },
  ],
  clips: {
    eyebrow: 'How it sounds',
    items: [
      {
        title: 'Real estate',
        note: 'Enquiry',
        line: 'A first call about a listing, qualified and booked.',
        src: '/realestate.mp3',
      },
      {
        title: 'Healthcare',
        note: 'Booking',
        line: 'An appointment request, confirmed without a front desk.',
        src: '/dentist.mp3',
      },
      {
        title: 'Reception',
        note: 'Routing',
        line: 'A general call, sorted and sent to the right person.',
        src: '/receptionist.mp3',
      },
    ],
  },
  helpTitle: 'A phone line that does not go quiet.',
  help: [
    {
      title: 'Someone always picks up',
      text: 'After hours and busy hours, the first reply still happens.',
    },
    {
      title: 'Your words, not a script from a box',
      text: 'We write the conversation around how you already talk to customers.',
    },
    {
      title: 'Tied to the calendar and the CRM',
      text: 'Bookings and notes land where your team already works.',
    },
  ],
  related: [
    { index: '03', title: 'Automation', line: 'The wider workflow around the call.', href: paths.automation },
    { index: '03', title: 'Chatbots', line: 'The same idea, in writing.', href: paths.chatbots },
  ],
};
