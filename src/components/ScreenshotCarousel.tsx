'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

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

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Auto-play every 5s
    return () => clearInterval(interval);
  }, [activeIndex, isPaused]);

  const nextSlide = () => {
    setActiveIndex(prev => (prev + 1) % screenshots.length);
  };

  const prevSlide = () => {
    setActiveIndex(
      prev => (prev - 1 + screenshots.length) % screenshots.length,
    );
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-12">
      <div className="flex items-center gap-4 mb-8">
        <div className="h-px flex-1 bg-linear-to-r from-transparent via-red-900/50 to-transparent" />
        <h2 className="text-2xl font-bold tracking-wider text-red-100 uppercase font-mono">
          System Interface // <span className="text-red-500">{title}</span>
        </h2>
        <div className="h-px flex-1 bg-linear-to-r from-transparent via-red-900/50 to-transparent" />
      </div>

      <div
        className="relative group aspect-video bg-[#0a0000] rounded-2xl border border-red-900/30 overflow-hidden shadow-2xl shadow-red-900/20"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
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
            {/* Render actual image if src is valid */}
            <div className="w-full h-full bg-[#0a0000] relative">
              <img
                src={screenshots[activeIndex].src}
                alt={screenshots[activeIndex].caption}
                className="w-full h-full object-contain"
              />

              {/* Cinematic Bottom Bar */}
              <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-black/60 backdrop-blur-xl border border-white/10 flex items-center justify-between shadow-2xl">
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

                {/* Decorative Indicators for "Interactive Module" */}
                <div className="hidden md:flex gap-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                  <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
                  <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Overlays */}
        <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30">
          <button
            onClick={prevSlide}
            className="p-4 rounded-full bg-black/50 backdrop-blur-md border border-white/10 hover:bg-red-500/80 hover:border-red-500 transition-all group/btn"
          >
            <ChevronLeft className="w-6 h-6 text-white group-hover/btn:scale-110 transition-transform" />
          </button>
          <button
            onClick={nextSlide}
            className="p-4 rounded-full bg-black/50 backdrop-blur-md border border-white/10 hover:bg-red-500/80 hover:border-red-500 transition-all group/btn"
          >
            <ChevronRight className="w-6 h-6 text-white group-hover/btn:scale-110 transition-transform" />
          </button>
        </div>

        {/* Progress Indicators */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-3 z-30">
          {screenshots.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className="group/dot relative py-2"
            >
              <div
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  idx === activeIndex
                    ? 'w-12 bg-red-500 shadow-[0_0_15px_rgba(220,38,38,0.8)]'
                    : 'w-2 bg-white/20 group-hover/dot:bg-white/40'
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
