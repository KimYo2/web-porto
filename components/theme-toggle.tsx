'use client';

import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';
import { useState, useEffect } from 'react';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted ? theme === 'dark' : false;

  return (
    <button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="p-2 rounded-lg transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-400 dark:focus:ring-zinc-600"
      aria-label="Toggle theme"
    >
      {mounted ? (
        isDark ? (
          <Sun className="w-5 h-5 text-zinc-100" />
        ) : (
          <Moon className="w-5 h-5 text-zinc-900" />
        )
      ) : (
        <span className="w-5 h-5 block" />
      )}
    </button>
  );
}