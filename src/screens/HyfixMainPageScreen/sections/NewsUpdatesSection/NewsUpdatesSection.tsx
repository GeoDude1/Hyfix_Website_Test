import { Button } from "../../../../components/ui/button";
import { SectionDivider } from "../../../../components/ui/section-divider";

export const NewsUpdatesSection = (): JSX.Element => {
  return (
    <section className="relative w-full py-4 md:py-5 lg:py-6 px-4">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-3 md:gap-4">
        <div className="w-full max-w-[1920px] mx-auto px-4">
          <SectionDivider />
        </div>

        <h2 className="[font-family:'Hind',Helvetica] font-bold text-black text-xl sm:text-2xl md:text-3xl text-center tracking-[0] leading-normal translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms] px-4">
          News Release
        </h2>

        <p className="max-w-[1400px] [font-family:'Hind',Helvetica] font-bold text-black text-base sm:text-lg md:text-xl lg:text-2xl text-center tracking-[0] leading-normal translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms] px-4">
          HYFIX Spatial Intelligence, Inc., a U.S.-based semiconductor company,
          today announced a $15 million seed round to build and manufacture a
          new class of American-made chips designed to power high-precision
          drones and autonomous robots
        </p>

        <Button 
          className="h-auto w-auto px-5 md:px-6 py-[6px] rounded-[5px] border border-solid border-[#43aaff] bg-[linear-gradient(180deg,rgba(98,183,243,1)_0%,rgba(32,122,219,1)_100%)] [font-family:'Goli-Medium',Helvetica] font-medium text-white text-base md:text-lg tracking-[0] leading-[normal] hover:opacity-90 transition-opacity translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]"
          onClick={() => window.open("https://hyfix.ai/news", "_blank")}
        >
          Full News Release
        </Button>
      </div>
    </section>
  );
};
