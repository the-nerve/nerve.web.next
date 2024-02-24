import { useEffect, useRef } from 'react';

/**
 * useInterval repeatedly calls the callback with a period of delay (aka: throttle)
 *
 * @param callback
 * @param delay
 */
export const useInterval = (callback: () => void, delay: number | null) => {
  const savedCallback = useRef(callback);
  const intervalRef = useRef<ReturnType<typeof setInterval>>();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }

    if (delay !== null) {
      intervalRef.current = setInterval(tick, delay);
      return clearInterval(intervalRef.current);
    }
  }, [delay]);
};
