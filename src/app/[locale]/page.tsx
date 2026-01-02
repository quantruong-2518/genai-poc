import { ProjectCard } from '@/components/ProjectCard';
import { useTranslations } from 'next-intl';
import * as motion from 'framer-motion/client';

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = useTranslations('Dashboard');
  const tProjects = useTranslations('Projects');

  // List of projects to display
  const projectKeys = [
    'jobpang',
    'monthler',
    'genai-poc',
    'eat-what',
    'lenomand',
    'edtech',
  ];

  const projects = projectKeys.map(key => ({
    id: key,
    title: tProjects(`${key}.title`),
    description: tProjects(`${key}.description`),
    impact: tProjects(`${key}.impact`),
    categories: [
      tProjects(`${key}.categories.0`),
      tProjects(`${key}.categories.1`),
      tProjects(`${key}.categories.2`),
      tProjects(`${key}.categories.3`),
    ],
  }));

  return (
    <div className="min-h-screen bg-[#0a0000] text-red-100 font-sans selection:bg-red-500/30">
      {/* Dynamic Background Engine */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-red-900/20 blur-[120px] rounded-full opacity-40 mix-blend-screen" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-indigo-900/10 blur-[100px] rounded-full opacity-30 mix-blend-screen" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03]" />
      </div>

      <main className="container mx-auto px-6 py-24 relative z-10">
        <div className="max-w-4xl mx-auto mb-20 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-red-950/30 border border-red-500/20 text-red-500 text-xs font-bold tracking-[0.2em] uppercase mb-6 shadow-[0_0_15px_rgba(239,68,68,0.2)]"
          >
            <span className="w-2 h-2 rounded-full bg-red-500 animate-[ping_1.5s_infinite]" />
            {t('badge')}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-6xl md:text-8xl font-black mb-6 tracking-tighter text-white"
          >
            <span className="bg-clip-text text-transparent bg-linear-to-b from-white via-white to-red-900/50">
              {t('title')}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-red-100/40 max-w-2xl mx-auto leading-relaxed font-light"
          >
            {t('subtitle')}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(project => (
            <ProjectCard key={project.id} {...project} locale={locale} />
          ))}
        </div>
      </main>

      {/* Footer / Status Bar */}
      <footer className="fixed bottom-0 left-0 w-full border-t border-white/5 bg-black/20 backdrop-blur-md py-3 px-6 text-xs text-zinc-500 flex justify-between items-center z-50">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          {t('footer')}
        </div>
        <div>v0.2.0-i18n</div>
      </footer>
    </div>
  );
}
