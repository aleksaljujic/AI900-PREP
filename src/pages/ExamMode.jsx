import { useState, useMemo, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import useQuestionsBySet from '../hooks/useQuestionsBySet';
import useExamTimer from '../hooks/useExamTimer';
import useStats from '../hooks/useStats';
import QuestionRenderer from '../components/questions/QuestionRenderer';
import QuestionNavigator from '../components/QuestionNavigator';
import ExamResultsScreen from '../components/ExamResultsScreen';
import { isCorrectAnswer } from '../utils/questionUtils';

export default function ExamMode() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const set = searchParams.get('set') || 'standard';
  const { questions: allQuestions, loading, error } = useQuestionsBySet(set);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [examQuestions, setExamQuestions] = useState([]);
  const [timerKey, setTimerKey] = useState(0);
  const [confirmSubmit, setConfirmSubmit] = useState(false);
  const { formatted, isExpired, percentage } = useExamTimer(45, timerKey);
  const { recordExam } = useStats();

  // All hooks must be declared before any conditional logic
  useEffect(() => {
    if (allQuestions.length > 0 && examQuestions.length === 0) {
      const shuffled = [...allQuestions].sort(() => Math.random() - 0.5).slice(0, Math.min(60, allQuestions.length));
      setExamQuestions(shuffled);
    }
  }, [allQuestions]);

  const answeredQuestions = Object.keys(answers).map(Number);

  const correctCount = useMemo(() => {
    if (examQuestions.length === 0) return 0;
    return answeredQuestions.reduce((count, idx) => {
      const question = examQuestions[idx];
      return count + (isCorrectAnswer(question, answers[idx]) ? 1 : 0);
    }, 0);
  }, [answers, examQuestions, answeredQuestions]);

  // Now conditional rendering (not early returns)
  if (loading) {
    return <section className="card-base text-center"><p className="text-slate-600 dark:text-slate-300">Loading exam...</p></section>;
  }

  if (error) {
    return <section className="card-base bg-rose-50 text-rose-900 dark:bg-rose-900/20 dark:text-rose-200"><p>Error: {error}</p></section>;
  }

  if (examQuestions.length === 0) {
    return <section className="card-base text-center"><p className="text-slate-600 dark:text-slate-300">No questions available</p></section>;
  }

  const question = examQuestions[currentIndex];
  const answer = answers[currentIndex];

  const handleSelect = (value, statementIndex) => {
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
  };

  const handleNext = () => {
    if (currentIndex + 1 < examQuestions.length) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const handleSelectQuestion = (idx) => {
    setCurrentIndex(idx);
  };

  const handleSubmit = () => {
    const wrongIds = examQuestions
      .filter((q, idx) => !isCorrectAnswer(q, answers[idx]))
      .map((q) => q.id);
    recordExam({ score: correctCount, total: examQuestions.length, wrongIds });
    setSubmitted(true);
  };

  const handleRetryWrong = () => {
    const wrongQuestions = examQuestions.filter((q, idx) => !isCorrectAnswer(q, answers[idx]));
    if (wrongQuestions.length === 0) return;

    setExamQuestions(wrongQuestions);
    setAnswers({});
    setCurrentIndex(0);
    setSubmitted(false);
    setTimerKey((prev) => prev + 1);
  };

  if (submitted || isExpired) {
    return (
      <ExamResultsScreen
        correct={correctCount}
        total={examQuestions.length}
        questions={examQuestions}
        answers={answers}
        onRetryWrong={handleRetryWrong}
      />
    );
  }

  return (
    <section className="space-y-6 pb-10">
      <div className="grid gap-4 sm:grid-cols-3">
        <div className="card-base">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-600 dark:text-slate-400">Time remaining</p>
          <p className="mt-3 text-3xl font-bold text-slate-950 dark:text-white">{formatted}</p>
          <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
            <div
              className={`h-full rounded-full transition-all ${percentage > 33 ? 'bg-emerald-500' : percentage > 10 ? 'bg-amber-500' : 'bg-rose-500'}`}
              style={{ width: `${percentage}%` }}
            />
          </div>
        </div>
        <div className="card-base">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-600 dark:text-slate-400">Question</p>
          <p className="mt-3 text-3xl font-bold text-slate-950 dark:text-white">{currentIndex + 1}/{examQuestions.length}</p>
        </div>
        <div className="card-base">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-600 dark:text-slate-400">Answered</p>
          <p className="mt-3 text-3xl font-bold text-slate-950 dark:text-white">{answeredQuestions.length}</p>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1fr_280px]">
        <motion.div key={currentIndex} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="card-base">
          <QuestionRenderer
            question={question}
            selected={answer}
            onSelect={handleSelect}
            feedback={false}
            disabled={false}
          />

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <button
              type="button"
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className="rounded-2xl border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 disabled:opacity-50 dark:border-slate-800 dark:text-slate-200 dark:hover:bg-slate-800"
            >
              Previous
            </button>
            <div className="flex gap-3">
              <button
                type="button"
                onClick={handleNext}
                disabled={currentIndex === examQuestions.length - 1}
                className="rounded-2xl border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 disabled:opacity-50 dark:border-slate-800 dark:text-slate-200 dark:hover:bg-slate-800"
              >
                Next
              </button>
              <button
                type="button"
                onClick={() => setConfirmSubmit(true)}
                className="rounded-2xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-700 dark:bg-slate-100 dark:text-slate-950"
              >
                Submit Exam
              </button>
            </div>
          </div>
        </motion.div>

        <QuestionNavigator total={examQuestions.length} current={currentIndex} answered={answeredQuestions} onSelect={handleSelectQuestion} />
      </div>

      {confirmSubmit && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="w-full max-w-sm rounded-3xl bg-white p-6 shadow-2xl dark:bg-slate-900">
            <h3 className="text-lg font-semibold text-slate-950 dark:text-white">Submit exam?</h3>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
              {Object.keys(answers).length}/{examQuestions.length} questions answered. You can't change answers after submitting.
            </p>
            <div className="mt-6 flex gap-3">
              <button
                type="button"
                onClick={() => setConfirmSubmit(false)}
                className="flex-1 rounded-2xl border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 dark:border-slate-700 dark:text-slate-300"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={() => { setConfirmSubmit(false); handleSubmit(); }}
                className="flex-1 rounded-2xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-700 dark:bg-slate-100 dark:text-slate-950"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
