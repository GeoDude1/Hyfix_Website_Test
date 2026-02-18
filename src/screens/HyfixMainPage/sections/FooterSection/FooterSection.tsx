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

export const FooterSection = (): JSX.Element => {
  return (
    <footer className="relative w-full bg-transparent">
      <div className="relative w-full h-[310px] bg-[linear-gradient(180deg,rgba(255,255,255,0.15)_0%,transparent_100%)]">
        <div className="absolute top-0 left-0 w-full">
          <div className="w-full max-w-[1920px] mx-auto px-4">
            <SectionDivider />
          </div>
        </div>

        <div className="flex flex-col items-center justify-center h-full gap-6 px-4 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
          <img
            className="w-[257px] h-[79px] object-contain"
            alt="HYFIX Logo"
            src="https://c.animaapp.com/mlqxi4snA5QXFn/img/final-file-hyfix-black-bold-bottom-text-1-5.png"
          />

          <div className="flex items-center gap-4 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
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

          <div className="flex items-center gap-2 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]">
            <span className="[font-family:'Goli-Bold',Helvetica] font-bold text-black text-[17px] tracking-[0] leading-[normal]">
              SOCIAL:
            </span>
            {socialLinks.map((link, index) => (
              <div key={link.name} className="flex items-center gap-2">
                {index > 0 && <span className="[font-family:'Goli-Regular',Helvetica] text-gray-400 text-[17px] select-none">|</span>}
                <a
                  href={link.url}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="[font-family:'Goli-Regular',Helvetica] text-black text-[17px] tracking-[0] leading-[normal] underline hover:no-underline transition-all"
                >
                  {link.name}
                </a>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-2 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:800ms]">
            {legalLinks.map((link, index) => (
              <div key={link.name} className="flex items-center gap-2">
                {index > 0 && <span className="[font-family:'Goli-Regular',Helvetica] text-gray-400 text-[17px] select-none">|</span>}
                <a
                  href={link.url}
                  className="[font-family:'Goli-Regular',Helvetica] font-normal text-black text-[17px] text-center tracking-[0] leading-[normal] hover:underline transition-all"
                >
                  {link.name}
                </a>
              </div>
            ))}
          </div>

          <p className="[font-family:'Goli-Regular',Helvetica] font-normal text-black text-[17px] text-center tracking-[0] leading-[normal] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1000ms]">
            © HYFIX.AI 2026 All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};
