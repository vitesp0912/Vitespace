const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://vitespace.com';

export const SITE = {
  name: 'Vitespace',
  url: siteUrl,
  email: 'support@vitespace.com',
  twitter: '@vitespace',
  locale: 'en_US',
  ogImage: '/vitespacehero.png',
  instagram: 'https://www.instagram.com/vitespace/',
};

export const faqs = [
  {
    q: 'How long does a project take?',
    a: 'Most websites and tools ship in 15 to 20 days. Bigger software takes longer. We tell you the date before we start.',
  },
  {
    q: 'What do you actually build?',
    a: 'We build business websites, mobile apps, custom software, ERPs, CRMs, dashboards and other digital systems. We also provide SEO, Google Ads, Meta Ads, offline marketing and automation.',
  },
  {
    q: 'Do we own the work?',
    a: 'Yes. Once the agreed project is fully paid for, you own the final website, software, design assets and business data created for your project, subject to any third-party licences.',
  },
  {
    q: 'What do you need from us?',
    a: "Mostly your business knowledge. We'll guide you through the information, content, access and decisions we need from your side before and during the project.",
  },
  {
    q: 'Can you help after launch?',
    a: 'Yes. We provide ongoing support, updates, improvements, marketing and additional development based on what your business needs.',
  },
  {
    q: 'How much does it cost?',
    a: 'It depends on the work. After a short call we send a clear number. No hourly fog.',
  },
];

const noIndexRobots = {
  index: false,
  follow: false,
  nocache: true,
  googleBot: {
    index: false,
    follow: false,
    noimageindex: true,
    nosnippet: true,
  },
};

export const pages = {
  home: {
    path: '/',
    title: 'Vitespace | Websites, Apps and Software for Business',
    absolute: true,
    description:
      'Vitespace designs and builds websites, apps and custom software that help businesses attract customers, run day-to-day work and grow. Tell us what you need.',
    imageAlt: 'Vitespace, a studio that builds websites, apps and software for businesses',
    breadcrumbs: [{ name: 'Home', path: '/' }],
  },
  solutions: {
    path: '/solutions',
    title: 'Websites, Apps, Marketing and Automation',
    description:
      'See Vitespace websites, apps, custom software, SEO, ads and automation in one place. Pick the work your business needs and start with a clear next step.',
    imageAlt: 'Vitespace solutions for websites, growth and automation',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Solutions', path: '/solutions' },
    ],
    service: {
      name: 'Digital products, growth and automation',
      description: 'Websites, apps, custom software, marketing and practical automation for growing businesses.',
    },
  },
  products: {
    path: '/solutions/digital-products',
    title: 'Website, App and Custom Software Development',
    description:
      'Vitespace designs and builds websites, web apps, mobile apps and custom software around how your business works, from the first page to internal tools.',
    imageAlt: 'Custom websites, apps and software built by Vitespace',
    robots: noIndexRobots,
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Solutions', path: '/solutions' },
      { name: 'Digital products', path: '/solutions/digital-products' },
    ],
    service: {
      name: 'Website, app and custom software development',
      description: 'Websites, web applications, mobile apps, custom software and business systems.',
    },
  },
  growth: {
    path: '/solutions/growth',
    title: 'SEO, Google Ads and Marketing for Business',
    description:
      'Get found by the right people. Vitespace runs SEO, Google Ads, Meta Ads, brand work and offline marketing so more customers find you and get in touch.',
    imageAlt: 'SEO, ads and marketing work from Vitespace',
    robots: noIndexRobots,
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Solutions', path: '/solutions' },
      { name: 'Growth', path: '/solutions/growth' },
    ],
    service: {
      name: 'SEO, ads and growth marketing',
      description: 'Search engine optimization, Google Ads, Meta Ads, brand and creative, and offline marketing.',
    },
  },
  automation: {
    path: '/solutions/automation',
    title: 'Business Automation, Chatbots and Voice',
    description:
      'Vitespace automates the sales, support and follow-up work your team repeats every day, with chatbots and voice agents when they actually help a customer.',
    imageAlt: 'Business automation, chatbots and voice agents from Vitespace',
    robots: noIndexRobots,
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Solutions', path: '/solutions' },
      { name: 'Automation', path: '/solutions/automation' },
    ],
    service: {
      name: 'Business automation',
      description: 'Automation for sales, support and everyday tasks, including chatbots and voice agents.',
    },
  },
  chatbots: {
    path: '/solutions/chatbots',
    title: 'AI Chatbots for Websites and WhatsApp Enquiries',
    description:
      'Vitespace builds chatbots that answer common questions, guide visitors and capture enquiries on your website, WhatsApp and social apps, in your voice.',
    imageAlt: 'Website and WhatsApp chatbots built by Vitespace',
    robots: noIndexRobots,
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Solutions', path: '/solutions' },
      { name: 'Chatbots', path: '/solutions/chatbots' },
    ],
    service: {
      name: 'AI chatbots',
      description: 'Chatbots that answer questions, guide visitors and capture enquiries.',
    },
  },
  voice: {
    path: '/solutions/voice',
    title: 'AI Voice Agents for Calls and Enquiries',
    description:
      'Vitespace builds voice agents that answer calls, qualify enquiries and pass the right ones to your team, so a good call is never missed after hours.',
    imageAlt: 'AI voice agents for business calls built by Vitespace',
    robots: noIndexRobots,
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Solutions', path: '/solutions' },
      { name: 'Voice agents', path: '/solutions/voice' },
    ],
    service: {
      name: 'AI voice agents',
      description: 'Voice agents that answer calls, qualify enquiries and hand off to your team.',
    },
  },
  about: {
    path: '/about',
    title: 'About the Studio That Builds for Businesses',
    description:
      'Vitespace is a digital studio that designs and builds websites, apps, software, marketing and automation for businesses that want to grow, without the jargon.',
    imageAlt: 'About Vitespace, a digital studio for growing businesses',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'About', path: '/about' },
    ],
  },
  contact: {
    path: '/contact',
    title: 'Start a Website, App or Software Project',
    description:
      'Tell Vitespace what you need. We come back with a clear recommendation, what it would take, and the next step to start a website, app or software project.',
    imageAlt: 'Contact Vitespace to start a project',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Contact', path: '/contact' },
    ],
  },
  calling: {
    path: '/ai-calling-agent',
    title: 'AI Calling Agent for Leads and Bookings',
    description:
      'An AI calling agent from Vitespace that answers calls, qualifies leads, books appointments and updates your CRM, including evenings and weekends.',
    imageAlt: 'AI calling agent for leads and bookings from Vitespace',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'AI calling agent', path: '/ai-calling-agent' },
    ],
    service: {
      name: 'AI calling agent',
      description: 'A voice agent that answers calls, qualifies leads and books appointments.',
    },
  },
  work: {
    path: '/our-work',
    title: 'Work',
    description: 'Selected work from Vitespace.',
    imageAlt: 'Selected work from Vitespace',
    robots: noIndexRobots,
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Work', path: '/our-work' },
    ],
  },
};

