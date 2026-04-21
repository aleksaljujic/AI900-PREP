import { useMemo } from 'react';
import { motion } from 'framer-motion';

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function MultipleChoiceQuestion({ question, selected, onSelect, feedback, disabled }) {
  const shuffledEntries = useMemo(() => shuffle(Object.entries(question.choices)), [question.id]);

  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{question.question}</h3>
      <div className="space-y-3">
        {shuffledEntries.map(([key, label]) => {
          const isSelected = selected === key;
          const isCorrect = feedback && question.answer === key;
          const isWrong = feedback && isSelected && question.answer !== key;

          return (
            <button
              key={key}
              type="button"
              disabled={disabled}
              onClick={() => onSelect(key)}
              className={`flex w-full items-center rounded-2xl border-2 px-5 py-4 text-left text-sm font-medium transition ${
                isCorrect
                  ? 'border-emerald-500 bg-emerald-50 text-emerald-900 dark:bg-emerald-900/20 dark:text-emerald-200'
                  : isWrong
                  ? 'border-rose-500 bg-rose-50 text-rose-900 dark:bg-rose-900/20 dark:text-rose-200'
                  : isSelected
                  ? 'border-slate-900 bg-slate-100 text-slate-900 dark:border-slate-100 dark:bg-slate-900 dark:text-slate-100'
                  : 'border-slate-200 bg-white hover:border-slate-300 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-slate-700 dark:text-slate-200'
              }`}
            >
              {label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
