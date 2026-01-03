'use client';

import { motion } from 'framer-motion';
import { Rocket, Target, Globe, Zap, ArrowUpRight } from 'lucide-react';

interface RoadmapStep {
  phase: string;
  title: string;
  desc: string;
}

interface RoadmapVisualizerProps {
  steps: RoadmapStep[];
}

export function RoadmapVisualizer({ steps }: RoadmapVisualizerProps) {
  return (
    <div className="w-full relative py-12">
      {/* Central Line */}
      <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-transparent via-blue-200 dark:via-red-900/50 to-transparent md:-translate-x-1/2" />

      <div className="flex flex-col gap-12 md:gap-24">
        {steps.map((step, idx) => {
          const isEven = idx % 2 === 0;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className={`relative flex items-center md:justify-between ${
                isEven ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Node Point */}
              <div className="absolute left-[20px] md:left-1/2 w-4 h-4 rounded-full bg-white dark:bg-[#0a0000] border-2 border-blue-600 dark:border-red-500 shadow-[0_0_15px_rgba(37,99,235,0.3)] dark:shadow-[0_0_15px_rgba(239,68,68,0.3)] md:-translate-x-1/2 z-10 transform -translate-x-1/2">
                <div className="w-full h-full bg-blue-500 dark:bg-red-500 animate-ping opacity-20" />
              </div>

              {/* Content Card */}
              <div
                className={`pl-16 md:pl-0 w-full md:w-[45%] ${
                  isEven ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'
                }`}
              >
                <div className="group relative overflow-hidden bg-white/70 dark:bg-[#0f0000]/80 border border-slate-200 dark:border-red-950 p-6 md:p-8 rounded-3xl hover:border-blue-300 dark:hover:border-red-500 hover:shadow-2xl hover:shadow-blue-200/20 dark:hover:shadow-red-900/20 transition-all duration-500 backdrop-blur-xl">
                  {/* Phase Badge */}
                  <div
                    className={`flex items-center gap-2 mb-4 text-blue-600 dark:text-red-500 text-[10px] font-black uppercase tracking-[0.2em] ${
                      isEven ? 'md:justify-end' : 'md:justify-start'
                    }`}
                  >
                    <ArrowUpRight className="w-3 h-3" />
                    {step.phase}
                  </div>

                  <h3 className="text-xl md:text-2xl font-black text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-red-500 transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-slate-500 dark:text-red-200/50 leading-relaxed text-sm font-medium">
                    {step.desc}
                  </p>

                  {/* Future Icon Decoration */}
                  <div
                    className={`absolute top-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500 transform scale-150 ${
                      isEven
                        ? 'left-0 -translate-x-1/4'
                        : 'right-0 translate-x-1/4'
                    }`}
                  >
                    <Target className="w-32 h-32 text-blue-600" />
                  </div>
                </div>
              </div>

              {/* Spacer for the other side */}
              <div className="hidden md:block w-[45%]" />
            </motion.div>
          );
        })}

        {/* Final "North Star" Goal */}
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          className="relative flex justify-center items-center mt-8"
        >
          <div className="w-16 h-16 rounded-3xl bg-blue-50 dark:bg-red-950/20 border border-blue-200 dark:border-red-900 flex items-center justify-center relative z-10 box-content shadow-2xl shadow-blue-200/50 dark:shadow-red-900/20">
            <Rocket className="w-8 h-8 text-blue-600 dark:text-red-500 relative z-10" />
            <div className="absolute inset-0 bg-blue-200 dark:bg-red-500 rounded-3xl animate-ping opacity-20" />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
