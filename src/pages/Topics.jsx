import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { domains } from '../data/topics';
import useProgress from '../hooks/useProgress';
import DomainFilter from '../components/DomainFilter';
import TopicCard from '../components/TopicCard';

export default function Topics() {
  const [activeDomain, setActiveDomain] = useState('all');
  const { studiedTopics, toggleTopic } = useProgress();

  const visibleDomains = useMemo(() => {
    return activeDomain === 'all'
      ? domains
      : domains.filter((domain) => domain.id === activeDomain);
  }, [activeDomain]);

  return (
    <section className="space-y-10 pb-10">
      <div className="space-y-4">
        <div className="card-base">
          <span className="inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-600 dark:bg-slate-800 dark:text-slate-300">
            Topics
          </span>
          <h2 className="mt-4 text-3xl font-semibold text-slate-950 dark:text-white">Explore the AI-900 topic hierarchy</h2>
          <p className="mt-3 max-w-2xl text-slate-600 dark:text-slate-300">
            Browse domain-specific topics with details, examples, and feature summaries. Mark topics as studied as you review each item.
          </p>
        </div>
        <DomainFilter active={activeDomain} onChange={setActiveDomain} />
      </div>
      <motion.div layout className="grid gap-6 lg:grid-cols-2">
        {visibleDomains.flatMap((domain) =>
          domain.subtopics.map((topic) => (
            <TopicCard
              key={topic.id}
              domain={domain.id}
              topic={topic}
              studied={studiedTopics.includes(topic.id)}
              onToggle={toggleTopic}
            />
          ))
        )}
      </motion.div>
    </section>
  );
}
