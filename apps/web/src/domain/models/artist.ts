export interface Artist {
  name: {
    first: string;
    middle?: string;
    last: string;
  };
  pronouns: string;
  instagram?: string;
  website?: string;
  headshot?: unknown;
}

export enum ARTIST_GROUP {
  ACTOR = 'actor',
  DIRECTOR = 'director',
  DESIGNER = 'designer',
  WRITER = 'writer',
  CREW = 'crew',
  SHADOW = 'shadow',
  ASSISTANT = 'assistant',
}

/**
 * Takes any number of args, but assumes the order is the display order... ie: first name, middle name, last name
 * Filters out any empty values and joins the rest with a space
 */
export const composeArtistName = (...args: string[]) => {
  // Drop all empty values
  const cleanedArray = args.filter(Boolean);

  return cleanedArray.join(' ');
};
