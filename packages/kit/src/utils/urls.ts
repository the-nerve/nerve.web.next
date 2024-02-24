/**
 * @see https://regex101.com/r/YTa65k/2
 */
// eslint-disable-next-line prefer-regex-literals
const urlPathWithQueryStringsRegex = new RegExp('^/(?!.*//)([\\d\\w/?=%&-]+)$');

/**
 * Checks if a given string is a valid URL path (query strings are allowed)
 * TODO: This is fine for the immediate use case, but we should expand the regex to make sure query strings are valid and formatted correctly.
 */
export const isValidUrlPath = (path?: string) => {
  if (!path) {
    return false;
  }

  return urlPathWithQueryStringsRegex.test(path) || path === '/';
};
