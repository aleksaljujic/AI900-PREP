import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import useStats from '../hooks/useStats';
import useProgress from '../hooks/useProgress';
import { domains } from '../data/topics';
import questions from '../data/questions/questions.js';

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
  const { stats, topWrongQuestions, allWrongQuestions, clearStats } = useStats();
  const { studiedTopics } = useProgress();
  const [modalOpen, setModalOpen] = useState(false);
  const [confirmReset, setConfirmReset] = useState(false);
  const navigate = useNavigate();

  const totalTopics = domains.reduce((s, d) => s + d.subtopics.length, 0);

  const wrongIndices = allWrongQuestions
    .map((id) => id - 1)
    .filter((i) => i >= 0 && i < questions.length);

  const handleSelectWrongQuestion = (index) => {
    setModalOpen(false);
    navigate(`/quiz/practice?startAt=${index}`);
  };

  if (!stats) {
    return (
      <section className="card-base text-center">
        <p className="text-slate-600 dark:text-slate-300">Loading statistics...</p>
      </section>
    );
  }

  return (
    <section className="space-y-8 pb-16">
      {/* Header */}
      <div className="card-base flex items-center justify-between gap-4">
        <div>
          <span className="inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-600 dark:bg-slate-800 dark:text-slate-300">
            Statistics
          </span>
          <h2 className="mt-3 text-3xl font-semibold text-slate-950 dark:text-white">
            Welcome, {user.username}
          </h2>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            Your AI-900 preparation progress overview
          </p>
        </div>
        <button
          type="button"
          onClick={() => setConfirmReset(true)}
          className="rounded-2xl border border-slate-200 px-4 py-2 text-sm font-semibold text-rose-600 transition hover:bg-rose-50 dark:border-slate-700 dark:text-rose-400 dark:hover:bg-rose-900/20"
        >
          Reset statistics
        </button>
      </div>

      {confirmReset && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="w-full max-w-sm rounded-3xl bg-white p-6 shadow-2xl dark:bg-slate-900">
            <h3 className="text-lg font-semibold text-slate-950 dark:text-white">Reset statistics?</h3>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">This will delete all your exam history and progress.</p>
            <div className="mt-6 flex gap-3">
              <button
                type="button"
                onClick={() => setConfirmReset(false)}
                className="flex-1 rounded-2xl border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 dark:border-slate-700 dark:text-slate-300"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={() => { clearStats(); setConfirmReset(false); }}
                className="flex-1 rounded-2xl bg-rose-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-rose-700"
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Summary cards */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="grid gap-4 sm:grid-cols-3"
      >
        <StatCard
          label="Exams completed"
          value={stats.examsCompleted}
        />
        <StatCard
          label="Average score"
          value={stats.examsCompleted > 0 ? `${stats.averageScore}%` : '—'}
          sub={stats.examsCompleted > 0 ? `Across ${stats.examsCompleted} exam${stats.examsCompleted !== 1 ? 's' : ''}` : 'No exams taken yet'}
        />
        <StatCard
          label="Topics studied"
          value={`${studiedTopics.length}/${totalTopics}`}
          sub={`${Math.round((studiedTopics.length / totalTopics) * 100)}% of all topics`}
        />
      </motion.div>

      {/* Top wrong questions */}
      <div className="card-base space-y-4">
        <div className="flex items-center justify-between gap-4">
          <div>
            <h3 className="text-lg font-semibold text-slate-950 dark:text-white">
              Wrong questions
            </h3>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
              Questions you got wrong during exams
            </p>
          </div>
          {wrongIndices.length > 0 && (
            <button
              type="button"
              onClick={() => setModalOpen(true)}
              className="flex items-center gap-2 rounded-2xl border border-rose-200 bg-rose-50 px-4 py-2 text-sm font-semibold text-rose-700 transition hover:bg-rose-100 dark:border-rose-800 dark:bg-rose-900/30 dark:text-rose-300"
            >
              {wrongIndices.length} questions
            </button>
          )}
        </div>

        {topWrongQuestions.length === 0 && (
          <p className="text-sm text-slate-500 dark:text-slate-400">
            No data — complete at least one exam.
          </p>
        )}
      </div>

      {/* Wrong questions modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="w-full max-w-2xl overflow-hidden rounded-3xl bg-white shadow-2xl dark:bg-slate-900">
            <div className="flex items-center justify-between bg-rose-600 px-6 py-4">
              <p className="text-sm font-semibold text-white">
                Click a question to practice it
              </p>
              <button
                type="button"
                onClick={() => setModalOpen(false)}
                className="rounded-xl bg-white/20 px-3 py-1 text-sm text-white hover:bg-white/30"
              >
                Close
              </button>
            </div>
            <div className="max-h-[60vh] overflow-y-auto p-4">
              <div className="grid grid-cols-6 gap-2 sm:grid-cols-8">
                {wrongIndices.map((idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handleSelectWrongQuestion(idx)}
                    className="aspect-square flex items-center justify-center rounded-lg border border-rose-500 bg-rose-50 text-xs font-bold text-rose-700 transition hover:bg-rose-100 dark:bg-rose-900/20 dark:text-rose-300"
                  >
                    {idx + 1}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Exam history */}
      <div className="card-base space-y-4">
        <h3 className="text-lg font-semibold text-slate-950 dark:text-white">
          Exam history
        </h3>

        {stats.examHistory.length === 0 ? (
          <p className="text-sm text-slate-500 dark:text-slate-400">
            No exams completed yet.
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
                      {exam.score}/{exam.total} correct
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
                    Wrong: {exam.wrongIds.slice(0, 5).map((id) => `#${id}`).join(', ')}
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
          Progress by domain
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
