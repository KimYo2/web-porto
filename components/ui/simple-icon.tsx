import Image from 'next/image';

interface SimpleIconProps {
  slug: string;
  color?: string;
  size?: number;
  className?: string;
  label?: string;
}

export function SimpleIcon({
  slug,
  color,
  size = 24,
  className = '',
  label,
}: SimpleIconProps) {
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