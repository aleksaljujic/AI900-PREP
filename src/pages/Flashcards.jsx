import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
// import { flashcards } from '../data/flashcards';
import useQuestions from '../hooks/useQuestions';
import DomainFilter from '../components/DomainFilter';
import FlashCard from '../components/FlashCard';
import CardNavigator from '../components/CardNavigator';

// Commented out original flashcards implementation

// New implementation based on questions
export default function Flashcards() {
  const { questions, loading, error } = useQuestions();
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const visibleCards = questions;
  const card = visibleCards[index] || visibleCards[0];

  const handleNext = () => {
    setFlipped(false);
    setIndex((current) => (current + 1) % visibleCards.length);
  };

  const handlePrev = () => {
    setFlipped(false);
    setIndex((current) => (current - 1 + visibleCards.length) % visibleCards.length);
  };

  if (loading) {
    return (
      <section className="card-base text-center">
        <p className="text-slate-600 dark:text-slate-300">Loading flashcards...</p>
      </section>
    );
  }

  if (error) {
    return (
      <section className="card-base bg-rose-50 text-rose-900 dark:bg-rose-900/20 dark:text-rose-200">
        <p>Error: {error}</p>
      </section>
    );
  }

  if (questions.length === 0) {
    return (
      <section className="card-base text-center">
        <p className="text-slate-600 dark:text-slate-300">No flashcards available</p>
      </section>
    );
  }

  return (
    <section className="space-y-10 pb-10">
      <div className="card-base">
        <span className="inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-600 dark:bg-slate-800 dark:text-slate-300">
          Flashcards
        </span>
        <h2 className="mt-4 text-3xl font-semibold text-slate-950 dark:text-white">Flip through AI-900 questions</h2>
        <p className="mt-3 max-w-2xl text-slate-600 dark:text-slate-300">
          Use the flashcards to review questions and all answer options for AI-900 exam preparation. Flip through all questions to learn the correct answers.
        </p>
      </div>
      <div className="grid gap-6 lg:grid-cols-[1fr_240px]">
        <div>
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
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="card-base">
              <p className="font-semibold text-slate-900 dark:text-white">Question type</p>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{card ? card.type.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase()) : 'N/A'}</p>
            </div>
            <div className="card-base">
              <p className="font-semibold text-slate-900 dark:text-white">Total cards</p>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{visibleCards.length} flashcards available</p>
            </div>
          </div>
        </div>
        <CardNavigator
          total={visibleCards.length}
          current={index}
          onSelect={setIndex}
          pageSize={30}
        />
      </div>
    </section>
  );
}
