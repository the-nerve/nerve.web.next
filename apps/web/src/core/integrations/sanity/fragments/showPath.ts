import { groq } from '../groq';

/**
 * Adds a "path" property to the root of Sanity show query object
 *
 * Usage:
 * ...fields
 * ${SHOW_PATH_FRAGMENT}
 */
export const SHOW_PATH_FRAGMENT = groq`
  _type == "show" => {
    "path": "/s/" + season->slug.current + '/' + slug.current
  }
`;
