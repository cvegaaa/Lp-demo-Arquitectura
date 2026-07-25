export function Logo({ size = 28 }: { size?: number }) {
  return (
    <svg
      viewBox="0 0 32 32"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      aria-hidden="true"
    >
      <path d="M4 28 L16 6 L28 28" />
      <path d="M10 28 L16 18 L22 28" />
      <path d="M4 28 L28 28" />
    </svg>
  );
}
