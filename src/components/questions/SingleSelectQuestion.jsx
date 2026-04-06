export default function SingleSelectQuestion({ question, selected, onSelect, feedback, disabled }) {
  return (
    <div className="space-y-6">
      <div className="rounded-2xl bg-slate-50 p-4 dark:bg-slate-900">
        <p className="text-sm font-semibold text-slate-700 dark:text-slate-200">{question.prompt}</p>
        <p className="mt-3 text-base font-medium text-slate-900 dark:text-white">{question.sentence}</p>
      </div>
      <div className="space-y-3">
        {question.options.map((option) => {
          const isSelected = selected === option;
          const isCorrect = feedback && question.answer === option;
          const isWrong = feedback && isSelected && question.answer !== option;

          return (
            <button
              key={option}
              type="button"
              disabled={disabled}
              onClick={() => onSelect(option)}
              className={`flex w-full items-center rounded-2xl border-2 px-5 py-4 text-left text-sm font-medium transition ${
                isCorrect
                  ? 'border-emerald-500 bg-emerald-50 text-emerald-900 dark:bg-emerald-900/20 dark:text-emerald-200'
                  : isWrong
                  ? 'border-rose-500 bg-rose-50 text-rose-900 dark:bg-rose-900/20 dark:text-rose-200'
                  : isSelected
                  ? 'border-slate-900 bg-slate-100 text-slate-900 dark:border-slate-100 dark:bg-slate-900 dark:text-slate-100'
                  : 'border-slate-200 bg-white hover:border-slate-300 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200'
              }`}
            >
              <span className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-current mr-3">{isSelected ? '✓' : ''}</span>
              {option}
            </button>
          );
        })}
      </div>
    </div>
  );
}
