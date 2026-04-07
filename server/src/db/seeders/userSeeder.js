require('dotenv').config();
const bcrypt = require('bcryptjs');
const pool = require('../../config/db');

const USERS = [
  { username: 'alex', password: 'ai900' },
  { username: 'admin', password: 'admin123' },
];

async function seed() {
  console.log('Seeding users...\n');

  for (const user of USERS) {
    const hashed = await bcrypt.hash(user.password, 10);
    await pool.query(
      `INSERT INTO users (username, password)
       VALUES ($1, $2)
       ON CONFLICT (username) DO NOTHING`,
      [user.username, hashed],
    );
    console.log(`  ✓ ${user.username}`);
  }

  console.log('\nDone.');
  await pool.end();
}

seed().catch((err) => {
  console.error('Seed failed:', err.message);
  process.exit(1);
});
