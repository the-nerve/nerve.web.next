import { z } from 'zod';

import { groq, sanityFetch, SEASON_PATH } from '$sanity';

/**
 * Query the next season and previous season based on a given season
 */
const QUERY = groq`*[_type == "season" && slug.current == $slug][0] {
  "previous": *[_type == "season" && slug.current < ^.slug.current] | order(slug.current desc)[0] {
    title,
    "slug": slug.current,
    ${SEASON_PATH}
    tagline,
  },
  "next": *[_type == "season" && slug.current > ^.slug.current] | order(slug.current asc)[0] {
    title,
    "slug": slug.current,
    ${SEASON_PATH}
    tagline,
  },
}`;

const seasonNeighbors = z.object({
  previous: z
    .object({
      title: z.string(),
      slug: z.string(),
      tagline: z.string().nullable(),
    })
    .nullable(),
  next: z
    .object({
      title: z.string(),
      slug: z.string(),
      tagline: z.string().nullable(),
    })
    .nullable(),
});

export const getSeasonNeighbors = async (slug: string) => {
  const seasonDto = await sanityFetch(QUERY, { slug });

  return seasonNeighbors.parse(seasonDto);
};

export type SeasonNeighbors = z.infer<typeof seasonNeighbors>;
