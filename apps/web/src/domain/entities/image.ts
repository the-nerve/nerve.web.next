import { z } from 'zod';

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
