import { useEffect, useMemo, useState } from 'react';
import questions from '../data/questions/questions';
import DomainFilter from '../components/DomainFilter';
import QuestionNavigator from '../components/QuestionNavigator';
import QuizQuestion from '../components/QuizQuestion';
import ExamResultsScreen from '../components/ExamResultsScreen';
import useProgress from '../hooks/useProgress';

export default function Quiz() {
  const [activeDomain, setActiveDomain] = useState('all');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [answers, setAnswers] = useState({});
  const [completed, setCompleted] = useState(false);
  const { addQuizScore } = useProgress();

  const visibleQuestions = useMemo(
    () => (activeDomain === 'all' ? questions : questions.filter((item) => item.domain === activeDomain)),
    [activeDomain]
  );

  const currentQuestion = visibleQuestions[currentIndex];

  const answeredQuestions = useMemo(
    () => visibleQuestions.reduce((acc, question, index) => {
      if (answers[question.id] !== undefined) acc.push(index);
      return acc;
    }, []),
    [answers, visibleQuestions]
  );

  // Sync selected state with current question and stored answers
  useEffect(() => {
    setSelected(answers[currentQuestion?.id] ?? null);
  }, [currentQuestion, answers]);

  const handleSelect = (choiceKey) => {
    if (showFeedback) return;
    setSelected(choiceKey);
    setShowFeedback(true);
    setAnswers((current) => ({
      ...current,
      [currentQuestion.id]: choiceKey,
    }));
  };

  const correctCount = visibleQuestions.reduce((count, question) => {
    return count + (answers[question.id] === question.answer ? 1 : 0);
  }, 0);

  const handleNext = () => {
    setSelected(null);
    setShowFeedback(false);
    if (currentIndex + 1 >= visibleQuestions.length) {
      const percent = visibleQuestions.length ? Math.round((correctCount / visibleQuestions.length) * 100) : 0;
      addQuizScore(percent);
      setCompleted(true);
      return;
    }
    setCurrentIndex((value) => value + 1);
  };

  const handleRetake = () => {
    setCurrentIndex(0);
    setSelected(null);
    setShowFeedback(false);
    setAnswers({});
    setCompleted(false);
  };

  const handleSelectQuestion = (index) => {
    setCurrentIndex(index);
    setShowFeedback(false);
    setSelected(answers[visibleQuestions[index]?.id] ?? null);
  };

  const handleRetryWrong = () => {
    // For quiz, just retake the whole quiz
    handleRetake();
  };

  const progressPercent = visibleQuestions.length
    ? Math.round(((currentIndex + (showFeedback ? 1 : 0)) / visibleQuestions.length) * 100)
    : 0;

  return (
    <section className="space-y-10 pb-10">
      <div className="card-base">
        <span className="inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-600 dark:bg-slate-800 dark:text-slate-300">
          Practice quiz
        </span>
        <h2 className="mt-4 text-3xl font-semibold text-slate-950 dark:text-white">Test your AI-900 knowledge</h2>
        <p className="mt-3 max-w-2xl text-slate-600 dark:text-slate-300">
          Complete multiple-choice questions by domain or review the full set. Immediate feedback helps reinforce correct concepts.
        </p>
      </div>
      <DomainFilter
        active={activeDomain}
        onChange={(value) => {
          setActiveDomain(value);
          setCurrentIndex(0);
          setSelected(null);
          setShowFeedback(false);
          setAnswers({});
          setCompleted(false);
        }}
      />
      <div className="space-y-4">
        <div className="rounded-3xl bg-slate-100 p-4 text-sm text-slate-700 dark:bg-slate-900 dark:text-slate-300">
          <div className="flex items-center justify-between gap-4">
            <span>Progress</span>
            <span>{currentIndex + 1}/{visibleQuestions.length}</span>
          </div>
          <div className="mt-3 h-3 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
            <div className="h-full rounded-full bg-slate-900 transition-all duration-300 dark:bg-slate-100" style={{ width: `${progressPercent}%` }} />
          </div>
        </div>
        {completed ? (
          <ExamResultsScreen 
            correct={correctCount} 
            total={visibleQuestions.length} 
            questions={visibleQuestions} 
            answers={visibleQuestions.reduce((acc, q, idx) => {
              acc[idx] = answers[q.id];
              return acc;
            }, {})} 
            onRetryWrong={handleRetryWrong} 
          />
        ) : (
          <div className="grid gap-6 lg:grid-cols-[1fr_240px]">
            <div>
              {currentQuestion ? (
                <QuizQuestion
                  question={currentQuestion}
                  selected={selected}
                  onSelect={handleSelect}
                  feedback={showFeedback}
                  disabled={showFeedback}
                />
              ) : (
                <div className="card-base text-slate-700 dark:text-slate-300">No questions available for this domain.</div>
              )}
              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div className="text-sm text-slate-600 dark:text-slate-300">
                  {showFeedback ? 'Review the explanation before moving on.' : 'Select an answer to reveal feedback.'}
                </div>
                <button
                  type="button"
                  onClick={handleNext}
                  disabled={!showFeedback}
                  className="rounded-3xl border border-slate-200 bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-700 disabled:cursor-not-allowed disabled:border-slate-200 disabled:bg-slate-300 disabled:text-slate-500 dark:border-slate-700 dark:bg-slate-100 dark:text-slate-950 dark:disabled:bg-slate-800 dark:disabled:text-slate-500"
                >
                  {currentIndex + 1 >= visibleQuestions.length ? 'Finish quiz' : 'Next question'}
                </button>
              </div>
            </div>
            <QuestionNavigator
              total={visibleQuestions.length}
              current={currentIndex}
              answered={answeredQuestions}
              onSelect={handleSelectQuestion}
            />
          </div>
        )}
      </div>
    </section>
  );
}
