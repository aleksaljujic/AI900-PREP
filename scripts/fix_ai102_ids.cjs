const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/data/questions/question_AI102.js');
let content = fs.readFileSync(filePath, 'utf8');

let counter = 0;
const result = content.replace(/"id": "[^"]+"/g, () => {
  counter++;
  return `"id": ${counter}`;
});

fs.writeFileSync(filePath, result);
console.log(`Replaced ${counter} IDs`);
