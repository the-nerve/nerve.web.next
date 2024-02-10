import { groq } from '../groq';

/**
 * Adds a "path" property to the root of Sanity show query object
 *
 * Usage:
 * ...fields
 * ${SHOW_PATH}
 */
export const SHOW_PATH = groq`
  _type,
  (_type == "show") => {
    "path": "/s/" + season->slug.current + '/' + slug.current
  }
`;
