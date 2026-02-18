/**
 * Single shared horizontal section divider.
 * Solid line so it looks identical on every page and background.
 */
export const SectionDivider = (): JSX.Element => (
  <div className="w-full flex-shrink-0">
    <div
      className="w-full flex-shrink-0"
      style={{
        height: "2px",
        minHeight: "2px",
        maxHeight: "2px",
        background: "#d1d5db",
        opacity: 0.7,
      }}
      aria-hidden
    />
  </div>
);
