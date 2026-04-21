'use client';

import { Moon, Sun } from 'lucide-react';
import { useThemeContext } from './theme-provider';

export function ThemeToggle() {
  const { theme, toggleTheme } = useThemeContext();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-800"
      aria-label="Toggle dark mode"
    >
      {theme === 'dark' ? (
        <Sun className="w-5 h-5 text-yellow-500" />
      ) : (
        <Moon className="w-5 h-5 text-zinc-700" />
      )}
    </button>
  );
}