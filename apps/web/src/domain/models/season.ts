import { z } from 'zod';

// ============== MODEL DEFS ============== //

export const seasonModel = z.object({
  id: z.string(),
  slug: z.string(),
  path: z.string().optional(),
  title: z.string(),
  tagline: z.string().optional().nullable(),
  description: z.string().optional().nullable(),
  term: z.number().optional(),
});

// Metadata about surrounding seasons
export const seasonNeighborsModel = z.object({
  previous: z
    .object({
      id: z.string(),
      title: z.string(),
      slug: z.string(),
      path: z.string(),
      tagline: z.string().nullable(),
    })
    .nullable(),
  next: z
    .object({
      id: z.string(),
      title: z.string(),
      slug: z.string(),
      path: z.string(),
      tagline: z.string().nullable(),
    })
    .nullable(),
});

export const seasonTerm = z.object({
  term: z.number(),
});

export type SeasonNeighbors = z.infer<typeof seasonNeighborsModel>;
export type Season = z.infer<typeof seasonModel>;
