'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Terminal, CheckCircle2, Circle } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TerminalStep {
  text: string;
  delay: number;
}

interface TerminalSimulationProps {
  steps: string[];
}

export function TerminalSimulation({ steps }: TerminalSimulationProps) {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    if (activeStep < steps.length) {
      const timer = setTimeout(() => {
        setActiveStep(prev => prev + 1);
      }, 1500); // 1.5s per step
      return () => clearTimeout(timer);
    }
  }, [activeStep, steps.length]);

  return (
    <div className="w-full max-w-lg bg-black/80 rounded-xl border border-white/10 overflow-hidden font-mono text-xs shadow-2xl backdrop-blur-md">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-white/5 border-b border-white/5">
        <div className="flex gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
        </div>
        <div className="flex items-center gap-2 text-zinc-500">
          <Terminal className="w-3 h-3" />
          <span>orchestrator.service.ts</span>
        </div>
      </div>

      {/* Body */}
      <div className="p-4 space-y-3 min-h-[200px]">
        {steps.map((text, index) => {
          const isActive = index === activeStep;
          const isDone = index < activeStep;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -10 }}
              animate={{
                opacity: isDone || isActive ? 1 : 0.3,
                x: 0,
              }}
              className={cn(
                'flex items-center gap-3',
                isActive && 'text-blue-400 font-bold',
                isDone && 'text-green-400/80',
                !isDone && !isActive && 'text-zinc-600',
              )}
            >
              {isDone ? (
                <CheckCircle2 className="w-3 h-3 text-green-500" />
              ) : isActive ? (
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
                >
                  <Circle className="w-3 h-3 border-t-transparent animate-spin" />
                </motion.div>
              ) : (
                <Circle className="w-3 h-3" />
              )}
              <span className="typing-effect">{text}</span>
            </motion.div>
          );
        })}
        {activeStep === steps.length && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-white/50 pt-2"
          >
            _ Process finished with exit code 0
          </motion.div>
        )}
      </div>
    </div>
  );
}
