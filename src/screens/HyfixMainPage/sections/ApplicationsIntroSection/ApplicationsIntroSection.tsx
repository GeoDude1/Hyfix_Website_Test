export const ApplicationsIntroSection = (): JSX.Element => {
  return (
    <section className="w-full py-12 px-4">
      <div className="max-w-6xl mx-auto text-center space-y-4">
        <h2 className="[font-family:'Hind',Helvetica] font-bold text-[#030303] text-3xl md:text-4xl tracking-[0] leading-normal translate-y-[-1rem] animate-fade-in opacity-0">
          Applications
        </h2>

        <p className="[font-family:'Hind',Helvetica] font-normal text-[#030303] text-xl md:text-2xl tracking-[0] leading-normal max-w-6xl mx-auto translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
          From tiny micro drones to safety critical autonomous systems, the HYFIX Autonomous Systems Chip enables a new level of integration and performance.
        </p>
      </div>
    </section>
  );
};
