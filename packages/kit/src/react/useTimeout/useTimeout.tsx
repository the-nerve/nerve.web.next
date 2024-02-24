import { useEffect, useRef } from 'react';

/**
 * Delay, and then call callback.
 *
 * Note: Not meant to be used as a debounced callback, but rather as a one-time delay.
 * If you need a debounced callback, use `useDebouncedCallback` instead.
 *
 * @param callback
 * @param delay delay in milliseconds
 */
export const useTimeout = (callback: () => void, delay?: number | null) => {
  const callbackRef = useRef(callback);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    if (delay !== null) {
      timeoutRef.current = setTimeout(() => callbackRef.current(), delay);
    }
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [delay]);
};
