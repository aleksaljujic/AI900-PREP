import { useState } from 'react';

export default function SimulationQuestion({ question }) {
  const images = question.images ?? [];
  const [current, setCurrent] = useState(0);

  if (images.length === 0) {
    return <p className="text-sm text-slate-500 dark:text-slate-400">No images available for this simulation.</p>;
  }

  const prev = () => setCurrent((c) => (c - 1 + images.length) % images.length);
  const next = () => setCurrent((c) => (c + 1) % images.length);

  return (
    <div className="space-y-4">
      {question.prompt && (
        <p className="text-sm font-semibold text-slate-600 dark:text-slate-300">{question.prompt}</p>
      )}

      <div className="relative overflow-hidden rounded-2xl bg-slate-100 dark:bg-slate-800">
        <img
          key={current}
          src={images[current]}
          alt={`Slide ${current + 1}`}
          className="w-full max-h-[500px] object-contain"
          onError={(e) => { e.target.alt = 'Image not found'; }}
        />

        {images.length > 1 && (
          <>
            <button
              type="button"
              onClick={prev}
              className="absolute left-3 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-white/80 text-slate-800 shadow transition hover:bg-white dark:bg-slate-900/80 dark:text-slate-100 dark:hover:bg-slate-900"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={next}
              className="absolute right-3 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-white/80 text-slate-800 shadow transition hover:bg-white dark:bg-slate-900/80 dark:text-slate-100 dark:hover:bg-slate-900"
            >
              ›
            </button>
          </>
        )}
      </div>

      {images.length > 1 && (
        <div className="flex items-center justify-center gap-2">
          {images.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setCurrent(idx)}
              className={`h-2 rounded-full transition-all ${
                idx === current
                  ? 'w-5 bg-slate-900 dark:bg-slate-100'
                  : 'w-2 bg-slate-300 hover:bg-slate-400 dark:bg-slate-600 dark:hover:bg-slate-500'
              }`}
            />
          ))}
          <span className="ml-2 text-xs text-slate-500 dark:text-slate-400">{current + 1} / {images.length}</span>
        </div>
      )}
    </div>
  );
}
