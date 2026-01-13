import React from 'react';

const Logo: React.FC<{ className?: string }> = ({ className = "h-8" }) => {
  return (
    <svg 
      className={className} 
      viewBox="0 0 320 80" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Kyzerous Logo"
    >
      <g stroke="currentColor" strokeWidth="11">
        {/* Vertical Line */}
        <line x1="30" y1="2" x2="30" y2="78" />
        {/* Diagonal Top-Left to Bottom-Right */}
        <line x1="4" y1="22" x2="56" y2="58" />
        {/* Diagonal Bottom-Left to Top-Right */}
        <line x1="4" y1="58" x2="56" y2="22" />
      </g>
      
      {/* Typography */}
      <text 
        x="72" 
        y="56" 
        fill="currentColor" 
        fontFamily="'Inter', sans-serif" 
        fontSize="56" 
        fontWeight="500" 
        letterSpacing="-2.5"
      >
        kyzerous
      </text>
    </svg>
  );
};

export default Logo;