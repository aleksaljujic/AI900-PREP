import { motion } from 'framer-motion';
import { useMemo } from 'react';
import DomainBadge from './DomainBadge';
import { formatAnswerDisplay, getCorrectAnswer } from '../utils/questionUtils';

const cardVariants = {
  enter: { opacity: 0, x: 50 },
  center: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -50 },
};

export default function FlashCard({ card, flipped, onFlip, onPrev, onNext, index, total }) {
  const buttonLabel = flipped ? 'Show front' : 'Show back';
  const current = useMemo(() => `${index + 1} / ${total}`, [index, total]);

  const isQuestion = card && card.question;
  const frontTitle = isQuestion ? card.question : card.title;
  const backTitle = isQuestion ? 'Correct Answer' : 'Exam tip';
  const frontContent = isQuestion ? null : card.definition;
  const backContent = isQuestion ? null : card.tip;
  const domain = isQuestion ? card.type : card.domain;

  return (
    <motion.div
      key={card.id}
      variants={cardVariants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{ duration: 0.35 }}
      className="card-base relative mx-auto max-w-2xl p-8"
    >
      <div className="absolute right-6 top-6 text-sm text-slate-500 dark:text-slate-400">{current}</div>
      <DomainBadge domain={domain} />
      {isQuestion && card.img && (
        <div className="mt-4 flex justify-center">
          <img src={card.img} alt="Question illustration" className="max-h-48 rounded-lg shadow-sm" />
        </div>
      )}
      <div className="mt-8 perspective-1000">
        <motion.div
          animate={{ rotateY: flipped ? 180 : 0 }}
          transition={{ duration: 0.7, ease: 'easeInOut' }}
          className="relative min-h-[260px] w-full transform-style-preserve-3d"
        >
          <div className="backface-hidden absolute inset-0 flex flex-col justify-center rounded-3xl bg-slate-50 p-8 text-slate-900 shadow-soft dark:bg-slate-900 dark:text-slate-100">
            <h2 className="text-2xl font-semibold">{frontTitle}</h2>
            {isQuestion ? (
              <div className="mt-4 space-y-3">
                {card.type === 'multiple_choice' && card.choices && (
                  Object.entries(card.choices).map(([key, value]) => (
                    <div key={key} className="p-3 rounded-lg bg-slate-100 dark:bg-slate-800">
                      <strong>{key}:</strong> {value}
                    </div>
                  ))
                )}
                {card.type === 'hotspot_yes_no' && card.statements && (
                  card.statements.map((statement, idx) => (
                    <div key={idx} className="p-3 rounded-lg bg-slate-100 dark:bg-slate-800">
                      <strong>{idx + 1}:</strong> {statement.text}
                    </div>
                  ))
                )}
                {card.type === 'hotspot_dropdown' && card.items && (
                  card.items.map((item, idx) => (
                    <div key={idx} className="p-3 rounded-lg bg-slate-100 dark:bg-slate-800">
                      <strong>{idx + 1}:</strong> {item.text}
                    </div>
                  ))
                )}
                {card.type === 'hotspot_single_select' && card.options && (
                  <div className="space-y-2">
                    <p className="text-slate-600 dark:text-slate-300">{card.sentence}</p>
                    {card.options.map((option, idx) => (
                      <div key={idx} className="p-2 rounded bg-slate-100 dark:bg-slate-800">
                        {option}
                      </div>
                    ))}
                  </div>
                )}
                {card.type === 'drag_and_drop' && card.targets && (
                  card.targets.map((target, idx) => (
                    <div key={idx} className="p-3 rounded-lg bg-slate-100 dark:bg-slate-800">
                      <strong>{idx + 1}:</strong> {target.text}
                    </div>
                  ))
                )}
                {card.type === 'drag_and_drop_order' && card.answer_order && (
                  <div className="p-3 rounded-lg bg-slate-100 dark:bg-slate-800">
                    <strong>Order the following:</strong> {card.answer_order.join(', ')}
                  </div>
                )}
                {card.type === 'multiple_choice_multi_select' && card.choices && (
                  <div className="space-y-2">
                    {Object.entries(card.choices).map(([key, value]) => (
                      <div key={key} className="p-2 rounded bg-slate-100 dark:bg-slate-800">
                        <strong>{key}:</strong> {value}
                      </div>
                    ))}
                  </div>
                )}
                {(!card.type || !['multiple_choice', 'hotspot_yes_no', 'hotspot_dropdown', 'hotspot_single_select', 'drag_and_drop', 'drag_and_drop_order', 'multiple_choice_multi_select'].includes(card.type)) && (
                  <p className="text-sm leading-7 text-slate-600 dark:text-slate-300">{formatAnswerDisplay(card, getCorrectAnswer(card))}</p>
                )}
              </div>
            ) : (
              <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">{frontContent}</p>
            )}
          </div>
          <div className="backface-hidden absolute inset-0 rotate-y-180 flex flex-col justify-center rounded-3xl bg-slate-950 p-8 text-slate-100 shadow-soft dark:bg-slate-800">
            <h2 className="text-2xl font-semibold text-amber-200">{backTitle}</h2>
            {isQuestion ? (
              <div className="mt-4">
                <p className="text-lg font-semibold text-emerald-200">Correct Answer:</p>
                <p className="mt-2 text-xl text-white">{formatAnswerDisplay(card, getCorrectAnswer(card))}</p>
              </div>
            ) : (
              <p className="mt-4 text-sm leading-7 text-slate-200">{backContent}</p>
            )}
          </div>
        </motion.div>
      </div>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="button"
          onClick={onFlip}
          className="rounded-3xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
        >
          {buttonLabel}
        </button>
        <div className="flex gap-3">
          <button
            type="button"
            onClick={onPrev}
            className="rounded-3xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
          >
            Previous
          </button>
          <button
            type="button"
            onClick={onNext}
            className="rounded-3xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
          >
            Next
          </button>
        </div>
      </div>
    </motion.div>
  );
}
