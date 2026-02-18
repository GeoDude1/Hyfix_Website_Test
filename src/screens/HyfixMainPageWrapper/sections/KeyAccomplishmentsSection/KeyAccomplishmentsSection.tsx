import { Card, CardContent } from "../../../../components/ui/card";
import { SectionDivider } from "../../../../components/ui/section-divider";
import { useCountUp } from "../../../../hooks/useCountUp";

export const KeyAccomplishmentsSection = (): JSX.Element => {
  const fundingAmount = useCountUp(15, 2000, 400);
  const stationCount = useCountUp(20000, 2500, 600);

  const accomplishments = [
    {
      text: (
        <>
          <span className="font-light">Development of the </span>
          <span className="font-bold">Autonomous Systems Chip</span>
        </>
      ),
      delay: "200ms",
    },
    {
      text: (
        <>
          <span className="font-bold">${fundingAmount}M Series Seed</span>
          <span className="font-light"> funding lead by&nbsp;&nbsp;</span>
          <span className="font-bold">Craft Ventures</span>
          <span className="font-light"> and leading investors</span>
        </>
      ),
      delay: "400ms",
    },
    {
      text: (
        <>
          <span className="font-light">Produced over </span>
          <span className="font-bold">{stationCount.toLocaleString()} GEODNET RTK</span>
          <span className="font-light"> base stations deployed globaly</span>
        </>
      ),
      delay: "600ms",
    },
    {
      text: (
        <>
          <span className="font-light">Live tracking of new </span>
          <span className="font-bold">low Earth orbit (LEO)</span>
          <span className="font-light"> satellites for anti-jam/spoof</span>
        </>
      ),
      delay: "800ms",
    },
  ];

  return (
    <section className="relative w-full py-8 px-4">
      <div className="absolute top-0 left-0 w-full">
        <div className="w-full max-w-[1920px] mx-auto px-4">
          <SectionDivider />
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto">
        <h2 className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms] [font-family:'Hind',Helvetica] font-bold text-black text-2xl md:text-3xl text-center tracking-[0] leading-[normal] mb-6">
          Key Accomplishments
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-[1200px] mx-auto">
          {accomplishments.map((item, index) => (
            <Card
              key={index}
              className={`translate-y-[-1rem] animate-scale-in opacity-0 [--animation-delay:${item.delay}] rounded-[20px] border border-solid border-[#b3b4b4cc] shadow-[0px_10px_20px_2px_#275fe140] bg-[linear-gradient(180deg,rgba(255,255,255,1)_0%,rgba(217,232,255,0.5)_100%)] min-h-[180px] hover:scale-105 hover:shadow-[0px_15px_30px_3px_#275fe150] transition-all duration-300`}
            >
              <CardContent className="flex items-center justify-center p-5 h-full">
                <p className="[font-family:'Hind',Helvetica] font-normal text-black text-lg md:text-xl tracking-[0] leading-[normal] text-center">
                  {item.text}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
