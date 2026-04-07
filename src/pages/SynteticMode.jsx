import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import useSynteticQuestions from '../hooks/useSynteticQuestions';
import QuestionRenderer from '../components/questions/QuestionRenderer';
import ExamResultsScreen from '../components/ExamResultsScreen';
import QuestionNavigator from '../components/QuestionNavigator';
import { isCorrectAnswer, formatAnswerDisplay, getCorrectAnswer } from '../utils/questionUtils';

export default function SynteticMode() {
  const navigate = useNavigate();
  const { questions, loading, error } = useSynteticQuestions();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [feedback, setFeedback] = useState(false);

  const question = questions[currentIndex];
  const answer = answers[currentIndex];
  const isMultiInput = question && ['multiple_choice_multi_select', 'drag_and_drop', 'drag_and_drop_order', 'hotspot_yes_no', 'hotspot_dropdown'].includes(question.type);
  const hasSelection = question?.type === 'hotspot_yes_no'
    ? answer && Object.keys(answer).length > 0
    : Array.isArray(answer)
    ? answer.length > 0
    : Boolean(answer);

  // All hooks must be declared before any conditional logic
  const correctCount = useMemo(() => {
    if (questions.length === 0) return 0;
    return Object.keys(answers).reduce((count, idx) => {
      const question = questions[idx];
      return count + (isCorrectAnswer(question, answers[idx]) ? 1 : 0);
    }, 0);
  }, [answers, questions]);

  // Handler functions must be defined before early returns
  const handleSelect = (value, statementIndex) => {
    if (questions.length === 0) return;

    if (typeof statementIndex === 'number') {
      setAnswers((prev) => ({
        ...prev,
        [currentIndex]: {
          ...(prev[currentIndex] || {}),
          [statementIndex]: value,
        },
      }));
      return;
    }

    setAnswers((prev) => ({ ...prev, [currentIndex]: value }));
    if (!isMultiInput) {
      setFeedback(true);
    }
  };

  const handleCheckAnswer = () => {
    setFeedback(true);
  };

  const handleNext = () => {
    setFeedback(false);
    if (currentIndex + 1 < questions.length) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    setFeedback(false);
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const handleSelectQuestion = (idx) => {
    setCurrentIndex(idx);
    setFeedback(false);
  };

  // Now conditional rendering (not early returns)
  if (loading) {
    return (
      <section className="card-base text-center">
        <p className="text-slate-600 dark:text-slate-300">Loading questions...</p>
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
        <p className="text-slate-600 dark:text-slate-300">No questions available</p>
      </section>
    );
  }

  const promptText = feedback
    ? 'Click Next to continue'
    : isMultiInput
    ? 'Select the correct answer choices or Yes/No options and click Check answer.'
    : 'Select your answer';

  return (
    <section className="space-y-10 pb-10">
      <div className="card-base">
        <span className="inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-600 dark:bg-slate-800 dark:text-slate-300">
          Practice Mode
        </span>
        <h2 className="mt-4 text-xl font-semibold text-slate-950 dark:text-white">
          Question {currentIndex + 1} of {questions.length}
        </h2>
        <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
          Answered: <strong>{Object.keys(answers).length}</strong> questions
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1fr_280px]">
        <motion.div key={currentIndex} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="card-base">
          <QuestionRenderer
            question={question}
            selected={answer}
            onSelect={handleSelect}
            feedback={feedback}
            disabled={feedback}
          />

          {feedback && (
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="mt-6 space-y-2">
              <div className="rounded-2xl bg-emerald-50 p-4 dark:bg-emerald-900/20">
                <p className="text-sm font-semibold text-emerald-900 dark:text-emerald-200">
                  Correct answer: <strong>{formatAnswerDisplay(question, getCorrectAnswer(question))}</strong>
                </p>
              </div>
            </motion.div>
          )}

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="text-sm text-slate-600 dark:text-slate-300">
              {promptText}
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <button
                type="button"
                onClick={handlePrev}
                disabled={currentIndex === 0}
                className="rounded-2xl border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 disabled:opacity-50 dark:border-slate-800 dark:text-slate-200 dark:hover:bg-slate-800"
              >
                Previous
              </button>
              {isMultiInput && !feedback && (
                <button
                  type="button"
                  onClick={handleCheckAnswer}
                  disabled={!hasSelection}
                  className="rounded-2xl border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 disabled:opacity-50 dark:border-slate-800 dark:text-slate-200 dark:hover:bg-slate-800"
                >
                  Check answer
                </button>
              )}
              <button
                type="button"
                onClick={handleNext}
                disabled={currentIndex === questions.length - 1}
                className="rounded-2xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-700 disabled:opacity-50 dark:bg-slate-100 dark:text-slate-950"
              >
                Next
              </button>
            </div>
          </div>
        </motion.div>

        <QuestionNavigator
          total={questions.length}
          current={currentIndex}
          answered={Object.keys(answers).map(Number)}
          onSelect={handleSelectQuestion}
          pageSize={60}
        />
      </div>
    </section>
  );
}
