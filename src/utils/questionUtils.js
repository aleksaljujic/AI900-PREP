export function isCorrectAnswer(question, answer) {
  if (!question) return false;

  if (question.type === 'hotspot_yes_no') {
    if (!Array.isArray(question.statements) || typeof answer !== 'object' || Array.isArray(answer)) return false;
    return question.statements.every((statement, idx) => answer[idx] === statement.answer);
  }

  if (question.type === 'hotspot_dropdown') {
    if (!Array.isArray(question.items) || typeof answer !== 'object' || Array.isArray(answer)) return false;
    return question.items.every((item, idx) => answer[idx] === item.answer);
  }

  if (question.type === 'drag_and_drop') {
    if (!Array.isArray(question.targets) || typeof answer !== 'object' || Array.isArray(answer)) return false;
    return question.targets.every((target, idx) => answer[idx] === target.answer);
  }

  const correctAnswer = question.type === 'drag_and_drop_order' ? question.answer_order : question.answer;

  if (question.type === 'multiple_choice_multi_select') {
    if (!Array.isArray(correctAnswer) || !Array.isArray(answer)) return false;
    if (correctAnswer.length !== answer.length) return false;
    return correctAnswer.every((value) => answer.includes(value));
  }

  if (question.type === 'drag_and_drop_order') {
    if (!Array.isArray(correctAnswer) || !Array.isArray(answer)) return false;
    if (correctAnswer.length !== answer.length) return false;
    return correctAnswer.every((value, index) => answer[index] === value);
  }

  if (Array.isArray(correctAnswer) && Array.isArray(answer)) {
    if (correctAnswer.length !== answer.length) return false;
    return correctAnswer.every((value, index) => answer[index] === value);
  }

  return answer === correctAnswer;
}

function formatChoiceLabel(answer, choices) {
  if (!choices) return answer;

  if (Array.isArray(answer)) {
    return answer
      .map((key) => {
        const choiceText = choices[key];
        return choiceText ? `${key}: ${choiceText}` : key;
      })
      .join(', ');
  }

  if (answer === null || answer === undefined) return 'No answer';

  if (typeof answer === 'string' && choices[answer]) {
    return `${answer}: ${choices[answer]}`;
  }

  return answer;
}

export function formatAnswer(answer) {
  if (Array.isArray(answer)) {
    return answer.join(', ');
  }
  return answer ?? 'No answer';
}

export function formatAnswerDisplay(question, answer) {
  if (!question) return formatAnswer(answer);

  if (question.type === 'hotspot_yes_no' && typeof answer === 'object' && !Array.isArray(answer)) {
    if (!Array.isArray(question.statements)) {
      return formatAnswer(answer);
    }
    return question.statements
      .map((statement, idx) => `${idx + 1}: ${answer[idx] ?? 'No answer'}`)
      .join('; ');
  }

  if (question.type === 'hotspot_dropdown' && typeof answer === 'object' && !Array.isArray(answer)) {
    if (!Array.isArray(question.items)) {
      return formatAnswer(answer);
    }
    return question.items
      .map((item, idx) => `${idx + 1}: ${answer[idx] ?? 'No answer'}`)
      .join('; ');
  }

  if (question.type === 'drag_and_drop' && typeof answer === 'object' && !Array.isArray(answer)) {
    if (!Array.isArray(question.targets)) {
      return formatAnswer(answer);
    }
    return question.targets
      .map((target, idx) => `${idx + 1}: ${answer[idx] ?? 'No answer'}`)
      .join('; ');
  }

  if (question.choices) {
    return formatChoiceLabel(answer, question.choices);
  }

  return formatAnswer(answer);
}

export function getCorrectAnswer(question) {
  if (!question) return null;
  if (question.type === 'drag_and_drop_order') {
    return question.answer_order;
  }
  if (question.type === 'hotspot_yes_no') {
    return question.statements.reduce((acc, statement, idx) => {
      acc[idx] = statement.answer;
      return acc;
    }, {});
  }
  if (question.type === 'hotspot_dropdown') {
    return question.items.reduce((acc, item, idx) => {
      acc[idx] = item.answer;
      return acc;
    }, {});
  }
  if (question.type === 'drag_and_drop') {
    return question.targets.reduce((acc, target, idx) => {
      acc[idx] = target.answer;
      return acc;
    }, {});
  }
  return question.answer;
}
