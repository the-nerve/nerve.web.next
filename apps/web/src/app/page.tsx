import { type Metadata } from 'next';

import { getDocumentMeta } from '@/common/api/getDocumentMeta.server';

export const generateMetadata = async (): Promise<Metadata> => {
  const metadata = await getDocumentMeta('page', 'home');

  return {
    title: metadata.title,
    description: metadata.description,
    keywords: [],
    robots: {
      index: !metadata.hide,
      follow: !metadata.hide,
    },
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: 'https://nervetheatre.org',
      title: metadata.title,
      description: metadata.description,
      images: [
        url: metadata.image,
        width: 1200,
        height: 630,
        alt: 'The Nerve Theatre',
      ],
    },
    twitter: {
      title: metadata.title,
      card: 'summary_large_image',
      site: '@nervetheatre',
      creator: '@nervetheatre',
      description: metadata.description,
      images: {
        url: metadata.image,
        width: 1200,
        height: 630,
        alt: 'The Nerve Theatre',
      },
    },
    alternates: {
      canonical: 'https://nervetheatre.org',
    },
  };
};

const Page = () => {
  return <h1 className="text-neutral-lightest">Hello, from the Nerve home page!</h1>;
};

export default Page;
