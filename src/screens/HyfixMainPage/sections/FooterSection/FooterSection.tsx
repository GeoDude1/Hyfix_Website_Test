import { Button } from "../../../../components/ui/button";
import { SectionDivider } from "../../../../components/ui/section-divider";

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

export const FooterSection = (): JSX.Element => {
  return (
    <footer className="relative w-full bg-transparent" style={{ paddingBottom: 'max(2rem, env(safe-area-inset-bottom))' }}>
      <div className="relative w-full bg-transparent py-5 pb-8 md:py-10 md:pb-12">
        <div className="w-full max-w-[1920px] mx-auto px-4 mb-6">
          <SectionDivider />
        </div>

        <div className="flex flex-col items-center justify-center gap-4 md:gap-6 px-4 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
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
              onClick={() => window.open("https://share-na2.hsforms.com/2liB_rdDiRCWFkfQpIporQwee4rg", "_blank")}
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
                  target="_blank"
                  rel="noopener noreferrer"
                  className="[font-family:'Goli-Regular',Helvetica] font-normal text-black text-[17px] text-center tracking-[0] leading-[normal] hover:underline transition-all"
                  onClick={(e) => { e.preventDefault(); window.open(link.url, "_blank", "noopener,noreferrer"); }}
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
