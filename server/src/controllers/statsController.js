const pool = require('../config/db');

// GET /api/stats
async function getStats(req, res) {
  try {
    const { rows } = await pool.query(
      `SELECT * FROM user_stats WHERE user_id = $1`,
      [req.user.id],
    );

    if (rows.length === 0) {
      return res.status(404).json({ error: 'Stats not found.' });
    }

    return res.json(rows[0]);
  } catch (err) {
    console.error('getStats error:', err.message);
    return res.status(500).json({ error: 'Internal server error.' });
  }
}

// POST /api/stats/exam  — record a completed exam
async function recordExam(req, res) {
  const { score, total, wrongIds = [] } = req.body;

  if (score === undefined || total === undefined) {
    return res.status(400).json({ error: 'score and total are required.' });
  }

  try {
    // Fetch current stats
    const { rows } = await pool.query(
      `SELECT * FROM user_stats WHERE user_id = $1`,
      [req.user.id],
    );

    if (rows.length === 0) {
      return res.status(404).json({ error: 'Stats row not found.' });
    }

    const current = rows[0];
    const pct = Math.round((score / total) * 100);

    const newEntry = {
      date: new Date().toISOString(),
      score,
      total,
      pct,
      wrongIds,
    };

    const examHistory = [...current.exam_history, newEntry];
    const examsCompleted = current.exams_completed + 1;
    const averageScore = Math.round(
      examHistory.reduce((s, e) => s + e.pct, 0) / examHistory.length,
    );

    // Merge wrong questions counts
    const wrongQuestions = { ...current.wrong_questions };
    wrongIds.forEach((id) => {
      wrongQuestions[id] = (wrongQuestions[id] || 0) + 1;
    });

    const { rows: updated } = await pool.query(
      `UPDATE user_stats
       SET exams_completed = $1,
           average_score   = $2,
           exam_history    = $3,
           wrong_questions = $4
       WHERE user_id = $5
       RETURNING *`,
      [
        examsCompleted,
        averageScore,
        JSON.stringify(examHistory),
        JSON.stringify(wrongQuestions),
        req.user.id,
      ],
    );

    return res.json(updated[0]);
  } catch (err) {
    console.error('recordExam error:', err.message);
    return res.status(500).json({ error: 'Internal server error.' });
  }
}

// PUT /api/stats/topics  — sync studied topics
async function updateTopics(req, res) {
  const { studiedTopics } = req.body;

  if (!Array.isArray(studiedTopics)) {
    return res.status(400).json({ error: 'studiedTopics must be an array.' });
  }

  try {
    const { rows } = await pool.query(
      `UPDATE user_stats
       SET studied_topics = $1
       WHERE user_id = $2
       RETURNING *`,
      [JSON.stringify(studiedTopics), req.user.id],
    );

    return res.json(rows[0]);
  } catch (err) {
    console.error('updateTopics error:', err.message);
    return res.status(500).json({ error: 'Internal server error.' });
  }
}

// DELETE /api/stats  — reset all stats
async function resetStats(req, res) {
  try {
    const { rows } = await pool.query(
      `UPDATE user_stats
       SET exams_completed = 0,
           average_score   = 0,
           exam_history    = '[]',
           wrong_questions = '{}',
           studied_topics  = '[]'
       WHERE user_id = $1
       RETURNING *`,
      [req.user.id],
    );

    return res.json(rows[0]);
  } catch (err) {
    console.error('resetStats error:', err.message);
    return res.status(500).json({ error: 'Internal server error.' });
  }
}

module.exports = { getStats, recordExam, updateTopics, resetStats };
