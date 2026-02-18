import { SectionDivider } from "../../components/ui/section-divider";
import { ApplicationsIntroWrapperSection } from "./sections/ApplicationsIntroWrapperSection/ApplicationsIntroWrapperSection";
import { NavigationWrapperSection } from "../HyfixMainPageScreen/sections/NavigationWrapperSection";
import { KeyAccomplishmentsSection } from "./sections/KeyAccomplishmentsSection/KeyAccomplishmentsSection";
import { SectionNodeComponentSection } from "./sections/SectionNodeComponentSection/SectionNodeComponentSection";

const investorLogos = [
  {
    src: "https://c.animaapp.com/mlqxi4snA5QXFn/img/craft-logo-2.png",
    alt: "Craft logo",
    className: "w-full max-w-[320px] h-auto object-contain",
  },
  {
    src: "https://c.animaapp.com/mlqxi4snA5QXFn/img/catapult-logo-black-1.png",
    alt: "Catapult logo black",
    className: "w-full max-w-[420px] h-auto object-contain",
  },
  {
    src: "https://c.animaapp.com/mlqxi4snA5QXFn/img/multicoin-capital-logo-black-1.png",
    alt: "Multicoin capital",
    className: "w-full max-w-[520px] h-auto object-contain",
  },
  {
    src: "https://c.animaapp.com/mlqxi4snA5QXFn/img/finality-logo-black-1.png",
    alt: "Finality logo black",
    className: "w-full max-w-[300px] h-auto object-contain",
  },
];

export const HyfixMainPageWrapper = (): JSX.Element => {
  return (
    <div
      className="overflow-hidden bg-[url(https://c.animaapp.com/mlqxi4snA5QXFn/img/hyfix-website-layout-white-bg-01-1-1.png)] bg-cover bg-center bg-no-repeat bg-fixed w-full min-w-0 min-h-screen relative"
      style={{ backgroundAttachment: 'fixed', backgroundSize: 'cover' }}
      data-model-id="207:420"
    >
      <section className="w-full relative [--animation-delay:0ms] translate-y-[-1rem] animate-fade-in opacity-0">
        <NavigationWrapperSection />
      </section>

      <section className="w-full relative pt-6 pb-2 px-4 [--animation-delay:200ms] translate-y-[-1rem] animate-fade-in opacity-0">
        <div className="max-w-6xl mx-auto text-center">
          <img
            className="w-[380px] sm:w-[500px] md:w-[560px] lg:w-[620px] h-auto object-contain mx-auto"
            alt="HYFIX Logo"
            src="https://c.animaapp.com/mlqxi4snA5QXFn/img/final-file-hyfix-black-bold-bottom-text-1-5.png"
          />
        </div>
      </section>

      <section className="w-full relative [--animation-delay:400ms] translate-y-[-1rem] animate-fade-in opacity-0 -mt-2">
        <ApplicationsIntroWrapperSection />
      </section>

      <section className="w-full relative translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]">
        <KeyAccomplishmentsSection />
      </section>

      <section className="w-full relative py-8 px-4 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:800ms]">
        <div className="max-w-6xl mx-auto">
          <div className="w-full max-w-[1920px] mx-auto px-4 mb-6">
            <SectionDivider />
          </div>
          
          <h2 className="[font-family:'Hind',Helvetica] font-bold text-black text-xl md:text-2xl lg:text-3xl text-center tracking-[0] leading-normal mb-8">
            Investors
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-10 max-w-4xl mx-auto items-center justify-items-center">
            {investorLogos.map((logo, index) => (
              <div
                key={index}
                className="flex items-center justify-center w-full translate-y-[-1rem] animate-fade-in opacity-0"
                style={{ animationDelay: `${1000 + index * 100}ms` }}
              >
                <img
                  className="w-full max-w-[280px] sm:max-w-[320px] h-auto object-contain"
                  alt={logo.alt}
                  src={logo.src}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full relative translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1400ms]">
        <SectionNodeComponentSection />
      </section>
    </div>
  );
};
