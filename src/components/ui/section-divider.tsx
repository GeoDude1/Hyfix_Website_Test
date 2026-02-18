/**
 * Single shared horizontal section divider.
 * Solid line so it looks identical on every page and background.
 */
export const SectionDivider = (): JSX.Element => (
  <div className="w-full flex-shrink-0 flex justify-center">
    <div
      className="w-full max-w-[1100px] h-[2px] bg-[#d1d5db] opacity-70"
      aria-hidden
    />
  </div>
);
