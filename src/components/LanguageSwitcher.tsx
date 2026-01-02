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
    <div className="flex gap-2 text-xs font-medium text-zinc-500 bg-white/5 p-1 rounded-full border border-white/5 backdrop-blur-sm">
      <button
        onClick={() => handleLanguageChange('en')}
        className={`px-3 py-1 rounded-full transition-colors ${
          locale === 'en'
            ? 'bg-zinc-700 text-white shadow-lg'
            : 'hover:text-zinc-300'
        }`}
      >
        EN
      </button>
      <button
        onClick={() => handleLanguageChange('vi')}
        className={`px-3 py-1 rounded-full transition-colors ${
          locale === 'vi'
            ? 'bg-zinc-700 text-white shadow-lg'
            : 'hover:text-zinc-300'
        }`}
      >
        VI
      </button>
      <button
        onClick={() => handleLanguageChange('ko')}
        className={`px-3 py-1 rounded-full transition-colors ${
          locale === 'ko'
            ? 'bg-zinc-700 text-white shadow-lg'
            : 'hover:text-zinc-300'
        }`}
      >
        KO
      </button>
    </div>
  );
}
