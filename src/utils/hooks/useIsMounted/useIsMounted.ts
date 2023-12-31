import { useEffect, useRef } from "react";

export const useIsMounted = () => {
  const isMountedRef = useRef<boolean>(true);

  const isMounted = () => isMountedRef.current;

  useEffect(() => {
    isMountedRef.current = true;

    return () => {
      isMountedRef.current = false;
    };
  }, []);

  return isMounted;
};
