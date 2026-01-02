'use client';

import { motion } from 'framer-motion';
import {
  FileText,
  ScanLine,
  XCircle,
  CheckCircle,
  Map,
  Navigation,
  BatteryCharging,
  Server,
  Shield,
  Activity,
} from 'lucide-react';

export type AnalysisType = 'resume' | 'map' | 'pipeline';

interface AnalysisPanelProps {
  type: AnalysisType;
  analyzingText: string;
  gradeText: string;
  commentText: string;
}

export function AnalysisPanel({
  type = 'resume',
  analyzingText,
  gradeText,
  commentText,
}: AnalysisPanelProps) {
  // Render different visual metaphors based on type
  const renderVisual = () => {
    switch (type) {
      case 'map':
        return (
          <div className="p-6 space-y-4 opacity-50 blur-[1px]">
            {/* Mock Map / Route UI */}
            <div className="w-full h-32 border-2 border-dashed border-zinc-600 rounded-lg flex items-center justify-center">
              <Map className="w-12 h-12 text-zinc-500" />
            </div>
            <div className="flex justify-between gap-2">
              <div className="h-2 w-1/3 bg-zinc-500 rounded-full" />
              <div className="h-2 w-1/3 bg-zinc-500 rounded-full" />
              <div className="h-2 w-1/3 bg-zinc-500 rounded-full" />
            </div>
          </div>
        );
      case 'pipeline':
        return (
          <div className="p-6 space-y-6 opacity-50 blur-[1px]">
            {/* Mock Server / Pipeline UI */}
            <div className="flex justify-between items-center">
              <Server className="w-8 h-8 text-zinc-500" />
              <div className="h-1 flex-1 mx-2 bg-zinc-600 rounded-full" />
              <Server className="w-8 h-8 text-zinc-500" />
            </div>
            <div className="w-full h-20 bg-zinc-800/50 rounded-lg border border-zinc-700 p-2 space-y-2">
              <div className="w-3/4 h-2 bg-zinc-600 rounded" />
              <div className="w-1/2 h-2 bg-zinc-600 rounded" />
            </div>
          </div>
        );
      case 'resume':
      default:
        return (
          <div className="p-6 space-y-4 opacity-50 blur-[1px]">
            {/* Mock Resume UI */}
            <div className="w-1/3 h-4 bg-zinc-300 rounded mb-6" />
            <div className="space-y-2">
              <div className="w-full h-2 bg-zinc-200 rounded" />
              <div className="w-full h-2 bg-zinc-200 rounded" />
              <div className="w-2/3 h-2 bg-zinc-200 rounded" />
            </div>
            <div className="space-y-2 pt-4">
              <div className="w-1/4 h-3 bg-zinc-300 rounded" />
              <div className="w-full h-2 bg-zinc-200 rounded" />
              <div className="w-full h-2 bg-zinc-200 rounded" />
              <div className="w-5/6 h-2 bg-zinc-200 rounded" />
            </div>
          </div>
        );
    }
  };

  // Render specific metrics based on type
  const renderMetrics = () => {
    switch (type) {
      case 'map':
        return (
          <>
            <div className="flex items-center gap-2">
              <Navigation className="w-3 h-3 text-green-400" /> Route
            </div>
            <div className="flex items-center gap-2">
              <BatteryCharging className="w-3 h-3 text-green-400" /> Efficiency
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-3 h-3 text-blue-400" /> Feasibility
            </div>
          </>
        );
      case 'pipeline':
        return (
          <>
            <div className="flex items-center gap-2">
              <Shield className="w-3 h-3 text-green-400" /> Auth
            </div>
            <div className="flex items-center gap-2">
              <Activity className="w-3 h-3 text-green-400" /> Uptime
            </div>
            <div className="flex items-center gap-2">
              <Server className="w-3 h-3 text-blue-400" /> Latency
            </div>
          </>
        );
      default:
        return (
          <>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-3 h-3 text-green-400" /> Structure
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-3 h-3 text-green-400" /> Grammar
            </div>
            <div className="flex items-center gap-2">
              <XCircle className="w-3 h-3 text-yellow-400" /> Metrics
            </div>
          </>
        );
    }
  };

  return (
    <div className="relative w-full max-w-xs aspect-3/4 bg-[#0a0000] rounded-2xl shadow-2xl overflow-hidden mx-auto border border-white/10">
      {/* Background Content (Visual Metaphor) */}
      <div className="absolute inset-0 bg-white/5">{renderVisual()}</div>

      {/* Scanning Line */}
      <motion.div
        animate={{ top: ['0%', '100%', '0%'] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
        className="absolute left-0 w-full h-1 bg-red-500 shadow-[0_0_20px_rgba(220,38,38,0.8)] z-10"
      />

      {/* Overlay Result */}
      <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center p-6 text-center z-20">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="bg-black/40 backdrop-blur-xl border border-white/10 p-6 rounded-2xl shadow-2xl"
        >
          <div className="text-3xl font-black text-transparent bg-clip-text bg-linear-to-br from-red-400 to-orange-500 mb-2">
            {gradeText.split(': ')[1] || 'A+'}
          </div>

          {/* Dynamic Metrics */}
          <div className="text-white/60 text-xs font-mono mb-4 text-left space-y-1">
            {renderMetrics()}
          </div>

          <p className="text-xs text-zinc-400 italic font-medium leading-relaxed">
            "{commentText}"
          </p>
        </motion.div>
      </div>

      {/* Status Bar */}
      <div className="absolute bottom-0 w-full bg-red-950/30 backdrop-blur-sm py-2 px-4 border-t border-red-900/20 text-[10px] text-red-300 font-mono flex justify-between">
        <span>STATUS: ACTIVE</span>
        <span className="animate-pulse">{analyzingText}</span>
      </div>
    </div>
  );
}
