export function HeroIllustration() {
  return (
    <svg viewBox="0 0 480 420" role="img" aria-label="Person working at a desk" className="h-auto w-full">
      <defs>
        <linearGradient id="deskGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#6D49D1" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#D149AD" stopOpacity="0.35" />
        </linearGradient>
        <linearGradient id="figureGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#F1E7FF" />
          <stop offset="100%" stopColor="#E7D4FF" />
        </linearGradient>
      </defs>
      <rect x="20" y="220" width="440" height="120" rx="30" fill="url(#deskGradient)" />
      <circle cx="360" cy="90" r="50" fill="#F9ECFF" />
      <path
        d="M150 260 C150 210 230 190 260 210 C290 230 330 220 340 260"
        fill="#FDF6FF"
        stroke="#C6A4F4"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <rect x="120" y="170" width="70" height="110" rx="20" fill="url(#figureGradient)" />
      <circle cx="155" cy="150" r="30" fill="#FDECF8" stroke="#C899E5" strokeWidth="3" />
      <rect x="230" y="130" width="130" height="16" rx="8" fill="#F8E7FF" />
      <rect x="230" y="160" width="180" height="10" rx="5" fill="#E0C4FF" />
      <rect x="250" y="300" width="120" height="40" rx="12" fill="#F6ECFF" />
      <circle cx="250" cy="320" r="18" fill="#EAD8FF" />
      <circle cx="370" cy="320" r="18" fill="#EAD8FF" />
      <path
        d="M200 300 Q220 260 250 260 Q280 260 300 300"
        fill="#FDF2FF"
        stroke="#CEAAFF"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M80 330 C150 280 200 360 270 310"
        stroke="#E0C4FF"
        strokeWidth="5"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}
