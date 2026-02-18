import { Button } from "../../../../components/ui/button";
import { SectionDivider } from "../../../../components/ui/section-divider";
import { Link } from "react-router-dom";

const features = [
  "U.S.-designed and manufactured",
  "Fabricated at trusted foundry",
  "High-volume mature process node",
  "NDAA compliant",
];

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

        {/* Centered content container - divider at true center, content on each side */}
        <div className="flex flex-col items-center gap-4 md:gap-5 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
          <div className="relative w-full flex items-center min-h-[180px]">
            {/* Left half: building image, right-aligned toward center */}
            <div className="flex-1 flex justify-end items-center pr-12 lg:pr-16 xl:pr-20">
              <img
                className="w-full max-w-[300px] md:max-w-[380px] lg:max-w-[480px] h-auto object-contain"
                alt="HYFIX building"
                src="https://c.animaapp.com/mlqxi4snA5QXFn/img/images.png"
              />
            </div>

            {/* Grey divider - fixed at exact horizontal center */}
            <div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[3px] h-[150px] md:h-[180px] bg-[#c7c7c7]"
              aria-hidden
            />

            {/* Right half: list, left-aligned from center */}
            <div className="flex-1 flex justify-start items-center pl-12 lg:pl-16 xl:pl-20">
              <ul className="flex flex-col gap-3 md:gap-4 [font-family:'Hind',Helvetica] font-medium text-black text-base md:text-lg lg:text-xl tracking-[0] leading-normal list-disc pl-5 break-words">
                {features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Button centered below */}
          <Link to="/hyfixu95mainu95page-1-white-about">
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
