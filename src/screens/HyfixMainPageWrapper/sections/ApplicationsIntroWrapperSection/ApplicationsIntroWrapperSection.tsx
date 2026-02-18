import { Card, CardContent } from "../../../../components/ui/card";

export const ApplicationsIntroWrapperSection = (): JSX.Element => {
  return (
    <section className="relative w-full pt-4 md:pt-6 pb-10 md:pb-12 px-4">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="[font-family:'Hind',Helvetica] font-bold text-black text-2xl md:text-3xl lg:text-4xl text-center tracking-[0] leading-[normal] mb-4 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms]">
          About HYFIX
        </h2>

        <p className="[font-family:'Hind',Helvetica] font-normal text-black text-base md:text-lg lg:text-xl text-center tracking-[0] leading-[1.5] max-w-3xl mx-auto mb-10 md:mb-12 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
          HYFIX Spatial Intelligence, Inc. is a U.S.-based semiconductor company focused on Autonomous Systems Chips for drones and robotics.
        </p>

        {/* 2x2 cards - mobile: single column order; desktop: two columns + center divider (Figma) */}
        <div className="relative w-full mb-10 md:mb-12">
          {/* Mobile: 2x2 grid in reading order */}
          <div className="grid grid-cols-1 gap-6 md:hidden">
            {infoCards.map((card, index) => (
              <Card
                key={`info-card-${index}`}
                className="rounded-[20px] border border-solid border-[#b3b4b4cc] shadow-[0px_10px_20px_2px_#275fe140] bg-[linear-gradient(180deg,rgba(255,255,255,1)_0%,rgba(217,232,255,0.5)_100%)] translate-y-[-1rem] animate-scale-in opacity-0 hover:scale-105 hover:shadow-[0px_15px_30px_3px_#275fe150] transition-all duration-300"
                style={{ "--animation-delay": `${400 + index * 100}ms` } as React.CSSProperties}
              >
                <CardContent className="p-6 flex flex-col items-center justify-center min-h-[130px] text-center">
                  <h3 className="[font-family:'Hind',Helvetica] font-bold text-black text-xl tracking-[0] leading-[normal] mb-2">
                    {card.title}
                  </h3>
                  <div className="w-[100px] h-[3px] mb-2">
                    <img className="w-full h-full" alt="" src="https://c.animaapp.com/mlqxi4snA5QXFn/img/line-4.svg" role="presentation" />
                  </div>
                  <p className="[font-family:'Hind',Helvetica] font-normal text-black text-base tracking-[0] leading-[1.5] whitespace-pre-line">
                    {card.content}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Desktop: two columns with center divider and more spacing */}
          <div className="relative w-full hidden md:flex md:items-stretch">
            <div className="flex-1 flex flex-col gap-6 md:gap-8 pr-12 lg:pr-16 xl:pr-20">
              {[infoCards[0], infoCards[2]].map((card, index) => (
                <Card
                  key={`info-card-${index}-l`}
                  className="rounded-[20px] border border-solid border-[#b3b4b4cc] shadow-[0px_10px_20px_2px_#275fe140] bg-[linear-gradient(180deg,rgba(255,255,255,1)_0%,rgba(217,232,255,0.5)_100%)] translate-y-[-1rem] animate-scale-in opacity-0 hover:scale-105 hover:shadow-[0px_15px_30px_3px_#275fe150] transition-all duration-300"
                  style={{ "--animation-delay": `${400 + index * 100}ms` } as React.CSSProperties}
                >
                  <CardContent className="p-6 md:p-8 flex flex-col items-center justify-center min-h-[160px] text-center">
                    <h3 className="[font-family:'Hind',Helvetica] font-bold text-black text-xl md:text-2xl tracking-[0] leading-[normal] mb-2">
                      {card.title}
                    </h3>
                    <div className="w-[100px] h-[3px] mb-2">
                      <img className="w-full h-full" alt="" src="https://c.animaapp.com/mlqxi4snA5QXFn/img/line-4.svg" role="presentation" />
                    </div>
                    <p className="[font-family:'Hind',Helvetica] font-normal text-black text-base md:text-lg tracking-[0] leading-[1.5] whitespace-pre-line">
                      {card.content}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div
              className="absolute left-1/2 top-0 bottom-0 w-[3px] bg-[#c7c7c7] -translate-x-1/2 pointer-events-none"
              aria-hidden
            />
            <div className="flex-1 flex flex-col gap-6 md:gap-8 pl-12 lg:pl-16 xl:pl-20">
              {[infoCards[1], infoCards[3]].map((card, index) => (
                <Card
                  key={`info-card-${index}-r`}
                  className="rounded-[20px] border border-solid border-[#b3b4b4cc] shadow-[0px_10px_20px_2px_#275fe140] bg-[linear-gradient(180deg,rgba(255,255,255,1)_0%,rgba(217,232,255,0.5)_100%)] translate-y-[-1rem] animate-scale-in opacity-0 hover:scale-105 hover:shadow-[0px_15px_30px_3px_#275fe150] transition-all duration-300"
                  style={{ "--animation-delay": `${600 + index * 100}ms` } as React.CSSProperties}
                >
                  <CardContent className="p-6 md:p-8 flex flex-col items-center justify-center min-h-[160px] text-center">
                    <h3 className="[font-family:'Hind',Helvetica] font-bold text-black text-xl md:text-2xl tracking-[0] leading-[normal] mb-2">
                      {card.title}
                    </h3>
                    <div className="w-[100px] h-[3px] mb-2">
                      <img className="w-full h-full" alt="" src="https://c.animaapp.com/mlqxi4snA5QXFn/img/line-4.svg" role="presentation" />
                    </div>
                    <p className="[font-family:'Hind',Helvetica] font-normal text-black text-base md:text-lg tracking-[0] leading-[1.5] whitespace-pre-line">
                      {card.content}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Quote card - headshot overlapping left edge (as before), picture stays on left; text constrained */}
        <Card className="rounded-[20px] border border-solid border-[#b3b4b4cc] shadow-[0px_10px_20px_2px_#275fe140] bg-[linear-gradient(180deg,rgba(255,255,255,1)_0%,rgba(217,232,255,0.5)_100%)] max-w-[1200px] mx-auto overflow-visible translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:800ms]">
          <CardContent className="p-6 md:p-8 md:pl-[72px]">
            <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-8">
              <div className="flex justify-center md:justify-start flex-shrink-0 md:-ml-16">
                <div className="relative w-[150px] h-[150px] rounded-[75px] border-[3px] border-solid border-[#d5d5d5] flex-shrink-0">
                  <img
                    className="absolute top-[3px] left-[3px] w-[144px] h-[144px] rounded-full object-cover"
                    alt="Mike Horton"
                    src="https://c.animaapp.com/mlqxi4snA5QXFn/img/mask-group-4.png"
                  />
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <blockquote className="[font-family:'Hind',Helvetica] font-normal text-black text-base md:text-lg tracking-[0] leading-[1.5] text-left">
                  <p className="mb-4">
                    &quot;Whether you&apos;re building a palm-sized consumer drone or a heavy-lift autonomous system, the underlying problems are the same—power, precision, reliability, and security. We&apos;re giving builders a single silicon foundation that scales across use cases instead of forcing them to stitch together fragile systems from dozens of suppliers.&quot;
                  </p>
                  <footer className="[font-family:'Hind',Helvetica] text-black text-sm md:text-base">
                    <span>Mike Horton, Co-Founder &amp; CEO, </span>
                    <a
                      href="https://www.linkedin.com/in/mikeahorton/"
                      rel="noopener noreferrer"
                      target="_blank"
                      className="text-[#0a66c2] underline hover:opacity-80 transition-opacity"
                    >
                      LinkedIn
                    </a>
                  </footer>
                </blockquote>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

const infoCards = [
  {
    title: "Headquarters",
    content: "Santa Clara, CA\nFounded January 2022",
  },
  {
    title: "Industry",
    content: "Semiconductors for autonomous systems + geospatial technology",
  },
  {
    title: "Built in U.S.",
    content: "Building a domestic drone supply chain",
  },
  {
    title: "Team",
    content:
      "20 person team with decades of experience in autonomy and IC design",
  },
];
