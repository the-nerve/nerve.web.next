import imageUrlBuilder from '@sanity/image-url';
import { type SanityImageSource } from '@sanity/image-url/lib/types/types';

import { sanityClient } from './sanityFetch';

const imageBuilderClient = imageUrlBuilder(sanityClient);

export const buildImageUrl = (source?: SanityImageSource | null) => {
  if (!source) {
    // eslint-disable-next-line no-console
    console.warn('[sanity.buildImageUrl] No image source provided. Returning builder with empty string. as source');
    return imageBuilderClient.image('');
  }
  return imageBuilderClient.image(source);
};
