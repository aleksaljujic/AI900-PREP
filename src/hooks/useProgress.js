import { useEffect, useState } from 'react';

const STORAGE_KEY = 'ai900PrepProgress';

function safeParse(value) {
  try {
    return JSON.parse(value);
  } catch {
    return null;
  }
}

export default function useProgress() {
  const [progress, setProgress] = useState({ studiedTopics: [], quizScores: [] });

  useEffect(() => {
    const stored = safeParse(localStorage.getItem(STORAGE_KEY));
    if (stored?.studiedTopics && stored.quizScores) {
      setProgress(stored);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  }, [progress]);

  const toggleTopic = (topicId) => {
    setProgress((current) => {
      const exists = current.studiedTopics.includes(topicId);
      return {
        ...current,
        studiedTopics: exists
          ? current.studiedTopics.filter((id) => id !== topicId)
          : [...current.studiedTopics, topicId],
      };
    });
  };

  const addQuizScore = (score) => {
    setProgress((current) => ({
      ...current,
      quizScores: [...current.quizScores, score],
    }));
  };

  const clearProgress = () => {
    setProgress({ studiedTopics: [], quizScores: [] });
  };

  return {
    studiedTopics: progress.studiedTopics,
    quizScores: progress.quizScores,
    toggleTopic,
    addQuizScore,
    clearProgress,
  };
}
