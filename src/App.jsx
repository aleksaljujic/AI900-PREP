import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { useAuth } from './context/AuthContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Topics from './pages/Topics';
import Flashcards from './pages/Flashcards';
import Summary from './pages/Summary';
import ResponsibleAI from './pages/ResponsibleAI';
import Roadmap from './pages/Roadmap';
import QuizModeSelection from './pages/QuizModeSelection';
import PracticeMode from './pages/PracticeMode';
import ExamMode from './pages/ExamMode';
import SynteticMode from './pages/SynteticMode';
import Login from './pages/Login';
import Stats from './pages/Stats';

const pageVariants = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -24 },
};

function ProtectedRoute({ children }) {
  const { user } = useAuth();
  if (!user) return <Navigate to="/login" replace />;
  return children;
}

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
              <Route path="/login" element={<Login />} />
              <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
              <Route path="/roadmap" element={<ProtectedRoute><Roadmap /></ProtectedRoute>} />
              <Route path="/topics" element={<ProtectedRoute><Topics /></ProtectedRoute>} />
              <Route path="/flashcards" element={<ProtectedRoute><Flashcards /></ProtectedRoute>} />
              <Route path="/summary" element={<ProtectedRoute><Summary /></ProtectedRoute>} />
              <Route path="/responsible-ai" element={<ProtectedRoute><ResponsibleAI /></ProtectedRoute>} />
              <Route path="/stats" element={<ProtectedRoute><Stats /></ProtectedRoute>} />
              <Route path="/quiz" element={<ProtectedRoute><QuizModeSelection /></ProtectedRoute>} />
              <Route path="/quiz/practice" element={<ProtectedRoute><PracticeMode /></ProtectedRoute>} />
              <Route path="/quiz/exam" element={<ProtectedRoute><ExamMode /></ProtectedRoute>} />
              <Route path="/quiz/syntetic" element={<ProtectedRoute><SynteticMode /></ProtectedRoute>} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}
