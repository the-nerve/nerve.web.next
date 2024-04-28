import { groq, sanityClient } from '@/integrations/sanity';

const documentMetaImageQuery = groq`*[_type == $type && slug.current == $slug][0] {
    "documentTitle": title,
    "image": {
      "url": metaImage.asset->url,
      "alt": metaImage.alt
      "width": metaImage.asset->metadata.dimensions.width,
      "height": metaImage.asset->metadata.dimensions.height,
    }
  }`;

interface DocumentImageMetadata {
  documentTitle: string;
  image: {
    url: string;
    alt: string;
    width: number;
    height: number;
  };
}

export const getDocumentMetaImage = async (documentType: string, slug: string) => {
  const metadata = await sanityClient.fetch<DocumentImageMetadata>(documentMetaImageQuery, {
    type: documentType,
    slug,
  });
  return metadata;
};
