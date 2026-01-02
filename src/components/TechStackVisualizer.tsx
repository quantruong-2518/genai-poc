'use client';

import { motion } from 'framer-motion';
import {
  Database,
  Layout,
  Server,
  Shield,
  Cloud,
  Terminal,
  Code2,
  Globe,
} from 'lucide-react';
import { LogoAssets } from './LogoAssets';

interface TechItem {
  icon: string; // Now a string key for our map
  name: string;
  category: 'Frontend' | 'Backend' | 'AI' | 'DevOps';
  description: string;
}

// Map simple string keys to our sophisticated SVGs OR fallback to Lucide icons
const getIcon = (key: string) => {
  const logos: Record<string, any> = {
    NestJS: LogoAssets.NestJS,
    GPT4o: LogoAssets.GPT4o,
    TypeScript: LogoAssets.TypeScript,
    BullMQ: LogoAssets.BullMQ,
    Docker: LogoAssets.Docker,
    Redis: LogoAssets.Redis,
    NextJS: LogoAssets.NextJS,
    Tailwind: LogoAssets.Tailwind,
    Whisper: LogoAssets.Whisper,
    ReactFlow: LogoAssets.ReactFlow,
    Swc: LogoAssets.Swc,
    // Add mapping fallback for keys used in JSON
    'GPT-4o': LogoAssets.GPT4o,
    'Next.js 14': LogoAssets.NextJS,
    TailwindCSS: LogoAssets.Tailwind,
    'AWS Cloud': LogoAssets.AWS,
    'Amazon Web Services': LogoAssets.AWS,
    AWS: LogoAssets.AWS,
  };

  const lucideIcons: Record<string, any> = {
    Database,
    Layout,
    Server,
    Shield,
    Cloud,
    Terminal,
    Code2,
    Globe,
  };

  return logos[key] || lucideIcons[key] || Code2;
};

interface TechStackVisualizerProps {
  stacks: TechItem[];
}

export function TechStackVisualizer({ stacks }: TechStackVisualizerProps) {
  // Group by category
  const categories = {
    Frontend: stacks.filter(s => s.category === 'Frontend'),
    Backend: stacks.filter(s => s.category === 'Backend'),
    AI: stacks.filter(s => s.category === 'AI'),
    DevOps: stacks.filter(s => s.category === 'DevOps'),
  };

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto px-4 py-12">
      {Object.entries(categories).map(
        ([category, items], catIdx) =>
          items.length > 0 && (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIdx * 0.1 }}
              className="flex flex-col gap-4"
            >
              <h3 className="text-xl font-bold text-red-500/80 uppercase tracking-widest border-b border-red-900/30 pb-2">
                {category}
              </h3>

              <div className="flex flex-col gap-3">
                {items.map((item, idx) => {
                  const Icon = getIcon(item.name) || getIcon(item.icon); // Try name match first (e.g. NestJS), then generic icon key

                  return (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      whileHover={{
                        x: 5,
                        backgroundColor: 'rgba(255,255,255,0.05)',
                        scale: 1.02,
                        borderColor: 'rgba(220, 38, 38, 0.3)',
                      }}
                      className="p-4 rounded-xl border border-white/5 bg-white/[0.02] backdrop-blur-sm group transition-all"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 p-2 rounded-lg bg-red-500/10 flex items-center justify-center shrink-0 group-hover:bg-red-500/20 transition-colors">
                          {/* Render Icon properly regardless of source */}
                          <Icon
                            className="w-full h-full text-red-500 group-hover:text-red-400"
                            strokeWidth={1.5}
                          />
                        </div>
                        <div>
                          <div className="font-bold text-zinc-100 group-hover:text-red-400 transition-colors">
                            {item.name}
                          </div>
                          <div className="text-xs text-zinc-500 mt-1 leading-relaxed line-clamp-2">
                            {item.description}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ),
      )}
    </div>
  );
}
