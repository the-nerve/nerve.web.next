import { useEffect, useRef } from 'react';

import { isServer } from '../../env/server';

/**
 * A hook that is guaranteed to execute a callback only once per render (dependent on provided condition).
 * ! The callback will not be executed on the server.
 *
 * @param callback - The callback to execute
 * @param condition - The boolean or function condition under which to execute the callback
 */
export const useSingletonEffect = (callback: Callback, condition: Condition = true) => {
  const isCalledOnce = useRef(false);

  useEffect(() => {
    if (isServer() || isCalledOnce.current) {
      return;
    }

    if (shouldExecuteCallback(condition)) {
      callback();

      isCalledOnce.current = true;
    }
  }, [callback, condition]);
};

/**
 * Determine if conditions are met to execute a callback
 */
const shouldExecuteCallback = (condition: Condition) => {
  if (typeof condition === 'boolean') {
    return condition;
  }

  return condition();
};

type Callback = () => void;
type Condition = boolean | (() => boolean);
