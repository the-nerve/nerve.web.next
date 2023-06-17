import { type Metadata } from 'next';

import { getSingleDocumentMetaFromCollection } from '@/features/seo/__scenarios__/getSingleDocumentMetaFromCollection';

export const generateMetadata = async (): Promise<Metadata> => {
  const metadata = await getSingleDocumentMetaFromCollection('page', 'privacy-policy');

  return {
    title: metadata.title,
    description: metadata.description,
    robots: metadata.hide ? 'noindex, nofollow' : 'index, follow',
  };
};

const Page = () => {
  return <h1>Nerve Privacy Policy Page</h1>;
};

export default Page;
