import { compareAsc, compareDesc, isFuture, isPast, isWithinInterval, parseISO, sub } from 'date-fns';

export enum SHOW_STATUS {
  ACTIVE = 'active',
  FUTURE = 'future',
  PAST = 'archived',
  COMING_SOON = 'coming-soon',
  DEFAULT = 'unknown',
}

export enum SHOW_EVENT_STATUS {
  SCHEDULED = 'scheduled',
  CANCELLED = 'cancelled',
  RESCHEDULED = 'rescheduled',
  POSTPONED = 'postponed',
}

export const SHOW_STATUS_DISPLAY = {
  [SHOW_STATUS.PAST]: 'Archived',
  [SHOW_STATUS.ACTIVE]: 'Now Playing',
  [SHOW_STATUS.COMING_SOON]: 'Coming Soon',
  [SHOW_STATUS.FUTURE]: 'Future Show',
  [SHOW_STATUS.DEFAULT]: 'Status TBD',
} as const;

export enum SHOW_RATING {
  PG = 'pg',
  PG13 = 'pg-13',
  R = 'r',
}

export const SHOW_RATING_DISPLAY = {
  [SHOW_RATING.PG]: 'PG',
  [SHOW_RATING.PG13]: 'PG-13',
  [SHOW_RATING.R]: 'R',
} as const;

export enum SHOW_TICKET_STATUS {
  AVAILABLE = 'available',
  UNAVAILABLE = 'unavailable',
  AVAILABLE_SOON = 'available-soon',
  SOLD_OUT = 'sold-out',
}

export const SHOW_TICKET_STATUS_DISPLAY = {
  [SHOW_TICKET_STATUS.AVAILABLE]: 'On Sale Now',
  [SHOW_TICKET_STATUS.UNAVAILABLE]: 'Unavailable',
  [SHOW_TICKET_STATUS.AVAILABLE_SOON]: 'Available Soon',
  [SHOW_TICKET_STATUS.SOLD_OUT]: 'Sold Out',
} as const;

export interface ShowAuthor {
  name: string;
  bioLink?: string;
  scriptLink?: string;
}

export interface ShowTickets {
  status: SHOW_TICKET_STATUS;
  price?: number; // in USD
  link?: string;
}

// MAIN AGGREGATE

export interface Show {
  id?: string; // unique identifier for the show
  slug: string; // unique human-readable identifier for the show
  path?: string; // full path to the show
  title: string;
  authors?: ShowAuthor[];
  closingDate?: string;
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
  openingDate?: string;
  rating?: SHOW_RATING;
  eventStatus?: SHOW_EVENT_STATUS;
  status?: SHOW_STATUS;
  teaser?: string;
  term?: number; // The location of the show in sequence of all shows

  // More open-ended fields for additional information
  contentAdvisory?: any;
  effectsAdvisory?: any;
  healthNotice?: any;
  triggerWarning?: any;
}

// AGGREGATE FUNCTIONS

/**
 * Checks to see if this show has an intermission
 */
export const hasIntermission = <T extends Show>(show: T) => {
  return show.intermissionCount && show.intermissionCount > 0;
};

/**
 * Format the duration of a show for friendly display
 */
export const formatDurationDisplay = <T extends Show>(show: T) => {
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

/**
 * Filter that returns only shows that are in the future
 */
export const filterForFutureShows = <T extends Show[]>(shows: T) => {
  return shows.filter(({ closingDate }) => {
    if (!closingDate) {
      return false;
    }

    const date = parseISO(closingDate);
    return isFuture(date);
  });
};

/**
 * Filter that returns only shows that are in the past
 */
export const filterForPastShows = <T extends Show[]>(shows: T) => {
  return shows.filter(({ closingDate }) => {
    if (!closingDate) {
      return false;
    }

    const date = parseISO(closingDate);
    return isPast(date);
  });
};
/**
 * Sort shows from newest to oldest based on their opening and closing performance dates
 *
 * @param shows An array of shows to sort
 */
export const sortShowsByDate = <T extends Show[]>(shows: T, order = 'desc') =>
  shows.sort((a, b) => {
    const { closingDate: showA } = a;
    const { closingDate: showB } = b;

    if (!showA || !showB) {
      return 0;
    }

    const dateA = parseISO(showA);
    const dateB = parseISO(showB);

    return order === 'desc' ? compareDesc(dateA, dateB) : compareAsc(dateA, dateB);
  });

/**
 * Determine if the show is in the past
 *
 * @param lastPerformance The date of the first performance
 * @returns
 */
export const isPastShow = <T extends Show>({ closingDate }: T) => {
  if (!closingDate) {
    return false;
  }

  const closing = parseISO(closingDate);
  return isPast(closing);
};

/**
 * Determine if the show is active, meaning it is currently running ("now playing")
 */
export const isActiveShow = <T extends Show>({ openingDate, closingDate }: T) => {
  if (!openingDate || !closingDate) {
    return false;
  }

  const interval = {
    start: new Date(openingDate),
    end: new Date(closingDate),
  };
  return isWithinInterval(new Date(), interval);
};

/**
 * Determine if the show is "coming soon" meaning it will be opening soon
 */
export const isComingSoonShow = <T extends Show>({ openingDate, closingDate }: T) => {
  if (!openingDate || !closingDate) {
    return false;
  }

  // How many days before a show opens should we consider a show "upcoming"?
  const COMING_SOON_WINDOW_DAYS = 60;
  // How many hours before a show officially opens should we still consider it "upcoming" instead of "now playing"?
  const COMING_SOON_CUTOFF_HOURS = 12;

  const opening = new Date(openingDate);
  const closing = new Date(closingDate);

  const interval = {
    start: sub(opening, {
      days: COMING_SOON_WINDOW_DAYS,
    }),
    end: sub(closing, { days: COMING_SOON_CUTOFF_HOURS }),
  };

  return isWithinInterval(new Date(), interval);
};

/**
 * Determine the status of a show using the open and close dates
 *
 * @param openDate The opening performance datetime
 * @param closeDate The closing performance datetime
 */
export const getShowStatus = <T extends Show>(show: T) => {
  const { openingDate, closingDate } = show;

  // If no performances are passed in, bail.
  if (!openingDate || !closingDate) {
    return SHOW_STATUS.DEFAULT;
  }

  if (isPastShow(show)) return SHOW_STATUS.PAST;
  if (isActiveShow(show)) return SHOW_STATUS.ACTIVE;
  if (isComingSoonShow(show)) return SHOW_STATUS.COMING_SOON;

  return SHOW_STATUS.FUTURE;
};
