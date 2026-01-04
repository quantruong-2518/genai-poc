'use client';

import Link from 'next/link';
import { NeonLogo } from './NeonLogo';
import { useLocale } from 'next-intl';
import LanguageSwitcher from './LanguageSwitcher';
import { ThemeToggle } from './ThemeToggle';

export function Header() {
  const locale = useLocale();

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-4 md:px-6 py-4 md:py-6 pointer-events-none">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="pointer-events-auto">
          <Link
            href={`/${locale}`}
            className="group flex items-center gap-2 md:gap-3 transition-all hover:scale-105 active:scale-95"
          >
            {/* Neon Logo */}
            <NeonLogo size="md" className="shrink-0" />

            {/* Text - Hidden on small mobile, visible on md+ */}
            <div className="hidden sm:flex flex-col">
              <span className="text-sm md:text-base font-black tracking-tight leading-none bg-linear-to-r from-blue-600 to-violet-600 dark:from-red-500 dark:to-pink-500 bg-clip-text text-transparent transition-all duration-500">
                GenAI
              </span>
              <span className="text-[9px] md:text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-[0.2em] leading-none mt-0.5 md:mt-1 group-hover:text-blue-600 dark:group-hover:text-red-500 transition-colors">
                Foundry
              </span>
            </div>
          </Link>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-2 md:gap-3 pointer-events-auto">
          <LanguageSwitcher />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
