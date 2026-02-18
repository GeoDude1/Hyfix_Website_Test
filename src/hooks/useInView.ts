import { useEffect, useRef, useState, RefObject } from "react";

type Options = IntersectionObserverInit;

const defaultOptions = { threshold: 0.2, rootMargin: "0px" };

export const useInView = (options: Options = defaultOptions) => {
  const ref = useRef<HTMLElement | null>(null);
  const [inView, setInView] = useState(false);
  const threshold = options.threshold ?? defaultOptions.threshold;
  const rootMargin = options.rootMargin ?? defaultOptions.rootMargin;
  const root = options.root ?? null;

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setInView(true);
            observer.unobserve(entry.target);
            break;
          }
        }
      },
      { threshold, rootMargin, root }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, rootMargin, root]);

  return { ref: ref as RefObject<HTMLElement>, inView };
};
