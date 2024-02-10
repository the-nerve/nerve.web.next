import { z } from 'zod';

// ============== MODEL DEFS ============== //

const videoCreditModel = z.object({
  description: z.string().optional(),
  instagram: z.string().optional(),
  name: z.string(),
  role: z.string(),
  tiktok: z.string().optional(),
  twitter: z.string().optional(),
  website: z.string().optional(),
});

export type VideoCredit = z.infer<typeof videoCreditModel>;

export const videoModel = z.object({
  credits: z.array(videoCreditModel).optional(),
  description: z.string().optional(),
  id: z.string(), // unique platform identifier for the video
  link: z.string().optional(), // link to the video
  platform: z.string(), // platform where the video is hosted
  previewImage: z.unknown().optional(),
});

export type Video = z.infer<typeof videoModel>;
