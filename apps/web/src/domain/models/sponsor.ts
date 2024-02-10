import { z } from 'zod';

// ============== MODEL ENUMS ============== //

export enum SPONSOR_TYPE {
  PERSON = 'person',
  COMPANY = 'company',
  GROUP = 'group',
}

export enum SPONSORSHIP_LEVEL {
  BE_BOLD = 'beBold',
  BE_GRITTY = 'beGritty',
  BE_AUDACIOUS = 'beAudacious',
  BE_GUTSY = 'beGutsy',
}

export enum SPONSORSHIP_SCOPE {
  EVENT = 'event',
  SEASON = 'season',
  SHOW = 'show',
}

export const SPONSORSHIP_LEVEL_DISPLAY = {
  [SPONSORSHIP_LEVEL.BE_BOLD]: '#BeBold',
  [SPONSORSHIP_LEVEL.BE_GRITTY]: '#BeGritty',
  [SPONSORSHIP_LEVEL.BE_AUDACIOUS]: '#BeAudacious',
  [SPONSORSHIP_LEVEL.BE_GUTSY]: '#BeGutsy',
} as const;

// ============== MODEL DEFS ============== //

export const sponsorModel = z.object({
  name: z.string(),
  info: z.string().optional(),
  image: z.unknown().optional(),
  type: z.nativeEnum(SPONSOR_TYPE),
  link: z.string().optional(),
});

export type Sponsor = z.infer<typeof sponsorModel>;
