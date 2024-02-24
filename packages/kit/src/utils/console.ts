/**
 * A wrapper around console.debug that only logs if the env log level is set to DEBUG.
 *
 * This is a useful utility to use when we want to do a debug log but we are outside of the scope of any kind
 * of internal logger service. In such cases, this util prevents unintended logging.
 *
 * Note: This is not a replacement for a true logger service. This is only meant to be used in cases where we are
 * outside of the scope of the logger service. ALWAYS use a logger service when possible.
 */
export const consoleDebug = (message: unknown, ...args: unknown[]) => {
  const logLevel = process.env.NEXT_PUBLIC_LOG_LEVEL || process.env.LOG_LEVEL;

  if (logLevel !== 'DEBUG') return;

  // eslint-disable-next-line no-console
  console.debug(message, ...args);
};
