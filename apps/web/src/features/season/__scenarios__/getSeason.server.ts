import { z } from 'zod';

import { groq, image, IMAGE, sanityFetch, SHOW_PATH } from '$sanity';

// ZOD ftw with groq: https://www.simeongriggs.dev/type-safe-groq-queries-for-sanity-data-with-zod

const QUERY = groq`*[_type == "season" && slug.current == $slug][0] {
  _type,
  title,
  tagline,
  hashtag,
  description,

  // Sort shows by close date (newest to oldest)
  "shows": shows[]->{
    _type,
    title,
    openDate,
    closeDate,
    "author": author.name,
    "slug": slug.current,
    "featuredImage": cardImage {
      ${IMAGE}
    },
    ${SHOW_PATH},
  } | order(closeDate desc),
  "slug": slug.current,
  "isHidden": doNotDisplay
}`;

const seasonModel = z.object({
  // fields that are always present in a season
  _type: z.string(),
  title: z.string(),
  slug: z.string(),
  // fields that might now always be present in a season
  tagline: z.string().nullable(),
  hashtag: z.string().nullable(),
  description: z.string().nullable(),
  shows: z
    .array(
      z.object({
        _type: z.string(),
        title: z.string(),
        openDate: z.string().nullable(),
        closeDate: z.string().nullable(),
        author: z.string(),
        featuredImage: image.nullable(),
        slug: z.string(),
        path: z.string(),
      })
    )
    .nullable(),
  isHidden: z.boolean().optional(),
});

export type Season = z.infer<typeof seasonModel>;

// TODO: Consider throwing if season result isn't validated.
export const getSeason = async (slug: string) => {
  const dto = await sanityFetch(QUERY, { slug });
  return seasonModel.parse(dto);
};
