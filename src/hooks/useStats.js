import { useState, useEffect, useCallback } from 'react';
import { useAuth } from '../context/AuthContext';
import { createUserStats } from '../data/stats';

function statsKey(userId) {
  return `ai900Stats_${userId}`;
}

function safeParse(v) {
  try { return JSON.parse(v); } catch { return null; }
}

export default function useStats() {
  const { user } = useAuth();

  const [stats, setStats] = useState(() => {
    if (!user) return null;
    return safeParse(localStorage.getItem(statsKey(user.id))) || createUserStats(user.id, user.username);
  });

  // Reload when user changes (login / logout)
  useEffect(() => {
    if (!user) { setStats(null); return; }
    const stored = safeParse(localStorage.getItem(statsKey(user.id)));
    setStats(stored || createUserStats(user.id, user.username));
  }, [user?.id]);

  // Persist on every change
  useEffect(() => {
    if (stats && user) {
      localStorage.setItem(statsKey(user.id), JSON.stringify(stats));
    }
  }, [stats, user?.id]);

  // Record a completed exam
  const recordExam = useCallback(({ score, total, wrongIds }) => {
    setStats((prev) => {
      if (!prev) return prev;
      const entry = {
        date: new Date().toISOString(),
        score,
        total,
        pct: Math.round((score / total) * 100),
        wrongIds,
      };
      const newHistory = [...prev.examHistory, entry];
      const avgScore = Math.round(
        newHistory.reduce((s, e) => s + e.pct, 0) / newHistory.length,
      );
      const newWrong = { ...prev.wrongQuestions };
      wrongIds.forEach((id) => {
        newWrong[id] = (newWrong[id] || 0) + 1;
      });
      return {
        ...prev,
        examsCompleted: prev.examsCompleted + 1,
        examHistory: newHistory,
        averageScore: avgScore,
        wrongQuestions: newWrong,
      };
    });
  }, []);

  const clearStats = useCallback(() => {
    if (!user) return;
    setStats(createUserStats(user.id, user.username));
  }, [user?.id]);

  // Top N most frequently wrong questions
  const topWrongQuestions = stats
    ? Object.entries(stats.wrongQuestions)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 10)
        .map(([id, count]) => ({ id: Number(id), count }))
    : [];

  // All wrong question IDs (ever answered incorrectly)
  const allWrongQuestions = stats
    ? Object.keys(stats.wrongQuestions).map((id) => Number(id))
    : [];

  return { stats, topWrongQuestions, allWrongQuestions, recordExam, clearStats };
}
