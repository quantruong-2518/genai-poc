'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, TrendingUp, Layers } from 'lucide-react';
import Link from 'next/link';

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
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="group relative p-1 rounded-3xl bg-linear-to-br from-white/10 to-white/5 hover:from-red-500/20 hover:to-orange-500/20 transition-all duration-300 h-full flex flex-col"
    >
      <div
        className="absolute inset-0 bg-linear-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl blur-xl"
        style={{
          background: `linear-gradient(to bottom right, var(--accent-glow), transparent)`,
        }}
      />

      <div className="relative h-full flex flex-col justify-between p-7 bg-[#0a0000]/90 backdrop-blur-xl rounded-[1.3rem] border border-white/10 hover:border-red-500/30 transition-colors duration-300 overflow-hidden">
        {/* Glow Effect */}
        <div
          className={`absolute -right-20 -top-20 w-60 h-60 bg-linear-to-br ${gradient} blur-3xl rounded-full opacity-10 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none`}
        />

        <div>
          {/* Header Badge */}
          <div className="flex items-center justify-between mb-6">
            <div className="p-2.5 bg-white/5 rounded-xl border border-white/10 backdrop-blur-sm group-hover:bg-red-500/10 group-hover:border-red-500/30 transition-all">
              <Sparkles className="w-5 h-5 text-zinc-400 group-hover:text-red-400 transition-colors duration-300" />
            </div>
            {categories.length > 0 && (
              <div className="flex gap-2">
                {categories.slice(0, 1).map(cat => (
                  <span
                    key={cat}
                    className="text-xs font-bold tracking-wider px-3 py-1 bg-white/5 rounded-full text-zinc-400 border border-white/5 uppercase"
                  >
                    {cat}
                  </span>
                ))}
                {categories.length > 1 && (
                  <span className="text-xs font-bold tracking-wider px-2 py-1 bg-white/5 rounded-full text-zinc-500 border border-white/5">
                    +{categories.length - 1}
                  </span>
                )}
              </div>
            )}
          </div>

          <h3 className="text-2xl font-black text-white mb-3 group-hover:text-red-400 transition-colors duration-300 tracking-tight">
            {title}
          </h3>

          <p className="text-sm text-zinc-400 leading-relaxed line-clamp-2 mb-6 group-hover:text-zinc-300 transition-colors border-l-2 border-white/10 pl-4">
            {description}
          </p>

          {/* Business Impact Section */}
          {impact && (
            <div className="mb-6 p-4 rounded-xl bg-linear-to-r from-red-950/30 to-transparent border border-red-900/20">
              <div className="flex items-center gap-2 mb-2 text-red-400 text-xs font-bold uppercase tracking-widest">
                <TrendingUp className="w-3 h-3" />
                Business Impact
              </div>
              <p className="text-xs text-red-100/70 font-mono leading-relaxed">
                {impact}
              </p>
            </div>
          )}

          {/* Categories / Tags list */}
          {categories.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-6">
              {categories.slice(0, 4).map(cat => (
                <span
                  key={cat}
                  className="text-[10px] uppercase font-bold text-zinc-500 bg-white/5 px-2 py-1 rounded border border-white/5 hover:border-red-500/30 hover:text-red-400 transition-colors"
                >
                  {cat}
                </span>
              ))}
            </div>
          )}
        </div>

        <Link
          href={`/${locale}/projects/${id}`}
          className="flex items-center justify-between w-full p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-red-600 hover:border-red-500 hover:text-white transition-all group/btn mt-auto"
        >
          <span className="text-sm font-bold tracking-wide">
            Explore Case Study
          </span>
          <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.div>
  );
}
