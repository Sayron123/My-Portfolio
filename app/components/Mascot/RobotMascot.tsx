// components/RobotMascotIcon.tsx
export function RobotMascotIcon({ size = 20, className }: { size?: number; className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      {/* Antenna */}
      <line x1="12" y1="2" x2="12" y2="5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="12" cy="2" r="1.3" fill="currentColor" />

      {/* Head */}
      <rect x="4" y="5" width="16" height="13" rx="5" stroke="currentColor" strokeWidth="1.5" />

      {/* Ears */}
      <rect x="1.5" y="9" width="2" height="4" rx="1" fill="currentColor" />
      <rect x="20.5" y="9" width="2" height="4" rx="1" fill="currentColor" />

      {/* Face screen */}
      <rect x="7" y="8" width="10" height="6" rx="2" fill="currentColor" opacity="0.08" />

      {/* Eyes */}
      <circle cx="10" cy="11" r="1.1" fill="currentColor" />
      <circle cx="14" cy="11" r="1.1" fill="currentColor" />

      {/* Smile */}
      <path d="M10.5 12.8 Q12 13.8 13.5 12.8" stroke="currentColor" strokeWidth="1" strokeLinecap="round" fill="none" />
    </svg>
  );
}