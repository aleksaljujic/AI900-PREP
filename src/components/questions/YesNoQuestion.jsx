import { useMemo } from 'react';

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function YesNoQuestion({ question, selected = {}, onSelect, feedback, disabled }) {
  const shuffled = useMemo(() => shuffle(question.statements), [question.id]);

  return (
    <div className="space-y-6">
      <p className="text-sm font-semibold text-slate-600 dark:text-slate-300">{question.prompt}</p>
      <div className="space-y-4">
        {shuffled.map((statement, idx) => {
          const answer = selected[idx];
          const isCorrect = feedback && answer === statement.answer;
          const isWrong = feedback && answer && answer !== statement.answer;

          return (
            <div key={idx} className="space-y-3 rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900">
              <p className="text-sm text-slate-700 dark:text-slate-200">{statement.text}</p>
              <div className="grid gap-3 sm:grid-cols-2">
                {['Yes', 'No'].map((option) => (
                  <label
                    key={option}
                    className={`flex cursor-pointer items-center gap-3 rounded-2xl border-2 px-4 py-3 text-sm font-semibold transition ${
                      answer === option && isCorrect
                        ? 'border-emerald-500 bg-emerald-50 text-emerald-900 dark:bg-emerald-900/20 dark:text-emerald-200'
                        : answer === option && isWrong
                        ? 'border-rose-500 bg-rose-50 text-rose-900 dark:bg-rose-900/20 dark:text-rose-200'
                        : answer === option
                        ? 'border-slate-900 bg-slate-100 text-slate-900 dark:border-slate-100 dark:bg-slate-900 dark:text-slate-100'
                        : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200'
                    }`}
                  >
                    <input
                      type="radio"
                      name={`yes-no-${idx}`}
                      value={option}
                      checked={answer === option}
                      disabled={disabled}
                      onChange={() => onSelect(option, idx)}
                      className="h-4 w-4 accent-slate-900 dark:accent-slate-100"
                    />
                    <span>{option}</span>
                  </label>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
