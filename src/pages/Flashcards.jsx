import { useState } from 'react';
import { motion } from 'framer-motion';
import flashcards from '../data/flashcards';

export default function Flashcards() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const card = flashcards[currentIndex];
  const total = flashcards.length;

  const handleFlip = () => {
    setFlipped(!flipped);
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setFlipped(false);
    }
  };

  const handleNext = () => {
    if (currentIndex < total - 1) {
      setCurrentIndex(currentIndex + 1);
      setFlipped(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-sky-50 to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-sky-600 dark:from-slate-100 dark:to-sky-400 mb-2">
            Flashcards
          </h1>
          <p className="text-slate-600 dark:text-slate-400">
            Click the card to flip between question and answer
          </p>
        </div>

        {/* Main Card */}
        <div
          className="mb-8"
          style={{ perspective: 1000, cursor: 'pointer' }}
          onClick={handleFlip}
        >
          <div
            style={{
              transformStyle: 'preserve-3d',
              transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
              transition: 'transform 0.6s ease-in-out',
            }}
            className="relative"
          >
            {/* Front */}
            <div
              style={{ backfaceVisibility: 'hidden' }}
              className="min-h-[400px] bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-900 rounded-2xl shadow-lg p-8 flex flex-col justify-center items-center border border-slate-200 dark:border-slate-700"
            >
              <div className="text-left">
                <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 mb-4 uppercase tracking-widest">
                  Question
                </p>
                {card.img && (
                  <div className="mb-6 flex justify-center">
                    <img src={card.img} alt="Question illustration" className="max-h-72 w-auto rounded-3xl shadow-md" />
                  </div>
                )}
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-slate-100 leading-relaxed">
                  {card.question}
                </h2>

                {card.choices && Object.entries(card.choices).length > 0 && (
                  <div className="mt-8 space-y-3 text-left mx-auto max-w-lg w-full">
                    {Object.entries(card.choices).map(([key, value]) => (
                      <div key={key} className="flex items-center justify-start gap-3 p-3 rounded-lg bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300">
                        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-200 text-sm font-semibold text-slate-900 dark:bg-slate-800 dark:text-slate-100">
                          {key}
                        </span>
                        <span className="text-base font-medium">{value}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <p className="text-xs text-slate-400 dark:text-slate-500 mt-8">Click to reveal answer</p>
            </div>

            {/* Back */}
            <div
              style={{
                backfaceVisibility: 'hidden',
                transform: 'rotateY(180deg)',
              }}
              className="absolute inset-0 min-h-[400px] bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900 dark:to-teal-900 rounded-2xl shadow-lg p-8 flex flex-col justify-center items-center border border-emerald-200 dark:border-emerald-700"
            >
              <div className="text-left">
                <p className="text-sm font-semibold text-emerald-600 dark:text-emerald-400 mb-4 uppercase tracking-widest">
                  Answer
                </p>
                <h2 className="text-2xl md:text-3xl font-bold text-emerald-900 dark:text-emerald-100 leading-relaxed">
                  {card.answer}
                </h2>
              </div>
              <p className="text-xs text-emerald-600 dark:text-emerald-400 mt-8">Click to reveal question</p>
            </div>
          </div>
        </div>

        {/* Card Info */}
        <div className="text-center mb-8">
          <p className="text-lg font-semibold text-slate-700 dark:text-slate-300">
            Card <span className="text-sky-600 dark:text-sky-400">{currentIndex + 1}</span> of{' '}
            <span className="text-sky-600 dark:text-sky-400">{total}</span>
          </p>
        </div>

        {/* Navigation Buttons */}
        <div className="flex gap-4 justify-center mb-8">
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="px-6 py-3 rounded-lg bg-slate-900 hover:bg-slate-800 disabled:bg-slate-300 disabled:cursor-not-allowed text-white font-semibold transition"
          >
            ← Previous
          </button>
          <button
            onClick={handleNext}
            disabled={currentIndex === total - 1}
            className="px-6 py-3 rounded-lg bg-sky-600 hover:bg-sky-700 disabled:bg-slate-300 disabled:cursor-not-allowed text-white font-semibold transition"
          >
            Next →
          </button>
        </div>
      </div>
    </div>
  );
}
