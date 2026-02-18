import { SectionDivider } from "../../../../components/ui/section-divider";

export const PublicSectorSecurityDronesSection = (): JSX.Element => {
  const benefits = [
    "Centimeter accurate positioning",
    "Long-range digital video transmission",
    "Supports redundant safety sensors",
    "Camera-based AI support",
  ];

  return (
    <section className="relative w-full py-0.5">
      <div className="w-full max-w-[1920px] mx-auto px-4 mb-0.5">
        <SectionDivider />
      </div>

      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center items-center translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
            <img
              className="w-[650px] h-[650px] object-contain"
              alt="Commercial and Industrial Drones"
              src="https://c.animaapp.com/mlqxi4snA5QXFn/img/ag-drones.png"
            />
          </div>

          <div className="space-y-5 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
            <h2 className="[font-family:'Hind',Helvetica] font-bold text-black text-2xl md:text-3xl leading-normal whitespace-nowrap">
              Commercial and Industrial Drones
            </h2>

            <div className="[font-family:'Hind',Helvetica] text-xl md:text-2xl leading-normal">
              <p className="font-bold text-black mb-3 whitespace-nowrap">Benefits:</p>

              <ul className="space-y-2 text-black font-normal list-disc list-inside ml-6">
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
