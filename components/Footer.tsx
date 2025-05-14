'use client';

import { Sun, Moon } from 'lucide-react';
import { useEffect, useState } from 'react';

export function Footer() {
  const [theme, setTheme] = useState<'light' | 'dark' | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
      setTheme('dark');
    } else {
      document.documentElement.classList.remove('dark');
      setTheme('light');
    }
  }, []);

  const toggleTheme = () => {
    if (theme === 'dark') {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setTheme('light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setTheme('dark');
    }
  };

  return (
    <footer className="mt-auto border-t border-border py-4 text-sm text-neutral-800 dark:text-neutral-200">
      <div className="flex items-center justify-between max-w-4xl mx-auto px-4">
        <div>
          Developed by{" "}
          <a
            href="https://github.com/siniseong"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-blue-600 dark:hover:text-blue-400"
          >
            @siniseong
          </a>
        </div>
        <button
          type="button"
          className="inline-flex items-center rounded-full border p-0.5"
          aria-label="Toggle Theme"
          onClick={toggleTheme}
        >
          <Sun width={24} height={24} className={`lucide lucide-sun size-6 rounded-full p-1 bg-fd-accent text-fd-accent-foreground dark:bg-transparent dark:text-fd-muted-foreground ${theme === 'light' ? '' : 'opacity-50'}`} />
          <Moon width={24} height={24} className={`lucide lucide-moon size-6 rounded-full p-1 text-fd-muted-foreground dark:bg-fd-accent dark:text-fd-accent-foreground ${theme === 'dark' ? '' : 'opacity-50'}`} />
        </button>
      </div>
    </footer>
  );
} 