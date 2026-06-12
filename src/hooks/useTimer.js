import { useCallback, useEffect, useRef, useState } from 'react';

export function useTimer() {
  const [seconds, setSeconds] = useState(0);
  const intervalRef = useRef(null);

  const pause = useCallback(() => {
    if (intervalRef.current === null) {
      return;
    }

    window.clearInterval(intervalRef.current);
    intervalRef.current = null;
  }, []);

  const start = useCallback(() => {
    if (intervalRef.current !== null) {
      return;
    }

    intervalRef.current = window.setInterval(() => {
      setSeconds((currentSeconds) => currentSeconds + 1);
    }, 1000);
  }, []);

  const reset = useCallback(() => {
    pause();
    setSeconds(0);
  }, [pause]);

  useEffect(() => pause, [pause]);

  return {
    seconds,
    start,
    pause,
    reset,
  };
}
