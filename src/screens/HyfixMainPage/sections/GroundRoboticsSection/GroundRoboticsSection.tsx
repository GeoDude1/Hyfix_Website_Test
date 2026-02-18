import { SectionDivider } from "../../../../components/ui/section-divider";

export const GroundRoboticsSection = (): JSX.Element => {
  const benefits = [
    "Centimeter accurate positioning",
    "Resilient positioning in harsh environments",
    "Full-featured motor control",
    "Obstacle avoidance",
  ];

  return (
    <section className="relative w-full py-0.5">
      <div className="w-full max-w-[1920px] mx-auto px-4 mb-0.5">
        <SectionDivider />
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          <div className="flex justify-center items-center translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
            <img
              className="w-[650px] h-[650px] object-contain"
              alt="Verde AI mower"
              src="https://c.animaapp.com/mlqxi4snA5QXFn/img/verde-ai-mower.png"
            />
          </div>

          <div className="flex flex-col gap-6 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
            <h2 className="[font-family:'Hind',Helvetica] font-bold text-black text-2xl md:text-3xl tracking-[0] leading-normal whitespace-nowrap">
              Ground Robotics
            </h2>

            <div className="[font-family:'Hind',Helvetica] text-xl md:text-2xl tracking-[0] leading-normal">
              <p className="font-bold text-black mb-3 whitespace-nowrap">Benefits:</p>

              <ul className="text-black space-y-2 font-normal list-disc list-inside ml-6">
                {benefits.map((benefit, index) => (
                  <li key={index} className="whitespace-nowrap">
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
