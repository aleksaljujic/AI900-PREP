import { motion } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import useStats from '../hooks/useStats';
import useProgress from '../hooks/useProgress';
import { domains } from '../data/topics';

function StatCard({ label, value, sub }) {
  return (
    <div className="card-base flex flex-col gap-1">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
        {label}
      </p>
      <p className="mt-2 text-3xl font-bold text-slate-950 dark:text-white">{value}</p>
      {sub && <p className="text-sm text-slate-500 dark:text-slate-400">{sub}</p>}
    </div>
  );
}

export default function Stats() {
  const { user } = useAuth();
  const { stats, topWrongQuestions, clearStats } = useStats();
  const { studiedTopics } = useProgress();

  const totalTopics = domains.reduce((s, d) => s + d.subtopics.length, 0);

  if (!stats) {
    return (
      <section className="card-base text-center">
        <p className="text-slate-600 dark:text-slate-300">Učitavanje statistike...</p>
      </section>
    );
  }

  return (
    <section className="space-y-8 pb-16">
      {/* Header */}
      <div className="card-base flex items-center justify-between gap-4">
        <div>
          <span className="inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-600 dark:bg-slate-800 dark:text-slate-300">
            Statistika
          </span>
          <h2 className="mt-3 text-3xl font-semibold text-slate-950 dark:text-white">
            Dobrodošao, {user.username}
          </h2>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            Pregled tvog napretka u AI-900 pripremi
          </p>
        </div>
        <button
          type="button"
          onClick={clearStats}
          className="rounded-2xl border border-slate-200 px-4 py-2 text-sm font-semibold text-rose-600 transition hover:bg-rose-50 dark:border-slate-700 dark:text-rose-400 dark:hover:bg-rose-900/20"
        >
          Reset statistike
        </button>
      </div>

      {/* Summary cards */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="grid gap-4 sm:grid-cols-3"
      >
        <StatCard
          label="Examovi završeni"
          value={stats.examsCompleted}
        />
        <StatCard
          label="Prosječan rezultat"
          value={stats.examsCompleted > 0 ? `${stats.averageScore}%` : '—'}
          sub={stats.examsCompleted > 0 ? `Kroz ${stats.examsCompleted} exam${stats.examsCompleted !== 1 ? 'ova' : ''}` : 'Još nije rađen exam'}
        />
        <StatCard
          label="Teme naučene"
          value={`${studiedTopics.length}/${totalTopics}`}
          sub={`${Math.round((studiedTopics.length / totalTopics) * 100)}% ukupnih tema`}
        />
      </motion.div>

      {/* Top wrong questions */}
      <div className="card-base space-y-4">
        <div>
          <h3 className="text-lg font-semibold text-slate-950 dark:text-white">
            Najčešće pogrešna pitanja
          </h3>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            Pitanja na kojima griješiš najčešće tokom examova
          </p>
        </div>

        {topWrongQuestions.length === 0 ? (
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Nema podataka — završi bar jedan exam.
          </p>
        ) : (
          <div className="flex flex-wrap gap-2">
            {topWrongQuestions.map(({ id, count }) => (
              <span
                key={id}
                className="flex items-center gap-1.5 rounded-full border border-rose-200 bg-rose-50 px-3 py-1 text-sm font-semibold text-rose-700 dark:border-rose-800 dark:bg-rose-900/30 dark:text-rose-300"
              >
                #{id}
                <span className="rounded-full bg-rose-200 px-1.5 py-0.5 text-xs dark:bg-rose-800">
                  {count}×
                </span>
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Exam history */}
      <div className="card-base space-y-4">
        <h3 className="text-lg font-semibold text-slate-950 dark:text-white">
          Historija examova
        </h3>

        {stats.examHistory.length === 0 ? (
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Još nema završenih examova.
          </p>
        ) : (
          <div className="space-y-2">
            {[...stats.examHistory].reverse().map((exam, i) => (
              <div
                key={i}
                className="flex items-center justify-between gap-4 rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3 dark:border-slate-800 dark:bg-slate-800/50"
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold text-white ${
                      exam.pct >= 70 ? 'bg-emerald-500' : 'bg-rose-500'
                    }`}
                  >
                    {exam.pct}%
                  </span>
                  <div>
                    <p className="text-sm font-medium text-slate-800 dark:text-slate-200">
                      {exam.score}/{exam.total} tačnih
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      {new Date(exam.date).toLocaleDateString('bs-BA', {
                        day: '2-digit',
                        month: '2-digit',
                        year: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit',
                      })}
                    </p>
                  </div>
                </div>
                {exam.wrongIds?.length > 0 && (
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Greške: {exam.wrongIds.slice(0, 5).map((id) => `#${id}`).join(', ')}
                    {exam.wrongIds.length > 5 ? ` +${exam.wrongIds.length - 5}` : ''}
                  </p>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Topics per domain */}
      <div className="card-base space-y-4">
        <h3 className="text-lg font-semibold text-slate-950 dark:text-white">
          Napredak po domenima
        </h3>
        <div className="space-y-3">
          {domains.map((domain) => {
            const done = domain.subtopics.filter((s) => studiedTopics.includes(s.id)).length;
            const pct = Math.round((done / domain.subtopics.length) * 100);
            return (
              <div key={domain.id}>
                <div className="mb-1.5 flex justify-between text-sm">
                  <span className="font-medium text-slate-700 dark:text-slate-300">{domain.title}</span>
                  <span className="text-slate-500 dark:text-slate-400">{done}/{domain.subtopics.length}</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-sky-500 to-violet-500 transition-all duration-500"
                    style={{ width: `${pct}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
