'use client';

// 1. Save language preference to localStorage (Requirement: "lưu vào localstorage")
// 2. Persist across sessions
import { usePathname, useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';
import { useEffect } from 'react';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handleLanguageChange = (newLocale: string) => {
    // Remove the current locale prefix from the pathname
    const pathWithoutLocale = pathname.replace(`/${locale}`, '');
    const newPath = `/${newLocale}${pathWithoutLocale || ''}`;

    // Save preference
    if (typeof window !== 'undefined') {
      localStorage.setItem('NEXT_LOCALE', newLocale);
    }

    router.replace(newPath);
  };

  // Sync on mount/change
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('NEXT_LOCALE');
      // If current locale differs from saved (and saved exists), we *could* redirect,
      // but middleware handles the truth. We just strictly save the current one here.
      if (saved !== locale) {
        localStorage.setItem('NEXT_LOCALE', locale);
      }
    }
  }, [locale]);

  return (
    <div className="flex items-center gap-1 text-[10px] md:text-xs font-bold bg-white/50 dark:bg-black/20 p-1 rounded-full backdrop-blur-sm border border-transparent hover:border-slate-200 dark:hover:border-white/10 transition-all">
      <button
        onClick={() => handleLanguageChange('en')}
        className={`px-3 py-1.5 rounded-full transition-all ${
          locale === 'en'
            ? 'bg-white dark:bg-zinc-800 text-black dark:text-white shadow-sm'
            : 'text-slate-400 hover:text-slate-600 dark:text-zinc-600 dark:hover:text-zinc-400'
        }`}
      >
        EN
      </button>
      <button
        onClick={() => handleLanguageChange('vi')}
        className={`px-3 py-1.5 rounded-full transition-all ${
          locale === 'vi'
            ? 'bg-white dark:bg-zinc-800 text-black dark:text-white shadow-sm'
            : 'text-slate-400 hover:text-slate-600 dark:text-zinc-600 dark:hover:text-zinc-400'
        }`}
      >
        VI
      </button>
      <button
        onClick={() => handleLanguageChange('ko')}
        className={`px-3 py-1.5 rounded-full transition-all ${
          locale === 'ko'
            ? 'bg-white dark:bg-zinc-800 text-black dark:text-white shadow-sm'
            : 'text-slate-400 hover:text-slate-600 dark:text-zinc-600 dark:hover:text-zinc-400'
        }`}
      >
        KO
      </button>
    </div>
  );
}
