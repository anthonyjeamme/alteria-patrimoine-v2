import { useEffect, useRef } from "react";

function useInputAutoFocus() {
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    ref.current?.focus();
  }, []);

  return [ref];
}

export default useInputAutoFocus;
