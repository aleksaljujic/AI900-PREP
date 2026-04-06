import { motion } from 'framer-motion';

export default function QuizQuestion({ question, selected, onSelect, feedback, disabled }) {
  const choices = question.choices || {};
  const choiceKeys = Object.keys(choices);
  const choiceValues = Object.values(choices);

  return (
    <div className="card-base p-6">
      <h2 className="text-2xl font-semibold text-slate-950 dark:text-white">{question.question}</h2>
      <div className="mt-6 space-y-3">
        {choiceValues.map((option, index) => {
          const key = choiceKeys[index];
          const isActive = selected === key;
          const isCorrect = feedback && question.answer === key;
          const isWrong = feedback && isActive && question.answer !== key;
          return (
            <button
              key={key}
              type="button"
              disabled={disabled}
              onClick={() => onSelect(key)}
              className={`flex w-full items-center justify-between rounded-3xl border px-5 py-4 text-left text-sm font-medium transition ${
                isCorrect
                  ? 'border-emerald-500 bg-emerald-50 text-emerald-900 dark:bg-emerald-900/20 dark:text-emerald-200'
                  : isWrong
                  ? 'border-rose-500 bg-rose-50 text-rose-900 dark:bg-rose-900/20 dark:text-rose-200'
                  : isActive
                  ? 'border-slate-900 bg-slate-100 text-slate-900 dark:border-slate-100 dark:bg-slate-900 dark:text-slate-100'
                  : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800'
              }`}
            >
              <span>{option}</span>
              <span className="text-xs uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">{key}</span>
            </button>
          );
        })}
      </div>
      {feedback && (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-6 rounded-3xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200"
        >
          <strong className="block text-slate-900 dark:text-white">Explanation</strong>
          <p className="mt-2 leading-7">{question.explanation}</p>
        </motion.div>
      )}
    </div>
  );
}
