import { useEffect, useState } from 'react';
import questionsData from '../data/questions/questions';
import synteticData from '../data/questions/questions_syntetic';
import genaiSynteticData from '../data/questions/questions_genai_synthetic';
import ai102Data from '../data/questions/question_AI102';

export default function useQuestionsBySet(set = 'standard') {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      let data;
      if (set === 'syntetic') {
        data = synteticData;
      } else if (set === 'genai_synthetic') {
        data = genaiSynteticData;
      } else if (set === 'AI102') {
        data = ai102Data;
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
