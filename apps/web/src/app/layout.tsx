import { type Metadata, type Viewport } from 'next';
import { Inter } from 'next/font/google';

import '@/app.css';
import { SERVER_ONLY_ENV_VARS } from '@/configs/env.server';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#F25C05',
  viewportFit: 'cover',
};

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    metadataBase: new URL('https://nervetheatre.org'),
    applicationName: 'The Nerve Theatre',
    manifest: '/manifest.json',
    title: 'The Nerve Theatre',
    robots: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
      googleBot: 'index, follow',
    },
    creator: 'The Nerve Theatre',
    publisher: 'The Nerve Theatre',
    openGraph: {
      siteName: 'The Nerve Theatre',
      type: 'website',
      locale: 'en_US',
    },
    appleWebApp: {
      title: 'The Nerve Theatre',
      statusBarStyle: 'black-translucent',
      capable: true,
    },
    alternates: {
      types: {
        // TODO: Add RSS feed
        // "application/rss+xml": ""
      },
    },
    verification: {
      google: SERVER_ONLY_ENV_VARS.GOOGLE_SITE_VERIFICATION,
    },
  };
};

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Open Sans', 'sans-serif'],
  variable: '--font-inter',
  preload: true,
});

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" className={`${inter.variable} font-inter`}>
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
