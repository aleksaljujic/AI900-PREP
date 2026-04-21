const fs = require('fs');
const path = require('path');

function clean(str) {
  return str
    .replace(/<[^>]+>/g, '')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&nbsp;/g, ' ')
    .replace(/&#39;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/\s+/g, ' ')
    .trim();
}

function parseHtmlFile(filePath, startId) {
  const html = fs.readFileSync(filePath, 'utf8');
  const questions = [];
  let id = startId;

  // Split on each question card
  const cardBoundary = /class="card exam-question-card"/g;
  const positions = [];
  let m;
  while ((m = cardBoundary.exec(html)) !== null) {
    positions.push(m.index);
  }

  for (let i = 0; i < positions.length; i++) {
    const block = html.slice(positions[i], positions[i + 1] || html.length);

    // Question text: first <p class="card-text">
    const qMatch = block.match(/<p[^>]*class="card-text"[^>]*>([\s\S]*?)<\/p>/);
    if (!qMatch) continue;
    const questionText = clean(qMatch[1]);
    if (!questionText) continue;

    // Choices: data-choice-letter attribute
    const choiceRegex = /data-choice-letter="([A-Z])"[^>]*>([\s\S]*?)<\/li>/g;
    const choices = {};
    let cr;
    while ((cr = choiceRegex.exec(block)) !== null) {
      choices[cr[1]] = clean(cr[2]);
    }

    // Fallback: multi-choice-letter span
    if (Object.keys(choices).length === 0) {
      const altRegex = /<span[^>]*class="[^"]*multi-choice-letter[^"]*"[^>]*>([A-Z])\.<\/span>([\s\S]*?)(?=<li|<\/ul)/g;
      let ar;
      while ((ar = altRegex.exec(block)) !== null) {
        choices[ar[1]] = clean(ar[2]);
      }
    }

    if (Object.keys(choices).length === 0) continue;

    // Answer: correct-answer span
    const answerMatch = block.match(/<span[^>]*class="[^"]*correct-answer[^"]*"[^>]*>([\s\S]*?)<\/span>/);
    if (!answerMatch) continue;
    const answerLetters = answerMatch[1].replace(/<[^>]+>/g, '').replace(/\s/g, '').split('').filter(c => /[A-Z]/.test(c));
    if (answerLetters.length === 0) continue;

    questions.push({
      id,
      type: answerLetters.length > 1 ? 'multiple_choice_multi_select' : 'multiple_choice',
      img: null,
      question: questionText,
      choices,
      answer: answerLetters.length > 1 ? answerLetters : answerLetters[0],
    });
    id++;
  }

  return { questions, nextId: id };
}

const dataDir = path.join(__dirname, '../src/data/AWS ML');
const outFile = path.join(__dirname, '../src/data/questions/questions_aws_ml.json');

const existing = JSON.parse(fs.readFileSync(outFile, 'utf8'));
let nextId = existing.length + 1;
const allQuestions = [...existing];

for (let page = 2; page <= 6; page++) {
  const filePath = path.join(dataDir, `AWS Certified Machine Learning Engineer - Associate MLA-C01 Exam - Free Exam Q&As, Page ${page} _ ExamTopics.html`);
  if (!fs.existsSync(filePath)) {
    console.log(`Page ${page} not found, skipping`);
    continue;
  }
  const { questions, nextId: next } = parseHtmlFile(filePath, nextId);
  console.log(`Page ${page}: ${questions.length} questions (IDs ${nextId}–${next - 1})`);
  allQuestions.push(...questions);
  nextId = next;
}

fs.writeFileSync(outFile, JSON.stringify(allQuestions, null, 2));
console.log(`Total: ${allQuestions.length} questions written to questions_aws_ml.json`);
