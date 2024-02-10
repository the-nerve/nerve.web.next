import { z } from 'zod';

// ============== MODEL DEFS ============== //

export const postAuthorModel = z.object({
  name: z.string(),
  byline: z.string().optional(),
  image: z.unknown().optional(),
  pronouns: z.string().optional(),
  twitter: z.string().optional(),
  website: z.string().optional(),
  instagram: z.string().optional(),
  tiktok: z.string().optional(),
});

export const postModel = z.object({
  slug: z.string(),
  title: z.string(),
  heroImage: z.unknown().optional(),
  teaser: z.string().optional(),
  publishedAt: z.string(),
  lastUpdatedAt: z.string(),
  content: z.unknown(),
  publishedBy: z.array(postAuthorModel),
});

export type PostAuthor = z.infer<typeof postAuthorModel>;
export type Post = z.infer<typeof postModel>;
