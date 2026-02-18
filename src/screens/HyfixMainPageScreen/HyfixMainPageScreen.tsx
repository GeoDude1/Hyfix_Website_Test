import { ChipTechnologySection } from "./sections/ChipTechnologySection";
import { DronesAndRoboticsOverviewSection } from "./sections/DronesAndRoboticsOverviewSection/DronesAndRoboticsOverviewSection";
import { FooterWrapperSection } from "./sections/FooterWrapperSection";
import { HeroImageSection } from "./sections/HeroImageSection";
import { HyfixBrandingSection } from "./sections/HyfixBrandingSection/HyfixBrandingSection";
import { NavigationWrapperSection } from "./sections/NavigationWrapperSection";
import { NewsUpdatesSection } from "./sections/NewsUpdatesSection/NewsUpdatesSection";

export const HyfixMainPageScreen = (): JSX.Element => {
  return (
    <main
      className="overflow-x-hidden bg-transparent w-full min-w-0 min-h-screen relative flex flex-col items-center flex-1"
      data-model-id="264:35"
    >
      <div className="w-full translate-y-[-1rem] animate-fade-in opacity-0">
        <NavigationWrapperSection />
      </div>

      <div className="w-full max-w-[1920px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
        <HeroImageSection />
      </div>

      <div className="w-full max-w-[1920px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
        <ChipTechnologySection />
      </div>

      <div className="w-full max-w-[1920px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]">
        <DronesAndRoboticsOverviewSection />
      </div>

      <div className="w-full max-w-[1920px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:800ms]">
        <HyfixBrandingSection />
      </div>

      <div className="w-full max-w-[1920px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1000ms]">
        <NewsUpdatesSection />
      </div>

      <div className="w-full max-w-[1920px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1200ms]">
        <FooterWrapperSection />
      </div>
    </main>
  );
};
