'use client';

import { Icon } from '@iconify/react';

interface IconifyIconProps {
  icon: string;
  size?: number;
  className?: string;
}

export function IconifyIcon({ icon, size = 24, className = '' }: IconifyIconProps) {
  return <Icon icon={icon} width={size} height={size} className={className} />;
}