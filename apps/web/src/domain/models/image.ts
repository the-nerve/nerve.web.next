import { z } from 'zod';

export const sanityImage = z.object({
  _id: z.string(),
  _type: z.string(),
  altText: z.string().nullable(),
  description: z.string().nullable(),
  url: z.string().nullable(),
  metadata: z
    .object({
      dimensions: z.object({
        aspectRatio: z.number(),
        height: z.number(),
        width: z.number(),
      }),
      lqip: z.string(),
      palette: z.array(z.string()),
      blurHash: z.string(),
    })
    .nullable(),

  credit: z.string().nullable(),
});
