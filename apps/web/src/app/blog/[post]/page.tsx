import { type Metadata } from 'next';

import { getSingleDocumentMeta } from '$features/seo/__scenarios__/getSingleDocumentMeta';

interface MetadataProps {
  params: {
    post: string;
  };
}

export const generateMetadata = async ({ params }: MetadataProps): Promise<Metadata> => {
  const metadata = await getSingleDocumentMeta('post', params.post);

  return {
    title: metadata.title,
    description: metadata.description,
    robots: metadata.hide ? 'noindex, nofollow' : 'index, follow',
  };
};

const Page = () => {
  return <h1>Nerve Post Page</h1>;
};

export default Page;
