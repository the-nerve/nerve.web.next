import { z } from 'zod';

import { groq, sanityFetch } from '$sanity';

// ZOD ftw with groq: https://www.simeongriggs.dev/type-safe-groq-queries-for-sanity-data-with-zod

const QUERY = groq`*[_type == "season" && slug.current == $slug][0] {
  title,
  tagline,
  hashtag,
  description,
  shows[]->{
    id
  },
  "slug": slug.current,
  "isHidden": doNotDisplay,
}`;

const unpackDto = z.object({
  title: z.string(),
  slug: z.string(),
  isHidden: z.boolean(),
  tagline: z.string(),
  hashtag: z.string().optional(),
  description: z.string().optional(),
  shows: z.array(z.object({ id: z.string() })),
});

export const getSeasonContent = async (slug: string) => {
  const seasonDto = await sanityFetch(QUERY, { slug });
  return unpackDto.parse(seasonDto);
};
