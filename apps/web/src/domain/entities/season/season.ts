import { z } from 'zod';

export const seasonBase = z.object({
  _id: z.string().optional(),
  _type: z.string(),
  title: z.string(),
  slug: z.string(),
  path: z.string().optional(),
  isHidden: z.boolean().optional().nullable(),
});

export const seasonExtended = seasonBase.extend({
  hashtag: z.string().nullable().optional(),
  tagline: z.string().nullable().optional(),
  description: z.string().nullable(),
});

export type SeasonBase = z.infer<typeof seasonBase>;
export type Season = z.infer<typeof seasonExtended>;
