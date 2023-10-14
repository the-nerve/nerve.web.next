import { groq } from '../groq';

/**
 * Adds a "path" property to the root of Sanity blog query object
 *
 * Usage:
 * ...fields
 * ${POST_PATH}
 */
export const POST_PATH = groq`
  _type,
  (_type == "post") => {
    "path": "/blog/" + slug.current,
  },
`;
