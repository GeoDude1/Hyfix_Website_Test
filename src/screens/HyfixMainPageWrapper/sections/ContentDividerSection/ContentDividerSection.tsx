import { Link, useLocation } from "react-router-dom";
import { Button } from "../../../../components/ui/button";
import { SectionDivider } from "../../../../components/ui/section-divider";

const navigationItems = [
  { label: "Home", path: "/home" },
  { label: "About", path: "/about" },
  { label: "Applications", path: "/applications" },
];

export const ContentDividerSection = (): JSX.Element => {
  const location = useLocation();

  return (
    <header className="relative w-full z-10">
      <nav className="w-full h-[70px] bg-[linear-gradient(180deg,rgba(255,255,255,0.8)_0%,rgba(237,237,237,0.8)_100%)] translate-y-[-1rem] animate-fade-in opacity-0">
        <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-5 h-full">
          <div className="grid grid-cols-3 items-center h-full">
            {/* Logo - Left */}
            <div className="flex justify-start">
              <Link to="/home">
                <img
                  className="w-[180px] h-[55px] object-contain cursor-pointer hover:opacity-80 transition-opacity"
                  alt="HYFIX Spatial Intelligence"
                  src="https://c.animaapp.com/mlqxi4snA5QXFn/img/final-file-hyfix-black-bold-bottom-text-1-5.png"
                />
              </Link>
            </div>

            {/* Navigation - Center */}
            <div className="flex items-center justify-center gap-[35px]">
              {navigationItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.path}
                  className={`[font-family:'Goli-Medium',Helvetica] text-[18px] tracking-[0] leading-[normal] transition-all hover:text-[#43aaff] cursor-pointer ${
                    location.pathname === item.path ? "font-bold text-black" : "font-medium text-black"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Buttons - Right */}
            <div className="flex items-center justify-end gap-2">
              <Button
                className="h-8 px-4 py-[5px] rounded-[5px] border border-solid border-[#43aaff] bg-[linear-gradient(180deg,rgba(98,183,243,1)_0%,rgba(32,122,219,1)_100%)] [font-family:'Goli-Medium',Helvetica] font-medium text-white text-sm tracking-[0] leading-[normal] transition-transform hover:scale-105"
                onClick={() => window.open("https://geodnet.com/product#list", "_blank")}
              >
                GEODNET Store
              </Button>
              <Button
                className="h-8 px-4 py-[5px] rounded-[5px] border border-solid border-[#43aaff] bg-[linear-gradient(180deg,rgba(98,183,243,1)_0%,rgba(32,122,219,1)_100%)] [font-family:'Goli-Medium',Helvetica] font-medium text-white text-sm tracking-[0] leading-[normal] transition-transform hover:scale-105"
                onClick={() => window.location.href = "mailto:info@hyfix.ai?subject=Contact%20Us"}
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <div className="relative w-full z-10">
        <div className="w-full max-w-[1920px] mx-auto">
          <SectionDivider />
        </div>
      </div>
    </header>
  );
};
