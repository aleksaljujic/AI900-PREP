import { motion } from 'framer-motion';

export default function MultipleChoiceQuestion({ question, selected, onSelect, feedback, disabled }) {
  const choiceKeys = Object.keys(question.choices);

  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{question.question}</h3>
      <div className="space-y-3">
        {choiceKeys.map((key) => {
          const isSelected = selected === key;
          const isCorrect = feedback && question.answer === key;
          const isWrong = feedback && isSelected && question.answer !== key;

          return (
            <button
              key={key}
              type="button"
              disabled={disabled}
              onClick={() => onSelect(key)}
              className={`flex w-full items-center gap-4 rounded-2xl border-2 px-5 py-4 text-left text-sm font-medium transition ${
                isCorrect
                  ? 'border-emerald-500 bg-emerald-50 text-emerald-900 dark:bg-emerald-900/20 dark:text-emerald-200'
                  : isWrong
                  ? 'border-rose-500 bg-rose-50 text-rose-900 dark:bg-rose-900/20 dark:text-rose-200'
                  : isSelected
                  ? 'border-slate-900 bg-slate-100 text-slate-900 dark:border-slate-100 dark:bg-slate-900 dark:text-slate-100'
                  : 'border-slate-200 bg-white hover:border-slate-300 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-slate-700 dark:text-slate-200'
              }`}
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-current font-bold">{key}</span>
              <span>{question.choices[key]}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
