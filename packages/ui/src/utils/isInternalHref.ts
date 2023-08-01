import { type UrlObject } from 'url';

/**
 * Checks to see if an href is referencing a relative path, indicating it is an internal link
 * within the scope of the current application.
 *
 * Works with both string paths and the URL object.
 */
export const isInternalHref = (href?: string | UrlObject) => {
  if (!href) {
    return false;
  }

  if (typeof href === 'string') {
    return isInternalPath(href);
  }

  if (typeof href === 'object' && typeof href.pathname === 'string') {
    return isInternalPath(href.pathname);
  }

  return false;
};

// Simple check for relative paths and hashes
const isInternalPath = (path: string) => path.startsWith('/') || path.startsWith('#');
