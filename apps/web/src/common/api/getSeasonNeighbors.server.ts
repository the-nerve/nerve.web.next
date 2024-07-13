import { seasonNeighborsModel } from '@/domain/models/season';
import { groq, sanityClient, SEASON_PATH_FRAGMENT } from '@/integrations/sanity';

/**
 * Query the next season and previous season based on a given season
 */
const QUERY = groq`*[_type == "season" && slug.current == $slug][0] {
  "previous": *[_type == "season" && slug.current < ^.slug.current] | order(slug.current desc)[0] {
    "id": _id,
    title,
    "slug": slug.current,
    ${SEASON_PATH_FRAGMENT},
    tagline,
  },
  "next": *[_type == "season" && slug.current > ^.slug.current] | order(slug.current asc)[0] {
    "id": _id,
    title,
    "slug": slug.current,
    ${SEASON_PATH_FRAGMENT},
    tagline,
  },
}`;

export const getSeasonNeighbors = async (slug: string) => {
  const seasonDto = await sanityClient.fetch(QUERY, { slug });

  return seasonNeighborsModel.parse(seasonDto);
};
