import { groq, sanityFetch } from '@/integrations/sanity';

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
  const metadata = await sanityFetch<DocumentMetadata>(documentMetaQuery, { type: documentType, slug });
  return metadata;
};
