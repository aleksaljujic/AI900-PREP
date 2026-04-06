export default function ResultsScreen({ score, total, wrongAnswers, onRepeat }) {
  const percentage = Math.round((score / total) * 100);

  return (
    <section className="card-base space-y-6">
      <div className="space-y-3">
        <p className="text-sm uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">Quiz complete</p>
        <h2 className="text-3xl font-semibold text-slate-950 dark:text-white">You scored {percentage}%</h2>
        <p className="text-sm leading-7 text-slate-600 dark:text-slate-300">
          {score} correct answers out of {total}. Review the explanations and try again for mastery.
        </p>
      </div>
      <div className="grid gap-4">
        {wrongAnswers.length ? (
          <div className="rounded-3xl bg-rose-50 p-5 dark:bg-rose-900/20">
            <h3 className="text-lg font-semibold text-rose-900 dark:text-rose-100">Review incorrect answers</h3>
            <div className="mt-4 space-y-4 text-sm text-slate-700 dark:text-slate-200">
              {wrongAnswers.map((item) => (
                <div key={item.question} className="rounded-3xl border border-rose-200 bg-white p-4 dark:border-rose-900 dark:bg-slate-950">
                  <p className="font-semibold">{item.question}</p>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Correct answer: {item.correct}</p>
                  <p className="mt-2">{item.explanation}</p>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="rounded-3xl bg-emerald-50 p-5 dark:bg-emerald-900/20">
            <h3 className="text-lg font-semibold text-emerald-900 dark:text-emerald-100">Excellent work!</h3>
            <p className="mt-2 text-sm text-slate-700 dark:text-slate-200">You answered all questions correctly or nearly perfectly.</p>
          </div>
        )}
      </div>
      <button
        type="button"
        onClick={onRepeat}
        className="rounded-3xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
      >
        Retake quiz
      </button>
    </section>
  );
}
