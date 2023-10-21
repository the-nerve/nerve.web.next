import { groq } from '../groq';

/**
 * Adds a "path" property to the root of Sanity season query object
 *
 * Usage:
 * ...fields
 * ${SEASON_PATH}
 */
export const SEASON_PATH = groq`
  _type,
  (_type == "season") => {
    "path": "/s/" + slug.current,
  },
`;
