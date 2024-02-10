import { z } from 'zod';

import { isValueNullish } from '@nerve/kit/utils';

// ============== MODEL ENUMS ============== //

export enum EVENT_TICKETING_TYPE {
  DOOR = 'door',
  EXTERNAL = 'external',
  INTERNAL = 'internal',
}

export const EVENT_TICKETING_TYPE_DISPLAY = {
  [EVENT_TICKETING_TYPE.DOOR]: 'Tickets at Door',
  [EVENT_TICKETING_TYPE.EXTERNAL]: 'Get Tickets',
  [EVENT_TICKETING_TYPE.INTERNAL]: 'Unavailable',
};

export enum EVENT_TICKETING_STATUS {
  AVAILABLE = 'available',
  UNAVAILABLE = 'unavailable',
  AVAILABLE_SOON = 'available-soon',
  SOLD_OUT = 'sold-out',
}

export const EVENT_TICKETING_STATUS_DISPLAY = {
  [EVENT_TICKETING_STATUS.AVAILABLE]: 'On Sale Now',
  [EVENT_TICKETING_STATUS.UNAVAILABLE]: 'Unavailable',
  [EVENT_TICKETING_STATUS.AVAILABLE_SOON]: 'Available Soon',
  [EVENT_TICKETING_STATUS.SOLD_OUT]: 'Sold Out',
} as const;

// ============== MODEL DEFS ============== //

export const eventTicketingProviderModel = z.object({
  name: z.string(),
  url: z.string(),
  description: z.string().optional(),
  email: z.string().optional(),
  phone: z.string().optional(),
  note: z.unknown().optional(),
});

export const eventTicketingModel = z.object({
  type: z.nativeEnum(EVENT_TICKETING_TYPE).optional(),
  status: z.nativeEnum(EVENT_TICKETING_STATUS),
  basePrice: z.number().optional(),
  salePrice: z.number().optional(),
  industryPrice: z.number().optional(),
  studentPrice: z.number().optional(),
  link: z.string().optional(),
  provider: eventTicketingProviderModel.optional(),
});

export type EventTicketingProvider = z.infer<typeof eventTicketingProviderModel>;
export type EventTicketing = z.infer<typeof eventTicketingModel>;

// ============== MODEL FUNCTIONS ============== //

/**
 * Tickets have a set price
 * * A price of 0 will be valid (when free tickets are set)
 */
export const hasTicketPrice = <T extends EventTicketing>(ticketing: T) => {
  return !isValueNullish(ticketing.basePrice) && ticketing.basePrice >= 0;
};

/**
 * Tickets for the event are free
 */
export const hasFreeTickets = <T extends EventTicketing>(ticketing: T) => {
  return ticketing.basePrice === 0;
};

/**
 * Tickets for the event are free
 */
export const hasTicketsOnSale = <T extends EventTicketing>(ticketing: T) => {
  return ticketing.salePrice && ticketing.salePrice > 0;
};

/**
 * This event has a special industry ticket price
 */
export const hasIndustryTicketPrice = <T extends EventTicketing>(ticketing: T) => {
  return ticketing.industryPrice && ticketing.industryPrice > 0;
};

/**
 * This event has a special student ticket price
 */
export const hasStudentTicketPrice = <T extends EventTicketing>(ticketing: T) => {
  return ticketing.studentPrice && ticketing.studentPrice > 0;
};

/**
 * A ticket type is defined (type doesn't matter)
 */
export const hasTicketTypeDefined = <T extends EventTicketing>(ticketing: T) => {
  return !!ticketing.type;
};

/**
 * The ticket type has been defined as "door"
 */
export const hasTicketsAtDoor = <T extends EventTicketing>(tickets: T) => {
  return tickets?.type === EVENT_TICKETING_TYPE.DOOR;
};

/**
 * The ticket type has been defined as "internal"
 */
export const hasInternalTickets = <T extends EventTicketing>(tickets: T) => {
  return tickets?.type === EVENT_TICKETING_TYPE.INTERNAL;
};

/**
 * The ticket type has been defined as "external"
 */
export const hasExternalTickets = <T extends EventTicketing>(tickets: T) => {
  return tickets?.type === EVENT_TICKETING_TYPE.EXTERNAL;
};

/**
 * An external ticket link ahs been set
 */
export const hasExternalTicketLink = <T extends EventTicketing>(tickets: T) => {
  return !!tickets?.link;
};

/**
 * External ticket type is set and a URL exists
 */
export const hasValidExternalTickets = <T extends EventTicketing>(tickets: T) => {
  return hasExternalTickets(tickets) && hasExternalTicketLink(tickets);
};
