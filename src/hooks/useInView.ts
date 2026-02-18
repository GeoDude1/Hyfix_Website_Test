import { useEffect, useRef, useState, RefObject } from "react";

type Options = IntersectionObserverInit;

export const useInView = (options: Options = { threshold: 0.2, root: null, rootMargin: "0px" }) => {
  const ref = useRef<HTMLElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(entry.target);
        }
      });
    }, options);

    observer.observe(node);

    return () => observer.disconnect();
  }, [ref, options.threshold, options.root, options.rootMargin]);

  return { ref: ref as RefObject<HTMLElement>, inView };
};
