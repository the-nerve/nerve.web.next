import { groq } from '../groq';
/**
 * Spreads the fields from a Sanity reference object into the parent object
 * and gets a constructed slug for the reference.
 */
export const INTERNAL_LINK_REF_FRAGMENT = groq`
  _type,
  ...reference-> {
    (_type == "season") => {
      "path": "/s/" + slug.current,
    },
    (_type == "show") => {
      "path": "/s/" + season->slug.current + "/" + slug.current,
    },
    (_type == "post") => {
      "path": "/blog/" + slug.current,
    },
  }
`;
