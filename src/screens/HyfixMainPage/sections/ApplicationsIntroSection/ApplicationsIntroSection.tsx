import { useEffect, useState } from "react";
import { useInView } from "../../../../hooks/useInView";

export const ApplicationsIntroSection = (): JSX.Element => {
  const { ref, inView } = useInView({ threshold: 0.2, rootMargin: "-10%" });
  const [show, setShow] = useState(false);
  useEffect(() => {
    if (inView) setShow(true);
  }, [inView]);
  useEffect(() => {
    const t = setTimeout(() => setShow(true), 400);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="w-full py-5 md:py-8 lg:py-12 px-4">
      <div className="max-w-6xl mx-auto text-center space-y-3 md:space-y-4">
        <h2
          ref={ref as any}
          className={`[font-family:'Hind',Helvetica] font-bold text-[#030303] text-3xl md:text-4xl tracking-[0] leading-normal ${show ? "animate-fade-in opacity-100 translate-y-0" : "translate-y-[-1rem] opacity-0"}`}
        >
          Applications
        </h2>

        <p className={`[font-family:'Hind',Helvetica] font-normal text-[#030303] text-xl md:text-2xl tracking-[0] leading-normal max-w-6xl mx-auto ${show ? "animate-fade-in opacity-100 translate-y-0 [--animation-delay:200ms]" : "translate-y-[-1rem] opacity-0"}`}>
          From tiny micro drones to safety critical autonomous systems, the HYFIX Autonomous Systems Chip enables a new level of integration and performance.
        </p>
      </div>
    </section>
  );
};
