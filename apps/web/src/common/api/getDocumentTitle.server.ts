import { groq, sanityClient } from '@/integrations/sanity';

const documentTitleQuery = groq`*[_type == $type && slug.current == $slug][0] {
    title,
  }`;

interface DocumentTitle {
  title: string;
}

export const getDocumentTitle = async (documentType: string, slug: string) => {
  const metadata = await sanityClient.fetch<DocumentTitle>(documentTitleQuery, { type: documentType, slug });
  return metadata;
};
