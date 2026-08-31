import { SITE, pages } from '@/lib/seo';

export default function sitemap() {
  const publicPages = [
    pages.home,
    pages.solutions,
    pages.about,
    pages.contact,
    pages.calling,
  ];

  const priorities = {
    '/': 1.0,
    '/solutions': 0.95,
    '/about': 0.7,
    '/contact': 0.85,
    '/ai-calling-agent': 0.75,
  };

  const frequencies = {
    '/': 'weekly',
    '/solutions': 'weekly',
    '/about': 'monthly',
    '/contact': 'monthly',
    '/ai-calling-agent': 'monthly',
  };

  return publicPages.map((page) => ({
    url: page.path === '/' ? SITE.url : `${SITE.url}${page.path}`,
    lastModified: new Date(),
    changeFrequency: frequencies[page.path],
    priority: priorities[page.path],
  }));
}
