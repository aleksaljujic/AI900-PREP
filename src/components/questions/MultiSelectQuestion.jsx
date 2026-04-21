import { useMemo } from 'react';

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function MultiSelectQuestion({ question, selected = [], onSelect, feedback, disabled }) {
  const selectedValues = Array.isArray(selected) ? selected : [];
  const correctAnswers = Array.isArray(question.answer) ? question.answer : [];
  const shuffledEntries = useMemo(() => shuffle(Object.entries(question.choices)), [question.id]);

  const toggleOption = (key) => {
    if (disabled) return;
    const isSelected = selectedValues.includes(key);
    const nextSelection = isSelected
      ? selectedValues.filter((item) => item !== key)
      : [...selectedValues, key];
    onSelect(nextSelection);
  };

  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{question.question}</h3>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Select all that apply.</p>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        {shuffledEntries.map(([key, label]) => {
          const isSelected = selectedValues.includes(key);
          const isCorrect = feedback && correctAnswers.includes(key);
          const isWrong = feedback && isSelected && !correctAnswers.includes(key);

          return (
            <button
              key={key}
              type="button"
              disabled={disabled}
              onClick={() => toggleOption(key)}
              className={`flex items-start rounded-2xl border-2 px-5 py-4 text-left text-sm font-medium transition ${
                isCorrect
                  ? 'border-emerald-500 bg-emerald-50 text-emerald-900 dark:bg-emerald-900/20 dark:text-emerald-200'
                  : isWrong
                  ? 'border-rose-500 bg-rose-50 text-rose-900 dark:bg-rose-900/20 dark:text-rose-200'
                  : isSelected
                  ? 'border-slate-900 bg-slate-100 text-slate-900 dark:border-slate-100 dark:bg-slate-900 dark:text-slate-100'
                  : 'border-slate-200 bg-white hover:border-slate-300 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200'
              }`}
            >
              {label}
            </button>
          );
        })}
      </div>

      {feedback && (
        <div className="rounded-2xl bg-slate-100 p-4 text-sm text-slate-700 dark:bg-slate-900 dark:text-slate-300">
          Correct answers: <strong>{correctAnswers.map((k) => question.choices[k]).join(', ')}</strong>
        </div>
      )}
    </div>
  );
}
