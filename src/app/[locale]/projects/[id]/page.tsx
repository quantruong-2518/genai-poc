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
    <div className="min-h-screen bg-[#050000] text-red-100 overflow-x-hidden selection:bg-red-500/30 font-sans">
      {/* Dynamic Red Background Engine */}
      <div className="absolute top-0 left-0 w-full h-[800px] bg-linear-to-b from-[#450a0a] via-[#1a0505] to-transparent pointer-events-none opacity-60" />
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 px-6 py-4 flex items-center justify-between pointer-events-none">
        <Link
          href={`/${locale}`}
          className="pointer-events-auto flex items-center gap-2 text-sm text-red-200/60 hover:text-white transition-colors bg-black/50 backdrop-blur-md px-4 py-2 rounded-full border border-red-900/30 hover:border-red-500/50"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Foundry
        </Link>
      </nav>
      {/* Hero Section: Premium + Context Aware */}
      <section className="relative pt-40 pb-24 px-6 overflow-hidden">
        {/* COVER IMAGE BACKGROUND */}
        {COVER_IMAGES[pKey] && (
          <div
            className="absolute inset-0 bg-cover bg-center z-0"
            style={{ backgroundImage: `url(${COVER_IMAGES[pKey]})` }}
          >
            {/* Image Processing Overlays */}
            <div className="absolute inset-0 bg-[#050000]/80 backdrop-blur-[2px]" />
            <div className="absolute inset-0 bg-linear-to-t from-[#050000] via-[#050000]/50 to-transparent" />
          </div>
        )}

        {/* Subtle decorative grid */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 z-0 pointer-events-none" />

        <div className="container mx-auto max-w-5xl relative z-10">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4">
              {/* Back Button (Mobile/Desktop friendly) */}
              <Link
                href={`/${locale}`}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors backdrop-blur-sm"
              >
                <ArrowLeft className="w-5 h-5" />
              </Link>
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-2 leading-[1.1]"
            >
              {t(`${pKey}.title`)}
            </motion.h1>

            <div className="flex flex-col md:flex-row gap-12 items-start mt-4">
              <div className="max-w-3xl">
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-xl text-zinc-300 leading-relaxed font-light mb-8"
                >
                  {t(`${pKey}.longDescription`)}
                </motion.p>

                {/* TECH STACK MARQUEE: Under description as requested */}
                <div className="border-t border-white/10 pt-6">
                  <div className="text-[10px] uppercase text-zinc-500 tracking-widest mb-4 font-mono">
                    Powered By
                  </div>
                  <TechStackVisualizer stacks={stackItems} />
                </div>
              </div>

              {/* Optional: Project Stats / Meta */}
              <div className="hidden md:flex flex-col gap-4 min-w-[200px] border-l border-white/10 pl-6 shrink-0">
                <div>
                  <div className="text-[10px] uppercase text-zinc-500 tracking-widest mb-1">
                    Impact
                  </div>
                  <div className="text-sm font-semibold text-emerald-400">
                    High Efficiency
                  </div>
                </div>
                <div>
                  <div className="text-[10px] uppercase text-zinc-500 tracking-widest mb-1">
                    Status
                  </div>
                  <div className="text-sm font-semibold text-white flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    Production Ready
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* New Section: System Interface (Carousel) */}
      <section className="py-12 relative z-10 bg-[#080808]">
        <ScreenshotCarousel
          screenshots={screenshots}
          title={t(`${pKey}.title`)}
        />
      </section>
      {/* Interactive Feature 1: Orchestration/Security/Multimodal */}
      <section className="py-20 bg-[#050505] border-t border-zinc-900">
        <div className="container mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="w-16 h-16 bg-zinc-900/50 rounded-2xl flex items-center justify-center mb-6 border border-white/10 shadow-[0_0_30px_rgba(255,255,255,0.05)]">
              <Cpu className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-4xl font-black mb-6 text-white uppercase tracking-tight">
              {t(`${pKey}.features.${features.f1}.title`)}
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed mb-8">
              {t(`${pKey}.features.${features.f1}.desc`)}
            </p>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-white/5 blur-3xl transform rotate-3 scale-90" />
            <TerminalSimulation steps={steps} />
          </div>
        </div>
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
      {/* NEW: Future Roadmap Section */}
      <section className="py-24 bg-[#050000] relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-red-900/10 via-black to-black opacity-70" />

        <div className="container mx-auto max-w-5xl px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter mb-4">
              {t(`${pKey}.roadmap.title`)}
            </h2>
            <p className="text-zinc-500 max-w-xl mx-auto">
              Strategic vision and technological milestones for the next phase
              of {t(`${pKey}.title`)}.
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
      </section>
    </div>
  );
}
