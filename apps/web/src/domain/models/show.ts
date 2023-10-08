export interface ShowAuthor {
  name: string;
  bioLink?: string;
  scriptLink?: string;
}

export interface Show {
  id: string; // unique identifier for the show
  slug: string; // unique human-readable identifier for the show
  path?: string; // full path to the show
  title: string;
  authors: ShowAuthor[];
  closingDate: string;
  description: string;
  hasDigitalProgram: boolean;
  hasPhysicalProgram: boolean;
  images?: {
    poster?: unknown;
    card?: unknown;
    thumbnail?: unknown;
    hero?: unknown;
  };
  openingDate: string;
  status: SHOW_STATUS;
  teaser: string;
  term?: number; // The location of the show in sequence of all shows
}

export enum SHOW_STATUS {
  ACTIVE = 'active',
  FUTURE = 'future',
  PAST = 'archived',
  COMING_SOON = 'coming-soon',
  DEFAULT = 'unknown',
}

export const SHOW_STATUS_MESSAGE = {
  [SHOW_STATUS.PAST]: 'Archived',
  [SHOW_STATUS.ACTIVE]: 'Now Playing',
  [SHOW_STATUS.COMING_SOON]: 'Coming Soon',
  [SHOW_STATUS.FUTURE]: 'Future Show',
  [SHOW_STATUS.DEFAULT]: 'Status TBD',
};
