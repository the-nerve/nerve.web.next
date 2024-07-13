import { type Metadata } from 'next';

import { getDocumentMeta } from '@/common/api/getDocumentMeta.server';

interface MetadataProps {
  params: {
    show: string;
  };
}

export const generateMetadata = async ({ params }: MetadataProps): Promise<Metadata> => {
  const metadata = await getDocumentMeta('show', params.show);

  return {
    title: metadata.title,
    description: metadata.description,
    robots: metadata.hide ? 'noindex, nofollow' : 'index, follow',
  };
};

const Page = () => {
  return <h1>Nerve Show Page</h1>;
};

export default Page;
