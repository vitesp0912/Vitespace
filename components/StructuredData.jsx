export default function StructuredData() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://vitespace.com';
  
  // Organization Schema
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'VITESPACE',
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
    description: 'Websites, apps, and custom software that help businesses attract customers, streamline operations, and grow.',
    email: 'support@vitespace.com',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'IN',
      addressLocality: 'India',
    },
    sameAs: [
      'https://instagram.com/vitespace',
      'https://twitter.com/vitespace',
      'https://dribbble.com/vitespace',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      email: 'support@vitespace.com',
      availableLanguage: 'English',
    },
  };

  // Service Schema
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Digital Solutions',
    provider: {
      '@type': 'Organization',
      name: 'VITESPACE',
    },
    areaServed: {
      '@type': 'Country',
      name: 'India',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Digital Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Website Development',
            description: 'Custom-built websites with CMS, e-commerce capabilities, and conversion-focused design',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'SEO Services',
            description: 'Technical audits, keyword strategy, and ongoing optimization to rank higher',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Performance Marketing',
            description: 'Google Ads, Facebook/Instagram campaigns, and conversion tracking',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'CRM & Automation',
            description: 'Sales pipeline setup, customer database systems, workflow automation, and performance dashboards',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'AI & Rule-Based Chatbots',
            description: 'WhatsApp bots, website chatbots, lead qualification, and support automation',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Customised Software Solutions',
            description: 'Tailored software solutions for unique business workflows',
          },
        },
      ],
    },
  };

  // WebSite Schema
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'VITESPACE',
    url: siteUrl,
    description:
      'Websites, apps, and software built to grow your business. Vitespace designs and builds digital solutions that help you attract customers and run your business better.',
    inLanguage: 'en',
    publisher: {
      '@type': 'Organization',
      name: 'VITESPACE',
      url: siteUrl,
    },
  };

  // BreadcrumbList Schema
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: siteUrl,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}

