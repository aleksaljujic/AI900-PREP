const domainMap = {
  workloads: {
    label: 'AI Workloads',
    classes: 'bg-sky-100 text-sky-700 dark:bg-sky-900/20 dark:text-sky-200',
  },
  ml: {
    label: 'Machine Learning',
    classes: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/20 dark:text-emerald-200',
  },
  vision: {
    label: 'Computer Vision',
    classes: 'bg-orange-100 text-orange-700 dark:bg-orange-900/20 dark:text-orange-200',
  },
  nlp: {
    label: 'NLP',
    classes: 'bg-violet-100 text-violet-700 dark:bg-violet-900/20 dark:text-violet-200',
  },
  generative: {
    label: 'Generative AI',
    classes: 'bg-amber-100 text-amber-700 dark:bg-amber-900/20 dark:text-amber-200',
  },
};

export default function DomainBadge({ domain }) {
  const item = domainMap[domain] ?? domainMap.workloads;
  return (
    <span className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] ${item.classes}`}>
      {item.label}
    </span>
  );
}
