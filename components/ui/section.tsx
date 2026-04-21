import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export function Section({ children, className, id }: SectionProps) {
  return (
    <section id={id} className={cn('py-20 px-6 md:py-24 md:px-8', className)}>
      <div className="mx-auto max-w-5xl">{children}</div>
    </section>
  );
}