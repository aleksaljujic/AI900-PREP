require('dotenv').config();
const fs = require('fs');
const path = require('path');
const pool = require('../../config/db');

async function runMigrations() {
  const migrationsDir = __dirname;
  const files = fs
    .readdirSync(migrationsDir)
    .filter((f) => f.endsWith('.sql'))
    .sort();

  console.log(`Running ${files.length} migration(s)...\n`);

  for (const file of files) {
    const sql = fs.readFileSync(path.join(migrationsDir, file), 'utf8');
    console.log(`▶ ${file}`);
    await pool.query(sql);
    console.log(`  ✓ done\n`);
  }

  console.log('All migrations complete.');
  await pool.end();
}

runMigrations().catch((err) => {
  console.error('Migration failed:', err.message);
  process.exit(1);
});
