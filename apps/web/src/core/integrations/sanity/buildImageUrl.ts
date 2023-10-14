import imageUrlBuilder from '@sanity/image-url';
import { type SanityImageSource } from '@sanity/image-url/lib/types/types';

import { sanityClient } from './sanityFetch';

const imageBuilderClient = imageUrlBuilder(sanityClient);

export const buildImageUrl = (source: SanityImageSource) => imageBuilderClient.image(source);
