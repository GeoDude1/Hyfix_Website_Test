/**
 * Single shared horizontal section divider.
 * Full-width line across the whole page.
 */
export const SectionDivider = (): JSX.Element => (
  <div className="w-full flex-shrink-0">
    <div
      className="w-full h-[2px] bg-[#d1d5db] opacity-70 min-w-full"
      aria-hidden
    />
  </div>
);
