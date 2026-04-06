import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';

const links = [
  { to: '/', label: 'Home' },
  { to: '/roadmap', label: 'Roadmap' },
  { to: '/topics', label: 'Topics' },
  { to: '/flashcards', label: 'Flashcards' },
  { to: '/summary', label: 'Summary' },
  { to: '/responsible-ai', label: 'Responsible AI' },
  { to: '/quiz', label: 'Quiz' },
];

export default function Navbar() {
  const [dark, setDark] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="border-b border-slate-200 bg-white/80 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/80">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <div>
          <p className="text-sm uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400">AI-900 Prep</p>
          <h1 className="text-2xl font-semibold tracking-tight text-slate-950 dark:text-white">Azure AI certification study lab</h1>
        </div>
        <div className="flex items-center gap-3">
          {/* Desktop Navigation */}
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

          {/* Theme Toggle */}
          <button
            type="button"
            onClick={toggleTheme}
            className="rounded-2xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-700 transition hover:border-slate-300 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200"
          >
            {dark ? 'Light' : 'Dark'}
          </button>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={toggleMobileMenu}
            className="rounded-2xl border border-slate-200 bg-slate-50 p-2 text-slate-700 transition hover:border-slate-300 hover:bg-slate-100 md:hidden dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
            aria-label="Toggle mobile menu"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="border-t border-slate-200 bg-white/95 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/95 md:hidden">
          <nav className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-2">
              {links.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={closeMobileMenu}
                  className={({ isActive }) =>
                    `rounded-2xl px-4 py-3 text-sm font-medium transition ${
                      isActive
                        ? 'bg-slate-900 text-white dark:bg-slate-200 dark:text-slate-950'
                        : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
