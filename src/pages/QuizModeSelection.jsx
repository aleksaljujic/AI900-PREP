import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function QuizModeSelection() {
  const [selectedSet, setSelectedSet] = useState('standard');

  return (
    <section className="space-y-10 pb-10">
      <div className="card-base">
        <span className="inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-600 dark:bg-slate-800 dark:text-slate-300">
          Exam prep
        </span>
        <h2 className="mt-4 text-3xl font-semibold text-slate-950 dark:text-white">Choose your study mode</h2>
        <p className="mt-3 max-w-2xl text-slate-600 dark:text-slate-300">
          Select between practice mode for learning or exam simulation for assessment preparation.
        </p>
      </div>

      <div className="card-base">
        <h3 className="text-xl font-semibold text-slate-950 dark:text-white">Question Set</h3>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
          Choose which set of questions to use for your quiz.
        </p>
        <select
          value={selectedSet}
          onChange={(e) => setSelectedSet(e.target.value)}
          className="mt-4 rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100"
        >
          <option value="standard">Standard Questions</option>
          <option value="synthetic">Synthetic Questions</option>
          <option value="genai_synthetic">GenAI Synthetic Questions</option>
        </select>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="card-base flex flex-col gap-6"
        >
          <div>
            <h3 className="text-2xl font-semibold text-slate-950 dark:text-white">Practice Mode</h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Perfect for learning at your own pace</p>
          </div>

          <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-slate-900 dark:bg-slate-100" />
              <span>All questions in sequence</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-slate-900 dark:bg-slate-100" />
              <span>Immediate answer feedback</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-slate-900 dark:bg-slate-100" />
              <span>Jump to any question</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-slate-900 dark:bg-slate-100" />
              <span>No time pressure</span>
            </li>
          </ul>

          <Link
            to={`/quiz/practice?set=${selectedSet}`}
            className="mt-auto rounded-3xl bg-slate-900 px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-slate-700 dark:bg-slate-100 dark:text-slate-950 dark:hover:bg-slate-200"
          >
            Start Practice Mode
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="card-base flex flex-col gap-6"
        >
          <div>
            <h3 className="text-2xl font-semibold text-slate-950 dark:text-white">Exam Simulation</h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Realistic certification exam experience</p>
          </div>

          <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-slate-900 dark:bg-slate-100" />
              <span>60 random questions</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-slate-900 dark:bg-slate-100" />
              <span>45-minute timer</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-slate-900 dark:bg-slate-100" />
              <span>No immediate feedback</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-slate-900 dark:bg-slate-100" />
              <span>Question navigator included</span>
            </li>
          </ul>

          <Link
            to={`/quiz/exam?set=${selectedSet}`}
            className="mt-auto rounded-3xl bg-slate-900 px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-slate-700 dark:bg-slate-100 dark:text-slate-950 dark:hover:bg-slate-200"
          >
            Start Exam Simulation
          </Link>
        </motion.div>

        {/* <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="card-base flex flex-col gap-6"
        >
          <div>
            <h3 className="text-2xl font-semibold text-slate-950 dark:text-white">Practice V2 Mode</h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Perfect for learning at your own pace</p>
          </div>

          <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-slate-900 dark:bg-slate-100" />
              <span>All questions in sequence</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-slate-900 dark:bg-slate-100" />
              <span>Immediate answer feedback</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-slate-900 dark:bg-slate-100" />
              <span>Jump to any question</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-slate-900 dark:bg-slate-100" />
              <span>No time pressure</span>
            </li>
          </ul>

          <Link
            to="/quiz/syntetic"
            className="mt-auto rounded-3xl bg-slate-900 px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-slate-700 dark:bg-slate-100 dark:text-slate-950 dark:hover:bg-slate-200"
          >
            Start Practice V2 Mode
          </Link>
        </motion.div> */}
        
      </div>
    </section>
  );
}
