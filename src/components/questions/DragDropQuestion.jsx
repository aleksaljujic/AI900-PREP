import { useState } from 'react';

export default function DragDropQuestion({ question, selected, onSelect, feedback, disabled }) {
  const [matches, setMatches] = useState(selected || {});
  const [draggedItem, setDraggedItem] = useState(null);

  // All choices stay visible — same choice can be placed in multiple targets
  const availableChoices = question.choices_pool;

  const handleDragStart = (choice) => {
    setDraggedItem(choice);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  };

  const handleDrop = (e, targetIdx) => {
    e.preventDefault();
    if (draggedItem) {
      const newMatches = { ...matches, [targetIdx]: draggedItem };
      setMatches(newMatches);
      onSelect(newMatches);
      setDraggedItem(null);
    }
  };

  const handleRemove = (targetIdx) => {
    const newMatches = { ...matches };
    delete newMatches[targetIdx];
    setMatches(newMatches);
    onSelect(newMatches);
  };

  const handleSelectChoice = (choice, targetIdx) => {
    const newMatches = { ...matches, [targetIdx]: choice };
    setMatches(newMatches);
    onSelect(newMatches);
  };

  return (
    <div className="space-y-6">
      <p className="text-sm font-semibold text-slate-600 dark:text-slate-300">{question.prompt}</p>

      <div className="space-y-6">
        <div className="space-y-3">
          <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-200">Available options</h4>
          <div className="flex flex-wrap gap-2">
            {availableChoices.map((choice) => (
              <button
                key={choice}
                type="button"
                draggable={!disabled}
                onDragStart={() => handleDragStart(choice)}
                onClick={() => {
                  const emptySlot = Object.keys(matches).length < question.targets.length
                    ? question.targets.length - Object.keys(matches).length
                    : null;
                  if (emptySlot) {
                    const targetIdx = Object.keys(matches).length;
                    handleSelectChoice(choice, targetIdx);
                  }
                }}
                className="cursor-grab rounded-2xl border-2 border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-300 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-slate-700"
              >
                {choice}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-200">Matches</h4>
          <div className="space-y-2">
            {question.targets.map((target, idx) => {
              const match = matches[idx];
              const isCorrect = feedback && match === target.answer;
              const isWrong = feedback && match && match !== target.answer;
              const isHovered = draggedItem && !disabled;

              return (
                <div
                  key={idx}
                  onDragOver={handleDragOver}
                  onDrop={(e) => handleDrop(e, idx)}
                  className={`rounded-2xl border-2 border-dashed p-4 transition ${
                    feedback
                      ? isCorrect
                        ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-900/20'
                        : isWrong
                        ? 'border-rose-500 bg-rose-50 dark:bg-rose-900/20'
                        : 'border-slate-300 bg-white dark:border-slate-700 dark:bg-slate-900'
                      : isHovered
                      ? 'border-blue-400 bg-blue-50 dark:bg-blue-900/10'
                      : 'border-slate-300 bg-white dark:border-slate-700 dark:bg-slate-900'
                  }`}
                >
                  <p className="text-xs font-medium text-slate-600 dark:text-slate-300 mb-2">{target.text}</p>
                  {match ? (
                    <div className="flex items-center justify-between gap-2">
                      <span className="inline-block rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold text-white dark:bg-slate-100 dark:text-slate-950">
                        {match}
                      </span>
                      {!disabled && (
                        <button
                          type="button"
                          onClick={() => handleRemove(idx)}
                          className="text-xs font-medium text-red-600 hover:text-red-700 dark:text-red-400"
                        >
                          ✕ Clear
                        </button>
                      )}
                    </div>
                  ) : (
                    <p className="text-xs text-slate-500 dark:text-slate-400">Drag or click an option</p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
