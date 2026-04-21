import * as React from 'react';
import { cn } from '@/lib/utils';

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentPropsWithoutRef<'textarea'>
>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        'flex min-h-[120px] w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm',
        'placeholder:text-zinc-400',
        'focus:outline-none focus:ring-2 focus:ring-zinc-400 focus:ring-offset-2',
        'disabled:cursor-not-allowed disabled:opacity-50',
        'dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-50',
        'dark:placeholder:text-zinc-500 dark:focus:ring-zinc-600 dark:focus:ring-offset-zinc-900',
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Textarea.displayName = 'Textarea';

export { Textarea };