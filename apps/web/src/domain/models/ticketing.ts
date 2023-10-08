// Note: the Ticketing model doesn't represent an individual ticket. It represents the concept of a ticketing and needs to be consumed in an event aggregate of some sort.

export enum TICKETING_TYPE {
  DOOR = 'door',
  EXTERNAL = 'external',
  INTERNAL = 'internal',
}

//  Specific messaging for each available ticket type
export const TICKETING_TYPE_MESSAGE = {
  [TICKETING_TYPE.DOOR]: 'Tickets at Door',
  [TICKETING_TYPE.EXTERNAL]: 'Get Tickets',
  [TICKETING_TYPE.INTERNAL]: 'Unavailable',
};

export enum TICKETING_TYPE_AVAILABILITY_MESSAGE {
  AVAILABLE = 'On Sale Now',
  UNAVAILABLE = 'Unavailable',
  AVAILABLE_SOON = 'Available Soon',
  SOLD_OUT = 'Sold Out',
}

export interface Ticketing {
  type: TICKETING_TYPE;
  price?: number; // in USD
  link?: string;
}

/**
 * Given ticket config has a price set
 * * A price of 0 will be valid
 */
export const hasTicketPrice = (ticketing: Ticketing) => {
  return ticketing.price !== undefined && ticketing.price >= 0;
};

/**
 * A ticket type is defined (type doesn't matter)
 */
export const hasTicketTypeDefined = (ticketing: Ticketing) => {
  return !!ticketing.type;
};

/**
 * The ticket type has been defined as "door"
 */
export const hasTicketsAtDoor = (tickets: Ticketing) => {
  return tickets?.type === TICKETING_TYPE.DOOR;
};

/**
 * The ticket type has been defined as "internal"
 */
export const hasInternalTickets = (tickets: Ticketing) => {
  return tickets?.type === TICKETING_TYPE.INTERNAL;
};

/**
 * The ticket type has been defined as "external"
 */
export const hasExternalTickets = (tickets: Ticketing) => {
  return tickets?.type === TICKETING_TYPE.EXTERNAL;
};

/**
 * An external ticket link ahs been set
 */
export const hasExternalTicketLink = (tickets: Ticketing) => {
  return !!tickets?.link;
};

/**
 * External ticket type is set and a URL exists
 */
export const hasValidExternalTickets = (tickets: Ticketing) => {
  return hasExternalTickets(tickets) && hasExternalTicketLink(tickets);
};
