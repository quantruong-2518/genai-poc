'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';
import LanguageSwitcher from './LanguageSwitcher';
import { ThemeToggle } from './ThemeToggle';
import { BrainCircuit } from 'lucide-react';

export function Header() {
  const locale = useLocale();

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-4 md:px-6 py-4 md:py-6 pointer-events-none">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="pointer-events-auto">
          <Link
            href={`/${locale}`}
            className="group flex items-center gap-3 transition-opacity hover:opacity-80"
          >
            <div className="w-10 h-10 rounded-lg bg-black flex items-center justify-center shadow-sm overflow-hidden relative">
              <img
                src="/neuron-transparent.png"
                alt="Logo"
                className="w-full h-full object-contain relative z-10 mix-blend-screen"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold text-slate-900 dark:text-white tracking-tight leading-none">
                GenAI
              </span>
              <span className="text-[9px] font-medium text-slate-500 dark:text-slate-400 uppercase tracking-widest leading-none mt-1 group-hover:text-blue-600 dark:group-hover:text-red-500 transition-colors">
                Foundry
              </span>
            </div>
          </Link>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-3 pointer-events-auto">
          <LanguageSwitcher />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
