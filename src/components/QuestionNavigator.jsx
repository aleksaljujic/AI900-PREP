export default function QuestionNavigator({ total, current, answered, onSelect }) {
  const sections = Math.ceil(total / 10);
  const questionsPerSection = Math.ceil(total / sections);

  return (
    <div className="card-base max-h-[600px] overflow-y-auto">
      <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-600 dark:text-slate-400">Question map</h3>
      <div className="mt-4 grid grid-cols-5 gap-2 sm:grid-cols-6">
        {Array.from({ length: total }).map((_, idx) => {
          const isAnswered = answered.includes(idx);
          const isCurrent = idx === current;

          return (
            <button
              key={idx}
              onClick={() => onSelect(idx)}
              className={`aspect-square flex items-center justify-center rounded-lg text-xs font-bold transition ${
                isCurrent
                  ? 'border-2 border-slate-900 bg-slate-900 text-white dark:border-slate-100 dark:bg-slate-100 dark:text-slate-950'
                  : isAnswered
                  ? 'border border-emerald-500 bg-emerald-50 text-emerald-700 dark:bg-emerald-900/20 dark:text-emerald-200'
                  : 'border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300'
              }`}
            >
              {idx + 1}
            </button>
          );
        })}
      </div>
      <div className="mt-6 space-y-2 border-t border-slate-200 pt-4 dark:border-slate-800">
        <div className="flex items-center justify-between text-xs text-slate-600 dark:text-slate-400">
          <span>Answered</span>
          <span className="font-semibold">{answered.length}/{total}</span>
        </div>
        <div className="h-2 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
          <div
            className="h-full rounded-full bg-emerald-500 transition-all duration-300"
            style={{ width: `${(answered.length / total) * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
}
