import React from 'react';

const Logo = ({ className = '', size = 'medium', variant = 'default' }) => {
  const sizeClasses = {
    small: 'w-8 h-8',
    medium: 'w-12 h-12',
    large: 'w-16 h-16',
    xl: 'w-24 h-24'
  };

  const textSizeClasses = {
    small: 'text-lg',
    medium: 'text-2xl',
    large: 'text-3xl',
    xl: 'text-4xl'
  };

  // Bridge icon SVG - represents the iconic Abdoun Bridge project
  const BridgeIcon = ({ className }) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Bridge arch */}
      <path
        d="M2 20 L8 14 L16 14 L22 20"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      {/* Bridge supports */}
      <path d="M8 14 L8 20" stroke="currentColor" strokeWidth="2" />
      <path d="M16 14 L16 20" stroke="currentColor" strokeWidth="2" />
      {/* Bridge deck */}
      <path d="M2 18 L22 18" stroke="currentColor" strokeWidth="2" />
    </svg>
  );

  if (variant === 'icon-only') {
    return (
      <div className={`${sizeClasses[size]} ${className}`}>
        <BridgeIcon className="w-full h-full text-brand-navy" />
      </div>
    );
  }

  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      {/* Logo Icon */}
      <div className={`${sizeClasses[size]} flex-shrink-0`}>
        <BridgeIcon className="w-full h-full text-brand-navy" />
      </div>

      {/* Logo Text */}
      <div className="flex flex-col">
        <span className={`font-bold text-brand-navy ${textSizeClasses[size]} leading-tight`}>
          NEW LOOK
        </span>
        <span className="text-brand-steel text-xs font-medium tracking-wider uppercase">
          Master Finishers
        </span>
      </div>
    </div>
  );
};

export default Logo;
