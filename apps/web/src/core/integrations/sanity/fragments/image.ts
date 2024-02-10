import { z } from 'zod';

import { groq } from '../groq';

// Great sanity image fragment example: https://github.com/sanity-io/hydrogen-sanity-demo/blob/main/app/queries/sanity/fragments/image.ts

export const IMAGE_FRAGMENT = groq`
  "_id": asset->_id,
  "_type": asset->_type,
  "altText": asset->altText,
  'url': asset->url,
  "metadata": {
    "dimensions": {
      "aspectRatio": asset->metadata.dimensions.aspectRatio,
      "height": asset->metadata.dimensions.height,
      "width": asset->metadata.dimensions.width,
    },
    "lqip": asset->metadata.lqip,
    "blurHash": asset->metadata.blurHash,
  },
`;

/**
 * Validation model & type for a Sanity image object returned from our query fragment.
 */
export const image = z.object({
  _id: z.string(),
  _type: z.string(),
  url: z.string(),
  altText: z.string().nullable().optional(),
  description: z.string().nullable().optional(),
  metadata: z
    .object({
      dimensions: z.object({
        aspectRatio: z.number(),
        height: z.number(),
        width: z.number(),
      }),
      lqip: z.string().nullable(),
      blurHash: z.string().nullable(),
    })
    .nullable(),

  credit: z.string().nullable().optional(),
});

export type Image = z.infer<typeof image>;
