import { SectionDivider } from "../../../../components/ui/section-divider";
import AnimatedList from "../../../../components/ui/AnimatedList";
import { useInView } from "../../../../hooks/useInView";

export const GroundRoboticsSection = (): JSX.Element => {
  const benefits = [
    "Centimeter accurate positioning",
    "Resilient positioning in harsh environments",
    "Full-featured motor control",
    "Obstacle avoidance",
  ];

  return (
    <section className="relative w-full py-0.5">
      <div className="w-full max-w-[1920px] mx-auto px-4 mb-0.5">
        <SectionDivider />
      </div>

      <div className="container mx-auto px-4">
        <Grid benefits={benefits} />
      </div>
    </section>
  );
};

const Grid = ({ benefits }: { benefits: string[] }) => {
  const { ref, inView } = useInView({ threshold: 0.15 });

  return (
    <div ref={ref as any} className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center max-w-7xl mx-auto">
      <div className={`${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"} transition-all duration-700 ease-out flex justify-center items-center`}>
        <img
          className="w-[320px] h-[320px] md:w-[420px] md:h-[420px] lg:w-[480px] lg:h-[480px] object-contain"
          alt="Verde AI mower"
          src="https://c.animaapp.com/mlqxi4snA5QXFn/img/verde-ai-mower.png"
        />
      </div>

      <div className={`${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"} transition-all duration-700 ease-out flex flex-col gap-4`}>
        <h2 className="[font-family:'Hind',Helvetica] font-bold text-black text-2xl md:text-3xl tracking-[0] leading-normal whitespace-nowrap">
          Ground Robotics
        </h2>

        <div className="[font-family:'Hind',Helvetica] text-xl md:text-2xl tracking-[0] leading-normal">
          <p className="font-bold text-black mb-3 whitespace-nowrap">Benefits:</p>

          <AnimatedList items={benefits.map((b) => b)} baseDelay={200} />
        </div>
      </div>
    </div>
  );
};
