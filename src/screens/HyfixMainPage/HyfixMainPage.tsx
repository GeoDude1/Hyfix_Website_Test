import { ChipTechnologySection } from "../HyfixMainPageScreen/sections/ChipTechnologySection";
import { DronesAndRoboticsOverviewSection } from "../HyfixMainPageScreen/sections/DronesAndRoboticsOverviewSection/DronesAndRoboticsOverviewSection";
import { FooterWrapperSection } from "../HyfixMainPageScreen/sections/FooterWrapperSection";
import { HeroImageSection } from "../HyfixMainPageScreen/sections/HeroImageSection";
import { HyfixBrandingSection } from "../HyfixMainPageScreen/sections/HyfixBrandingSection/HyfixBrandingSection";
import { NavigationWrapperSection } from "../HyfixMainPageScreen/sections/NavigationWrapperSection";
import { NewsUpdatesSection } from "../HyfixMainPageScreen/sections/NewsUpdatesSection/NewsUpdatesSection";
import { ApplicationsIntroWrapperSection } from "../HyfixMainPageWrapper/sections/ApplicationsIntroWrapperSection/ApplicationsIntroWrapperSection";
import { KeyAccomplishmentsSection } from "../HyfixMainPageWrapper/sections/KeyAccomplishmentsSection/KeyAccomplishmentsSection";
import { SectionNodeComponentSection } from "../HyfixMainPageWrapper/sections/SectionNodeComponentSection/SectionNodeComponentSection";
import { ApplicationsIntroSection } from "./sections/ApplicationsIntroSection";
import { CommercialIndustrialDronesSection } from "./sections/CommercialIndustrialDronesSection";
import { ConsumerFpvDronesSection } from "./sections/ConsumerFpvDronesSection";
import { FooterSection } from "./sections/FooterSection";
import { GroundRoboticsSection } from "./sections/GroundRoboticsSection/GroundRoboticsSection";
import { PublicSectorSecurityDronesSection } from "./sections/PublicSectorSecurityDronesSection/PublicSectorSecurityDronesSection";

export const HyfixMainPage = (): JSX.Element => {
  return (
    <div
      className="overflow-hidden bg-[url(https://c.animaapp.com/mlqxi4snA5QXFn/img/hyfix-website-layout-white-bg-01-1.png)] bg-cover bg-center bg-no-repeat bg-fixed w-full min-w-0 min-h-screen relative"
      style={{ backgroundAttachment: 'fixed', backgroundSize: 'cover' }}
      data-model-id="209:7"
    >
      <NavigationWrapperSection />
      <ApplicationsIntroSection />
      <ConsumerFpvDronesSection />
      <CommercialIndustrialDronesSection />
      <PublicSectorSecurityDronesSection />
      <GroundRoboticsSection />
      <FooterSection />
    </div>
  );
};
