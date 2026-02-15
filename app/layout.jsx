import './globals.css';
import CustomCursor from '@/assets/CustomCursor';
import StructuredData from '@/components/StructuredData';
import SiteFooter from '@/components/SiteFooter';
import { Analytics } from '@vercel/analytics/react';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://vitespace.com';
const siteName = 'VITESPACE';
const siteDescription =
  'Stop losing leads to slow systems. VIESPACE builds AI voice agents, automation, digital infrastructure, and growth engines that scale revenue.';
const siteTitle = `${siteName} - AI Systems That Scale Revenue`;

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  keywords: [
    'website development',
    'web development services',
    'CRM systems',
    'customer relationship management',
    'SEO services',
    'search engine optimization',
    'business automation',
    'workflow automation',
    'chatbots',
    'AI chatbots',
    'WhatsApp chatbots',
    'digital solutions',
    'performance marketing',
    'Google Ads',
    'Facebook Ads',
    'custom software development',
    'e-commerce websites',
    'business websites',
    'portfolio websites',
    'booking websites',
    'lead management',
    'sales pipeline',
    'business automation India',
    'digital transformation',
  ],
  authors: [{ name: siteName, url: siteUrl }],
  creator: siteName,
  publisher: siteName,
  applicationName: siteName,
  referrer: 'origin-when-cross-origin',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/',
      'en': '/',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    title: siteTitle,
    description: siteDescription,
    siteName: siteName,
    images: [
      {
        url: `${siteUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: `${siteName} - Digital Solutions for Your Business`,
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteTitle,
    description: siteDescription,
    creator: '@vitespace',
    site: '@vitespace',
    images: [`${siteUrl}/og-image.jpg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon_io%20(3)/favicon.ico', sizes: 'any' },
      { url: '/favicon_io%20(3)/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon_io%20(3)/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon_io%20(3)/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/favicon_io%20(3)/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/favicon_io%20(3)/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  verification: {
    // Add your verification codes here when available
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },
  category: 'Technology',
  classification: 'Business Services',
  other: {
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black',
    'apple-mobile-web-app-title': siteName,
  },
};

export const viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
    { media: '(prefers-color-scheme: light)', color: '#000000' },
  ],
  colorScheme: 'dark',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon_io%20(3)/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon_io%20(3)/apple-touch-icon.png" />
        <link rel="canonical" href={siteUrl} />
        <meta name="format-detection" content="telephone=no" />
        <meta name="geo.region" content="IN" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />
        <meta httpEquiv="content-language" content="en" />
        <StructuredData />
      </head>
      <body suppressHydrationWarning>
        {children}
        <SiteFooter />
        {/* Site-wide custom cursor */}
        <CustomCursor />
        {/* Vercel Analytics */}
        <Analytics />
      </body>
    </html>
  );
}
