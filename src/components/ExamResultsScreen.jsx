import { useNavigate } from 'react-router-dom';
import { isCorrectAnswer, formatAnswerDisplay, getCorrectAnswer } from '../utils/questionUtils';

export default function ExamResultsScreen({ correct, total, questions, answers, onRetryWrong }) {
  const navigate = useNavigate();
  const percentage = Math.round((correct / total) * 100);
  const passed = percentage >= 70;

  const wrongAnswers = questions
    .map((q, idx) => ({
      index: idx,
      question: q,
      userAnswer: answers[idx],
      isCorrect: isCorrectAnswer(q, answers[idx]),
    }))
    .filter((item) => !item.isCorrect);

  return (
    <section className="space-y-10 pb-10">
      <div className={`card-base ${passed ? 'bg-emerald-50 dark:bg-emerald-900/20' : 'bg-rose-50 dark:bg-rose-900/20'}`}>
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className={`text-sm font-semibold uppercase tracking-[0.2em] ${passed ? 'text-emerald-600 dark:text-emerald-300' : 'text-rose-600 dark:text-rose-300'}`}>
              Exam complete
            </p>
            <h2 className={`mt-4 text-4xl font-bold ${passed ? 'text-emerald-900 dark:text-emerald-100' : 'text-rose-900 dark:text-rose-100'}`}>
              {percentage}%
            </h2>
            <p className={`mt-2 text-sm ${passed ? 'text-emerald-700 dark:text-emerald-200' : 'text-rose-700 dark:text-rose-200'}`}>
              {correct} correct out of {total} questions
            </p>
          </div>
          <div className={`rounded-3xl px-6 py-3 font-bold uppercase tracking-[0.3em] ${passed ? 'bg-emerald-600 text-white dark:bg-emerald-500' : 'bg-rose-600 text-white dark:bg-rose-500'}`}>
            {passed ? 'PASSED ✓' : 'FAILED'}
          </div>
        </div>
      </div>

      {wrongAnswers.length > 0 && (
        <div className="card-base">
          <h3 className="text-lg font-semibold text-slate-950 dark:text-white">Review incorrect answers ({wrongAnswers.length})</h3>
          <div className="mt-6 space-y-4">
            {wrongAnswers.map((item) => (
              <div key={item.index} className="rounded-2xl border border-rose-200 bg-rose-50 p-4 dark:border-rose-900 dark:bg-rose-900/20">
                <p className="text-sm font-semibold text-rose-900 dark:text-rose-100">Question {item.index + 1}</p>
                <p className="mt-2 text-sm text-slate-700 dark:text-slate-200">
                  {item.question.question || item.question.sentence || 'Question details'}
                </p>
                <div className="mt-3 space-y-1 text-xs text-slate-600 dark:text-slate-300">
                  <p>Your answer: <strong>{formatAnswerDisplay(item.question, item.userAnswer)}</strong></p>
                  <p>Correct answer: <strong>{formatAnswerDisplay(item.question, getCorrectAnswer(item.question))}</strong></p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="grid gap-4 sm:grid-cols-2">
        <button
          type="button"
          onClick={() => navigate('/quiz')}
          className="rounded-3xl border border-slate-200 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 dark:border-slate-800 dark:text-slate-200 dark:hover:bg-slate-800"
        >
          Back to menu
        </button>
        {wrongAnswers.length > 0 && (
          <button
            type="button"
            onClick={onRetryWrong}
            className="rounded-3xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700 dark:bg-slate-100 dark:text-slate-950"
          >
            Retry wrong answers ({wrongAnswers.length})
          </button>
        )}
      </div>
    </section>
  );
}
