import { z } from 'zod';

// ============== MODEL DEFS ============== //

export const seasonModel = z.object({
  id: z.string(),
  slug: z.string(),
  path: z.string().optional(),
  title: z.string(),
  tagline: z.string().optional(),
  description: z.string().optional(),
  term: z.number().optional(),
  images: z.object({
    card: z.unknown().optional(),
    hero: z.unknown().optional(),
  }),
});

export type Season = z.infer<typeof seasonModel>;
