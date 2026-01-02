import { getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { ArrowLeft, Cpu, ShieldCheck } from 'lucide-react';
import Link from 'next/link';
import * as motion from 'framer-motion/client';

import { TerminalSimulation } from '@/components/TerminalSimulation';
import { AnalysisPanel } from '@/components/AnalysisPanel';
import { ScreenshotCarousel } from '@/components/ScreenshotCarousel';
import { TechStackVisualizer } from '@/components/TechStackVisualizer';

export default async function ProjectDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  // Only generic "Projects" namespace is loaded, we access specific project via key
  const t = await getTranslations('Projects');

  // Validate ID and select key
  const validProjects = ['jobpang', 'monthler', 'genai-poc'];
  if (!validProjects.includes(id)) {
    return (
      <div className="min-h-screen flex items-center justify-center text-zinc-500 bg-[#0a0000]">
        Project not found or work in progress.
      </div>
    );
  }

  const pKey = id;
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
  } else {
    // Default fallback for other projects (GenAI POC)
    screenshots = [1, 2, 3, 4, 5].map(idx => ({
      src: `/images/${pKey}-s${idx}.jpg`,
      caption: t(`${pKey}.screenshots.s${idx}`),
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
  };

  const features = featureMaps[pKey] || featureMaps['jobpang'];

  return (
    <div className="min-h-screen bg-[#050000] text-red-100 overflow-x-hidden selection:bg-red-500/30 font-sans">
      {/* Dynamic Red Background Engine */}
      <div className="absolute top-0 left-0 w-full h-[800px] bg-linear-to-b from-[#450a0a] via-[#1a0505] to-transparent pointer-events-none opacity-60" />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 px-6 py-4 flex items-center justify-between pointer-events-none">
        <Link
          href="/"
          className="pointer-events-auto flex items-center gap-2 text-sm text-red-200/60 hover:text-white transition-colors bg-black/50 backdrop-blur-md px-4 py-2 rounded-full border border-red-900/30 hover:border-red-500/50"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Foundry
        </Link>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-red-600/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="container mx-auto max-w-5xl relative z-10">
          <div className="flex flex-wrap gap-2 mb-6">
            {/* Tech Pills */}
            {stackItems.slice(0, 3).map(s => (
              <span
                key={s.name}
                className="px-3 py-1 text-xs font-mono font-bold tracking-wider uppercase text-red-300 bg-red-950/30 border border-red-900/50 rounded-full"
              >
                {s.name}
              </span>
            ))}
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-black tracking-tighter mb-8 text-white"
          >
            {t(`${pKey}.title`)}
          </motion.h1>

          <p className="text-xl md:text-2xl text-red-100/60 leading-relaxed max-w-3xl border-l-4 border-red-600 pl-6">
            {t(`${pKey}.longDescription`)}
          </p>
        </div>
      </section>

      {/* New Section: System Interface (Carousel) */}
      <section className="py-12 relative z-10">
        <ScreenshotCarousel
          screenshots={screenshots}
          title={t(`${pKey}.title`)}
        />
      </section>

      {/* Interactive Feature 1: Orchestration/Security/Multimodal */}
      <section className="py-20 bg-[#0a0000] border-t border-red-900/20">
        <div className="container mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="w-16 h-16 bg-red-900/20 rounded-2xl flex items-center justify-center mb-6 border border-red-500/20 shadow-[0_0_30px_rgba(220,38,38,0.1)]">
              <Cpu className="w-8 h-8 text-red-500" />
            </div>
            <h2 className="text-4xl font-black mb-6 text-white uppercase tracking-tight">
              {t(`${pKey}.features.${features.f1}.title`)}
            </h2>
            <p className="text-red-200/60 text-lg leading-relaxed mb-8">
              {t(`${pKey}.features.${features.f1}.desc`)}
            </p>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-red-600/10 blur-3xl transform rotate-3 scale-90" />
            <TerminalSimulation steps={steps} />
          </div>
        </div>
      </section>

      {/* New Section: Tech Stack Visualization */}
      <section className="py-20 bg-[#080000] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
        <div className="container mx-auto relative z-10 text-center mb-12">
          <h2 className="text-3xl font-black text-white uppercase tracking-[0.2em] mb-4">
            Under The Hood
          </h2>
          <p className="text-red-400">Engineering Excellence & Architecture</p>
        </div>
        <TechStackVisualizer stacks={stackItems} />
      </section>

      {/* Interactive Feature 2: Diagnosis/Cost/SaaS */}
      <section className="py-20 border-t border-red-900/20 bg-[#0a0000]">
        <div className="container mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-16 items-center md:flex-row-reverse">
          <div className="order-2 md:order-1 relative flex justify-center">
            <div className="absolute inset-0 bg-red-900/10 blur-3xl scale-90" />
            <AnalysisPanel
              type={features.type}
              analyzingText={t(`${pKey}.demo.scanner.analyzing`)}
              gradeText={t(`${pKey}.demo.scanner.grade`)}
              commentText={t(`${pKey}.demo.scanner.comment`)}
            />
          </div>

          <div className="order-1 md:order-2">
            <div className="w-16 h-16 bg-red-900/20 rounded-2xl flex items-center justify-center mb-6 border border-red-500/20">
              <ShieldCheck className="w-8 h-8 text-red-500" />
            </div>
            <h2 className="text-4xl font-black mb-6 text-white uppercase tracking-tight">
              {t(`${pKey}.features.${features.f2}.title`)}
            </h2>
            <p className="text-red-200/60 text-lg leading-relaxed mb-8">
              {t(`${pKey}.features.${features.f2}.desc`)}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
