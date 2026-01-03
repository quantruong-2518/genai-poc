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

// Map stack names to Simple Icons slugs
const STACK_SLUGS: Record<string, string> = {
  'Next.js': 'nextdotjs',
  React: 'react',
  TypeScript: 'typescript',
  Tailwind: 'tailwindcss',
  'Node.js': 'nodedotjs',
  NestJS: 'nestjs',
  Python: 'python',
  FastAPI: 'fastapi',
  PostgreSQL: 'postgresql',
  Redis: 'redis',
  MongoDB: 'mongodb',
  Firebase: 'firebase',
  Flutter: 'flutter',
  AWS: 'amazonaws',
  GCP: 'googlecloud',
  Docker: 'docker',
  Kubernetes: 'kubernetes',
  OpenAI: 'openai',
  Gemini: 'googlegemini',
  Claude: 'anthropic',
  'Llama 2': 'meta', // Meta AI
  LangChain: 'langchain',
  HuggingFace: 'huggingface',
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
  // 8x duplication for ultra-seamless loop on large screens
  const marqueeStacks = [
    ...stacks,
    ...stacks,
    ...stacks,
    ...stacks,
    ...stacks,
    ...stacks,
    ...stacks,
    ...stacks,
  ];

  return (
    <div className="w-full relative overflow-hidden py-6 pointer-events-none select-none">
      {/* CSS Mask for fade edges */}
      <div className="absolute inset-y-0 left-0 w-32 bg-linear-to-r from-white dark:from-[#0a0000] to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-32 bg-linear-to-l from-white dark:from-[#0a0000] to-transparent z-10" />

      <motion.div
        className="flex gap-16 w-max"
        animate={{ x: [0, -2000] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: 'loop',
            duration: 60,
            ease: 'linear',
          },
        }}
      >
        {marqueeStacks.map((stack, idx) => {
          const slug = STACK_SLUGS[stack.name];

          return (
            <div
              key={`${stack.name}-${idx}`}
              className="flex items-center gap-4 transition-all duration-300 relative group/icon"
            >
              {/* Real Logo - Raw Color */}
              {slug ? (
                <img
                  src={`https://cdn.simpleicons.org/${slug}`}
                  alt={stack.name}
                  className="w-10 h-10 object-contain hover:scale-110 transition-transform duration-300 opacity-90 hover:opacity-100"
                />
              ) : (
                // Fallback to Lucide Icon
                <Code2 className="w-10 h-10 text-slate-400 transition-colors" />
              )}

              {/* Minimal Tooltip */}
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover/icon:opacity-100 transition-opacity text-[9px] font-black uppercase tracking-widest text-slate-900 dark:text-white whitespace-nowrap pointer-events-none">
                {stack.name}
              </div>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}
