import { z } from 'zod';

// ============== MODEL DEFS ============== //

export const audioCreditModel = z.object({
  description: z.string().optional(),
  instagram: z.string().optional(),
  name: z.string(),
  role: z.string(),
  tiktok: z.string().optional(),
  twitter: z.string().optional(),
  website: z.string().optional(),
});

export const audioModel = z.object({
  id: z.string(), // unique identifier for the audio
  description: z.string().optional(),
  link: z.string().optional(), // link to the audio
  platform: z.string(), // platform where the audio is hosted
  credits: z.array(audioCreditModel).optional(),
});

export type AudioCredit = z.infer<typeof audioCreditModel>;
export type Audio = z.infer<typeof audioModel>;
