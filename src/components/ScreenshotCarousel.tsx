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
      <div className="flex items-center gap-4 mb-6 md:mb-8">
        <div className="h-px flex-1 bg-linear-to-r from-transparent via-red-900/50 to-transparent" />
        <h2 className="text-xl md:text-2xl font-bold tracking-wider text-red-100 uppercase font-mono text-center md:text-left">
          A closer look at the project //{' '}
          <span className="text-red-500">{title}</span>
        </h2>
        <div className="h-px flex-1 bg-linear-to-r from-transparent via-red-900/50 to-transparent" />
      </div>

      <div
        className="relative group aspect-video bg-[#0a0000] rounded-xl md:rounded-2xl border border-red-900/30 overflow-hidden shadow-2xl shadow-red-900/20 cursor-zoom-in"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onClick={() => setIsModalOpen(true)}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, scale: 1.05, filter: 'blur(10px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.7, ease: 'easeInOut' }}
            className="absolute inset-0"
          >
            <div className="w-full h-full bg-[#0a0000] relative">
              <img
                src={screenshots[activeIndex].src}
                alt={screenshots[activeIndex].caption}
                className="w-full h-full object-contain"
              />

              {/* Desktop Only Bottom Bar (Hidden on Mobile) */}
              <div className="hidden md:flex absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-black/60 backdrop-blur-xl border border-white/10 items-center justify-between shadow-2xl">
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-red-500 font-mono text-xs uppercase tracking-widest border border-red-500/30 px-2 py-0.5 rounded">
                      Screenshot 0{activeIndex + 1}
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">
                    {screenshots[activeIndex].caption}
                  </h3>
                </div>
                <div className="flex gap-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                  <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
                  <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
                </div>
              </div>

              {/* Mobile Zoom Indicator */}
              <div className="md:hidden absolute top-4 right-4 p-2 rounded-full bg-black/50 border border-white/10 text-white/50">
                <ZoomIn className="w-4 h-4" />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Overlays */}
        <div className="absolute inset-0 flex items-center justify-between p-2 md:p-4 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 z-30 pointer-events-none">
          <button
            onClick={e => {
              e.stopPropagation();
              prevSlide();
            }}
            className="p-3 md:p-4 rounded-full bg-black/50 backdrop-blur-md border border-white/10 hover:bg-red-500/80 hover:border-red-500 transition-all group/btn pointer-events-auto"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-white group-hover/btn:scale-110 transition-transform" />
          </button>
          <button
            onClick={e => {
              e.stopPropagation();
              nextSlide();
            }}
            className="p-3 md:p-4 rounded-full bg-black/50 backdrop-blur-md border border-white/10 hover:bg-red-500/80 hover:border-red-500 transition-all group/btn pointer-events-auto"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-white group-hover/btn:scale-110 transition-transform" />
          </button>
        </div>
      </div>

      {/* MOBILE INFO AREA: Moved outside image area */}
      <div className="md:hidden mt-4 space-y-4">
        <div className="flex justify-between items-center bg-white/5 border border-white/10 p-4 rounded-xl">
          <div className="space-y-1">
            <span className="text-red-500 font-mono text-[10px] uppercase tracking-widest block">
              Phase 0{activeIndex + 1}
            </span>
            <h3 className="text-white font-bold leading-tight">
              {screenshots[activeIndex].caption}
            </h3>
          </div>
        </div>

        {/* Progress Dots for Mobile */}
        <div className="flex justify-center gap-2 pb-4">
          {screenshots.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`h-1 rounded-full transition-all duration-300 ${
                idx === activeIndex ? 'w-8 bg-red-500' : 'w-2 bg-zinc-800'
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
            className="fixed inset-0 z-100 bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center p-4 md:p-8"
            onClick={() => setIsModalOpen(false)}
          >
            <button
              className="absolute top-6 right-6 p-3 rounded-full bg-white/10 border border-white/20 text-white hover:bg-red-500 transition-colors z-110"
              onClick={() => setIsModalOpen(false)}
            >
              <X className="w-6 h-6" />
            </button>

            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative w-full max-w-5xl h-full flex items-center justify-center"
              onClick={e => e.stopPropagation()}
            >
              <img
                src={screenshots[activeIndex].src}
                alt={screenshots[activeIndex].caption}
                className="max-w-full max-h-full object-contain shadow-[0_0_100px_rgba(239,68,68,0.1)]"
              />

              {/* Modal Navigation */}
              <div className="absolute inset-0 flex items-center justify-between pointer-events-none">
                <button
                  onClick={prevSlide}
                  className="p-4 md:p-6 rounded-full bg-black/50 border border-white/10 text-white pointer-events-auto hover:bg-red-500 transition-all ml-4"
                >
                  <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
                </button>
                <button
                  onClick={nextSlide}
                  className="p-4 md:p-6 rounded-full bg-black/50 border border-white/10 text-white pointer-events-auto hover:bg-red-500 transition-all mr-4"
                >
                  <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
                </button>
              </div>

              {/* Modal Caption */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center w-full px-8">
                <h4 className="text-white text-lg md:text-xl font-bold bg-black/50 backdrop-blur-md px-6 py-2 rounded-full border border-white/10 inline-block">
                  {screenshots[activeIndex].caption}
                </h4>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
