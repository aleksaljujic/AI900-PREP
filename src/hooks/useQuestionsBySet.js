import { useEffect, useState } from 'react';
import api from '../lib/api';

export default function useQuestionsBySet(set = 'standard') {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    api.get(`/questions?set=${set}`)
      .then(({ data }) => setQuestions(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [set]);

  return { questions, loading, error };
}
