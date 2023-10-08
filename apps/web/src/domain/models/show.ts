export interface ShowAuthor {
  name: string;
  bioLink?: string;
  scriptLink?: string;
}

export interface Show {
  id?: string; // unique identifier for the show
  slug: string; // unique human-readable identifier for the show
  path?: string; // full path to the show
  title: string;
  authors?: ShowAuthor[];
  closingDate: string;
  description?: any;
  duration?: {
    hours?: number;
    minutes?: number;
  };
  generalTicketLink?: string;
  hasDigitalProgram?: boolean;
  hasPhysicalProgram?: boolean;
  images?: {
    poster?: unknown;
    card?: unknown;
    thumbnail?: unknown;
    hero?: unknown;
  };
  intermissionCount?: number;
  openingDate: string;
  rating?: SHOW_RATING;
  status?: SHOW_STATUS;
  teaser?: string;
  term?: number; // The location of the show in sequence of all shows

  // Free-form fields
  triggerWarning?: any;
  contentAdvisory?: any;
  effectsAdvisory?: any;
  additionalDetails?: any;
  healthNotice?: any;
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

export enum SHOW_RATING {
  PG = 'pg',
  PG13 = 'pg-13',
  R = 'r',
}

/**
 * Checks to see if this show has an intermission
 */
export const hasIntermission = (show: Show) => {
  return show.intermissionCount && show.intermissionCount > 0;
};

/**
 * Format the duration of a show for friendly display
 */
export const formatDurationDisplay = (show: Show) => {
  const { duration } = show;

  if (!duration || (!duration.hours && !duration.minutes)) {
    return {
      hours: undefined,
      minutes: undefined,
    };
  }

  // Handle plurality for hours (we can assume minutes will always be plural)
  const hoursSuffix = duration.hours && duration.hours === 1 ? 'hour' : 'hours';
  const minutesSuffix = 'minutes';

  const _hours = duration.hours && duration.hours > 0 ? `${duration.hours} ${hoursSuffix}` : undefined;
  const _minutes = duration.minutes && duration.minutes > 0 ? `${duration.minutes} ${minutesSuffix}` : undefined;

  return {
    hours: _hours,
    minutes: _minutes,
  };
};
