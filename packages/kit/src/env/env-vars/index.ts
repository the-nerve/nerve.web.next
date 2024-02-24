/**
 * Resolves an environment variable with an optional default value.
 *
 * @param value The value of the environment variable.
 * @param defaultValue The default value to use if the environment variable is falsy.
 */
export function resolveEnvVar(value: string | undefined, defaultValue: string): string;
export function resolveEnvVar(value?: string, defaultValue?: string): string | undefined;
export function resolveEnvVar(value?: string, defaultValue?: string): string | undefined {
  return value || defaultValue;
}

/**
 * Resolves an environment variable that is required. Throws an error if the value is falsy.
 *
 * * We don't allow for a default value here because we want to ensure that the environment variable is set.
 * * If we want to allow a default value, we should use `resolveEnvVar` instead, as the env var isn't truly required.
 *
 * @param name The name of the required environment variable (only used in the error message)
 * @param value The value of the required environment variable.
 */
export const resolveRequiredEnvVar = (name: string, value?: string): string => {
  if (!value) {
    // Allow missing env vars in CI since otherwise the BundleMon audit would fail
    if (process.env.CI === 'true') {
      return `missing-${name}-in-ci`;
    }
    throw new Error(`Missing required environment variable: '${name}'.`);
  }
  return value;
};

/**
 * Converts a given string to a boolean based on commonly recognized boolean string representations.
 * * If the value is falsy, we will return false.
 *
 * @param value The value to convert to a boolean.
 */
export const boolEnv = (value?: string): boolean => {
  if (!value) {
    return false;
  }
  return ['true', 'yes', 'on', '1'].includes(value.toLowerCase());
};

/**
 * Converts a given string to a number.
 * * If the value is falsy, we will return 0.
 *
 * @param value The value to convert to a number.
 */
export const numberEnv = (value?: string): number => {
  return Number(value) || 0;
};

/**
 * Converts a comma-separated string to a list.
 *
 * @param value The value to convert to a string array.
 */
export const listEnv = (value: string | undefined): string[] => {
  if (!value) {
    return [];
  }
  return value.split(',').map((s) => s.trim());
};
