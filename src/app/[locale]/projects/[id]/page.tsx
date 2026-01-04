import { getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { ArrowLeft, Cpu, ShieldCheck } from 'lucide-react';
import Link from 'next/link';
import * as motion from 'framer-motion/client';

import { TerminalSimulation } from '@/components/TerminalSimulation';
import { AnalysisPanel } from '@/components/AnalysisPanel';
import { ScreenshotCarousel } from '@/components/ScreenshotCarousel';
import { TechStackVisualizer } from '@/components/TechStackVisualizer';
import { COVER_IMAGES } from '@/lib/constants';
import { RoadmapVisualizer } from '@/components/RoadmapVisualizer';

export default async function ProjectDetail({
  params,
}: {
  params: Promise<{ id: string; locale: string }>;
}) {
  const { id, locale } = await params;
  // Only generic "Projects" namespace is loaded, we access specific project via key
  const t = await getTranslations('Projects');

  // Validate ID and select key
  const validProjects = [
    'jobpang',
    'monthler',
    'genai-poc',
    'eat-what',
    'lenomand',
    'edtech',
  ];
  if (!validProjects.includes(id)) {
    return (
      <div className="min-h-screen flex items-center justify-center text-zinc-500 bg-[#0a0000]">
        Project not found or work in progress.
      </div>
    );
  }

  const pKey = id;
  const coverImage = COVER_IMAGES[pKey];
  const steps = [
    t(`${pKey}.demo.terminal.step1`),
    t(`${pKey}.demo.terminal.step2`),
    t(`${pKey}.demo.terminal.step3`),
    t(`${pKey}.demo.terminal.step4`),
    t(`${pKey}.demo.terminal.step5`),
  ];

  // Map translations to arrays for new components
  let screenshots: { src: string; caption: string }[] = [];

  if (pKey === 'jobpang') {
    // Specific mapping for JobPang's new assets
    const jobPangImages = [
      'jobpang_resume.JPG',
      'jobpang_matching.JPG',
      'jobpang_indepth.JPG',
      'jobpang_comprehensive.JPG',
      'jobpang_community.JPG',
      'jobpang_career.JPG',
    ];
    screenshots = jobPangImages.map((img, idx) => ({
      src: `/${img}`,
      caption: t(`${pKey}.screenshots.s${idx + 1}`),
    }));
    screenshots = jobPangImages.map((img, idx) => ({
      src: `/${img}`,
      caption: t(`${pKey}.screenshots.s${idx + 1}`),
    }));
  } else if (pKey === 'monthler') {
    const monthlerImages = [
      'monthler_chat.jpg',
      'monthler_refine.jpg',
      'monthler_planning.jpg',
      'monthler_details.jpg',
    ];
    screenshots = monthlerImages.map((img, idx) => ({
      src: `/${img}`,
      caption: t(`${pKey}.screenshots.s${idx + 1}`),
    }));
  } else if (pKey === 'genai-poc') {
    // Specific mapping for GenAI POC
    // Files are named genpoc_1.JPG to genpoc_6.JPG
    const genPocImages = [
      'genpoc_1.JPG',
      'genpoc_2.JPG',
      'genpoc_3.JPG',
      'genpoc_4.JPG',
      'genpoc_5.JPG',
      'genpoc_6.JPG',
    ];
    screenshots = genPocImages.map((img, idx) => ({
      src: `/${img}`,
      caption: t(`${pKey}.screenshots.s${idx + 1}`),
    }));
  } else if (pKey === 'eat-what') {
    const eatWhatImages = [
      'eat-what_1.png',
      'eat-what_2.png',
      'eat-what_3.png',
      'eat-what_4.png',
      'eat-what_5.png',
      'eat-what_6.png',
    ];
    screenshots = eatWhatImages.map((img, idx) => ({
      src: `/${img}`,
      caption: t(`${pKey}.screenshots.s${idx + 1}`),
    }));
  } else if (pKey === 'lenomand') {
    const lenomandImages = [
      'lenomand_1.png',
      'lenomand_2.png',
      'lenomand_3.png',
      'lenomand_4.png',
      'lenomand_5.png',
      'lenomand_6.png',
    ];
    screenshots = lenomandImages.map((img, idx) => ({
      src: `/${img}`,
      caption: t(`${pKey}.screenshots.s${idx + 1}`),
    }));
  } else if (pKey === 'edtech') {
    const edtechImages = [
      'edtech_1.png',
      'edtech_2.png',
      'edtec_3.png', // Note: source file has typo 'edtec_3.png'
      'edtech_4.png',
      'edtech_5.png',
      'edtech_6.png',
    ];
    screenshots = edtechImages.map((img, idx) => ({
      src: `/${img}`,
      caption: t(`${pKey}.screenshots.s${idx + 1}`),
    }));
  } else {
    // Fallback
    const count = 4;
    screenshots = Array.from({ length: count }).map((_, idx) => ({
      src: `/images/${pKey}_s${idx + 1}.jpg`,
      caption: t(`${pKey}.screenshots.s${idx + 1}`),
    }));
  }

  // Dynamic Tech Stack mapping is a bit tricky with nested translation keys via simple strings
  // We'll iterate manually or assume a fixed max size.
  // Let's assume up to 6 items which we defined.
  const stackItems = [];
  const maxStack = 6;
  for (let i = 1; i <= maxStack; i++) {
    try {
      // Check existence by checking if returns key (next-intl default behavior if missing varies,
      // but here we know we filled them. Some projects only have 5).
      // Actually simplest way is to check against a known property.
      const name = t(`${pKey}.stack.s${i}.name`);
      if (name === `${pKey}.stack.s${i}.name`) break; // Basic check if it returned the key literal

      stackItems.push({
        name: t(`${pKey}.stack.s${i}.name`),
        description: t(`${pKey}.stack.s${i}.desc`),
        category: t(`${pKey}.stack.s${i}.cat`) as any,
        icon: t(`${pKey}.stack.s${i}.icon`) as any,
      });
    } catch (e) {
      break;
    }
  }

  const featureMaps: Record<
    string,
    { f1: string; f2: string; type: 'resume' | 'map' | 'pipeline' }
  > = {
    jobpang: { f1: 'orchestration', f2: 'diagnosis', type: 'resume' },
    monthler: { f1: 'security', f2: 'cost', type: 'map' },
    'genai-poc': { f1: 'multimodal', f2: 'saas', type: 'pipeline' },
    'eat-what': { f1: 'ai_nutrition', f2: 'gamification', type: 'resume' }, // Resume style fits "Audit/Scan"
    lenomand: { f1: 'personalities', f2: 'pairing', type: 'map' }, // Map style fits "Path/Destiny"
    edtech: { f1: 'grading', f2: 'assistant', type: 'resume' }, // Resume style fits "Grading/Paper"
  };

  const features = featureMaps[pKey] || featureMaps['jobpang'];

  return (
    <div className="min-h-screen font-sans">
      {/* Dynamic Background Elements - Futuristic Aurora */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Light Mode: Vibrant Cyan/Purple Mesh */}
        <div className="absolute top-[-20%] right-[-10%] w-[70%] h-[60%] bg-cyan-400/20 dark:bg-red-900/10 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-normal" />
        <div className="absolute bottom-[-10%] left-[-20%] w-[60%] h-[60%] bg-purple-400/20 dark:bg-indigo-900/10 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-normal" />
        <div className="absolute top-[40%] left-[30%] w-[50%] h-[50%] bg-blue-300/20 dark:bg-transparent rounded-full blur-[100px] mix-blend-multiply" />

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03] dark:opacity-[0.05]" />
      </div>

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative pt-40 pb-20 md:pt-48 md:pb-32 overflow-hidden min-h-[90vh] flex flex-col justify-end"
      >
        {/* Hero Background Image with Fade */}
        {coverImage && (
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-linear-to-b from-slate-50/80 via-slate-50/60 to-slate-50 dark:from-[#0a0000]/80 dark:via-[#0a0000]/60 dark:to-[#0a0000] z-10" />
            <div className="absolute inset-0 bg-linear-to-t from-white/80 via-transparent to-transparent dark:from-[#0a0000] dark:via-[#0a0000]/40 dark:to-transparent z-10" />
            <img
              src={coverImage}
              alt="Hero Background"
              className="w-full h-full object-cover opacity-80 dark:opacity-60 mix-blend-overlay filter blur-[1px] scale-105"
            />
          </div>
        )}

        <div className="container mx-auto max-w-5xl px-6 relative z-10">
          {/* Meta Header - Minimal, No Pill */}
          <div className="flex items-center gap-4 mb-2">
            <span className="text-xs md:text-sm font-black uppercase tracking-[0.3em] text-blue-600 dark:text-red-500">
              Case Study // {pKey}
            </span>
          </div>

          <div className="max-w-4xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-5xl sm:text-7xl md:text-[6rem] font-black tracking-tighter text-slate-900 dark:text-white mb-8 leading-[0.85] uppercase wrap-break-word"
            >
              {t(`${pKey}.title`)}
            </motion.h1>

            <div className="mt-12 max-w-3xl">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed font-light mb-8"
              >
                {t(`${pKey}.longDescription`)}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="mb-12"
              >
                <blockquote className="text-lg md:text-xl font-medium text-blue-600 dark:text-red-400 italic border-l-2 border-blue-600 dark:border-red-500 pl-6 py-1 opacity-90">
                  "{t(`${pKey}.impact`)}"
                </blockquote>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <TechStackVisualizer stacks={stackItems} />
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Section: Visual Product Tour */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-10%' }}
        transition={{ duration: 0.8 }}
        className="py-12 md:py-24 relative z-10 bg-slate-50/50 dark:bg-slate-900/40 border-y border-slate-100 dark:border-slate-800"
      >
        <ScreenshotCarousel
          screenshots={screenshots}
          title={t(`${pKey}.title`)}
        />
      </motion.section>

      {/* Part I: The Intelligence Engine */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-20 md:py-32 relative overflow-hidden bg-white dark:bg-[#0a0000]"
      >
        <div className="container mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-20 items-center">
          <div className="relative z-10">
            <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400 mb-4 opacity-70">
              01 / Intelligence
            </div>
            <h2 className="text-3xl md:text-4xl font-black mb-6 text-slate-900 dark:text-white tracking-tight leading-tight">
              {t(`${pKey}.features.${features.f1}.title`)}
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-base md:text-lg leading-relaxed mb-10 font-normal line-clamp-3">
              {t(`${pKey}.features.${features.f1}.desc`)}
            </p>
          </div>

          <div className="relative group">
            <div className="absolute inset-0 bg-blue-100/40 blur-3xl transform rotate-3 scale-95 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <TerminalSimulation steps={steps} />
          </div>
        </div>
      </motion.section>

      {/* Part II: The Application */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-20 md:py-32 border-t border-slate-100 dark:border-slate-800 bg-slate-50/30 dark:bg-slate-900/20"
      >
        <div className="container mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-20 items-center">
          <div className="relative group md:order-1 order-2">
            <div className="absolute inset-0 bg-purple-100/40 dark:bg-purple-900/10 blur-3xl scale-95 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <AnalysisPanel
              type={features.type}
              analyzingText={t(`${pKey}.demo.scanner.analyzing`)}
              gradeText={t(`${pKey}.demo.scanner.grade`)}
              commentText={t(`${pKey}.demo.scanner.comment`)}
            />
          </div>

          <div className="md:order-2 order-1">
            <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400 mb-4 opacity-70">
              02 / Architecture
            </div>
            <h2 className="text-3xl md:text-4xl font-black mb-6 text-slate-900 dark:text-white tracking-tight leading-tight">
              {t(`${pKey}.features.${features.f2}.title`)}
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-base md:text-lg leading-relaxed mb-10 font-normal line-clamp-3">
              {t(`${pKey}.features.${features.f2}.desc`)}
            </p>
          </div>
        </div>
      </motion.section>

      {/* Roadmap Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-24 md:py-40 bg-white dark:bg-[#0a0000] relative overflow-hidden"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] bg-blue-50/30 dark:bg-red-900/10 blur-[120px] rounded-full" />

        <div className="container mx-auto max-w-5xl px-6 relative z-10">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white tracking-tighter mb-6">
              {t(`${pKey}.roadmap.title`)}
            </h2>
            <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto text-lg font-medium">
              Strategic vision and technological milestones for the next
              evolution of {t(`${pKey}.title`)}.
            </p>
          </div>

          <RoadmapVisualizer
            steps={[
              {
                phase: t(`${pKey}.roadmap.steps.s1.phase`),
                title: t(`${pKey}.roadmap.steps.s1.title`),
                desc: t(`${pKey}.roadmap.steps.s1.desc`),
              },
              {
                phase: t(`${pKey}.roadmap.steps.s2.phase`),
                title: t(`${pKey}.roadmap.steps.s2.title`),
                desc: t(`${pKey}.roadmap.steps.s2.desc`),
              },
              {
                phase: t(`${pKey}.roadmap.steps.s3.phase`),
                title: t(`${pKey}.roadmap.steps.s3.title`),
                desc: t(`${pKey}.roadmap.steps.s3.desc`),
              },
            ]}
          />
        </div>
      </motion.section>

      {/* Page Footer */}
      <footer className="border-t-2 border-slate-900 dark:border-white pt-6 pb-8 flex flex-col md:flex-row justify-center items-center gap-4 text-xs font-bold text-slate-900 dark:text-white uppercase tracking-widest bg-slate-50/30 dark:bg-[#0a0000]">
        <div className="flex items-center gap-4">
          <span>Precision Engineered by ITK FOUNDRY © 2026</span>
        </div>
      </footer>
    </div>
  );
}
