import { Button } from "../../../../components/ui/button";
import { SectionDivider } from "../../../../components/ui/section-divider";

const chipFeatures = [
  "Application CPU",
  "Flight Controller",
  "GNSS/RTK",
  "Radio Processor",
  "Security Encryption",
];

export const ChipTechnologySection = (): JSX.Element => {
  return (
    <section className="relative w-full py-4 md:py-5 lg:py-6 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col items-center gap-4 md:gap-5">
          <div className="w-full max-w-[1920px] mx-auto px-4">
            <SectionDivider />
          </div>

          <h2 className="[font-family:'Hind',Helvetica] font-bold text-black text-xl md:text-2xl lg:text-3xl text-center tracking-[0] leading-normal max-w-4xl px-4 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
            A Chip Built for Precision and Resilience
          </h2>

          {/* Centered content container - stacked on mobile, side-by-side from md */}
          <div className="flex flex-col items-center gap-4 md:gap-5 w-full translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
            <div className="relative w-full flex flex-col md:flex-row items-center md:items-stretch min-h-0 md:min-h-[200px] gap-6 md:gap-0">
              {/* Left half: chip image - centered on mobile, right-aligned from md */}
              <div className="flex-1 flex justify-center md:justify-end items-center w-full md:pr-12 lg:pr-16 xl:pr-20">
                <img
                  className="w-[200px] sm:w-[240px] md:w-[280px] h-auto object-contain"
                  alt="Chip dime"
                  src="https://c.animaapp.com/mlqxi4snA5QXFn/img/h1-chip-dime-v04-1.png"
                />
              </div>

              {/* Grey divider - horizontal on mobile, vertical from md */}
              <div
                className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[3px] h-[180px] bg-[#c7c7c7] flex-shrink-0"
                aria-hidden
              />
              <div
                className="md:hidden w-full max-w-[120px] h-[3px] bg-[#c7c7c7] flex-shrink-0"
                aria-hidden
              />

              {/* Right half: list - centered on mobile, left-aligned from md */}
              <div className="flex-1 flex justify-center md:justify-start items-center w-full md:pl-12 lg:pl-16 xl:pl-20 px-4">
                <ul className="flex flex-col gap-2 sm:gap-3 [font-family:'Hind',Helvetica] font-medium text-black text-lg sm:text-xl md:text-[24px] tracking-[0] leading-normal list-disc pl-5 text-left">
                  {chipFeatures.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Button centered below */}
            <Button 
              className="h-auto px-4 md:px-5 py-[6px] rounded-[5px] border border-[#43aaff] bg-[linear-gradient(180deg,rgba(98,183,243,1)_0%,rgba(32,122,219,1)_100%)] [font-family:'Goli-Medium',Helvetica] font-medium text-white text-base md:text-lg tracking-[0] leading-normal hover:opacity-90 transition-opacity"
              onClick={() => window.location.href = "mailto:info@hyfix.ai?subject=Request%20Info"}
            >
              Request Info
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
