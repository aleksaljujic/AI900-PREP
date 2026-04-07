require('dotenv').config();
const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
const Question = require('../models/Question');

function parseESModuleArray(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const cleaned = content
    .replace(/^\/\/.*$/gm, '')
    .replace(/export default \w+;?\s*$/, '')
    .replace(/const \w+ = (\[)/, 'return $1')
    .trim();
  return new Function(cleaned)();
}

const QUESTIONS_DIR = path.resolve(__dirname, '../../../src/data/questions');

function getSetName(filename) {
  return filename
    .replace(/^question_/, '')
    .replace(/^questions_/, '')
    .replace(/^questions/, 'standard')
    .replace(/\.js$/, '');
}

async function seed() {
  await mongoose.connect(process.env.MONGODB_URI);
  console.log('Connected to MongoDB');

  const files = fs.readdirSync(QUESTIONS_DIR).filter((f) => f.endsWith('.js'));

  for (const file of files) {
    const filePath = path.join(QUESTIONS_DIR, file);
    const setName = getSetName(file);

    let data;
    try {
      data = parseESModuleArray(filePath);
    } catch (err) {
      console.error(`Failed to parse ${file}:`, err.message);
      continue;
    }

    await Question.deleteMany({ set: setName });
    const docs = data.map((q) => ({ ...q, set: setName }));
    await Question.insertMany(docs);
    console.log(`Seeded ${docs.length} questions → set: ${setName}`);
  }

  await mongoose.disconnect();
  console.log('Done');
}

seed().catch((err) => { console.error(err); process.exit(1); });
