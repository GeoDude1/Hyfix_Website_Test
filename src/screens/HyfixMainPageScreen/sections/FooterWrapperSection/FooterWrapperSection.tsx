import { Button } from "../../../../components/ui/button";
import { SectionDivider } from "../../../../components/ui/section-divider";

const socialLinks = [
  { name: "X", url: "https://x.com/hyfixai" },
  { name: "YouTube", url: "https://www.youtube.com/@HYFIXAI" },
  { name: "LinkedIn", url: "https://www.linkedin.com/company/hyfix" },
];

const legalLinks = [
  { name: "Terms & Conditions", url: "#" },
  { name: "Privacy Policy", url: "#" },
  { name: "Refund Policy", url: "#" },
];

export const FooterWrapperSection = (): JSX.Element => {
  return (
    <footer className="relative w-full bg-transparent translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
      <div className="w-full bg-[linear-gradient(180deg,rgba(255,255,255,0.15)_0%,transparent_100%)] py-12">
        <div className="w-full max-w-[1920px] mx-auto px-4 mb-10">
          <SectionDivider />
        </div>

        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col items-center gap-8">
            <img
              className="w-[257px] h-[79px] object-contain"
              alt="HYFIX Logo"
              src="https://c.animaapp.com/mlqxi4snA5QXFn/img/final-file-hyfix-black-bold-bottom-text-1-5.png"
            />

            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
              <p className="[font-family:'Goli-Regular',Helvetica] font-normal text-black text-[17px] tracking-[0] leading-[normal]">
                Ready to learn more ?
              </p>
              <Button
                variant="outline"
                className="h-auto px-[35px] py-[7px] rounded-[5px] border-black hover:bg-black hover:text-white transition-colors"
                onClick={() => window.location.href = "mailto:info@hyfix.ai?subject=Contact%20Us"}
              >
                <span className="[font-family:'Goli-Medium',Helvetica] font-medium text-[17px] tracking-[0] leading-[normal]">
                  Contact Us
                </span>
              </Button>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-2 [font-family:'Goli-Regular',Helvetica] font-normal text-black text-[17px] tracking-[0] leading-[normal]">
              <span className="[font-family:'Goli-Bold',Helvetica] font-bold">
                SOCIAL:
              </span>
              {socialLinks.map((link, index) => (
                <div key={link.name} className="flex items-center gap-2">
                  <a
                    href={link.url}
                    rel="noopener noreferrer"
                    target="_blank"
                    className="underline hover:no-underline transition-all"
                  >
                    {link.name}
                  </a>
                  {index < socialLinks.length - 1 && <span className="text-gray-400 select-none">|</span>}
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center justify-center gap-2 [font-family:'Goli-Regular',Helvetica] font-normal text-black text-[17px] text-center tracking-[0] leading-[normal]">
              {legalLinks.map((link, index) => (
                <div key={link.name} className="flex items-center gap-2">
                  <a href={link.url} className="hover:underline transition-all">
                    {link.name}
                  </a>
                  {index < legalLinks.length - 1 && <span className="text-gray-400 select-none">|</span>}
                </div>
              ))}
            </div>

            <p className="[font-family:'Goli-Regular',Helvetica] font-normal text-black text-[17px] text-center tracking-[0] leading-[normal]">
              © HYFIX.AI 2026 All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
