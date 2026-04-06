import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { domains } from '../data/topics';
import roadmapLinks from '../data/roadmap_links.json';
import useProgress from '../hooks/useProgress';

// ─── Layout constants ───────────────────────────────────────────────────────
const SVG_W = 1200;
const SVG_H = 600;
const NODE_W = 220;

const ROOT_CX = 600;
const ROOT_Y = 20;
const ROOT_H = 50;

const DOMAIN_CX = [174, 458, 742, 1026]; // 4 evenly spaced centres
const DOMAIN_Y = 128;
const DOMAIN_H = 56;

const SUB_Y0 = 248; // first subtopic top
const SUB_H = 50;
const SUB_GAP = 66; // top-to-top spacing

// ─── MS Learn paths (from roadmap_links.json) ────────────────────────────────
const MS_LINKS = {
  root: 'https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-fundamentals/',
  ...roadmapLinks.domains,
};

// ─── Colour palette per domain ───────────────────────────────────────────────
const PALETTE = {
  workloads: {
    header: 'bg-sky-500 hover:bg-sky-600',
    headerText: 'text-white',
    sub: 'bg-sky-50 border-sky-200 hover:border-sky-400 text-sky-900 dark:bg-sky-950 dark:border-sky-800 dark:hover:border-sky-500 dark:text-sky-100',
    line: '#0ea5e9',
    check: 'bg-sky-500',
    ring: 'border-sky-300 dark:border-sky-700',
  },
  vision: {
    header: 'bg-orange-500 hover:bg-orange-600',
    headerText: 'text-white',
    sub: 'bg-orange-50 border-orange-200 hover:border-orange-400 text-orange-900 dark:bg-orange-950 dark:border-orange-800 dark:hover:border-orange-500 dark:text-orange-100',
    line: '#f97316',
    check: 'bg-orange-500',
    ring: 'border-orange-300 dark:border-orange-700',
  },
  language: {
    header: 'bg-violet-500 hover:bg-violet-600',
    headerText: 'text-white',
    sub: 'bg-violet-50 border-violet-200 hover:border-violet-400 text-violet-900 dark:bg-violet-950 dark:border-violet-800 dark:hover:border-violet-500 dark:text-violet-100',
    line: '#8b5cf6',
    check: 'bg-violet-500',
    ring: 'border-violet-300 dark:border-violet-700',
  },
  conversational: {
    header: 'bg-amber-500 hover:bg-amber-600',
    headerText: 'text-white',
    sub: 'bg-amber-50 border-amber-200 hover:border-amber-400 text-amber-900 dark:bg-amber-950 dark:border-amber-800 dark:hover:border-amber-500 dark:text-amber-100',
    line: '#f59e0b',
    check: 'bg-amber-500',
    ring: 'border-amber-300 dark:border-amber-700',
  },
};

// ─── SVG bezier helper ───────────────────────────────────────────────────────
function bezier(x1, y1, x2, y2) {
  const cy1 = y1 + (y2 - y1) * 0.5;
  const cy2 = y1 + (y2 - y1) * 0.5;
  return `M ${x1} ${y1} C ${x1} ${cy1}, ${x2} ${cy2}, ${x2} ${y2}`;
}

// ─── Reusable node wrapper ────────────────────────────────────────────────────
function AbsNode({ x, y, w, h, children }) {
  return (
    <div
      style={{ position: 'absolute', left: x, top: y, width: w, height: h }}
    >
      {children}
    </div>
  );
}

