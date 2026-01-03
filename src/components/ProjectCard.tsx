'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, TrendingUp, Layers } from 'lucide-react';
import Link from 'next/link';
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
  // Use mapped image or fallback to a subtle dark pattern
  const coverImage = COVER_IMAGES[id];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.01, y: -2 }}
      whileInView={{
        scale: [1, 1.02, 1],
        borderColor: [
          'rgba(39, 39, 42, 1)',
          'rgba(239, 68, 68, 0.5)',
          'rgba(39, 39, 42, 1)',
        ],
      }}
      viewport={{ once: false, amount: 0.5 }}
      transition={{ type: 'spring', stiffness: 200, damping: 25 }}
      className="group relative h-full flex flex-col"
    >
      {/* PROFESSIONAL FRAME: Clean, solid connection */}
      <div className="relative h-full flex flex-col bg-[#080808] border border-zinc-800 transition-colors duration-300 group-hover:border-zinc-600 rounded-sm overflow-hidden shadow-sm">
        {/* DOMAIN HEADER BACKGROUND */}
        <div className="h-32 w-full relative overflow-hidden bg-zinc-900 border-b border-zinc-800/50">
          {/* Unsplash Cover Image */}
          {coverImage ? (
            <>
              <div
                className="absolute inset-0 bg-cover bg-center opacity-40 group-hover:opacity-60 transition-all duration-700 grayscale group-hover:grayscale-0 transform group-hover:scale-110"
                style={{ backgroundImage: `url(${coverImage})` }}
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#080808] to-transparent opacity-90" />
            </>
          ) : (
            <div
              className={`absolute inset-0 bg-linear-to-br ${gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-500`}
            />
          )}

          {/* Abstract "Domain Graph" pattern overlay */}
          <div
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{
              backgroundImage:
                'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
              backgroundSize: '16px 16px',
            }}
          />

          <div className="absolute top-4 left-4 z-10">
            <div className="font-mono text-[10px] text-zinc-400 uppercase tracking-widest border border-zinc-700/50 px-2 py-1 rounded-sm bg-black/50 backdrop-blur-md">
              {id.replace('-', ' ')}
            </div>
          </div>
        </div>

        <div className="p-4 md:p-6 flex flex-col grow">
          {/* CONTENT: Professional Typography */}
          <div className="mb-4">
            <h3 className="text-lg md:text-xl font-bold text-zinc-100 mb-2 leading-tight group-hover:text-white transition-colors">
              {title}
            </h3>

            <p className="text-xs md:text-sm font-normal text-zinc-400 leading-relaxed line-clamp-3 group-hover:text-zinc-300 transition-colors">
              {description}
            </p>
          </div>

          {/* TAGS: Flat Pills (Professional Specs) */}
          <div className="flex flex-wrap gap-1.5 mb-6 mt-auto">
            {categories.slice(0, 3).map(cat => (
              <span
                key={cat}
                className="px-2.5 py-1 text-[10px] font-medium uppercase tracking-wide bg-zinc-900 text-zinc-400 rounded-sm border border-zinc-800 group-hover:border-zinc-600 group-hover:text-zinc-300 transition-colors"
              >
                {cat}
              </span>
            ))}
          </div>

          {/* IMPACT: Minimal Indicator */}
          {impact && (
            <div className="mb-6 pt-4 border-t border-zinc-800/50">
              <div className="flex items-start gap-2">
                <TrendingUp className="w-3.5 h-3.5 text-emerald-500/80 mt-0.5 shrink-0" />
                <p className="text-xs text-zinc-400 italic">"{impact}"</p>
              </div>
            </div>
          )}

          {/* ACTION: Modern Magnetic Button */}
          <Link
            href={`/${locale}/projects/${id}`}
            className="mt-2 block group/btn"
          >
            <div className="relative overflow-hidden bg-zinc-900 border border-zinc-800 rounded-md px-3 py-2 md:px-4 md:py-3 flex items-center justify-between transition-all duration-300 hover:border-zinc-600 hover:bg-zinc-800">
              <span className="relative z-10 text-[10px] md:text-xs font-bold text-white uppercase tracking-widest flex items-center gap-2">
                View Case Study
              </span>
              <div className="relative z-10 flex items-center justify-center w-5 h-5 md:w-6 md:h-6 bg-white rounded-full transform group-hover/btn:scale-110 transition-transform duration-300">
                <ArrowRight className="w-2.5 h-2.5 md:w-3 md:h-3 text-black -rotate-45 group-hover/btn:rotate-0 transition-transform duration-300" />
              </div>

              {/* Shine Effect */}
              <div className="absolute inset-0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700 bg-linear-to-r from-transparent via-white/5 to-transparent skew-x-12" />
            </div>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
