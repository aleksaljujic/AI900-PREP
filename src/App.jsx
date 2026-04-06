import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Topics from './pages/Topics';
import Flashcards from './pages/Flashcards';
import Summary from './pages/Summary';
import ResponsibleAI from './pages/ResponsibleAI';
import QuizModeSelection from './pages/QuizModeSelection';
import PracticeMode from './pages/PracticeMode';
import ExamMode from './pages/ExamMode';
import SynteticMode from './pages/SynteticMode';

const pageVariants = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -24 },
};

export default function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <Navbar />
      <main className="mx-auto max-w-7xl px-4 pb-16 pt-6 sm:px-6 lg:px-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageVariants}
            transition={{ duration: 0.35, ease: 'easeOut' }}
          >
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/topics" element={<Topics />} />
              <Route path="/flashcards" element={<Flashcards />} />
              <Route path="/summary" element={<Summary />} />
              <Route path="/responsible-ai" element={<ResponsibleAI />} />
              <Route path="/quiz" element={<QuizModeSelection />} />
              <Route path="/quiz/practice" element={<PracticeMode />} />
              <Route path="/quiz/exam" element={<ExamMode />} />
              <Route path="/quiz/syntetic" element={<SynteticMode />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}