export default function Roadmap() {
  const { studiedTopics, toggleTopic } = useProgress();

  return (
    <section className="space-y-6 pb-16">
      {/* Header */}
      <div className="card-base">
        <span className="inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-600 dark:bg-slate-800 dark:text-slate-300">
          Roadmap
        </span>
        <h2 className="mt-4 text-3xl font-semibold text-slate-950 dark:text-white">
          AI-900 Learning Roadmap
        </h2>
        <p className="mt-3 max-w-2xl text-slate-600 dark:text-slate-300">
          Visual learning path for the Azure AI Fundamentals certification.
          Click domain headers to open the Microsoft Learn path. Click
          subtopics to study them in the Topics page.
        </p>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap gap-4 text-sm text-slate-600 dark:text-slate-400">
        <div className="flex items-center gap-2">
          <span className="h-4 w-4 rounded-full bg-green-500" />
          Topic studied
        </div>
        <div className="flex items-center gap-2">
          <span className="h-4 w-4 rounded-full border-2 border-slate-300 dark:border-slate-600" />
          Not yet studied
        </div>
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-sm bg-slate-900 dark:bg-white" />
          Domain (links to MS Learn)
        </div>
      </div>

      {/* Roadmap canvas */}
      <div className="overflow-x-auto rounded-3xl border border-slate-200 bg-white p-6 shadow-soft dark:border-slate-800 dark:bg-slate-900">
        <div
          style={{
            position: 'relative',
            width: SVG_W,
            height: SVG_H,
            minWidth: SVG_W,
          }}
        >
          {/* ── SVG connector lines ─────────────────────────────────────── */}
          <svg
            style={{
              position: 'absolute',
              inset: 0,
              width: SVG_W,
              height: SVG_H,
              pointerEvents: 'none',
            }}
            viewBox={`0 0 ${SVG_W} ${SVG_H}`}
            aria-hidden="true"
          >
            {/* Root → Domains */}
            {domains.map((domain, i) => (
              <path
                key={`root-${domain.id}`}
                d={bezier(
                  ROOT_CX,
                  ROOT_Y + ROOT_H,
                  DOMAIN_CX[i],
                  DOMAIN_Y,
                )}
                fill="none"
                stroke={PALETTE[domain.id].line}
                strokeWidth="2"
                strokeDasharray="0"
                opacity="0.7"
              />
            ))}

            {/* Domain → trunk line down through all subtopics */}
            {domains.map((domain, i) => {
              const cx = DOMAIN_CX[i];
              const lastSubCenter =
                SUB_Y0 + (domain.subtopics.length - 1) * SUB_GAP + SUB_H / 2;
              return (
                <line
                  key={`trunk-${domain.id}`}
                  x1={cx}
                  y1={DOMAIN_Y + DOMAIN_H}
                  x2={cx}
                  y2={lastSubCenter}
                  stroke={PALETTE[domain.id].line}
                  strokeWidth="2"
                  opacity="0.35"
                />
              );
            })}

            {/* Tick marks at each subtopic connection */}
            {domains.map((domain, i) => {
              const cx = DOMAIN_CX[i];
              return domain.subtopics.map((_, j) => {
                const cy = SUB_Y0 + j * SUB_GAP + SUB_H / 2;
                return (
                  <circle
                    key={`tick-${domain.id}-${j}`}
                    cx={cx}
                    cy={cy}
                    r="3"
                    fill={PALETTE[domain.id].line}
                    opacity="0.5"
                  />
                );
              });
            })}
          </svg>

          {/* ── Root node ──────────────────────────────────────────────── */}
          <AbsNode
            x={ROOT_CX - NODE_W / 2}
            y={ROOT_Y}
            w={NODE_W}
            h={ROOT_H}
          >
            <motion.a
              href={MS_LINKS.root}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.06, y: -2 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="flex h-full w-full items-center justify-center gap-2 rounded-2xl bg-slate-900 text-sm font-bold text-white shadow-lg ring-2 ring-slate-700 transition dark:bg-white dark:text-slate-900 dark:ring-slate-300"
            >
              <span>🎯</span>
              <span>AI-900 Certification</span>
            </motion.a>
          </AbsNode>

          {/* ── Domain + subtopic nodes ─────────────────────────────────── */}
          {domains.map((domain, i) => {
            const cx = DOMAIN_CX[i];
            const p = PALETTE[domain.id];
            const studiedCount = domain.subtopics.filter((s) =>
              studiedTopics.includes(s.id),
            ).length;
            const allDone = studiedCount === domain.subtopics.length;

            return (
              <div key={domain.id}>
                {/* Domain header */}
                <AbsNode
                  x={cx - NODE_W / 2}
                  y={DOMAIN_Y}
                  w={NODE_W}
                  h={DOMAIN_H}
                >
                  <motion.a
                    href={MS_LINKS[domain.id]}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, y: -2 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    className={`flex h-full w-full flex-col items-center justify-center rounded-2xl px-2 text-center shadow-md transition ${p.header} ${p.headerText}`}
                  >
                    <span className="text-xs font-bold leading-tight">
                      {domain.title}
                    </span>
                    <span className="mt-0.5 text-[10px] opacity-80">
                      {domain.percentage} &nbsp;·&nbsp; {studiedCount}/
                      {domain.subtopics.length}
                      {allDone && ' ✓'}
                    </span>
                  </motion.a>
                </AbsNode>

                {/* Subtopics */}
                {domain.subtopics.map((sub, j) => {
                  const isStudied = studiedTopics.includes(sub.id);
                  const top = SUB_Y0 + j * SUB_GAP;

                  return (
                    <AbsNode
                      key={sub.id}
                      x={cx - NODE_W / 2}
                      y={top}
                      w={NODE_W}
                      h={SUB_H}
                    >
                      <motion.div
                        whileHover={{ scale: 1.04, y: -2 }}
                        transition={{
                          type: 'spring',
                          stiffness: 300,
                          damping: 20,
                        }}
                      >
                        <a
                          href={roadmapLinks.subtopics[sub.id] ?? '/topics'}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`flex items-center gap-2.5 rounded-xl border px-3 py-2 text-xs font-medium shadow-sm transition ${p.sub}`}
                          style={{ height: SUB_H }}
                        >
                          <button
                            type="button"
                            onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              toggleTopic(sub.id);
                            }}
                            className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 transition-colors ${
                              isStudied
                                ? `${p.check} border-transparent text-[10px] text-white`
                                : `bg-transparent ${p.ring} hover:bg-white/40`
                            }`}
                            title={isStudied ? 'Označi kao nenaučeno' : 'Označi kao naučeno'}
                          >
                            {isStudied && '✓'}
                          </button>
                          <span className="leading-tight">{sub.title}</span>
                        </a>
                      </motion.div>
                    </AbsNode>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>

      {/* Domain breakdown */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {domains.map((domain) => {
          const p = PALETTE[domain.id];
          const studied = domain.subtopics.filter((s) =>
            studiedTopics.includes(s.id),
          ).length;
          const pct = Math.round((studied / domain.subtopics.length) * 100);
          return (
            <div
              key={domain.id}
              className="card-base flex flex-col gap-3"
            >
              <div className="flex items-center gap-2">
                <span
                  className={`h-3 w-3 rounded-full ${p.header.split(' ')[0]}`}
                />
                <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                  {domain.title}
                </span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
                <div
                  className={`h-full rounded-full transition-all duration-500 ${p.header.split(' ')[0]}`}
                  style={{ width: `${pct}%` }}
                />
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {studied}/{domain.subtopics.length} topics &nbsp;·&nbsp;{' '}
                {domain.percentage}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
