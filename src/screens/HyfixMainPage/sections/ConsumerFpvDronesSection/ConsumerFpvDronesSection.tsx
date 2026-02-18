import { SectionDivider } from "../../../../components/ui/section-divider";

export const ConsumerFpvDronesSection = (): JSX.Element => {
  const benefits = [
    "Ultra-integrated electronics",
    "Precision localization and control",
    "Low-power extends battery life",
    "Light-weight",
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
              alt="Micro drone"
              src="https://c.animaapp.com/mlqxi4snA5QXFn/img/micro-drone.png"
            />
          </div>

          <div className="flex flex-col gap-6 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
            <h2 className="[font-family:'Hind',Helvetica] font-bold text-black text-2xl md:text-3xl leading-normal whitespace-nowrap">
              Consumer and FPV Drones
            </h2>

            <div className="[font-family:'Hind',Helvetica] text-black text-xl md:text-2xl leading-normal">
              <p className="font-bold mb-3 whitespace-nowrap">Benefits:</p>
              <ul className="space-y-2 font-normal list-disc list-inside ml-6">
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
