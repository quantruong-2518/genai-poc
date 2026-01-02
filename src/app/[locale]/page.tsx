import { ProjectCard } from '@/components/ProjectCard';
import { useTranslations } from 'next-intl';
import * as motion from 'framer-motion/client';

export default function Home({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = useTranslations('Dashboard');
  const tProjects = useTranslations('Projects');

  // Dynamically constructed project list from translations
  // In a real app, you might map over keys, but here we explicitly list them to match the structure
  const projects = [
    {
      id: 'jobpang',
      title: tProjects('jobpang.title'),
      description: tProjects('jobpang.description'),
      impact: tProjects('jobpang.impact'),
      // Note: next-intl hook returns strings or enriched text, arrays need specific handling or just use keys.
      // For simplicity in this demo environment, I'm hardcoding English keys mapped,
      // BUT to do it right with i18n we should fetch them.
      // tProjects.raw('jobpang.categories') would be ideal if supported,
      // but let's stick to simple props for now or use the translated array manually if we had it.
      // Actually, let's use the translation keys if possible or just English defaults for visual proof.
      // I will trust the translation file has them and I'll use a helper or just keys.
      // Let's use the values from translation by assuming the keys exist and just mapping them is hard without returnObjects.
      // I will compromise and pass the keys to be translated INSIDE the card? No, Card is client.
      // I will rely on the fact that I just added them.
      // I'll grab them via tProjects.raw() if available or just hardcode the display for now
      // to ensure UI looks good, as `useTranslations` doesn't easily return arrays without `returnObjects`.
      // Wait, `useTranslations` DOES NO return objects by default unless configured.
      // To be safe and quick, I will just pass the translated string array using a simple hack or static data found in the `en.json`.
      // Actually, I'll just map the keys since I know them:
      categories: [
        tProjects('jobpang.categories.0'),
        tProjects('jobpang.categories.1'),
        tProjects('jobpang.categories.2'),
        tProjects('jobpang.categories.3'),
      ],
    },
    {
      id: 'monthler',
      title: tProjects('monthler.title'),
      description: tProjects('monthler.description'),
      impact: tProjects('monthler.impact'),
      categories: [
        tProjects('monthler.categories.0'),
        tProjects('monthler.categories.1'),
        tProjects('monthler.categories.2'),
        tProjects('monthler.categories.3'),
      ],
    },
    {
      id: 'genai-poc',
      title: tProjects('genai-poc.title'),
      description: tProjects('genai-poc.description'),
      impact: tProjects('genai-poc.impact'),
      categories: [
        tProjects('genai-poc.categories.0'),
        tProjects('genai-poc.categories.1'),
        tProjects('genai-poc.categories.2'),
        tProjects('genai-poc.categories.3'),
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#050000] relative overflow-hidden">
      {/* Dynamic Red Background Engine */}
      <div className="absolute top-0 left-0 w-full h-[800px] bg-linear-to-b from-[#450a0a] via-[#1a0505] to-transparent pointer-events-none opacity-60" />

      {/* Geometric Accents */}
      <div
        className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-red-600/10 rounded-full blur-[120px] pointer-events-none animate-pulse"
        style={{ animationDuration: '4s' }}
      />
      <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-orange-600/5 rounded-full blur-[100px] pointer-events-none" />

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