function fullTitle(page) {
  return page.absolute ? page.title : `${page.title} | ${SITE.name}`;
}

function absoluteUrl(path) {
  if (!path || path === '/') return SITE.url;
  return `${SITE.url}${path}`;
}

export function createMetadata(page, { root = false } = {}) {
  const url = absoluteUrl(page.path);
  const title = fullTitle(page);

  return {
    ...(root
      ? {}
      : {
          title: page.absolute
            ? { absolute: page.title }
            : { absolute: `${page.title} | ${SITE.name}` },
        }),
    description: page.description,
    applicationName: SITE.name,
    authors: [{ name: SITE.name, url: SITE.url }],
    creator: SITE.name,
    publisher: SITE.name,
    alternates: {
      canonical: page.path,
    },
    ...(page.robots ? { robots: page.robots } : {}),
    openGraph: {
      type: 'website',
      locale: SITE.locale,
      url,
      siteName: SITE.name,
      title,
      description: page.description,
      images: [
        {
          url: SITE.ogImage,
          width: 1200,
          height: 630,
          alt: page.imageAlt || title,
          type: 'image/png',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: page.description,
      creator: SITE.twitter,
      site: SITE.twitter,
      images: [SITE.ogImage],
    },
  };
}

export function organizationId() {
  return `${SITE.url}/#organization`;
}

export function websiteId() {
  return `${SITE.url}/#website`;
}

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': ['Organization', 'ProfessionalService'],
    '@id': organizationId(),
    name: SITE.name,
    url: SITE.url,
    logo: {
      '@type': 'ImageObject',
      url: `${SITE.url}/logo.png`,
    },
    image: `${SITE.url}${SITE.ogImage}`,
    description:
      'Vitespace designs and builds websites, apps, custom software, marketing and automation for growing businesses.',
    email: SITE.email,
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'IN',
    },
    areaServed: {
      '@type': 'Country',
      name: 'India',
    },
    sameAs: [SITE.instagram, 'https://twitter.com/vitespace', 'https://dribbble.com/vitespace'],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'sales',
      email: SITE.email,
      availableLanguage: 'English',
    },
  };
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': websiteId(),
    name: SITE.name,
    url: SITE.url,
    inLanguage: 'en',
    publisher: { '@id': organizationId() },
    description: pages.home.description,
  };
}

export function faqSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  };
}

export function pageSchemas(page) {
  const url = absoluteUrl(page.path);
  const title = fullTitle(page);
  const graph = [];

  graph.push({
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${url}#webpage`,
    url,
    name: title,
    description: page.description,
    inLanguage: 'en',
    isPartOf: { '@id': websiteId() },
    about: { '@id': organizationId() },
    breadcrumb: { '@id': `${url}#breadcrumb` },
  });

  graph.push({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    '@id': `${url}#breadcrumb`,
    itemListElement: page.breadcrumbs.map((crumb, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: crumb.name,
      item: absoluteUrl(crumb.path),
    })),
  });

  if (page.service) {
    graph.push({
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: page.service.name,
      description: page.service.description,
      url,
      provider: { '@id': organizationId() },
      areaServed: { '@type': 'Country', name: 'India' },
    });
  }

  return graph;
}
