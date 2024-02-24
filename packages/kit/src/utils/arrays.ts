/**
 * Removes all 'invalid' values from an array (undefined, null, NaN)
 *
 * @param array The array to remove all 'invalid' values from.
 * @returns A new array with all 'invalid' values removed.
 */
export const removeInvalidValues = <T>(array: (T | undefined | null)[]): T[] => {
  const isT = (t: T | undefined | null): t is T => {
    return t !== undefined && t !== null && !Number.isNaN(t);
  };
  return array.filter(isT);
};
