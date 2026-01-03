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
    <div className="w-full max-w-lg bg-white/80 dark:bg-[#0f0000]/80 rounded-2xl border border-slate-200 dark:border-red-950 overflow-hidden font-mono text-[11px] shadow-2xl shadow-slate-200/50 dark:shadow-none backdrop-blur-xl transition-all duration-500 hover:shadow-blue-200/40 dark:hover:shadow-red-900/20 hover:border-blue-200 dark:hover:border-red-900">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-slate-50/50 dark:bg-red-950/20 border-b border-slate-100 dark:border-red-900/10">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-slate-200 dark:bg-red-900/30" />
          <div className="w-3 h-3 rounded-full bg-slate-200 dark:bg-red-900/30" />
          <div className="w-3 h-3 rounded-full bg-slate-200 dark:bg-red-900/30" />
        </div>
        <div className="flex items-center gap-2 text-slate-400 dark:text-red-900 font-bold tracking-tight">
          <Terminal className="w-3 h-3" />
          <span>intelligence.runtime.v2</span>
        </div>
      </div>

      {/* Body */}
      <div className="p-5 space-y-3 min-h-[220px]">
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
                isActive && 'text-blue-600 dark:text-red-500 font-black',
                isDone && 'text-slate-400 dark:text-red-800',
                !isDone && !isActive && 'text-slate-300 dark:text-red-950',
              )}
            >
              {isDone ? (
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 dark:text-red-500" />
              ) : isActive ? (
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 2, ease: 'linear' }}
                  className="w-3.5 h-3.5 border-2 border-blue-600 dark:border-red-500 border-t-transparent rounded-full"
                />
              ) : (
                <Circle className="w-3.5 h-3.5 opacity-20 dark:opacity-10" />
              )}
              <span className="tracking-tight">{text}</span>
            </motion.div>
          );
        })}
        {activeStep === steps.length && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-slate-400 dark:text-red-800 pt-3 font-bold border-t border-slate-50 dark:border-red-900/20"
          >
            <span className="text-blue-500 dark:text-red-500 mr-2">➜</span>{' '}
            Process finalized in 1.2s
          </motion.div>
        )}
      </div>
    </div>
  );
}
