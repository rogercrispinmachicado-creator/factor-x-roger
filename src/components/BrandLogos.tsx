import React from 'react';

/**
 * Official Factor X geometric multi-color triangular emblem
 */
export function FactorXIcon({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Top Left Wing - Green shades */}
      <polygon points="60,60 10,20 35,10" fill="#7AC143" />
      <polygon points="60,60 35,10 60,35" fill="#00923F" />
      <polygon points="60,60 10,20 10,50" fill="#006837" />
      <polygon points="60,60 10,50 35,60" fill="#004d25" />

      {/* Top Right Wing - Cyan & Blue shades */}
      <polygon points="60,60 85,10 110,20" fill="#00A6A6" />
      <polygon points="60,60 60,35 85,10" fill="#00B5B0" />
      <polygon points="60,60 110,20 110,50" fill="#0066B3" />
      <polygon points="60,60 110,50 85,60" fill="#004080" />

      {/* Bottom Left Wing - Yellow & Orange shades */}
      <polygon points="60,60 35,60 10,70" fill="#F39200" />
      <polygon points="60,60 10,70 10,100" fill="#FBC102" />
      <polygon points="60,60 10,100 35,110" fill="#FFD100" />
      <polygon points="60,60 35,110 60,85" fill="#E65100" />

      {/* Bottom Right Wing - Magenta & Purple / Red shades */}
      <polygon points="60,60 85,60 110,70" fill="#E4005A" />
      <polygon points="60,60 110,70 110,100" fill="#D8246F" />
      <polygon points="60,60 110,100 85,110" fill="#6A1B9A" />
      <polygon points="60,60 85,110 60,85" fill="#4B2E83" />

      {/* Central Diamond Facet in energetic Red */}
      <polygon points="60,45 75,60 60,75 45,60" fill="#E41E26" opacity="0.95" />
    </svg>
  );
}

/**
 * Underdog Diamond official gold & emerald badge
 */
export function UnderdogDiamondIcon({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 140 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFF275" />
          <stop offset="50%" stopColor="#FFD700" />
          <stop offset="100%" stopColor="#D4AF37" />
        </linearGradient>
        <linearGradient id="emeraldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#007934" />
          <stop offset="50%" stopColor="#005a26" />
          <stop offset="100%" stopColor="#003816" />
        </linearGradient>
      </defs>

      {/* Diamond Crown */}
      <polygon points="70,10 40,32 10,32 30,10" fill="url(#emeraldGrad)" stroke="url(#goldGrad)" strokeWidth="2.5" />
      <polygon points="70,10 40,32 100,32" fill="#008f3d" stroke="url(#goldGrad)" strokeWidth="2.5" />
      <polygon points="70,10 100,32 130,32 110,10" fill="url(#emeraldGrad)" stroke="url(#goldGrad)" strokeWidth="2.5" />

      {/* Pavilion Bottom */}
      <polygon points="10,32 45,32 70,110" fill="#004d20" stroke="url(#goldGrad)" strokeWidth="2.5" />
      <polygon points="45,32 95,32 70,110" fill="url(#emeraldGrad)" stroke="url(#goldGrad)" strokeWidth="2.5" />
      <polygon points="95,32 130,32 70,110" fill="#004d20" stroke="url(#goldGrad)" strokeWidth="2.5" />

      {/* Central Bold 'UD' Lettering in Gold */}
      <text x="70" y="78" textAnchor="middle" fill="url(#goldGrad)" fontSize="32" fontWeight="900" fontFamily="sans-serif" letterSpacing="1">
        UD
      </text>
    </svg>
  );
}

/**
 * Bolivia Flag mini badge
 */
export function BoliviaFlagBadge({ className = "w-5 h-3.5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 30 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={`${className} inline-block rounded-xs shadow-sm overflow-hidden`}>
      <rect width="30" height="6.66" fill="#D52B1E" />
      <rect y="6.66" width="30" height="6.66" fill="#FCD116" />
      <rect y="13.32" width="30" height="6.68" fill="#007934" />
    </svg>
  );
}
