import { groq, sanityClient } from '@/integrations/sanity';

const documentMetaQuery = groq`*[_type == $type && slug.current == $slug][0] {
    "title": seo.title,
    "description": seo.description,
    "hide": seo.hide,
    "publishedAt": seo.publishedAt,
    "updatedAt": seo.updatedAt
  }`;

interface DocumentMetadata {
  title: string;
  description: string;
  hide: boolean;
  publishedAt: string;
  updatedAt: string;
}

export const getDocumentMeta = async (documentType: string, slug: string) => {
  console.log('fetching document meta', documentType, slug);
  const metadata = await sanityClient.fetch<DocumentMetadata>(documentMetaQuery, { type: documentType, slug });
  console.log('fetched document meta', metadata);
  return metadata;
};
