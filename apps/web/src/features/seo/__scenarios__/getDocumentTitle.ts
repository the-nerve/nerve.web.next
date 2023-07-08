import { groq, sanityFetch } from '$sanity';

const singleDocumentTitleQuery = groq`*[_type == $type && slug.current == $slug][0] {
    title,
  }`;

interface DocumentTitle {
  title: string;
}

export const getDocumentTitle = async (documentType: string, slug: string) => {
  const metadata = await sanityFetch<DocumentTitle>(singleDocumentTitleQuery, { type: documentType, slug });
  return metadata;
};
