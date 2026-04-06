import { useMemo, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { flashcards } from '../data/flashcards';
import DomainFilter from '../components/DomainFilter';
import FlashCard from '../components/FlashCard';

export default function Flashcards() {
  const [activeDomain, setActiveDomain] = useState('all');
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const visibleCards = useMemo(() => {
    return activeDomain === 'all' ? flashcards : flashcards.filter((card) => card.domain === activeDomain);
  }, [activeDomain]);

  const card = visibleCards[index] || visibleCards[0];

  const handleNext = () => {
    setFlipped(false);
    setIndex((current) => (current + 1) % visibleCards.length);
  };

  const handlePrev = () => {
    setFlipped(false);
    setIndex((current) => (current - 1 + visibleCards.length) % visibleCards.length);
  };

  const handleDomainChange = (domain) => {
    setActiveDomain(domain);
    setIndex(0);
    setFlipped(false);
  };

  return (
    <section className="space-y-10 pb-10">
      <div className="card-base">
        <span className="inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-600 dark:bg-slate-800 dark:text-slate-300">
          Flashcards
        </span>
        <h2 className="mt-4 text-3xl font-semibold text-slate-950 dark:text-white">Flip through AI-900 concepts</h2>
        <p className="mt-3 max-w-2xl text-slate-600 dark:text-slate-300">
          Use the flashcards to review definition and exam tips for each important AI-900 concept. Navigate cards by domain or swipe through the full set.
        </p>
      </div>
      <DomainFilter active={activeDomain} onChange={handleDomainChange} />
      <AnimatePresence mode="wait">
        {card && (
          <FlashCard
            key={card.id}
            card={card}
            flipped={flipped}
            onFlip={() => setFlipped((value) => !value)}
            onPrev={handlePrev}
            onNext={handleNext}
            index={index}
            total={visibleCards.length}
          />
        )}
      </AnimatePresence>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="card-base">
          <p className="font-semibold text-slate-900 dark:text-white">Current domain</p>
          <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{activeDomain === 'all' ? 'All domains' : activeDomain}</p>
        </div>
        <div className="card-base">
          <p className="font-semibold text-slate-900 dark:text-white">Total cards</p>
          <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{visibleCards.length} flashcards available</p>
        </div>
      </div>
    </section>
  );
}
