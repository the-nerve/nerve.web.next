import { type Metadata } from 'next';

// import { getDocumentMeta } from '@/features/seo/__scenarios__/getDocumentMeta';

export const generateMetadata = async (): Promise<Metadata> => {
  // const metadata = await getDocumentMeta('page', 'about');

  return {
    // title: metadata.title,
    // description: metadata.description,
    // robots: metadata.hide ? 'noindex, nofollow' : 'index, follow',
    title: 'Nerve About',
    description: 'Nerve About',
    robots: 'index, follow',
  };
};

const Page = () => {
  return <h1>Nerve About Page</h1>;
};

export default Page;
