import { Card, CardContent } from "../../../../components/ui/card";
import { SectionDivider } from "../../../../components/ui/section-divider";
import { useCountUp } from "../../../../hooks/useCountUp";
import { useInView } from "../../../../hooks/useInView";

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
        {/* heading: animate when in view */}
        <SectionHeading />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-[1200px] mx-auto">
          {accomplishments.map((item, index) => (
            <AccomplishmentCard key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const SectionHeading = (): JSX.Element => {
  const { ref, inView } = useInView({ threshold: 0.2, rootMargin: "-10%" });

  return (
    <h2
      ref={ref as any}
      style={{ transitionDelay: "0ms" }}
      className={`${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"} will-change-transform transition-all duration-700 ease-out [font-family:'Hind',Helvetica] font-bold text-black text-2xl md:text-3xl text-center tracking-[0] leading-[normal] mb-6`}
    >
      Key Accomplishments
    </h2>
  );
};

const AccomplishmentCard = ({ item, index }: { item: any; index: number }): JSX.Element => {
  const { ref, inView } = useInView({ threshold: 0.2, rootMargin: "-10%" });

  const initialTransform = index % 2 === 0 ? "-translate-x-6 translate-y-3" : "translate-x-6 translate-y-3";
  const activeTransform = "translate-x-0 translate-y-0";

  return (
    <div
      ref={ref as any}
      style={{ transitionDelay: item.delay }}
      className={`will-change-transform transition-transform transition-opacity duration-700 ease-out ${inView ? `opacity-100 ${activeTransform}` : `opacity-0 ${initialTransform}`}`}
    >
      <Card className={`rounded-[20px] border border-solid border-[#b3b4b4cc] shadow-[0px_10px_20px_2px_#275fe140] bg-[linear-gradient(180deg,rgba(255,255,255,1)_0%,rgba(217,232,255,0.5)_100%)] hover:scale-105 hover:shadow-[0px_15px_30px_3px_#275fe150]`}> 
        <CardContent className="p-6 min-h-[180px] flex items-center justify-center text-center">
          <p className="m-0 [font-family:'Hind',Helvetica] font-normal text-black text-lg md:text-xl tracking-[0] leading-[normal]">
            {item.text}
          </p>
        </CardContent>
      </Card>
    </div>
  );
};
