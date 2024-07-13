import { getSortedSeasonSlugList } from './getSortedSeasonSlugList.server.';

/**
 * Get the "position" of the season based on the slug.
 * Position in this context refers to the position of the season in the overall list of seasons. IE: 1st, 2nd, 3rd, etc.
 */
export const getSeasonPosition = async (seasonSlug: string) => {
  const seasonList = await getSortedSeasonSlugList();

  return {
    position: seasonList.indexOf(seasonSlug) + 1,
    totalSeasons: seasonList.length,
  };
};
