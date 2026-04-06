import { useEffect, useState } from 'react';

export default function useExamTimer(initialMinutes = 45, resetKey = 0) {
  const [timeLeft, setTimeLeft] = useState(initialMinutes * 60);
  const [isExpired, setIsExpired] = useState(false);

  useEffect(() => {
    setTimeLeft(initialMinutes * 60);
    setIsExpired(false);
  }, [initialMinutes, resetKey]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          setIsExpired(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const formatted = `${minutes}:${seconds.toString().padStart(2, '0')}`;
  const percentage = (timeLeft / (initialMinutes * 60)) * 100;

  return { timeLeft, isExpired, formatted, percentage };
}
