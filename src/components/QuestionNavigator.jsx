import { useEffect, useState } from 'react';

export default function QuestionNavigator({ total, current, answered, onSelect, wrong = [], pageSize = 60 }) {
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = Math.max(1, Math.ceil(total / pageSize));
  const pageStart = currentPage * pageSize;
  const pageEnd = Math.min(total, pageStart + pageSize);

  useEffect(() => {
    const newPage = Math.floor(current / pageSize);
    if (newPage !== currentPage) {
      setCurrentPage(newPage);
    }
  }, [current, pageSize]);

  const handlePageChange = (direction) => {
    setCurrentPage((value) => {
      const nextPage = value + direction;
      if (nextPage < 0 || nextPage >= totalPages) return value;
      return nextPage;
    });
  };

  return (
    <div className="card-base max-h-[600px] overflow-y-auto">
      <div className="flex items-center justify-between gap-4">
        <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-600 dark:text-slate-400">Question map</h3>
        {totalPages > 1 && (
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-600 dark:text-slate-300">
            <button
              type="button"
              onClick={() => handlePageChange(-1)}
              disabled={currentPage === 0}
              className="rounded-full border border-slate-300 px-2 py-1 transition hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-40 dark:border-slate-700 dark:hover:bg-slate-800"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={() => handlePageChange(1)}
              disabled={currentPage >= totalPages - 1}
              className="rounded-full border border-slate-300 px-2 py-1 transition hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-40 dark:border-slate-700 dark:hover:bg-slate-800"
            >
              ›
            </button>
          </div>
        )}
      </div>
      <div className="mt-4 grid grid-cols-5 gap-2 sm:grid-cols-6">
        {Array.from({ length: pageEnd - pageStart }).map((_, idx) => {
          const absoluteIndex = pageStart + idx;
          const isAnswered = answered.includes(absoluteIndex);
          const isCurrent = absoluteIndex === current;
          const isWrong = wrong.includes(absoluteIndex);
          return (
            <button
              key={absoluteIndex}
              onClick={() => onSelect(absoluteIndex)}
              className={`aspect-square flex items-center justify-center rounded-lg text-xs font-bold transition ${
                isCurrent
                  ? 'border-2 border-slate-900 bg-slate-900 text-white dark:border-slate-100 dark:bg-slate-100 dark:text-slate-950'
                  : isWrong
                  ? 'border border-rose-500 bg-rose-50 text-rose-700 dark:bg-rose-900/20 dark:text-rose-300'
                  : isAnswered
                  ? 'border border-emerald-500 bg-emerald-50 text-emerald-700 dark:bg-emerald-900/20 dark:text-emerald-200'
                  : 'border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300'
              }`}
            >
              {absoluteIndex + 1}
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
