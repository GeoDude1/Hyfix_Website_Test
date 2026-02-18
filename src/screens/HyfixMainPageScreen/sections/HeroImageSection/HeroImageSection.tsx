export const HeroImageSection = (): JSX.Element => {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Video Container */}
      <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
        <video
          className="absolute top-0 left-0 w-full h-full object-cover translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms]"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={`${import.meta.env.BASE_URL}drone-seethrough-02-1.webm`} type="video/webm" />
        </video>
      </div>

      {/* Text Content Below Video - pulled up to reduce gap between video and text */}
      <div className="relative w-full bg-transparent -mt-12 sm:-mt-16 md:-mt-20 lg:-mt-24 px-4 pb-2">
        <div className="container mx-auto max-w-7xl flex flex-col items-center justify-center gap-1 text-center">
          <h1 className="[font-family:'Hind',Helvetica] font-bold text-black text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center tracking-[0] leading-normal translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
            Introducing the Autonomous Systems Chip
          </h1>

          <p className="[font-family:'Hind',Helvetica] font-medium text-black text-base sm:text-lg md:text-xl lg:text-2xl text-center tracking-[0] leading-normal translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
            Built in the USA. Engineered for Autonomous Flight.
          </p>
        </div>
      </div>
    </section>
  );
};
