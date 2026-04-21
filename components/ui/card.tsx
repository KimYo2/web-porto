import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
}

export function Card({ children, className }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-xl border border-zinc-200 bg-white p-6',
        'dark:border-zinc-800 dark:bg-zinc-900',
        className
      )}
    >
      {children}
    </div>
  );
}

export function CardHeader({ children, className }: CardProps) {
  return <div className={cn('mb-4', className)}>{children}</div>;
}

export function CardTitle({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h3
      className={cn(
        'text-lg font-semibold leading-none tracking-tight text-zinc-900',
        'dark:text-zinc-50',
        className
      )}
    >
      {children}
    </h3>
  );
}

export function CardDescription({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn('text-sm text-zinc-500 dark:text-zinc-400', className)}
    >
      {children}
    </p>
  );
}

export function CardContent({ children, className }: CardProps) {
  return <div className={cn('text-sm', className)}>{children}</div>;
}

export function CardFooter({ children, className }: CardProps) {
  return (
    <div
      className={cn('mt-4 flex items-center pt-4 border-t border-zinc-200 dark:border-zinc-800', className)}
    >
      {children}
    </div>
  );
}