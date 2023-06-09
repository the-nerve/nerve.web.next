import { groq, sanityFetch } from '$sanity';

const singleMetaImageQuery = groq`*[_type == $type && slug.current == $slug][0] {
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

export const getMetaImage = async (documentType: string, slug: string) => {
  const metadata = await sanityFetch<DocumentImageMetadata>(singleMetaImageQuery, { type: documentType, slug });
  return metadata;
};
