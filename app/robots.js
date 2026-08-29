const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://vitespace.com';

export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/dump/', '/our-work'],
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
