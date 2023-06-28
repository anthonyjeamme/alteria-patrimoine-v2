import { RefObject, useEffect, useRef } from "react";

/**
 *
 */
export const useScrollPosition = (
  id: string
): [scrollerRef: RefObject<HTMLDivElement>, scrollTop: () => void] => {
  const scrollerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollerElement = scrollerRef.current;
    if (!scrollerElement) return;

    const data = sessionStorage.getItem(`tab_${id}_scrollPosition`);
    const scrollPosition = data ? parseInt(data, 10) : 0;

    scrollerElement.scrollTo({
      top: scrollPosition,
    });

    const handleScroll = () => {
      const scrollerElement = scrollerRef.current;
      if (!scrollerElement) return;

      sessionStorage.setItem(
        `tab_${id}_scrollPosition`,
        `${scrollerElement.scrollTop}`
      );
    };

    scrollerElement.addEventListener("scroll", handleScroll);

    return () => {
      scrollerElement.removeEventListener("scroll", handleScroll);
    };
  }, [id]);

  function scrollTop() {
    const scrollerElement = scrollerRef.current;
    if (!scrollerElement) return;

    scrollerElement.scrollTo({
      top: 0,
    });
  }

  return [scrollerRef, scrollTop];
};
