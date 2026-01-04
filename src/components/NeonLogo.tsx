'use client';

interface NeonLogoProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function NeonLogo({ size = 'md', className = '' }: NeonLogoProps) {
  const sizes = {
    sm: { width: 32, height: 32 },
    md: { width: 40, height: 40 },
    lg: { width: 56, height: 56 },
  };

  const { width, height } = sizes[size];

  return (
    <div className={`relative ${className}`} style={{ width, height }}>
      {/* Pulsing glow background */}
      <div className="absolute inset-0 rounded-full bg-blue-500/20 dark:bg-red-500/20 blur-xl animate-pulse" />

      <svg
        width={width}
        height={height}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="relative z-10"
      >
        <defs>
          {/* Neon glow filter */}
          <filter id="glow-filter" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <g filter="url(#glow-filter)">
          {/* Center pulsing node */}
          <circle
            cx="50"
            cy="50"
            r="8"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            className="text-blue-500 dark:text-red-500"
          >
            <animate
              attributeName="r"
              values="8;11;8"
              dur="2s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              values="0.5;1;0.5"
              dur="2s"
              repeatCount="indefinite"
            />
          </circle>

          {/* Top left */}
          <circle
            cx="20"
            cy="20"
            r="5"
            fill="currentColor"
            className="text-cyan-400 dark:text-orange-400"
          />
          <line
            x1="24" y1="24" x2="46" y2="46"
            stroke="currentColor"
            strokeWidth="2"
            opacity="0.6"
            className="text-cyan-400 dark:text-orange-400"
          />

          {/* Top right */}
          <circle
            cx="80"
            cy="20"
            r="5"
            fill="currentColor"
            className="text-violet-400 dark:text-pink-400"
          />
          <line
            x1="76" y1="24" x2="54" y2="46"
            stroke="currentColor"
            strokeWidth="2"
            opacity="0.6"
            className="text-violet-400 dark:text-pink-400"
          />

          {/* Bottom left */}
          <circle
            cx="30"
            cy="75"
            r="5"
            fill="currentColor"
            className="text-blue-400 dark:text-red-400"
          />
          <line
            x1="33" y1="72" x2="47" y2="54"
            stroke="currentColor"
            strokeWidth="2"
            opacity="0.6"
            className="text-blue-400 dark:text-red-400"
          />

          {/* Bottom right */}
          <circle
            cx="70"
            cy="75"
            r="5"
            fill="currentColor"
            className="text-purple-400 dark:text-rose-400"
          />
          <line
            x1="67" y1="72" x2="53" y2="54"
            stroke="currentColor"
            strokeWidth="2"
            opacity="0.6"
            className="text-purple-400 dark:text-rose-400"
          />

          {/* Middle left */}
          <circle
            cx="15"
            cy="50"
            r="4"
            fill="currentColor"
            className="text-sky-400 dark:text-amber-400"
          />
          <line
            x1="19" y1="50" x2="42" y2="50"
            stroke="currentColor"
            strokeWidth="1.5"
            opacity="0.5"
            className="text-sky-400 dark:text-amber-400"
          />

          {/* Middle right */}
          <circle
            cx="85"
            cy="50"
            r="4"
            fill="currentColor"
            className="text-indigo-400 dark:text-fuchsia-400"
          />
          <line
            x1="81" y1="50" x2="58" y2="50"
            stroke="currentColor"
            strokeWidth="1.5"
            opacity="0.5"
            className="text-indigo-400 dark:text-fuchsia-400"
          />
        </g>
      </svg>
    </div>
  );
}
