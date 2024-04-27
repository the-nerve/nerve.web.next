import { z } from 'zod';

import { groq, sanityFetch } from '@/integrations/sanity';

const QUERY = groq`*[_type == "season"]{slug}|order(slug.current asc).slug.current`;

const validateDto = z.array(z.string());

/**
 * Gets a list of all seasons, sorted by slug
 */
export const getSortedSeasonList = async () => {
  const dto = await sanityFetch(QUERY);
  return validateDto.parse(dto);
};
