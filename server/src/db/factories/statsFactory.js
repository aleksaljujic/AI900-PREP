/**
 * Generate a fake exam entry.
 */
function makeExamEntry(overrides = {}) {
  const total = overrides.total || 60;
  const score = overrides.score || Math.floor(Math.random() * total);
  const pct = Math.round((score / total) * 100);
  const wrongIds = Array.from(
    { length: total - score },
    () => Math.floor(Math.random() * 246) + 1,
  );

  return {
    date: overrides.date || new Date().toISOString(),
    score,
    total,
    pct,
    wrongIds,
  };
}

/**
 * Generate a full user_stats row (without user_id).
 * @param {number} examCount  how many fake exams to generate
 */
function makeStats(examCount = 3) {
  const examHistory = Array.from({ length: examCount }, () => makeExamEntry());
  const averageScore = Math.round(
    examHistory.reduce((s, e) => s + e.pct, 0) / examHistory.length,
  );

  const wrongQuestions = {};
  examHistory.forEach((exam) => {
    exam.wrongIds.forEach((id) => {
      wrongQuestions[id] = (wrongQuestions[id] || 0) + 1;
    });
  });

  return {
    exams_completed: examCount,
    average_score: averageScore,
    exam_history: examHistory,
    wrong_questions: wrongQuestions,
    studied_topics: [],
  };
}

module.exports = { makeExamEntry, makeStats };
