import { domains } from '../data/topics';

export default function ProgressTracker({ studiedTopics, quizScores, onReset }) {
  const totalTopics = domains.reduce((sum, domain) => sum + domain.subtopics.length, 0);
  const completed = studiedTopics.length;
  const averageScore = quizScores.length ? Math.round((quizScores.reduce((sum, value) => sum + value, 0) / quizScores.length) * 10) / 10 : 0;

  return (
    <div className="grid gap-4 sm:grid-cols-3">
      <div className="card-base">
        <p className="text-sm uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">Topics Studied</p>
        <p className="mt-4 text-4xl font-semibold text-slate-950 dark:text-white">{completed}/{totalTopics}</p>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Topics marked as studied across all domains.</p>
      </div>
      <div className="card-base">
        <p className="text-sm uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">Quiz Performance</p>
        <p className="mt-4 text-4xl font-semibold text-slate-950 dark:text-white">{quizScores.length ? `${averageScore}%` : '—'}</p>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Average score from completed quizzes.</p>
      </div>
      <div className="card-base flex flex-col justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">Your momentum</p>
          <div className="mt-4 flex items-center gap-3 text-3xl font-semibold text-slate-950 dark:text-white">
            <span>{quizScores.length}</span>
            <span className="text-sm font-medium text-slate-500 dark:text-slate-400">quizzes taken</span>
          </div>
        </div>
        <button
          type="button"
          onClick={onReset}
          className="rounded-3xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
        >
          Reset progress
        </button>
      </div>
    </div>
  );
}
