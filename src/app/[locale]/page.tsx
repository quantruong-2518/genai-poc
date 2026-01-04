import { Sparkles, ArrowRight } from 'lucide-react';
import * as motion from 'framer-motion/client';

import { ProjectCard } from '@/components/ProjectCard';
import { StarField } from '@/components/StarField';
import { getTranslations } from 'next-intl/server';

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations('Dashboard');
  const tProjects = await getTranslations('Projects');

  const pKeys = [
    'jobpang',
    'monthler',
    'genai-poc',
    'eat-what',
    'lenomand',
    'edtech',
  ];

  const projects = pKeys.map((key: string) => {
    let categories: string[] = [];
    try {
      categories = tProjects.raw(`${key}.categories`) || [];
    } catch (e) {
      console.warn(`Missing categories for project: ${key}`);
    }

    return {
      id: key,
      title: tProjects(`${key}.title`),
      description: tProjects(`${key}.description`),
      impact: tProjects(`${key}.impact`),
      categories: Array.isArray(categories) ? categories : [],
    };
  });

  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Premium Gradient Background Elements */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-linear-to-b from-transparent to-red-950/20 dark:to-red-950/30 opacity-50" />
        <StarField />
      </div>

      <div className="container mx-auto px-6 pt-32 pb-20 md:pt-48 md:pb-32 relative z-10">
        <div className="flex flex-col gap-8 md:gap-12">
          {/* Editorial Header */}
          <div className="border-b-4 border-slate-900 dark:border-white pb-8 md:pb-12">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'circOut' }}
              className="text-5xl sm:text-7xl md:text-[9rem] leading-[0.85] md:leading-[0.8] font-black tracking-tighter text-slate-900 dark:text-white uppercase wrap-break-word"
            >
              {t('title')}
            </motion.h1>
            <div className="flex justify-between items-end mt-6 md:mt-8">
              <span className="text-xs md:text-sm font-bold uppercase tracking-[0.3em] text-slate-600 dark:text-slate-400">
                Est. 2026 — GenAI Solutions
              </span>
              <span className="hidden md:block text-xs md:text-sm font-bold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
                Internal Ecosystem
              </span>
            </div>
          </div>

          {/* Editorial Content with Drop Cap */}
          <div className="grid md:grid-cols-12 gap-12 md:gap-16 mt-12 md:mt-0">
            <div className="md:col-span-4 hidden md:block">
              <div className="w-full h-full border-r border-slate-200 dark:border-white/10 relative min-h-40">
                <span className="absolute top-0 left-0 text-[10px] font-mono text-slate-400 -rotate-90 origin-top-left translate-y-full">
                  SCROLL_TO_DISCOVER
                </span>
              </div>
            </div>

            <div className="md:col-span-8">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-lg md:text-2xl md:leading-relaxed text-slate-800 dark:text-slate-200 font-medium text-justify"
              >
                <span className="float-left text-6xl md:text-9xl font-black leading-[0.8] mr-4 md:mr-6 mt-1 md:mt-[-6px] text-slate-900 dark:text-white">
                  {t('subtitle').charAt(0)}
                </span>
                {t('subtitle').slice(1)}
              </motion.p>
            </div>
          </div>
        </div>

        {/* Dynamic Project Grid */}
        <section className="mb-32 mt-32 md:mt-48">
          <div className="flex items-center gap-6 mb-16">
            <div className="h-px flex-1 bg-slate-200 dark:bg-white/20" />
            <h2 className="text-xl md:text-3xl font-black text-slate-900 dark:text-white tracking-tight uppercase flex items-center gap-3">
              Active Ecosystem
              <span className="text-xs md:text-sm font-medium text-slate-600 bg-slate-100 dark:bg-white/10 px-2 py-1 rounded-full">
                {projects.length}
              </span>
            </h2>
            <div className="h-px flex-1 bg-slate-200 dark:bg-white/20" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 min-h-[400px] group/active-ecosystem">
            {projects.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 1, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
              >
                <ProjectCard
                  id={project.id}
                  locale={locale}
                  title={project.title}
                  description={project.description}
                  impact={project.impact}
                  categories={project.categories}
                />
              </motion.div>
            ))}
          </div>
        </section>

        {/* Footer / Status Bar */}
        <footer className="border-t-2 border-slate-900 dark:border-white pt-6 pb-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-bold text-slate-900 dark:text-white uppercase tracking-widest">
          <div className="flex items-center gap-4">
            <span>© 2026 GENAI FOUNDRY</span>
          </div>
          <div className="flex gap-8">
            <span className="hover:text-blue-600 dark:hover:text-red-500 cursor-pointer transition-colors">
              Documentation
            </span>
            <span className="hover:text-blue-600 dark:hover:text-red-500 cursor-pointer transition-colors">
              Bias Audit
            </span>
            <span className="hover:text-blue-600 dark:hover:text-red-500 cursor-pointer transition-colors">
              Status: Operational
            </span>
          </div>
        </footer>
      </div>
    </main>
  );
}
