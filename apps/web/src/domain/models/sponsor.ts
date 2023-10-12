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

export interface Sponsor {
  name: string;
  info?: string;
  image?: unknown;
  type: SPONSOR_TYPE;
  link?: string;
  scope?: SPONSORSHIP_SCOPE;
}
