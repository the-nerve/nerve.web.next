import { type Metadata } from 'next';
import { Inter } from 'next/font/google';

import '@/app.css';

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    manifest: '/manifest.json',
    icons: [],
    creator: 'The Nerve',
    publisher: 'The Nerve',
    robots: 'index, follow',
    verification: {
      google: process.env.GOOGLE_SITE_VERIFICATION,
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
