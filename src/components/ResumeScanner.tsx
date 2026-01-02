'use client';

import { motion } from 'framer-motion';
import { FileText, ScanLine, XCircle, CheckCircle } from 'lucide-react';

interface ScannerProps {
  analyzingText: string;
  gradeText: string;
  commentText: string;
}

export function ResumeScanner({
  analyzingText,
  gradeText,
  commentText,
}: ScannerProps) {
  return (
    <div className="relative w-full max-w-xs aspect-3/4 bg-white rounded-lg shadow-xl overflow-hidden mx-auto border border-zinc-200">
      {/* Mock Resume Content */}
      <div className="p-6 space-y-4 opacity-50 blur-[1px]">
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

      {/* Scanning Line */}
      <motion.div
        animate={{ top: ['0%', '100%', '0%'] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
        className="absolute left-0 w-full h-1 bg-blue-500 shadow-[0_0_20px_rgb(59,130,246)] z-10"
      />

      {/* Overlay Result */}
      <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center p-6 text-center z-20">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl"
        >
          <div className="text-4xl font-black text-transparent bg-clip-text bg-linear-to-br from-green-400 to-blue-500 mb-2">
            {gradeText.split(': ')[1] || 'A-'}
          </div>
          <div className="text-white/80 text-xs font-mono mb-4 text-left space-y-1">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-3 h-3 text-green-400" /> Structure
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-3 h-3 text-green-400" /> Grammar
            </div>
            <div className="flex items-center gap-2">
              <XCircle className="w-3 h-3 text-yellow-400" /> Metrics
            </div>
          </div>
          <p className="text-xs text-zinc-300 italic">"{commentText}"</p>
        </motion.div>
      </div>
    </div>
  );
}
