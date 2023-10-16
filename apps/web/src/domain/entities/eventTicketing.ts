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

export interface EventTicketingProvider {
  name: string;
  url: string;
  description?: string;
  email?: string;
  phone?: string;
  note?: any;
}

export interface EventTicketing {
  type?: EVENT_TICKETING_TYPE;
  status: EVENT_TICKETING_STATUS;
  price?: number; // in USD
  discountPrice?: number; // in USD
  link?: string;
  provider?: EventTicketingProvider;
}

/**
 * Given ticket config has a price set
 * * A price of 0 will be valid
 */
export const hasTicketPrice = <T extends EventTicketing>(ticketing: T) => {
  return ticketing.price !== undefined && ticketing.price >= 0;
};

export const hasFreeTickets = <T extends EventTicketing>(ticketing: T) => {
  return ticketing.price === 0;
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
