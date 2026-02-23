import { Button } from "../../../../components/ui/button";
import { SectionDivider } from "../../../../components/ui/section-divider";
import { Separator } from "../../../../components/ui/separator";
import { useInView } from "../../../../hooks/useInView";

const socialLinks = [
  { name: "X", url: "https://x.com/hyfixai" },
  { name: "YouTube", url: "https://www.youtube.com/@HYFIXAI" },
  { name: "LinkedIn", url: "https://www.linkedin.com/company/hyfix" },
];

const legalLinks = [
  { name: "Terms & Conditions", url: "https://cdn.shopify.com/s/files/1/0617/8360/5461/files/HYFIX_Terms_Conditions_2025.pdf?v=1765307120" },
  { name: "Privacy Policy", url: "https://cdn.shopify.com/s/files/1/0617/8360/5461/files/GEODNET_HYFIX_Privacy_Policy_8f4c53f1-3980-4f64-9bbe-4af146dde45a.pdf?v=1761165629" },
  { name: "Refund Policy", url: "https://cdn.shopify.com/s/files/1/0617/8360/5461/files/HYFIX_Return_Policy_Nov_2025.pdf?v=1763068073" },
];

export const SectionNodeComponentSection = (): JSX.Element => {
  return (
    <footer className="relative w-full bg-transparent" style={{ paddingBottom: 'max(2rem, env(safe-area-inset-bottom))' }}>
      <div className="relative w-full bg-transparent">
        <div className="w-full max-w-[1920px] mx-auto px-4">
          <SectionDivider />
        </div>

        <div className="flex flex-col items-center justify-center gap-6 px-4 py-10">
          <LogoAndCTA />
          <SocialRow />
          <LegalRow />
          <FooterCopy />
        </div>
      </div>
    </footer>
  );
};

const LogoAndCTA = (): JSX.Element => {
  const { ref: logoRef, inView: logoInView } = useInView({ threshold: 0.2 });

  return (
    <>
      <img
        ref={logoRef as any}
        className={`w-[257px] h-[79px] object-contain ${logoInView ? "animate-fade-in opacity-100 translate-y-0" : "translate-y-[-1rem] opacity-0"} [--animation-delay:0ms]`}
        alt="Final FILE HYFIX"
        src="https://c.animaapp.com/mlqxi4snA5QXFn/img/final-file-hyfix-black-bold-bottom-text-1-5.png"
      />

      <div className={`${logoInView ? "animate-fade-in opacity-100 translate-y-0" : "translate-y-[-1rem] opacity-0"} [--animation-delay:200ms] flex flex-col sm:flex-row items-center justify-center gap-4`}>
        <p className="[font-family:'Goli-Regular',Helvetica] font-normal text-black text-[17px] tracking-[0] leading-[normal]">
          Ready to learn more ?
        </p>
        <Button
          variant="outline"
          className="h-auto px-[35px] py-[7px] rounded-[5px] border-black hover:bg-black hover:text-white transition-colors"
          onClick={() => window.open("https://share-na2.hsforms.com/2liB_rdDiRCWFkfQpIporQwee4rg", "_blank")}
        >
          <span className="[font-family:'Goli-Medium',Helvetica] font-medium text-[17px] tracking-[0] leading-[normal]">
            Contact Us
          </span>
        </Button>
      </div>
    </>
  );
};

const SocialRow = (): JSX.Element => {
  const { ref, inView } = useInView({ threshold: 0.2 });

  const socialLinks = [
    { name: "X", url: "https://x.com/hyfixai" },
    { name: "YouTube", url: "https://www.youtube.com/@HYFIXAI" },
    { name: "LinkedIn", url: "https://www.linkedin.com/company/hyfix" },
  ];

  return (
    <div ref={ref as any} className={`${inView ? "animate-fade-in opacity-100 translate-y-0" : "translate-y-[-1rem] opacity-0"} [--animation-delay:400ms] flex flex-wrap items-center justify-center gap-2 [font-family:'Goli-Regular',Helvetica] font-normal text-black text-[17px] tracking-[0] leading-[normal]`}>
      <span className="[font-family:'Goli-Bold',Helvetica] font-bold">SOCIAL:</span>
      {socialLinks.map((link, index) => (
        <span key={link.name} className="flex items-center gap-2">
          {index > 0 && <span className="text-gray-400 select-none">|</span>}
          <a href={link.url} rel="noopener noreferrer" target="_blank" className="underline hover:no-underline transition-all">
            {link.name}
          </a>
        </span>
      ))}
    </div>
  );
};

const LegalRow = (): JSX.Element => {
  const { ref, inView } = useInView({ threshold: 0.2 });
  const legalLinks = [
    { name: "Terms & Conditions", url: "https://cdn.shopify.com/s/files/1/0617/8360/5461/files/HYFIX_Terms_Conditions_2025.pdf?v=1765307120" },
    { name: "Privacy Policy", url: "https://cdn.shopify.com/s/files/1/0617/8360/5461/files/GEODNET_HYFIX_Privacy_Policy_8f4c53f1-3980-4f64-9bbe-4af146dde45a.pdf?v=1761165629" },
    { name: "Refund Policy", url: "https://cdn.shopify.com/s/files/1/0617/8360/5461/files/HYFIX_Return_Policy_Nov_2025.pdf?v=1763068073" },
  ];

  return (
    <div ref={ref as any} className={`${inView ? "animate-fade-in opacity-100 translate-y-0" : "translate-y-[-1rem] opacity-0"} [--animation-delay:600ms] flex flex-wrap items-center justify-center gap-2 [font-family:'Goli-Regular',Helvetica] font-normal text-black text-[17px] text-center tracking-[0] leading-[normal]`}>
      {legalLinks.map((link, index) => (
        <span key={link.name} className="flex items-center gap-2">
          {index > 0 && <span className="text-gray-400 select-none">|</span>}
          <a href={link.url} target="_blank" rel="noopener noreferrer" className="hover:underline transition-all" onClick={(e) => { e.preventDefault(); window.open(link.url, "_blank", "noopener,noreferrer"); }}>
            {link.name}
          </a>
        </span>
      ))}
    </div>
  );
};

const FooterCopy = (): JSX.Element => {
  const { ref, inView } = useInView({ threshold: 0.2 });

  return (
    <p ref={ref as any} className={`${inView ? "animate-fade-in opacity-100 translate-y-0" : "translate-y-[-1rem] opacity-0"} [--animation-delay:800ms] [font-family:'Goli-Regular',Helvetica] font-normal text-black text-[17px] text-center tracking-[0] leading-[normal]`}>
      © HYFIX.AI 2026 All Rights Reserved
    </p>
  );
};
