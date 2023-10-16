import { compareAsc, compareDesc, isFuture, isPast, isWithinInterval, parseISO, sub } from 'date-fns';
import { z } from 'zod';

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

const showAuthor = z.object({
  name: z.string(),
  bioLink: z.string().nullable().optional(),
  scriptLink: z.string().nullable().optional(),
});

const showTickets = z.object({
  status: z.nativeEnum(SHOW_TICKET_STATUS),
  price: z.number().nullable(),
  link: z.string().nullable(),
});

export const showBase = z.object({
  _id: z.string().optional(),
  _type: z.string(),
  title: z.string(),
  slug: z.string(),
  path: z.string().optional(),
  openDate: z.string().nullable(),
  closeDate: z.string().nullable(),
});

export const showExtended = showBase.extend({
  author: showAuthor.nullable(),
  tagline: z.string().nullable(),
  description: z.string().nullable(),
  teaser: z.string().nullable(),
  intermissionCount: z.number().nullable(),
  rating: z.nativeEnum(SHOW_RATING).nullable(),
  generalTicketLink: z.string().nullable(),
  hasDigitalProgram: z.boolean().nullable(),
  hasPhysicalProgram: z.boolean().nullable(),
  tickets: showTickets.nullable(),
  duration: z
    .object({
      hours: z.number().nullable(),
      minutes: z.number().nullable(),
    })
    .nullable(),
  eventStatus: z.nativeEnum(SHOW_EVENT_STATUS).nullable(),

  // More open-ended fields for additional information
  contentAdvisory: z.any().nullable(),
  effectsAdvisory: z.any().nullable(),
  healthNotice: z.any().nullable(),
  triggerWarning: z.any().nullable(),
});

export type ShowBase = z.infer<typeof showBase>;
export type Show = z.infer<typeof showExtended>;

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
export const filterForFutureShows = <T extends ShowBase[]>(shows: T) => {
  return shows.filter(({ closeDate }) => {
    if (!closeDate) {
      return false;
    }

    const date = parseISO(closeDate);
    return isFuture(date);
  });
};

/**
 * Filter that returns only shows that are in the past
 */
export const filterForPastShows = <T extends ShowBase[]>(shows: T) => {
  return shows.filter(({ closeDate }) => {
    if (!closeDate) {
      return false;
    }

    const date = parseISO(closeDate);
    return isPast(date);
  });
};
/**
 * Sort shows from newest to oldest based on their opening and closing performance dates
 *
 * @param shows An array of shows to sort
 */
export const sortShowsByDate = <T extends ShowBase[]>(shows: T, order = 'desc') =>
  shows.sort((a, b) => {
    const { closeDate: showA } = a;
    const { closeDate: showB } = b;

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
export const isPastShow = <T extends ShowBase>({ closeDate }: T) => {
  if (!closeDate) {
    return false;
  }

  const closing = parseISO(closeDate);
  return isPast(closing);
};

/**
 * Determine if the show is active, meaning it is currently running ("now playing")
 */
export const isActiveShow = <T extends ShowBase>({ openDate, closeDate }: T) => {
  if (!openDate || !closeDate) {
    return false;
  }

  const interval = {
    start: parseISO(openDate),
    end: parseISO(closeDate),
  };
  return isWithinInterval(new Date(), interval);
};

/**
 * Determine if the show is "coming soon" meaning it will be opening soon
 */
export const isComingSoonShow = <T extends ShowBase>({ openDate, closeDate }: T) => {
  if (!openDate || !closeDate) {
    return false;
  }

  // How many days before a show opens should we consider a show "upcoming"?
  const COMING_SOON_WINDOW_DAYS = 60;
  // How many hours before a show officially opens should we still consider it "upcoming" instead of "now playing"?
  const COMING_SOON_CUTOFF_HOURS = 12;

  const opening = parseISO(openDate);
  const closing = parseISO(closeDate);

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
export const getShowStatus = <T extends ShowBase>(show: T) => {
  const { openDate, closeDate } = show;

  // If no performances are passed in, bail.
  if (!openDate || !closeDate) {
    return SHOW_STATUS.DEFAULT;
  }

  if (isPastShow(show)) return SHOW_STATUS.PAST;
  if (isActiveShow(show)) return SHOW_STATUS.ACTIVE;
  if (isComingSoonShow(show)) return SHOW_STATUS.COMING_SOON;

  return SHOW_STATUS.FUTURE;
};
