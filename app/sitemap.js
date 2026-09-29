import { SITE, contentUpdated, indexablePages } from '@/lib/seo';

const priorities = {
  '/': 1,
  '/solutions': 0.9,
  '/contact': 0.7,
  '/about': 0.6,
};

const frequencies = {
  '/': 'weekly',
  '/solutions': 'weekly',
  '/about': 'monthly',
  '/contact': 'monthly',
};

export default function sitemap() {
  return indexablePages().map((page) => ({
    url: page.path === '/' ? SITE.url : `${SITE.url}${page.path}`,
    lastModified: contentUpdated,
    changeFrequency: frequencies[page.path] || 'monthly',
    priority: priorities[page.path] ?? 0.5,
  }));
}
