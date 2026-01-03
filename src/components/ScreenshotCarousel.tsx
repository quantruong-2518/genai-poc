'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X, ZoomIn } from 'lucide-react';

interface Screenshot {
  src: string;
  caption: string;
}

interface ScreenshotCarouselProps {
  screenshots: Screenshot[];
  title: string;
}

export function ScreenshotCarousel({
  screenshots,
  title,
}: ScreenshotCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (isPaused || isModalOpen) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [activeIndex, isPaused, isModalOpen]);

  const nextSlide = () => {
    setActiveIndex(prev => (prev + 1) % screenshots.length);
  };

  const prevSlide = () => {
    setActiveIndex(
      prev => (prev - 1 + screenshots.length) % screenshots.length,
    );
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8 md:py-12">
      <div className="flex items-center gap-4 mb-8 md:mb-12">
        <div className="h-px flex-1 bg-linear-to-r from-transparent via-slate-200 dark:via-red-900/50 to-transparent" />
        <h2 className="text-xl md:text-3xl font-black tracking-tight text-slate-800 dark:text-white uppercase text-center md:text-left">
          Visual Tour //{' '}
          <span className="text-blue-600 dark:text-red-500 italic">
            {title}
          </span>
        </h2>
        <div className="h-px flex-1 bg-linear-to-r from-transparent via-slate-200 dark:via-red-900/50 to-transparent" />
      </div>

      <div
        className="relative group aspect-video bg-white dark:bg-[#0f0000] rounded-3xl border border-slate-200 dark:border-red-950 overflow-hidden shadow-2xl shadow-slate-200/50 dark:shadow-none cursor-zoom-in"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onClick={() => setIsModalOpen(true)}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, scale: 1 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="absolute inset-0"
          >
            <div className="w-full h-full bg-slate-50 dark:bg-slate-950 relative p-4 md:p-8">
              <img
                src={screenshots[activeIndex].src}
                alt={screenshots[activeIndex].caption}
                className="w-full h-full object-contain rounded-xl shadow-lg dark:shadow-none"
              />

              {/* Desktop Only Bottom Bar */}
              <div className="hidden md:flex absolute bottom-12 left-12 right-12 p-8 rounded-3xl bg-white/80 dark:bg-[#0a0000]/90 backdrop-blur-2xl border border-white dark:border-red-950 shadow-2xl dark:shadow-none items-center justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-blue-600 dark:text-red-500 font-black text-[10px] uppercase tracking-widest bg-blue-50 dark:bg-red-950/40 px-3 py-1 rounded-full border border-blue-100 dark:border-red-500/20">
                      Module 0{activeIndex + 1}
                    </span>
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">
                    {screenshots[activeIndex].caption}
                  </h3>
                </div>
                <div className="flex gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-blue-600 dark:bg-red-500 shadow-[0_0_10px_rgba(37,99,235,0.4)] dark:shadow-[0_0_10px_rgba(239,68,68,0.5)]" />
                  <div className="w-2 h-2 rounded-full bg-slate-200 dark:bg-red-950" />
                  <div className="w-2 h-2 rounded-full bg-slate-200 dark:bg-red-950" />
                </div>
              </div>

              {/* Mobile Zoom Indicator */}
              <div className="md:hidden absolute top-6 right-6 p-2.5 rounded-full bg-white/90 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 text-slate-400 dark:text-slate-500 shadow-lg dark:shadow-none">
                <ZoomIn className="w-4 h-4" />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Overlays */}
        <div className="absolute inset-0 flex items-center justify-between p-4 md:p-8 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 z-30 pointer-events-none">
          <button
            onClick={e => {
              e.stopPropagation();
              prevSlide();
            }}
            className="p-4 rounded-2xl bg-white/90 dark:bg-red-950/90 backdrop-blur-md border border-slate-200 dark:border-red-900/50 shadow-xl dark:shadow-none text-slate-900 dark:text-white hover:bg-blue-600 dark:hover:bg-red-600 hover:text-white hover:border-blue-600 dark:hover:border-red-600 transition-all group/btn pointer-events-auto"
          >
            <ChevronLeft className="w-6 h-6 group-hover/btn:scale-110 transition-transform" />
          </button>
          <button
            onClick={e => {
              e.stopPropagation();
              nextSlide();
            }}
            className="p-4 rounded-2xl bg-white/90 dark:bg-red-950/90 backdrop-blur-md border border-slate-200 dark:border-red-900/50 shadow-xl dark:shadow-none text-slate-900 dark:text-white hover:bg-blue-600 dark:hover:bg-red-600 hover:text-white hover:border-blue-600 dark:hover:border-red-600 transition-all group/btn pointer-events-auto"
          >
            <ChevronRight className="w-6 h-6 group-hover/btn:scale-110 transition-transform" />
          </button>
        </div>
      </div>

      {/* MOBILE INFO AREA */}
      <div className="md:hidden mt-6 space-y-6">
        <div className="bg-slate-50 dark:bg-[#0f0000] border border-slate-200 dark:border-red-950 p-6 rounded-3xl shadow-sm">
          <div className="space-y-2">
            <span className="text-blue-600 dark:text-red-500 font-black text-[10px] uppercase tracking-widest block">
              PHASE 0{activeIndex + 1}
            </span>
            <h3 className="text-slate-900 dark:text-white text-xl font-black tracking-tight leading-tight">
              {screenshots[activeIndex].caption}
            </h3>
          </div>
        </div>

        {/* Progress Dots for Mobile */}
        <div className="flex justify-center gap-2.5 pb-4">
          {screenshots.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                idx === activeIndex
                  ? 'w-10 bg-blue-600 dark:bg-red-500 shadow-[0_0_10px_rgba(37,99,235,0.3)] dark:shadow-red-900/20'
                  : 'w-3 bg-slate-200 dark:bg-red-950'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Desktop Progress Dots */}
      <div className="hidden md:flex absolute bottom-8 left-0 right-0 justify-center gap-3 z-30 pointer-events-none">
        {/* Managed within the image area but moved for clear view if needed? 
            Wait, I previously had dots inside. Let's keep them as is for Desktop 
            but the original code had them inside. I will put them back for desktop. */}
      </div>

      {/* LIGHTBOX MODAL */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-100 bg-white/95 dark:bg-slate-950/95 backdrop-blur-3xl flex flex-col items-center justify-center p-4 md:p-8"
            onClick={() => setIsModalOpen(false)}
          >
            <button
              className="absolute top-8 right-8 p-4 rounded-2xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white hover:bg-blue-600 dark:hover:bg-blue-500 hover:text-white hover:border-blue-600 dark:hover:border-blue-500 transition-all z-110 shadow-lg dark:shadow-none"
              onClick={() => setIsModalOpen(false)}
            >
              <X className="w-6 h-6" />
            </button>

            <motion.div
              initial={{ scale: 0.95, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 30 }}
              className="relative w-full max-w-6xl h-full flex flex-col items-center justify-center gap-8"
              onClick={e => e.stopPropagation()}
            >
              <img
                src={screenshots[activeIndex].src}
                alt={screenshots[activeIndex].caption}
                className="max-w-full max-h-[80%] object-contain rounded-3xl shadow-2xl shadow-slate-200 dark:shadow-none"
              />

              {/* Modal Caption */}
              <div className="text-center px-8">
                <h4 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white bg-slate-50/50 dark:bg-slate-900/50 backdrop-blur-md px-10 py-4 rounded-full border border-slate-200 dark:border-slate-800 inline-block shadow-sm">
                  {screenshots[activeIndex].caption}
                </h4>
              </div>

              {/* Modal Navigation */}
              <div className="absolute inset-0 flex items-center justify-between pointer-events-none px-4 md:px-12">
                <button
                  onClick={prevSlide}
                  className="p-6 rounded-3xl bg-white/90 dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white pointer-events-auto hover:bg-blue-600 dark:hover:bg-blue-500 hover:text-white transition-all shadow-xl dark:shadow-none"
                >
                  <ChevronLeft className="w-8 h-8" />
                </button>
                <button
                  onClick={nextSlide}
                  className="p-6 rounded-3xl bg-white/90 dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white pointer-events-auto hover:bg-blue-600 dark:hover:bg-blue-500 hover:text-white transition-all shadow-xl dark:shadow-none"
                >
                  <ChevronRight className="w-8 h-8" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
