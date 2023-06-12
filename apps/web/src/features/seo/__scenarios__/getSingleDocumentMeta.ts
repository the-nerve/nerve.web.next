import { groq, sanityFetch } from '$sanity';

const singleDocumentMetaQuery = groq`*[_type == $type && slug.current == $slug][0] {
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

export const getSingleDocumentMeta = async (documentType: string, slug: string) => {
  const metadata = await sanityFetch<DocumentMetadata>(singleDocumentMetaQuery, { type: documentType, slug });
  return metadata;
};
