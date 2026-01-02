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
      <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-transparent via-red-500/50 to-transparent md:-translate-x-1/2" />

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
              <div className="absolute left-[20px] md:left-1/2 w-4 h-4 rounded-full bg-black border-2 border-red-500 shadow-[0_0_15px_rgba(239,68,68,0.5)] md:-translate-x-1/2 z-10 transform -translate-x-1/2">
                <div className="w-full h-full bg-red-500 animate-ping opacity-20" />
              </div>

              {/* Content Card */}
              <div
                className={`pl-16 md:pl-0 w-full md:w-[45%] ${
                  isEven ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'
                }`}
              >
                <div className="group relative overflow-hidden bg-white/5 border border-white/10 p-6 rounded-xl hover:bg-white/10 hover:border-red-500/30 transition-all duration-300 backdrop-blur-sm">
                  {/* Phase Badge */}
                  <div
                    className={`flex items-center gap-2 mb-3 text-red-400 text-xs font-mono uppercase tracking-widest ${
                      isEven ? 'md:justify-end' : 'md:justify-start'
                    }`}
                  >
                    <Zap className="w-3 h-3" />
                    {step.phase}
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-red-100 transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-zinc-400 leading-relaxed text-sm">
                    {step.desc}
                  </p>

                  {/* Future Icon Decoration */}
                  <div
                    className={`absolute top-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 transform scale-150 ${
                      isEven
                        ? 'left-0 -translate-x-1/4'
                        : 'right-0 translate-x-1/4'
                    }`}
                  >
                    <Target className="w-32 h-32" />
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
          <div className="w-16 h-16 rounded-full bg-red-900/20 border border-red-500 flex items-center justify-center relative z-10 box-content shadow-[0_0_50px_rgba(220,38,38,0.2)]">
            <Rocket className="w-8 h-8 text-white relative z-10" />
            <div className="absolute inset-0 bg-red-500 rounded-full animate-ping opacity-20" />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
