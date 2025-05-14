import React from 'react';

const navLinks = [
  {
    text: 'Docs',
    url: '/frotend',
  },  
  {
    text: 'Contribution',
    url: '/',
  },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950">
      <div className="grid grid-cols-2 h-14 items-center px-4 sm:px-6 mx-auto" style={{ maxWidth: '1420px' }}>
        <div className="flex items-center">
          <a href="/" className="flex items-center gap-2 font-semibold">
            <span className="text-lg">여백,</span>
          </a>
        </div>

        <nav className="flex items-center justify-end space-x-6">
          {navLinks.map((link) => (
            <a
              key={link.text}
              href={link.url}
              className="text-sm font-medium text-neutral-700 hover:text-primary transition-colors dark:text-neutral-300 dark:hover:text-primary"
            >
              {link.text}
            </a>
          ))}
          <a
            href="https://github.com/siniseong/docx-"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-neutral-700 hover:text-primary transition-colors dark:text-neutral-300 dark:hover:text-primary"
          >
            <img 
              src="/github.svg" 
              alt="GitHub" 
              className="h-6 w-6 dark:invert min-w-[24px] min-h-[24px]" 
            />
          </a>
        </nav>
      </div>
    </header>
  );
}