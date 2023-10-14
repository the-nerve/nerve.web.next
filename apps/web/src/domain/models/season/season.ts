import { z } from 'zod';

export interface _Season {
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

export const season = z.object({
  id: z.string().optional(),
  slug: z.string(),
  path: z.string().optional(),
  title: z.string(),
  tagline: z.string().optional(),
  description: z.string().optional(),
  term: z.number().optional(),
  images: z
    .object({
      card: z.unknown().optional(),
      hero: z.unknown().optional(),
    })
    .optional(),
});
