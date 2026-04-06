import { useEffect, useState } from 'react';

export default function CardNavigator({ total, current, onSelect, pageSize = 60 }) {
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
        <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-600 dark:text-slate-400">Card map</h3>
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
          const isCurrent = absoluteIndex === current;
          return (
            <button
              key={absoluteIndex}
              onClick={() => onSelect(absoluteIndex)}
              className={`aspect-square flex items-center justify-center rounded-lg text-xs font-bold transition ${
                isCurrent
                  ? 'border-2 border-slate-900 bg-slate-900 text-white dark:border-slate-100 dark:bg-slate-100 dark:text-slate-950'
                  : 'border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300'
              }`}
            >
              {absoluteIndex + 1}
            </button>
          );
        })}
      </div>
    </div>
  );
}