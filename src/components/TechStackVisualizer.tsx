'use client';

import { motion } from 'framer-motion';
import {
  Code2,
  Database,
  Globe,
  Layout,
  Server,
  Smartphone,
  Cpu,
  Cloud,
  Layers,
  Bot,
  Terminal,
  Zap,
} from 'lucide-react';

// Map stack names to Lucide icons
const TECH_ICONS: Record<string, any> = {
  'Next.js': Globe,
  React: Layout,
  TypeScript: Code2,
  Tailwind: Layout,
  'Node.js': Server,
  NestJS: Server,
  Python: Terminal,
  FastAPI: Zap,
  PostgreSQL: Database,
  Redis: Layers,
  MongoDB: Database,
  Firebase: Cloud,
  Flutter: Smartphone,
  AWS: Cloud,
  GCP: Cloud,
  Docker: Layers,
  Kubernetes: Layers,
  OpenAI: Bot,
  Gemini: Zap,
  Claude: Bot,
  'Llama 2': Cpu,
  LangChain: Terminal,
  HuggingFace: Bot,
};

interface TechStackItem {
  name: string;
  description: string;
  category: 'frontend' | 'backend' | 'ai' | 'devops' | 'mobile';
  icon: string;
}

interface TechStackVisualizerProps {
  stacks: TechStackItem[];
}

export function TechStackVisualizer({ stacks }: TechStackVisualizerProps) {
  // Duplicate array for seamless loop
  const marqueeStacks = [...stacks, ...stacks, ...stacks, ...stacks];

  return (
    <div className="w-full relative overflow-hidden py-4 pointer-events-none select-none mask-linear-fade">
      {/* CSS Mask for fade edges */}
      <div className="absolute inset-y-0 left-0 w-24 bg-linear-to-r from-[#080808] to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-24 bg-linear-to-l from-[#080808] to-transparent z-10" />

      <motion.div
        className="flex gap-12 w-max"
        animate={{ x: [0, -1000] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: 'loop',
            duration: 40,
            ease: 'linear',
          },
        }}
      >
        {marqueeStacks.map((stack, idx) => {
          const Icon = TECH_ICONS[stack.name] || Code2;
          return (
            <div
              key={`${stack.name}-${idx}`}
              className="flex items-center gap-3 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            >
              <div className="p-1.5 bg-white/5 rounded-md border border-white/5">
                <Icon className="w-4 h-4 text-zinc-300" />
              </div>
              <span className="text-sm font-mono font-bold text-zinc-500 uppercase tracking-wider">
                {stack.name}
              </span>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}
