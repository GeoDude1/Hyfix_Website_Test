import { Button } from "../../../../components/ui/button";
import { SectionDivider } from "../../../../components/ui/section-divider";
import { Link } from "react-router-dom";
import { useInView } from "../../../../hooks/useInView";

const features = [
  "U.S.-designed and manufactured",
  "Fabricated at trusted foundry",
  "High-volume mature process node",
  "NDAA compliant",
];

const BulletList = ({ items }: { items: string[] }) => {
  const { ref, inView } = useInView({ threshold: 0.2 });
  return (
    <div ref={ref as any} className="flex-1 flex justify-center md:justify-start items-center w-full md:pl-12 lg:pl-16 xl:pl-20 px-4">
      <ul className="flex flex-col gap-2 sm:gap-3 md:gap-4 [font-family:'Hind',Helvetica] font-medium text-black text-base md:text-lg lg:text-xl tracking-[0] leading-normal list-disc pl-5 break-words text-left">
        {items.map((feature, index) => (
          <li
            key={index}
            className={inView ? "animate-bullet-in opacity-0" : "opacity-0"}
            style={inView ? { animationDelay: `${index * 80}ms` } : undefined}
          >
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
};

export const HyfixBrandingSection = (): JSX.Element => {
  return (
    <section className="relative w-full py-4 md:py-5 lg:py-6 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="w-full max-w-[1920px] mx-auto px-4 mb-4 md:mb-5">
          <SectionDivider />
        </div>

        <h2 className="[font-family:'Hind',Helvetica] font-bold text-black text-xl md:text-2xl lg:text-3xl text-center tracking-[0] leading-[normal] mb-4 md:mb-5 px-4 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
          Fixing a Broken Drone Supply Chain
        </h2>

        {/* Centered content container - stacked on mobile, side-by-side from md */}
        <div className="flex flex-col items-center gap-4 md:gap-5 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
          <div className="relative w-full flex flex-col md:flex-row items-center md:items-stretch min-h-0 md:min-h-[180px] gap-6 md:gap-0">
            {/* Left half: building image - centered on mobile */}
            <div className="flex-1 flex justify-center md:justify-end items-center w-full md:pr-12 lg:pr-16 xl:pr-20 px-2">
              <img
                className="w-full max-w-[260px] sm:max-w-[300px] md:max-w-[380px] lg:max-w-[480px] h-auto object-contain"
                alt="HYFIX building"
                src={`${import.meta.env.BASE_URL}building.png`}
              />
            </div>

            {/* Grey divider - horizontal on mobile, vertical from md */}
            <div
              className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[3px] h-[150px] md:h-[180px] bg-[#c7c7c7]"
              aria-hidden
            />
            <div
              className="md:hidden w-full max-w-[120px] h-[3px] bg-[#c7c7c7] flex-shrink-0"
              aria-hidden
            />

            {/* Right half: list - centered on mobile */}
            <BulletList items={features} />
          </div>

          {/* Button centered below */}
          <Link to="/about">
            <Button 
              className="h-auto px-4 md:px-5 py-[6px] rounded-[5px] border border-[#43aaff] bg-[linear-gradient(180deg,rgba(98,183,243,1)_0%,rgba(32,122,219,1)_100%)] [font-family:'Goli-Medium',Helvetica] font-medium text-white text-base md:text-lg tracking-[0] leading-[normal] hover:opacity-90 transition-opacity"
            >
              About HYFIX
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
