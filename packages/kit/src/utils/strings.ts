const truthyValues = new Set(['true', 'yes', 'on', '1']);

export const strToBool = (value: string | null | undefined) => {
  if (!value) {
    return false;
  }
  return truthyValues.has(value.toLowerCase());
};

/**
 * Checks if the provided string is a number
 *
 * @param value The value to check
 * @returns true if the value can be converted into a number
 */
export const isStrNumber = (value: string | null | undefined) => {
  if (!value) {
    return false;
  }
  return !Number.isNaN(Number(value));
};

export const capitalizeFirstChar = (value: string) => {
  try {
    return value.charAt(0).toUpperCase() + value.slice(1);
  } catch {
    return value;
  }
};
