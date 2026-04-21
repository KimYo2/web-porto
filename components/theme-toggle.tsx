'use client';

import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  if (!mounted) {
    return (
      <button
        className={cn(
          'p-2 rounded-lg transition-colors',
          'hover:bg-zinc-100 dark:hover:bg-zinc-800',
          'focus:outline-none focus:ring-2 focus:ring-zinc-400 dark:focus:ring-zinc-600'
        )}
        aria-label="Toggle theme"
      >
        <span className="w-5 h-5 block" />
      </button>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        'p-2 rounded-lg transition-colors',
        'hover:bg-zinc-100 dark:hover:bg-zinc-800',
        'focus:outline-none focus:ring-2 focus:ring-zinc-400 dark:focus:ring-zinc-600'
      )}
      aria-label="Toggle theme"
      type="button"
    >
      {theme === 'dark' ? (
        <Sun className="w-5 h-5 text-zinc-100" />
      ) : (
        <Moon className="w-5 h-5 text-zinc-900" />
      )}
    </button>
  );
}