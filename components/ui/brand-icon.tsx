'use client';

import { Icon } from '@iconify/react';
import Image from 'next/image';

interface BrandIconProps {
  name: string;
  source: 'iconify' | 'simple';
  icon?: string; // Iconify icon name
  slug?: string; // Simple Icons slug
  color?: string;
  size?: number;
  className?: string;
}

export function BrandIcon({ name, source, icon, slug, color, size = 40, className = '' }: BrandIconProps) {
  if (source === 'simple' && slug) {
    const iconUrl = color
      ? `https://cdn.simpleicons.org/${slug}/${color}`
      : `https://cdn.simpleicons.org/${slug}`;

    return (
      <Image
        src={iconUrl}
        alt={name}
        width={size}
        height={size}
        className={className}
        unoptimized
        loading="eager"
      />
    );
  }

  return <Icon icon={icon || ''} width={size} height={size} className={className} />;
}