const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://vitespace.com';

export const contentUpdated = '2026-09-29';

export const SITE = {
  name: 'Vitespace',
  legalName: 'Vitespace Private Limited',
  url: siteUrl,
  email: 'support@vitespace.com',
  twitter: '@vitespace',
  locale: 'en_IN',
  ogImage: '/og.png',
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

const offers = [
  {
    name: 'Website, app and custom software development',
    path: '/solutions#digital-products',
  },
  {
    name: 'SEO, Google Ads and Meta ads',
    path: '/solutions#growth',
  },
  {
    name: 'Business automation',
    path: '/solutions#automation',
  },
  {
    name: 'AI chatbots',
    path: '/solutions#automation',
  },
  {
    name: 'AI voice agents',
    path: '/solutions#automation',
  },
  {
    name: 'AI calling agent',
    path: '/ai-calling-agent',
  },
];

export const pages = {
  home: {
    path: '/',
    title: 'Software, Websites & Marketing That Move Business Forward | Vitespace',
    absolute: true,
    description:
      'Build digital products, attract the right customers and streamline your business with websites, software, digital marketing and AI automation.',
    imageAlt: 'Vitespace, a studio that builds websites, apps and custom software',
    schemaType: 'WebPage',
    breadcrumbs: [{ name: 'Home', path: '/' }],
  },
  solutions: {
    path: '/solutions',
    title: 'Website, Software, SEO, Ads & AI Automation Solutions | Vitespace',
    absolute: true,
    description:
      'Explore website development, custom software, mobile apps, SEO, Google Ads, Meta Ads and AI automation built around your business needs.',
    imageAlt: 'Vitespace services for websites, marketing and automation',
    schemaType: 'CollectionPage',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Solutions', path: '/solutions' },
    ],
    itemList: offers,
  },
  products: {
    path: '/solutions/digital-products',
    title: 'Custom Website, App and Software Development',
    description:
      'Business websites, web apps, iOS and Android apps, and custom software, including ERPs, CRMs and dashboards. Built around how your company works.',
    imageAlt: 'Custom websites, apps and software built by Vitespace',
    robots: noIndexRobots,
    schemaType: 'WebPage',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Solutions', path: '/solutions' },
      { name: 'Digital products', path: '/solutions/digital-products' },
    ],
    service: {
      name: 'Website, app and custom software development',
      serviceType: 'Custom software development',
      description:
        'Business websites, web applications, iOS and Android apps, custom software, ERPs, CRMs, dashboards and internal tools.',
    },
  },
  growth: {
    path: '/solutions/growth',
    title: 'SEO, Google Ads and Meta Ads for Business',
    description:
      'Show up when people search for a business like yours. Vitespace runs SEO, Google Ads, Facebook and Instagram ads, brand work and offline marketing.',
    imageAlt: 'SEO, Google Ads and marketing from Vitespace',
    robots: noIndexRobots,
    schemaType: 'WebPage',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Solutions', path: '/solutions' },
      { name: 'Growth', path: '/solutions/growth' },
    ],
    service: {
      name: 'SEO, Google Ads and Meta ads',
      serviceType: 'Search engine optimization and advertising',
      description:
        'Search engine optimization, Google Ads, Facebook and Instagram ads, brand and creative, and offline marketing.',
    },
  },
  automation: {
    path: '/solutions/automation',
    title: 'AI Business Automation for Sales and Support',
    description:
      'Automate the sales, support and follow-up work your team repeats. Vitespace adds AI chatbots and voice agents only when they help a real customer.',
    imageAlt: 'Business automation from Vitespace',
    robots: noIndexRobots,
    schemaType: 'WebPage',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Solutions', path: '/solutions' },
      { name: 'Automation', path: '/solutions/automation' },
    ],
    service: {
      name: 'Business automation',
      serviceType: 'Business process automation',
      description: 'Automation for sales, support and everyday tasks, including AI chatbots and AI voice agents.',
    },
  },
  chatbots: {
    path: '/solutions/chatbots',
    title: 'AI Chatbot for Your Website and WhatsApp',
    description:
      'An AI chatbot that answers common questions, guides visitors and captures enquiries on your website, WhatsApp, Instagram and Messenger.',
    imageAlt: 'Website and WhatsApp chatbots built by Vitespace',
    robots: noIndexRobots,
    schemaType: 'WebPage',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Solutions', path: '/solutions' },
      { name: 'Chatbots', path: '/solutions/chatbots' },
    ],
    service: {
      name: 'AI chatbot for website and WhatsApp',
      serviceType: 'Chatbot development',
      description:
        'AI chatbots that answer questions, guide visitors and capture enquiries on a website, WhatsApp, Instagram and Messenger.',
    },
  },
  voice: {
    path: '/solutions/voice',
    title: 'AI Voice Agent for Business Phone Calls',
    description:
      'An AI voice agent that answers business calls, qualifies the enquiry and passes the right people to your team, including evenings and weekends.',
    imageAlt: 'AI voice agents for business calls built by Vitespace',
    robots: noIndexRobots,
    schemaType: 'WebPage',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Solutions', path: '/solutions' },
      { name: 'Voice agents', path: '/solutions/voice' },
    ],
    service: {
      name: 'AI voice agent',
      serviceType: 'Voice agent',
      description: 'Voice agents that answer calls, qualify enquiries and hand the right calls to your team.',
    },
  },
  about: {
    path: '/about',
    title: 'We Build Technology That Helps Businesses Grow | Vitespace',
    absolute: true,
    description:
      'We bring software development, digital marketing and AI automation together to build better digital experiences and stronger growth systems.',
    imageAlt: 'About Vitespace, software, marketing and automation in one studio',
    schemaType: 'AboutPage',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'About', path: '/about' },
    ],
  },
  contact: {
    path: '/contact',
    title: 'Contact Us | Website, Software & Marketing Services | Vitespace',
    absolute: true,
    description:
      "Have a website, app, software or marketing project in mind? Tell us what you need and let's find the right solution for your business.",
    imageAlt: 'Contact Vitespace to start a website or software project',
    schemaType: 'ContactPage',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Contact', path: '/contact' },
    ],
  },
  calling: {
    path: '/ai-calling-agent',
    title: 'AI Calling Agent for Leads and Bookings',
    description:
      'An AI calling agent that answers inbound calls, follows up leads and books appointments 24/7, then logs every conversation for your team.',
    imageAlt: 'AI calling agent for leads and appointment booking from Vitespace',
    schemaType: 'WebPage',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'AI calling agent', path: '/ai-calling-agent' },
    ],
    service: {
      name: 'AI calling agent',
      serviceType: 'AI calling agent',
      description:
        'A calling agent that answers inbound calls, follows up leads, qualifies enquiries and books appointments.',
    },
  },
  work: {
    path: '/our-work',
    title: 'Selected Work',
    description: 'Selected work from Vitespace. This page is not part of the public site.',
    imageAlt: 'Selected work from Vitespace',
    robots: noIndexRobots,
    schemaType: 'WebPage',
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

export function indexablePages() {
  return Object.values(pages).filter((page) => !page.robots);
}

export function createMetadata(page, { root = false } = {}) {
  const url = absoluteUrl(page.path);
  const title = fullTitle(page);

  return {
    ...(root
      ? {}
      : {
          title: { absolute: title },
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
    legalName: SITE.legalName,
    alternateName: 'VITESPACE',
    url: SITE.url,
    logo: {
      '@type': 'ImageObject',
      url: `${SITE.url}/logo.png`,
      width: 946,
      height: 1015,
    },
    image: `${SITE.url}${SITE.ogImage}`,
    description:
      'Vitespace builds websites, apps and custom software, and runs SEO, ads and automation for growing businesses.',
    email: SITE.email,
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'IN',
    },
    areaServed: ['India', 'Worldwide'],
    knowsAbout: offers.map((offer) => offer.name),
    sameAs: [SITE.instagram],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'sales',
      email: SITE.email,
      availableLanguage: ['English'],
      areaServed: ['India', 'Worldwide'],
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Vitespace services',
      itemListElement: offers.map((offer, index) => ({
        '@type': 'Offer',
        position: index + 1,
        itemOffered: {
          '@type': 'Service',
          name: offer.name,
          url: absoluteUrl(offer.path),
        },
      })),
    },
  };
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': websiteId(),
    name: SITE.name,
    alternateName: 'VITESPACE',
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
    '@type': page.schemaType || 'WebPage',
    '@id': `${url}#webpage`,
    url,
    name: title,
    description: page.description,
    inLanguage: 'en',
    isPartOf: { '@id': websiteId() },
    about: { '@id': organizationId() },
    breadcrumb: { '@id': `${url}#breadcrumb` },
    primaryImageOfPage: {
      '@type': 'ImageObject',
      url: `${SITE.url}${SITE.ogImage}`,
      width: 1200,
      height: 630,
    },
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
      '@id': `${url}#service`,
      name: page.service.name,
      serviceType: page.service.serviceType,
      description: page.service.description,
      url,
      provider: { '@id': organizationId() },
      areaServed: ['India', 'Worldwide'],
    });
  }

  if (page.itemList) {
    graph.push({
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      '@id': `${url}#services`,
      name: 'Vitespace services',
      itemListElement: page.itemList.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        url: absoluteUrl(item.path),
      })),
    });
  }

  return graph;
}
