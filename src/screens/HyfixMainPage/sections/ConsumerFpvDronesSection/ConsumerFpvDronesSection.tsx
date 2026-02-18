import { SectionDivider } from "../../../../components/ui/section-divider";
import AnimatedList from "../../../../components/ui/AnimatedList";
import { useInView } from "../../../../hooks/useInView";

export const ConsumerFpvDronesSection = (): JSX.Element => {
  const benefits = [
    "Ultra-integrated electronics",
    "Precision localization and control",
    "Low-power extends battery life",
    "Light-weight",
  ];

  return (
    <section className="relative w-full py-3 md:py-4">
      <div className="w-full max-w-[1920px] mx-auto px-4 mb-2 md:mb-0.5">
        <SectionDivider />
      </div>

      <div className="container mx-auto px-4 py-2 md:py-0">
        {/** observe when the grid comes into view so we can animate columns and bullets */}
        <Grid benefits={benefits} />
      </div>
    </section>
  );
};

const Grid = ({ benefits }: { benefits: string[] }) => {
  const { ref, inView } = useInView({ threshold: 0.15 });

  return (
    <div ref={ref as any} className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 lg:gap-8 items-center max-w-7xl mx-auto">
      <div className={`${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"} transition-all duration-700 ease-out flex justify-center items-center`}>
        <img
          className="w-[220px] h-[220px] sm:w-[280px] sm:h-[280px] md:w-[420px] md:h-[420px] lg:w-[480px] lg:h-[480px] object-contain"
          alt="Micro drone"
          src="https://c.animaapp.com/mlqxi4snA5QXFn/img/micro-drone.png"
        />
      </div>

      <div className={`${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"} transition-all duration-700 ease-out flex flex-col gap-4`}>
        <h2 className="[font-family:'Hind',Helvetica] font-bold text-black text-2xl md:text-3xl leading-normal whitespace-nowrap">
          Consumer and FPV Drones
        </h2>

        <div className="[font-family:'Hind',Helvetica] text-black text-xl md:text-2xl leading-normal">
          <p className="font-bold mb-3 whitespace-nowrap">Benefits:</p>
          <AnimatedList items={benefits.map((b) => b)} baseDelay={200} />
        </div>
      </div>
    </div>
  );
};
