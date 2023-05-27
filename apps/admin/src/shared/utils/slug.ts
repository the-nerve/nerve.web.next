import kebabCase from 'just-kebab-case';

export const slugify = (input: string) => {
  return kebabCase(input).slice(0, 200);
};
