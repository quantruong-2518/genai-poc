'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handleLanguageChange = (newLocale: string) => {
    // Remove the current locale prefix from the pathname
    const pathWithoutLocale = pathname.replace(`/${locale}`, '');
    const newPath = `/${newLocale}${pathWithoutLocale || ''}`;
    router.replace(newPath);
  };

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
