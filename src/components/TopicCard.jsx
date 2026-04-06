import { motion } from 'framer-motion';
import { useState } from 'react';
import DomainBadge from './DomainBadge';

export default function TopicCard({ domain, topic, studied, onToggle }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="card-base overflow-hidden"
    >
      <div className="flex flex-col gap-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <DomainBadge domain={domain} />
            <h3 className="mt-4 text-xl font-semibold text-slate-950 dark:text-white">{topic.title}</h3>
          </div>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-100 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-slate-700"
          >
            {open ? 'Hide' : 'Show'} details
          </button>
        </div>
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => onToggle(topic.id)}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
              studied
                ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/20 dark:text-emerald-200'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700'
            }`}
          >
            {studied ? 'Mark as unstudied' : 'Mark as studied'}
          </button>
          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs uppercase tracking-[0.18em] text-slate-600 dark:bg-slate-900 dark:text-slate-300">
            {topic.id.replace(/-/g, ' ')}
          </span>
        </div>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="space-y-4"
          >
            <p className="text-slate-600 dark:text-slate-300">{topic.description}</p>
            <div className="space-y-3 rounded-3xl bg-slate-50 p-4 dark:bg-slate-950">
              <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">Key features</h4>
              <ul className="space-y-2 text-slate-700 dark:text-slate-200">
                {topic.features.map((feature) => (
                  <li key={feature} className="flex gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-slate-900 dark:bg-slate-100" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200">
              <strong>Example:</strong> {topic.example}
            </div>
          </motion.div>
        )}
      </div>
    </motion.article>
  );
}
