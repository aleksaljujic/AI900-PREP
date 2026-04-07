require('dotenv').config();
const pool = require('../../config/db');
const { makeUsers } = require('../factories/userFactory');
const { makeStats } = require('../factories/statsFactory');

const TEST_COUNT = 5; // number of fake users with stats

async function seed() {
  console.log(`Seeding ${TEST_COUNT} test users with stats...\n`);

  const users = await makeUsers(TEST_COUNT);

  for (const user of users) {
    const { rows } = await pool.query(
      `INSERT INTO users (username, password)
       VALUES ($1, $2)
       ON CONFLICT (username) DO NOTHING
       RETURNING id`,
      [user.username, user.password],
    );

    if (rows.length === 0) {
      console.log(`  ⚠ skipped ${user.username} (already exists)`);
      continue;
    }

    const userId = rows[0].id;
    const stats = makeStats(Math.floor(Math.random() * 5) + 1);

    await pool.query(
      `INSERT INTO user_stats
         (user_id, exams_completed, average_score, exam_history, wrong_questions, studied_topics)
       VALUES ($1, $2, $3, $4, $5, $6)
       ON CONFLICT (user_id) DO NOTHING`,
      [
        userId,
        stats.exams_completed,
        stats.average_score,
        JSON.stringify(stats.exam_history),
        JSON.stringify(stats.wrong_questions),
        JSON.stringify(stats.studied_topics),
      ],
    );

    console.log(`  ✓ ${user.username} — ${stats.exams_completed} exams, avg ${stats.average_score}%`);
  }

  console.log('\nDone.');
  await pool.end();
}

seed().catch((err) => {
  console.error('Seed failed:', err.message);
  process.exit(1);
});
