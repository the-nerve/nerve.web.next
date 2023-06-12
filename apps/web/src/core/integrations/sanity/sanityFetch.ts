import { createClient } from 'next-sanity';
import { cache } from 'react';

const createSanityClient = ({ useCdn }: CreateSanityClientParams) =>
  createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
    token: process.env.NEXT_PUBLIC_SANITY_READ_TOKEN,
    useCdn,
  });

interface CreateSanityClientParams {
  useCdn: boolean;
}

/**
 * Use this client when we are dynamically serving content on demand (SSR pages) for best performance.
 * * There may be a 60-120 second delay before new content from Sanity is available in the CDN.
 */
const sanityClient = createSanityClient({ useCdn: process.env.NODE_ENV === 'production' });
export const sanityFetch = cache(sanityClient.fetch.bind(sanityClient));

/**
 * Use this client when we need to bypass the CDN, e.g. if we're using ISR or only static generation at build time and need to fetch the latest data.
 * * This client will be slower than the CDN client, but will always return the latest data.
 */
const sanityLiveClient = createSanityClient({ useCdn: false });
export const sanityLiveFetch = cache(sanityLiveClient.fetch.bind(sanityLiveClient));
