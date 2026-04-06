import { domains } from '../data/topics';

export default function DomainFilter({ active, onChange }) {
  return (
    <div className="grid gap-3 sm:grid-cols-5">
      <button
        type="button"
        onClick={() => onChange('all')}
        className={`rounded-3xl border px-4 py-2 text-sm font-semibold transition ${
          active === 'all'
            ? 'border-slate-900 bg-slate-900 text-white dark:border-slate-100 dark:bg-slate-100 dark:text-slate-950'
            : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800'
        }`}
      >
        All Domains
      </button>
      {domains.map((domain) => (
        <button
          key={domain.id}
          type="button"
          onClick={() => onChange(domain.id)}
          className={`rounded-3xl border px-4 py-2 text-sm font-semibold transition ${
            active === domain.id
              ? 'border-slate-900 bg-slate-900 text-white dark:border-slate-100 dark:bg-slate-100 dark:text-slate-950'
              : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800'
          }`}
        >
          {domain.title}
        </button>
      ))}
    </div>
  );
}
