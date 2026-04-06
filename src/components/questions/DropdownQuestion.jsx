import { motion } from 'framer-motion';

export default function DropdownQuestion({ question, selected, onSelect, feedback, disabled }) {
  return (
    <div className="space-y-6">
      <p className="text-sm font-semibold text-slate-600 dark:text-slate-300">{question.prompt}</p>
      <div className="space-y-4">
        {question.items.map((item, idx) => {
          const answer = selected?.[idx];
          const isCorrect = feedback && answer === item.answer;
          const isWrong = feedback && answer && answer !== item.answer;

          return (
            <div key={idx} className="space-y-2">
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">{item.text}</label>
              <select
                disabled={disabled}
                value={answer || ''}
                onChange={(e) => onSelect(e.target.value, idx)}
                className={`w-full rounded-2xl border-2 px-4 py-2 text-sm font-medium transition ${
                  isCorrect
                    ? 'border-emerald-500 bg-emerald-50 text-emerald-900 dark:bg-emerald-900/20 dark:text-emerald-200'
                    : isWrong
                    ? 'border-rose-500 bg-rose-50 text-rose-900 dark:bg-rose-900/20 dark:text-rose-200'
                    : 'border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900'
                }`}
              >
                <option value="">Select an answer...</option>
                {item.options.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>
          );
        })}
      </div>
    </div>
  );
}
