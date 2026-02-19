import { Button } from "../../../../components/ui/button";
import { SectionDivider } from "../../../../components/ui/section-divider";
import { Link } from "react-router-dom";

const droneCategories = [
  {
    image: "https://c.animaapp.com/mlqxi4snA5QXFn/img/micro-drone.png",
    title: "Consumer and FPV drones",
  },
  {
    image: "https://c.animaapp.com/mlqxi4snA5QXFn/img/commercial-drones.png",
    title: "Public-sector and security",
  },
  {
    image: "https://c.animaapp.com/mlqxi4snA5QXFn/img/ag-drones.png",
    title: "Commercial and industrial drones",
  },
  {
    image: "https://c.animaapp.com/mlqxi4snA5QXFn/img/verde-ai-mower.png",
    title: "Ground robots",
  },
];

export const DronesAndRoboticsOverviewSection = (): JSX.Element => {
  return (
    <section className="relative w-full py-3 md:py-4 px-4">
      <div className="container mx-auto max-w-[2220px]">
        <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms] w-full mb-3">
          <div className="w-full max-w-[1920px] mx-auto px-4">
            <SectionDivider />
          </div>
        </div>

        <h2 className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms] [font-family:'Hind',Helvetica] font-bold text-black text-lg sm:text-xl md:text-2xl text-center tracking-[0] leading-[normal] mb-4 px-4">
          Enabling an Entire Generation of Drones and Robots
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 mb-4 max-w-[1400px] mx-auto">
          {droneCategories.map((category, index) => (
            <div
              key={index}
              className={`translate-y-[-1rem] animate-scale-in opacity-0 [--animation-delay:${400 + index * 100}ms] flex flex-col`}
            >
              <div className="relative overflow-hidden bg-transparent h-[160px] md:h-[180px] lg:h-[200px] flex items-center justify-center cursor-pointer hover:scale-105 transition-all duration-300">
                <img
                  className="w-full h-full object-contain"
                  alt={category.title}
                  src={category.image}
                />
              </div>
              <p className="[font-family:'Hind',Helvetica] font-medium text-black text-sm md:text-base text-center tracking-[0] leading-[1.3] mt-2">
                {category.title}
              </p>
            </div>
          ))}
        </div>

        <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1200ms] flex justify-center">
          <Link to="/applications">
            <Button 
              className="h-auto w-auto px-5 md:px-6 py-[6px] rounded-[5px] border border-[#43aaff] bg-[linear-gradient(180deg,rgba(98,183,243,1)_0%,rgba(32,122,219,1)_100%)] text-white [font-family:'Goli-Medium',Helvetica] font-medium text-base md:text-lg tracking-[0] leading-[normal] hover:opacity-90 transition-opacity"
            >
              Applications
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
