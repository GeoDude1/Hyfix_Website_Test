import { Link, useLocation } from "react-router-dom";
import { Button } from "../../../../components/ui/button";
import { SectionDivider } from "../../../../components/ui/section-divider";

const navigationItems = [
  {
    label: "Home",
    path: "/hyfixu95mainu95page-1-white-homeu95v2",
  },
  {
    label: "About",
    path: "/hyfixu95mainu95page-1-white-about",
  },
  {
    label: "Applications",
    path: "/hyfixu95mainu95page-1-white-application",
  },
];

export const NavigationWrapperSection = (): JSX.Element => {
  const location = useLocation();

  return (
    <header className="relative w-full min-w-full h-auto z-10">
      <nav className="relative w-full min-w-full h-auto md:min-h-[84px] md:h-[84px] bg-[linear-gradient(180deg,rgba(255,255,255,0.8)_0%,rgba(237,237,237,0.8)_100%)] translate-y-[-1rem] animate-fade-in opacity-0">
        <div className="relative w-full max-w-[1920px] mx-auto px-4 sm:px-6 py-3 md:py-0 md:h-full md:min-h-[84px]">
          <div className="hidden md:flex md:items-center md:justify-between h-full">
            {/* Logo - Left */}
            <div className="flex justify-start flex-shrink-0">
              <Link to="/hyfixu95mainu95page-1-white-homeu95v2">
                <img
                  className="w-[140px] md:w-[160px] lg:w-[180px] h-auto object-contain cursor-pointer hover:opacity-80 transition-opacity"
                  alt="Final FILE HYFIX"
                  src="https://c.animaapp.com/mlqxi4snA5QXFn/img/final-file-hyfix-black-bold-bottom-text-1-5.png"
                />
              </Link>
            </div>

            {/* Navigation - About aligned to true center (equal-width slots so middle item is centered) */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-4 md:gap-6 lg:gap-8">
              {navigationItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.path}
                  className={`min-w-[90px] md:min-w-[100px] lg:min-w-[110px] text-center [font-family:'Goli-Medium',Helvetica] text-sm md:text-base lg:text-[18px] tracking-[0] leading-[normal] transition-all hover:text-[#43aaff] cursor-pointer ${
                    location.pathname === item.path ? "font-bold text-black" : "font-medium text-black"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Buttons - Right */}
            <div className="flex items-center justify-end gap-2 flex-shrink-0">
              <Button
                className="h-auto flex items-center justify-center gap-2.5 px-2 md:px-3 lg:px-4 py-[5px] rounded-[5px] border border-solid border-[#43aaff] bg-[linear-gradient(180deg,rgba(98,183,243,1)_0%,rgba(32,122,219,1)_100%)] [font-family:'Goli-Medium',Helvetica] font-medium text-white text-xs md:text-sm tracking-[0] leading-[normal] transition-[transform,box-shadow] hover:scale-105 hover:shadow-lg"
                onClick={() => window.open("https://store.geodnet.com", "_blank")}
              >
                GEODNET Store
              </Button>
              <Button
                className="h-auto flex items-center justify-center gap-2.5 px-2 md:px-3 lg:px-4 py-[5px] rounded-[5px] border border-solid border-[#43aaff] bg-[linear-gradient(180deg,rgba(98,183,243,1)_0%,rgba(32,122,219,1)_100%)] [font-family:'Goli-Medium',Helvetica] font-medium text-white text-xs md:text-sm tracking-[0] leading-[normal] transition-[transform,box-shadow] hover:scale-105 hover:shadow-lg"
                onClick={() => window.location.href = "mailto:info@hyfix.ai?subject=Contact%20Us"}
              >
                Contact Us
              </Button>
            </div>
          </div>

          {/* Mobile Layout: logo + compact buttons on row 1; nav with About in the middle on row 2 */}
          <div className="flex md:hidden flex-col gap-3 w-full min-w-0">
            <div className="flex items-center justify-between gap-2">
              <Link to="/hyfixu95mainu95page-1-white-homeu95v2" className="flex-shrink-0">
                <img
                  className="w-[120px] sm:w-[140px] h-auto object-contain cursor-pointer hover:opacity-80 transition-opacity"
                  alt="Final FILE HYFIX"
                  src="https://c.animaapp.com/mlqxi4snA5QXFn/img/final-file-hyfix-black-bold-bottom-text-1-5.png"
                />
              </Link>
              <div className="flex items-center gap-1.5 flex-shrink-0">
                <Button
                  className="h-auto px-2 py-1.5 rounded-[5px] border border-solid border-[#43aaff] bg-[linear-gradient(180deg,rgba(98,183,243,1)_0%,rgba(32,122,219,1)_100%)] [font-family:'Goli-Medium',Helvetica] font-medium text-white text-[11px] sm:text-xs tracking-[0] leading-tight"
                  onClick={() => window.open("https://store.geodnet.com", "_blank")}
                >
                  GEODNET Store
                </Button>
                <Button
                  className="h-auto px-2 py-1.5 rounded-[5px] border border-solid border-[#43aaff] bg-[linear-gradient(180deg,rgba(98,183,243,1)_0%,rgba(32,122,219,1)_100%)] [font-family:'Goli-Medium',Helvetica] font-medium text-white text-[11px] sm:text-xs tracking-[0] leading-tight"
                  onClick={() => window.location.href = "mailto:info@hyfix.ai?subject=Contact%20Us"}
                >
                  Contact Us
                </Button>
              </div>
            </div>
            {/* Nav: row spans full width of container so 50% is true center */}
            <div className="relative -mx-4 sm:-mx-6 w-[calc(100%+2rem)] sm:w-[calc(100%+3rem)] min-h-[44px] pb-2">
              <div className="absolute left-1/2 top-0 flex -translate-x-1/2 items-center gap-6">
                {navigationItems.map((item) => (
                  <Link
                    key={item.label}
                    to={item.path}
                    className={`min-h-[44px] flex items-center py-2 px-1 whitespace-nowrap [font-family:'Goli-Medium',Helvetica] text-sm tracking-[0] leading-[normal] transition-all hover:text-[#43aaff] cursor-pointer ${
                      location.pathname === item.path ? "font-bold text-black" : "font-medium text-black"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="relative w-full min-w-full z-10">
        <SectionDivider />
      </div>
    </header>
  );
};
