'use client';

import { useCallback, useEffect, useRef } from 'react';

/**
 * Debounce a callback function, preventing it from being called until a certain amount of time has passed since the last invocation.
 * This is useful for preventing a function from being called too frequently.
 *
 * Note: This hook is not meant to be used as a one-time delay. If you need a one-time delay, use `useTimeout` instead.
 *
 * Example Scenario: Prevent an API request from firing every time an input changes as a user types
 *
 * Usage Example:
 * ```tsx
 * const debouncedSearch = useDebouncedCallback(search, 300);
 *
 * <input onChange={(e) => debouncedSearch(e.target.value)} />
 * ```
 *
 * @param callback - The callback to debounce
 * @param delay - The amount of time to wait after the latest invocation before calling the function
 * @returns A debounced version of the callback function that can be called safely
 */
export const useDebouncedCallback = <Callback extends (...args: Parameters<Callback>) => void>(
  callback: Callback,
  delay: number
): ((...args: Parameters<Callback>) => void) => {
  const callbackRef = useRef(callback);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  /**
   * Debounced version of original callback for the consumer to safely call as many times as they please!
   * Note: Props will match and be passed through the original callback.
   */
  const debouncedCallback = useCallback(
    (...args: Parameters<Callback>) => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(() => {
        callbackRef.current(...args);
      }, delay);
    },
    [delay]
  );

  // Clear timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return debouncedCallback;
};
