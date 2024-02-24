/**
 * A simple utility method for checking if an error is an instance of the Error class.
 *
 * @param error - The error to check
 * @returns {boolean} - True if the error is an instance of the Error class
 */
export const isErrorInstance = (error: unknown): error is Error => {
  return error instanceof Error;
};

/**
 * A simple utility method for checking if an error has the shape of an Error.
 *
 * * This is helpful in cases where the error was thrown in a different context (window/frame/iframe) than where
 * * it is being handled. In those cases, the error will not be an instance of the Error class, but it will have the
 * * same shape.
 *
 * ! The `cause` property is optional so we aren't going to use it to validate error shape.
 *
 * @param error - The error to check
 * @returns {boolean} - True if the error has the shape of an Error
 */
export const hasErrorShape = (
  error: unknown
): error is { message: string; name: string; stack: string; cause?: unknown } => {
  return (
    typeof error === 'object' &&
    error !== null &&
    isValidErrorProperty(error, 'message') &&
    isValidErrorProperty(error, 'name') &&
    isValidErrorProperty(error, 'stack')
  );
};

/**
 * Checks for the existence of property on an error object and confirms that it is a string.
 */
const isValidErrorProperty = (error: object, property: string): boolean => {
  return property in error && typeof error[property as keyof typeof error] === 'string';
};
