import { z } from 'zod';

import { groq, sanityClient } from '@/integrations/sanity';

// query list of all season slugs and thee toal season count

const QUERY = groq`*[_type == "season"] | order(slug.current asc).slug.current`;

const validateDto = z.array(z.string());

/**
 * Gets a list of all seasons, sorted by slug
 */
export const getSortedSeasonSlugList = async () => {
  const dto = await sanityClient.fetch(QUERY);
  return validateDto.parse(dto);
};
