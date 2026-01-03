'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from './ThemeProvider';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative p-2 rounded-full text-slate-400 hover:text-slate-900 dark:text-zinc-600 dark:hover:text-zinc-200 transition-colors"
      aria-label="Toggle Theme"
    >
      <div className="absolute inset-0 bg-slate-100 dark:bg-white/10 scale-0 group-hover:scale-100 transition-transform rounded-full" />

      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={theme}
          initial={{ y: 20, opacity: 0, rotate: -40 }}
          animate={{ y: 0, opacity: 1, rotate: 0 }}
          exit={{ y: -20, opacity: 0, rotate: 40 }}
          transition={{ duration: 0.3, ease: 'backOut' }}
          className="relative z-10"
        >
          {theme === 'light' ? (
            <>
              {/* DESKTOP ICON */}
              <Sun className="hidden md:block w-5 h-5" />
              {/* MOBILE ICON: Creative High-Tech Sun */}
              <div className="md:hidden relative w-5 h-5 flex items-center justify-center">
                <Sun className="w-5 h-5" />
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 8, ease: 'linear' }}
                  className="absolute inset-[-4px] border border-blue-500/30 rounded-full border-dashed"
                />
              </div>
            </>
          ) : (
            <>
              {/* DESKTOP ICON */}
              <Moon className="hidden md:block w-5 h-5" />
              {/* MOBILE ICON: Creative High-Tech Moon */}
              <div className="md:hidden relative w-5 h-5 flex items-center justify-center">
                <Moon className="w-5 h-5" />
                <motion.div
                  animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.5, 0.2] }}
                  transition={{ repeat: Infinity, duration: 4 }}
                  className="absolute inset-[-4px] bg-red-500/20 rounded-full blur-sm"
                />
              </div>
            </>
          )}
        </motion.div>
      </AnimatePresence>
    </button>
  );
}
