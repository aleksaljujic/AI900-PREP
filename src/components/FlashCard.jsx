import { motion } from 'framer-motion';
import { useMemo } from 'react';
import DomainBadge from './DomainBadge';

const cardVariants = {
  enter: { opacity: 0, x: 50 },
  center: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -50 },
};

export default function FlashCard({ card, flipped, onFlip, onPrev, onNext, index, total }) {
  const buttonLabel = flipped ? 'Show front' : 'Show back';
  const current = useMemo(() => `${index + 1} / ${total}`, [index, total]);

  return (
    <motion.div
      key={card.id}
      variants={cardVariants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{ duration: 0.35 }}
      className="card-base relative mx-auto max-w-2xl p-8"
    >
      <div className="absolute right-6 top-6 text-sm text-slate-500 dark:text-slate-400">{current}</div>
      <DomainBadge domain={card.domain} />
      <div className="mt-8 perspective-1000">
        <motion.div
          animate={{ rotateY: flipped ? 180 : 0 }}
          transition={{ duration: 0.7, ease: 'easeInOut' }}
          className="relative min-h-[260px] w-full transform-style-preserve-3d"
        >
          <div className="backface-hidden absolute inset-0 flex flex-col justify-center rounded-3xl bg-slate-50 p-8 text-slate-900 shadow-soft dark:bg-slate-900 dark:text-slate-100">
            <h2 className="text-3xl font-semibold">{card.title}</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">{card.definition}</p>
          </div>
          <div className="backface-hidden absolute inset-0 rotate-y-180 flex flex-col justify-center rounded-3xl bg-slate-950 p-8 text-slate-100 shadow-soft dark:bg-slate-800">
            <h2 className="text-2xl font-semibold text-amber-200">Exam tip</h2>
            <p className="mt-4 text-sm leading-7 text-slate-200">{card.tip}</p>
          </div>
        </motion.div>
      </div>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="button"
          onClick={onFlip}
          className="rounded-3xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
        >
          {buttonLabel}
        </button>
        <div className="flex gap-3">
          <button
            type="button"
            onClick={onPrev}
            className="rounded-3xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
          >
            Previous
          </button>
          <button
            type="button"
            onClick={onNext}
            className="rounded-3xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
          >
            Next
          </button>
        </div>
      </div>
    </motion.div>
  );
}
