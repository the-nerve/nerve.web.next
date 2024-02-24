import { addHours, isWithinInterval } from 'date-fns';

/**
 * A date-fns formatter string that formats dates in a compatible format for GQL Date Scalars
 *
 * @see https://the-guild.dev/graphql/scalars/docs/scalars/date
 * @see https://date-fns.org/v2.16.1/docs/format
 */
export const GQL_DATE_STRING_FORMAT = 'yyyy-MM-dd';

export const isWithin24Hours = (date: Date) => {
  return isWithinInterval(new Date(date), {
    start: new Date(),
    end: addHours(new Date(), 24),
  });
};

export const isBeforeNow = (date: Date) => {
  return new Date(date) <= new Date();
};
