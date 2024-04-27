import { type Metadata } from 'next';

import { getDocumentMeta } from '@/common/api/getDocumentMeta.server';

export const generateMetadata = async (): Promise<Metadata> => {
  const metadata = await getDocumentMeta('page', 'blog');

  return {
    title: metadata.title,
    description: metadata.description,
    robots: metadata.hide ? 'noindex, nofollow' : 'index, follow',
  };
};

const Page = () => {
  return <h1>Nerve Blog</h1>;
};

export default Page;
