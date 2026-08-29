export default function sitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://vitespace.com';
  const currentDate = new Date().toISOString();

  const routes = [
    '/',
    '/our-work',
    '/solutions',
    '/solutions/ai-voice-agents',
    '/solutions/ai-chatbots',
    '/solutions/ai-automation-systems',
    '/solutions/digital-infrastructure',
    '/solutions/growth-marketing',
    '/about',
    '/contact',
  ];

  const priorities = {
    '/': 1.0,
    '/our-work': 0.9,
    '/solutions': 0.95,
    '/solutions/ai-voice-agents': 0.9,
    '/solutions/ai-chatbots': 0.88,
    '/solutions/ai-automation-systems': 0.88,
    '/solutions/digital-infrastructure': 0.88,
    '/solutions/growth-marketing': 0.88,
    '/about': 0.7,
    '/contact': 0.85,
  };

  const frequencies = {
    '/': 'weekly',
    '/our-work': 'weekly',
    '/solutions': 'weekly',
    '/solutions/ai-voice-agents': 'weekly',
    '/solutions/ai-chatbots': 'weekly',
    '/solutions/ai-automation-systems': 'weekly',
    '/solutions/digital-infrastructure': 'weekly',
    '/solutions/growth-marketing': 'weekly',
    '/about': 'monthly',
    '/contact': 'monthly',
  };

  return [
    ...routes.map((route) => ({
      url: `${baseUrl}${route}`,
      lastModified: currentDate,
      changeFrequency: frequencies[route],
      priority: priorities[route],
    })),
  ];
}

