'use client';

import { motion, useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useRef, useState, useEffect } from 'react';
import { COVER_IMAGES } from '@/lib/constants';

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  impact?: string;
  categories?: string[];
  gradient?: string;
  locale?: string;
}

export function ProjectCard({
  id,
  title,
  description,
  impact,
  categories = [],
  gradient = 'from-blue-500/20 to-purple-500/20',
  locale = 'en',
}: ProjectCardProps) {
  const coverImage = COVER_IMAGES[id];
  const cardRef = useRef(null);
  // Strict Vertical Center Trigger: Only active when crossing the exact middle 4% of screen
  const isInView = useInView(cardRef, { margin: '-48% 0px -48% 0px' });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile(); // Check on mount
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const isMobileActive = isMobile && isInView;

  return (
    <Link
      href={`/${locale}/projects/${id}`}
      className="block h-full outline-none"
    >
      <motion.div
        ref={cardRef}
        initial={{ opacity: 1, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }} // Only initial fade-in, no scaling loop
        className={`group relative h-full flex flex-col transition-all duration-500 
          md:hover:scale-105 md:hover:z-10 md:hover:shadow-2xl
          ${isMobileActive ? 'scale-105 z-10' : 'scale-100'}`}
      >
        {/* Premium Glassmorphism Container */}
        <div
          className={`flex-1 bg-white dark:bg-black/40 backdrop-blur-md rounded-xl border overflow-hidden flex flex-col transition-all duration-500 ${
            isMobileActive
              ? 'border-blue-600/60 dark:border-red-500/60 shadow-lg shadow-blue-500/10 dark:shadow-red-900/10'
              : 'border-slate-200 dark:border-white/10 md:hover:border-slate-800 dark:md:hover:border-red-500'
          }`}
        >
          {/* Dynamic Header Image Section */}
          <div className="relative w-full h-48 overflow-hidden bg-slate-100 dark:bg-white/5">
            <img
              src={coverImage}
              alt={title}
              className={`w-full h-full object-cover transition-all duration-700 ${
                isMobileActive
                  ? 'grayscale-0'
                  : 'grayscale md:group-hover:grayscale-0'
              }`}
            />
            <div
              className={`absolute inset-0 bg-black/10 transition-opacity ${
                isMobileActive ? 'opacity-0' : 'md:group-hover:opacity-0'
              }`}
            />

            {/* Badge: Tech Indicators */}
            <div className="absolute top-4 left-4 flex flex-wrap gap-2">
              {categories.slice(0, 2).map((cat, i) => (
                <span
                  key={i}
                  className="px-2 py-1 bg-black/80 backdrop-blur-md border border-white/10 text-[9px] font-bold text-white uppercase tracking-widest shadow-sm"
                >
                  {cat}
                </span>
              ))}
            </div>
          </div>

          {/* Content Section */}
          <div className="p-6 md:p-8 flex-1 flex flex-col">
            <div className="flex items-start justify-between gap-4 mb-4">
              <h3
                className={`text-2xl md:text-3xl font-black tracking-tighter leading-[0.9] uppercase transition-colors ${
                  isMobileActive
                    ? 'text-blue-600 dark:text-red-500'
                    : 'text-slate-900 dark:text-white md:hover:text-blue-600 dark:md:hover:text-red-500'
                }`}
              >
                {title}
              </h3>
              <div
                className={`w-2 h-2 rounded-full bg-red-500 transition-opacity ${
                  isMobileActive
                    ? 'opacity-100'
                    : 'opacity-0 md:hover:opacity-100'
                }`}
              />
            </div>

            <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 leading-relaxed mb-8 line-clamp-3">
              {description}
            </p>

            <div className="mt-auto space-y-6 pt-6 border-t border-slate-100 dark:border-white/10">
              {impact && (
                <div className="space-y-2">
                  <div
                    className={`text-[9px] font-bold uppercase tracking-widest transition-colors ${
                      isMobileActive
                        ? 'text-blue-600 dark:text-red-500'
                        : 'text-slate-400 dark:text-slate-500'
                    }`}
                  >
                    Strategic Outcome
                  </div>
                  <p
                    className={`text-xs font-bold italic leading-snug transition-colors ${
                      isMobileActive
                        ? 'text-slate-900 dark:text-white'
                        : 'text-slate-800 dark:text-slate-300'
                    }`}
                  >
                    "{impact}"
                  </p>
                </div>
              )}

              <div
                className={`inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest transition-colors ${
                  isMobileActive
                    ? 'text-red-600 dark:text-red-500'
                    : 'text-slate-900 dark:text-white md:hover:text-red-600 dark:md:hover:text-red-500'
                }`}
              >
                Read Analysis <ArrowRight className="w-3 h-3" />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
