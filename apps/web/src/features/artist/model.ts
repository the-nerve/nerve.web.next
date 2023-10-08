export interface Artist {
  name: {
    first: string;
    middle?: string;
    last: string;
  };
  pronouns: string;
  instagram?: string;
  website?: string;
  headshot?: any; // TODO: Update with image type when available
}

export enum ARTIST_GROUP {
  'ACTOR' = 'actors',
  'CREW' = 'crewMembers',
  'DESIGNER' = 'designers',
  'DIRECTOR' = 'directors',
  'SHADOW' = 'shadows',
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
