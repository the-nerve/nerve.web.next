import kebabCase from 'just-kebab-case';

export const slugify = (input: string) => {
  return kebabCase(input).slice(0, 200);
};

export const slugifyDateTime = (dateString: string) => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = date.getMonth() + 1; // getMonth() is zero-indexed
  const day = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  return `${month}${day}${year}-${hours}${minutes}`;
};
