import { type Metadata } from 'next';

// import { getDocumentMeta } from '@/features/seo/__scenarios__/getDocumentMeta';

export const generateMetadata = async (): Promise<Metadata> => {
  // const metadata = await getDocumentMeta('page', 'home');

  return {
    // title: metadata.title,
    // description: metadata.description,
    // robots: metadata.hide ? 'noindex, nofollow' : 'index, follow',
    title: 'Nerve Home',
    description: 'Nerve',
    robots: 'index, follow',
  };
};

const Page = () => {
  return <h1>Hello, from the Nerve home page!</h1>;
};

export default Page;
