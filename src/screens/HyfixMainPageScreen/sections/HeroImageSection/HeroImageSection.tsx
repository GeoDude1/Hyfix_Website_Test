import { useEffect, useState } from "react";

function isIOS(): boolean {
  if (typeof navigator === "undefined") return false;
  return (
    /iPad|iPhone|iPod/.test(navigator.userAgent) ||
    (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1)
  );
}

export const HeroImageSection = (): JSX.Element => {
  const [ios, setIos] = useState(false);
  useEffect(() => {
    setIos(isIOS());
  }, []);

  return (
    <section className="relative w-full overflow-hidden">
      <div
        className={`relative w-full ${ios ? "translate-y-[-1rem]" : ""}`}
        style={{ paddingTop: "56.25%" }}
      >
        {ios ? (
          /* iOS: embed the same HTML that works in the test – video transparency shows correctly */
          <iframe
            title="Hero video"
            src={`${import.meta.env.BASE_URL}video-hero-ios.html`}
            className="absolute top-0 left-0 w-full h-full border-0 block bg-transparent"
            style={{ background: "transparent" }}
          />
        ) : (
          <>
            <video
              className="absolute top-0 left-0 w-full h-full object-cover translate-y-[-1rem] bg-transparent"
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
            >
              <source src={`${import.meta.env.BASE_URL}drone-seethrough-02-1.webm`} type="video/webm" />
              <source src={`${import.meta.env.BASE_URL}drone_ios.mov`} type="video/quicktime" />
            </video>
          </>
        )}
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
