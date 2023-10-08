import { isPast, isValid } from 'date-fns';

export enum PERFORMANCE_FEATURES {
  PWYW = 'pay-what-you-want',
  TALKBACK = 'talkback',
  PREVIEW = 'dress-preview',
  ASSISTED_LISTENING = 'assisted-listening',
}

export enum PERFORMANCE_STATUS {
  ACTIVE = 'active',
  CANCELLED = 'cancelled',
  RESCHEDULED = 'rescheduled',
}

export interface Performance {
  startTime: string;
  status: PERFORMANCE_STATUS;
  isPreview?: boolean;
  isPWYW?: boolean;
  hasTalkback?: boolean;
  hasAssistedListening?: boolean;
  duration?: {
    hours?: number;
    minutes?: number;
  };
  isTicketed?: boolean;
}

/**
 * Checks to see if this performance has been marked as "cancelled"
 */
export const isCancelledPerformance = (performance: Performance) => {
  const { status } = performance;
  return status === PERFORMANCE_STATUS.CANCELLED;
};

/**
 * Checks to see if this performance has been marked as "rescheduled"
 */
export const isRescheduledPerformance = (performance: Performance) => {
  const { status } = performance;
  return status === PERFORMANCE_STATUS.RESCHEDULED;
};

/**
 * Is the starting time of this performance past the current date and time?
 */
export const isPastPerformance = (performance: Performance) => {
  const { startTime } = performance;

  const date = new Date(startTime);

  return isValid(date) && isPast(date);
};

/**
 * Is this performance considered to be currently "available" to the public?
 */
export const isAvailablePerformance = (performance: Performance) => {
  return !isCancelledPerformance(performance) && !isPastPerformance(performance);
};

/**
 * Checks to see if the performance is a general admission performance.
 * * Currently any performance other than Pay What You Want
 */
export const isGeneralAdmissionPerformance = (performance: Performance) => {
  return !performance.isPWYW;
};

/**
 * Get the total number of performance occurrences for a single show
 */
export const getTotalPerformanceCount = (performances?: Performance[]) => {
  if (!performances) {
    return 0;
  }

  const total = performances.filter((performance) => !isCancelledPerformance(performance));

  return total.length;
};

/**
 * Get total ticketed performance count
 */
export const getTotalTicketedPerformanceCount = (performances?: Performance[]) => {
  if (!performances) {
    return 0;
  }

  const total = performances.filter((performance) => performance.isTicketed);

  return total.length;
};

/**
 * Get total pay what you want performance count
 */
export const getTotalPWYWPerformanceCount = (performances?: Performance[]) => {
  if (!performances) {
    return 0;
  }

  const total = performances.filter((performance) => performance.isPWYW);

  return total.length;
};

/**
 * Get the total number of performances still remaining that an audience member
 * could buy a ticket to.
 */
export const getRemainingPerformanceCount = (performances?: Performance[]) => {
  if (!performances) {
    return 0;
  }

  const remaining = performances.filter((performance) => isAvailablePerformance(performance));

  return remaining.length;
};

/**
 * The show has performances remaining
 */
export const hasPerformancesRemaining = (performances?: Performance[]) => {
  if (performances?.length === 0) {
    return false;
  }
  return getRemainingPerformanceCount(performances) > 0;
};

/**
 * Sort performances
 *
 * Sort past performances to the end of the array
 */
export const sortPastPerformancesToEnd = <AnyPerformanceType extends Performance>(performances: AnyPerformanceType[]) =>
  performances.sort((a, b) => {
    const { startTime: performanceA } = a;
    const { startTime: performanceB } = b;

    const dateA = new Date(performanceA);
    const dateB = new Date(performanceB);

    // If the first date is not in the past, but the second date is, sort the past date last (moving them to the end of the array)
    if (!isPast(dateA) && isPast(dateB)) {
      return -1;
    }

    return 0;
  });
