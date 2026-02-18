import { Button } from "../../../../components/ui/button";
import { SectionDivider } from "../../../../components/ui/section-divider";
import { Separator } from "../../../../components/ui/separator";

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

export const SectionNodeComponentSection = (): JSX.Element => {
  return (
    <footer className="relative w-full bg-transparent">
      <div className="relative w-full bg-[linear-gradient(180deg,rgba(255,255,255,0.15)_0%,transparent_100%)]">
        <div className="w-full max-w-[1920px] mx-auto px-4">
          <SectionDivider />
        </div>

        <div className="flex flex-col items-center justify-center gap-6 px-4 py-10">
          <img
            className="w-[257px] h-[79px] object-contain translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms]"
            alt="Final FILE HYFIX"
            src="https://c.animaapp.com/mlqxi4snA5QXFn/img/final-file-hyfix-black-bold-bottom-text-1-5.png"
          />

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
            <p className="[font-family:'Goli-Regular',Helvetica] font-normal text-black text-[17px] tracking-[0] leading-[normal]">
              Ready to learn more ?
            </p>
            <Button
              variant="outline"
              className="h-auto px-[35px] py-[7px] rounded-[5px] border-black hover:bg-black hover:text-white transition-colors"
            >
              <span className="[font-family:'Goli-Medium',Helvetica] font-medium text-[17px] tracking-[0] leading-[normal]">
                Contact Us
              </span>
            </Button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 [font-family:'Goli-Regular',Helvetica] font-normal text-black text-[17px] tracking-[0] leading-[normal] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
            <span className="[font-family:'Goli-Bold',Helvetica] font-bold">
              SOCIAL:
            </span>
            {socialLinks.map((link, index) => (
              <span key={link.name} className="flex items-center gap-2">
                {index > 0 && <span className="text-gray-400 select-none">|</span>}
                <a
                  href={link.url}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="underline hover:no-underline transition-all"
                >
                  {link.name}
                </a>
              </span>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 [font-family:'Goli-Regular',Helvetica] font-normal text-black text-[17px] text-center tracking-[0] leading-[normal] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]">
            {legalLinks.map((link, index) => (
              <span key={link.name} className="flex items-center gap-2">
                {index > 0 && <span className="text-gray-400 select-none">|</span>}
                <a href={link.url} className="hover:underline transition-all">
                  {link.name}
                </a>
              </span>
            ))}
          </div>

          <p className="[font-family:'Goli-Regular',Helvetica] font-normal text-black text-[17px] text-center tracking-[0] leading-[normal] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:800ms]">
            © HYFIX.AI 2026 All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};
