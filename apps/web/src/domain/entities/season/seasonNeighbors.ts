import { z } from 'zod';

export const seasonNeighbors = z.object({
  previous: z
    .object({
      title: z.string(),
      slug: z.string(),
      tagline: z.string().optional(),
    })
    .optional(),
  next: z
    .object({
      title: z.string(),
      slug: z.string(),
      tagline: z.string().optional(),
    })
    .optional(),
});

export type SeasonNeighbors = z.infer<typeof seasonNeighbors>;
