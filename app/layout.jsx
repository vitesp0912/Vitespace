import './globals.css';
import StructuredData from '@/components/StructuredData';
import SiteFooter from '@/components/SiteFooter';
import LogoReveal from '@/components/LogoReveal';
import { Analytics } from '@vercel/analytics/react';
import { SITE, createMetadata, pages } from '@/lib/seo';

export const metadata = {
  metadataBase: new URL(SITE.url),
  ...createMetadata(pages.home, { root: true }),
  title: {
    default: pages.home.title,
    template: `%s | ${SITE.name}`,
  },
  referrer: 'origin-when-cross-origin',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
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
  category: 'Business Services',
  other: {
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black',
    'apple-mobile-web-app-title': SITE.name,
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
        <meta name="format-detection" content="telephone=no" />
        <meta name="geo.region" content="IN" />
        <meta httpEquiv="content-language" content="en" />
        <StructuredData />
      </head>
      <body suppressHydrationWarning>
        <LogoReveal />
        {children}
        <SiteFooter />
        <Analytics />
      </body>
    </html>
  );
}
