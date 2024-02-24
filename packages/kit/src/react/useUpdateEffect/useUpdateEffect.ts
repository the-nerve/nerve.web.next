import { type DependencyList, type EffectCallback, useEffect, useRef } from 'react';

import { isServer } from '../../env/server';

/**
 * A hook that runs an callback only after the first render has ocurred. This is useful for when you want to effectively
 * "skip" the first render, and only have an effect run on subsequent "update" renders.
 *
 * ! The callback will not be executed on the server.
 *
 * @param callback The effect to run after the first render
 * @param deps The dependencies to watch for changes
 */
export const useUpdateEffect = (callback: EffectCallback, deps?: DependencyList) => {
  const hasMounted = useRef(false);

  useEffect(() => {
    if (isServer()) {
      return;
    }

    if (hasMounted.current) {
      callback();
    } else {
      hasMounted.current = true;
    }
    // ! The eslint rule override below is intentional. We don't want to include `hasMounted` in the dependency list
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
};
