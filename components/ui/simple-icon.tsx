import React from 'react';
import Image from 'next/image';

interface SimpleIconProps {
  slug: string;
  color?: string;
  size?: number;
  className?: string;
  label?: string;
  custom?: boolean;
}

// Custom SVG icons for icons not available in simple-icons
const customIcons: Record<string, React.ReactNode> = {
  visualstudiocode: (
    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M23.15 11.58c.1-.33.16-.66.16-1.08V4.5c0-.42-.06-.75-.16-1.08L18.92.84c-.2-.3-.52-.37-.88-.21-.35.16-.58.49-.58.88v5.32c0 .42.06.75.16 1.08.1.32.26.58.51.77l-4.77 2.65-4.77-2.65c.25-.19.41-.45.51-.77.1-.33.16-.66.16-1.08V1.37c0-.39-.23-.72-.58-.88-.36-.16-.68.09-.88.29L7.84 3.42C7.74 3.75 7.68 4.08 7.68 4.5v5.32c0 1.01.25 1.82.75 2.44l5.42 7.11c-.3-.02-.61-.05-.91-.05-2.41 0-4.53 1.11-5.96 2.86-.35.42-.56.93-.56 1.49v.67c0 .39.23.72.58.88.36.16.68-.09.88-.29l4.77-6.27c.25.14.53.21.83.21.3 0 .58-.07.83-.21l4.77 6.27c.2.2.52.45.88.29.35-.16.58-.49.58-.88v-.67c0-.56-.21-1.07-.56-1.49-1.43-1.75-3.55-2.86-5.96-2.86z"/>
    </svg>
  ),
};

export function SimpleIcon({
  slug,
  color,
  size = 24,
  className = '',
  label,
  custom,
}: SimpleIconProps) {
  // Use custom icon if available
  if (custom || customIcons[slug]) {
    return (
      <span style={{ width: size, height: size }} className={className}>
        {customIcons[slug]}
      </span>
    );
  }

  const iconUrl = color
    ? `https://cdn.simpleicons.org/${slug}/${color}`
    : `https://cdn.simpleicons.org/${slug}`;

  return (
    <Image
      src={iconUrl}
      alt={label ?? slug}
      width={size}
      height={size}
      className={className}
      unoptimized
    />
  );
}