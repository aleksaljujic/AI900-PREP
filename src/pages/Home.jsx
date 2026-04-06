import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { domains } from '../data/topics';
import useProgress from '../hooks/useProgress';
import ProgressTracker from '../components/ProgressTracker';

const domainStyles = {
  workloads: 'from-sky-500 to-sky-300',
  vision: 'from-orange-500 to-orange-300',
  language: 'from-violet-500 to-violet-300',
  conversational: 'from-amber-500 to-amber-300',
};

export default function Home() {
  const { studiedTopics, quizScores, clearProgress } = useProgress();

  const totalTopics = domains.reduce((count, dom) => count + dom.subtopics.length, 0);
  const domainProgress = domains.map((domain) => {
    const completed = domain.subtopics.filter((topic) => studiedTopics.includes(topic.id)).length;
    return {
      ...domain,
      completed,
      percentage: totalTopics ? Math.round((completed / domain.subtopics.length) * 100) : 0,
    };
  });

  return (
    <section className="space-y-10 pb-10">
      <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          className="card-base"
        >
          <span className="inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-600 dark:bg-slate-800 dark:text-slate-300">
            Dashboard
          </span>
          <h2 className="mt-4 text-3xl font-semibold text-slate-950 dark:text-white">Track your AI-900 readiness</h2>
          <p className="mt-4 max-w-2xl text-slate-600 dark:text-slate-300">
            Study key AI-900 domains with focused topics, flip cards, and practice quizzes. Your progress is saved locally in the browser.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <Link
              to="/topics"
              className="rounded-3xl border border-slate-200 bg-slate-900 px-5 py-4 text-center text-sm font-semibold text-white transition hover:bg-slate-700 dark:border-slate-700"
            >
              Start studying
            </Link>
            {/* <Link
              to="/flashcards"
              className="rounded-3xl border border-slate-200 bg-white px-5 py-4 text-center text-sm font-semibold text-slate-900 transition hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800"
            >
              Review flashcards
            </Link> */}
            <Link
              to="/quiz"
              className="rounded-3xl border border-slate-200 bg-white px-5 py-4 text-center text-sm font-semibold text-slate-900 transition hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800"
            >
              Practice quiz
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="card-base"
        >
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">Weekly Summary</p>
              <p className="mt-3 text-3xl font-semibold text-slate-950 dark:text-white">{studiedTopics.length}/{totalTopics} topics learned</p>
            </div>
            <button
              type="button"
              onClick={clearProgress}
              className="rounded-3xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
            >
              Clear progress
            </button>
          </div>
          <div className="mt-8 space-y-5">
            {domainProgress.map((domain) => (
              <div key={domain.id}>
                <div className="mb-2 flex items-center justify-between gap-3 text-sm font-medium text-slate-700 dark:text-slate-300">
                  <span>{domain.title}</span>
                  <span>{domain.completed}/{domain.subtopics.length}</span>
                </div>
                <div className="h-3 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
                  <div
                    className={`h-full rounded-full bg-gradient-to-r ${domainStyles[domain.id]}`}
                    style={{ width: `${domain.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
      <ProgressTracker studiedTopics={studiedTopics} quizScores={quizScores} onReset={clearProgress} />
    </section>
  );
}
