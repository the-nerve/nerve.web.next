import { z } from 'zod';

// ============== MODEL ENUMS ============== //

export enum ARTIST_GROUP {
  ACTOR = 'actor',
  DIRECTOR = 'director',
  DESIGNER = 'designer',
  WRITER = 'writer',
  CREW = 'crew',
  SHADOW = 'shadow',
  ASSISTANT = 'assistant',
}

// ============== MODEL DEFS ============== //

export const artistModel = z.object({
  name: z.object({
    first: z.string(),
    middle: z.string().optional(),
    last: z.string(),
  }),
  pronouns: z.string(),
  instagram: z.string().optional(),
  website: z.string().optional(),
  headshot: z.unknown().optional(),
});

export type Artist = z.infer<typeof artistModel>;

// ============== MODEL FUNCTIONS ============== //

/**
 * Takes an artist name object and composes it into a single string, removing any empty values
 */
export const getFullArtistName = (artistName: Artist['name']) => {
  const composedName = Object.values(artistName).filter(Boolean).join(' ');

  return composedName;
};
