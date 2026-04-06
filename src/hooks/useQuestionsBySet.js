import { useEffect, useState } from 'react';
import questionsData from '../data/questions/questions';
import synteticData from '../data/questions/questions_syntetic';
import genaiSynteticData from '../data/questions/questions_genai_synthetic';

function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export default function useQuestionsBySet(set = 'standard') {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      let data;
      if (set === 'synthetic') {
        data = synteticData;
      } else if (set === 'genai_synthetic') {
        data = genaiSynteticData;
      } else {
        data = questionsData;
      }
      setQuestions(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [set]);

  return { questions, loading, error };
}