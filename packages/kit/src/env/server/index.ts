/**
 * A simple utility function to check if we are on the server
 */
export const isServer = () => {
  return typeof window === 'undefined';
};
