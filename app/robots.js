import { SITE } from '@/lib/seo';

export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/dump',
          '/dump/',
          '/our-work',
          '/our-work/',
          '/solutions/digital-products',
          '/solutions/growth',
          '/solutions/automation',
          '/solutions/chatbots',
          '/solutions/voice',
          '/ai-calling-agent',
          '/ai-calling-agent/',
        ],
      },
    ],
    sitemap: `${SITE.url}/sitemap.xml`,
    host: SITE.url,
  };
}
