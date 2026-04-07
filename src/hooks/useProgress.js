import { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';

function storageKey(userId) {
  return userId ? `ai900Progress_${userId}` : 'ai900Progress_guest';
}

function safeParse(value) {
  try {
    return JSON.parse(value);
  } catch {
    return null;
  }
}

const DEFAULT = { studiedTopics: [], quizScores: [] };

export default function useProgress() {
  const { user } = useAuth();
  const key = storageKey(user?.id);

  const [progress, setProgress] = useState(() => {
    const stored = safeParse(localStorage.getItem(key));
    return stored?.studiedTopics ? stored : DEFAULT;
  });

  // Reload from localStorage when the logged-in user changes
  useEffect(() => {
    const stored = safeParse(localStorage.getItem(key));
    setProgress(stored?.studiedTopics ? stored : DEFAULT);
  }, [key]);

  // Persist on every change
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(progress));
  }, [progress, key]);

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
    setProgress(DEFAULT);
  };

  return {
    studiedTopics: progress.studiedTopics,
    quizScores: progress.quizScores,
    toggleTopic,
    addQuizScore,
    clearProgress,
  };
}
