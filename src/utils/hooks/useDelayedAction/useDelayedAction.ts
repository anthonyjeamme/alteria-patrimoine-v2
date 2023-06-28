import { useRef } from "react";

export function useDelayedAction<
  TProps extends Array<unknown> = Array<unknown>
>(callback: (...props: TProps) => void, timeout: number) {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const push = (...props: TProps) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }

    timeoutRef.current = setTimeout(() => {
      callback(...props);
    }, timeout);
  };

  return { push };
}
