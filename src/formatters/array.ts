/**
 * Removes duplicate values from an array.
 *
 * @param arr - The input array.
 * @returns A new array with duplicate values removed.
 */
export const removeDuplicates = <T>(arr: T[]): T[] => {
  return Array.from(new Set(arr));
};

/**
 * Flattens a nested array into a single-level array.
 *
 * @param arr - The input nested array.
 * @returns A new flattened array.
 */
export const flattenArray = <T>(arr: T[][]): T[] => {
  return arr.flat();
};

/**
 * Filters values in an array based on a provided condition.
 *
 * @param arr - The input array.
 * @param conditionFn - A function that returns true for values to keep.
 * @returns A new array with values that meet the condition.
 */
export const filterArray = <T>(arr: T[], conditionFn: (value: T) => boolean): T[] => {
  return arr.filter(conditionFn);
};

/**
 * Transforms each value in an array using a provided function.
 *
 * @param arr - The input array.
 * @param transformFn - A function to transform each value.
 * @returns A new array with transformed values.
 */
export const transformArray = <T, U>(arr: T[], transformFn: (value: T) => U): U[] => {
  return arr.map(transformFn);
};