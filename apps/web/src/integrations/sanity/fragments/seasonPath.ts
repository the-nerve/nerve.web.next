import { groq } from '../groq';

/**
 * Adds a "path" property to the root of Sanity season query object
 *
 * Usage:
 * ...fields
 * ${SEASON_PATH_FRAGMENT}
 */
export const SEASON_PATH_FRAGMENT = groq`
  _type == "season" => {
    "path": "/s/" + slug.current
  }
`;
