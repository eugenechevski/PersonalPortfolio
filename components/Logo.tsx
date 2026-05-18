export function Logo({ size = 40, className }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      className={className}
      aria-label="EC monogram"
    >
      <rect
        x="5"
        y="5"
        width="90"
        height="90"
        rx="16"
        stroke="currentColor"
        strokeWidth="3"
      />
      <text
        x="50"
        y="62"
        textAnchor="middle"
        fill="currentColor"
        fontFamily="Georgia, serif"
        fontSize="44"
        fontWeight="700"
        letterSpacing="-2"
      >
        EC
      </text>
      <line
        x1="22"
        y1="76"
        x2="78"
        y2="76"
        stroke="currentColor"
        strokeWidth="2"
        opacity="0.4"
      />
    </svg>
  );
}
