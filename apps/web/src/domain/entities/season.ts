import { z } from 'zod';

export interface Season {
  id?: string; // unique identifier for the season
  slug: string; // unique human-readable identifier for the season
  path?: string; // full path to the season
  title: string;
  tagline?: string;
  description?: string;
  term?: number; // The location of the season in sequence of all seasons

  images?: {
    card?: unknown;
    hero?: unknown;
  };
}

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
