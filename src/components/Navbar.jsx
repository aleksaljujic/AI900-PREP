import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';

const links = [
  { to: '/', label: 'Home' },
  { to: '/topics', label: 'Topics' },
  { to: '/flashcards', label: 'Flashcards' },
  { to: '/summary', label: 'Summary' },
  { to: '/responsible-ai', label: 'Responsible AI' },
  { to: '/quiz', label: 'Quiz' },
];

export default function Navbar() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('ai900DarkMode');
    const initial = stored === 'true' || false;
    setDark(initial);
    document.body.classList.toggle('dark', initial);
  }, []);

  const toggleTheme = () => {
    setDark((current) => {
      localStorage.setItem('ai900DarkMode', String(!current));
      document.body.classList.toggle('dark', !current);
      return !current;
    });
  };

  return (
    <header className="border-b border-slate-200 bg-white/80 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/80">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <div>
          <p className="text-sm uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400">AI-900 Prep</p>
          <h1 className="text-2xl font-semibold tracking-tight text-slate-950 dark:text-white">Azure AI certification study lab</h1>
        </div>
        <div className="flex items-center gap-3">
          <nav className="hidden gap-3 md:flex">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `rounded-2xl px-3 py-2 text-sm font-medium transition ${
                    isActive
                      ? 'bg-slate-900 text-white dark:bg-slate-200 dark:text-slate-950'
                      : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
          <button
            type="button"
            onClick={toggleTheme}
            className="rounded-2xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-700 transition hover:border-slate-300 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200"
          >
            {dark ? 'Light' : 'Dark'}
          </button>
        </div>
      </div>
    </header>
  );
}
