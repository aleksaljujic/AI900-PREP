// Schema for per-user statistics — stored in localStorage as ai900Stats_<userId>
// wrongQuestions: { [questionId]: timesWrong }
// examHistory: [{ date, score, total, pct, wrongIds[] }]

export const createUserStats = (id, username) => ({
  id,
  username,
  examsCompleted: 0,
  examHistory: [],
  averageScore: 0,
  wrongQuestions: {},
  studiedTopics: [],
});