import React from "react";
import { useInView } from "../../hooks/useInView";

type AnimatedListProps = {
  items: React.ReactNode[];
  baseDelay?: number; // ms
  className?: string;
  bulletClassName?: string;
};

export const AnimatedList = ({ items, baseDelay = 0, className = "", bulletClassName = "" }: AnimatedListProps) => {
  const { ref, inView } = useInView({ threshold: 0.15, rootMargin: "-10%" });

  return (
    <ul ref={ref as any} className={`list-disc list-inside ml-6 ${className}`}>
      {items.map((it, i) => {
        const delay = baseDelay + i * 100;
        return (
          <li
            key={i}
            className={`${bulletClassName} transition-all duration-700 ease-out will-change-transform ${inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-3"}`}
            style={{ transitionDelay: `${delay}ms` }}
          >
            {it}
          </li>
        );
      })}
    </ul>
  );
};

export default AnimatedList;
