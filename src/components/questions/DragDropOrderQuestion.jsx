import { useMemo } from 'react';

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function DragDropOrderQuestion({ question, selected = [], onSelect, feedback, disabled }) {
  const order = Array.isArray(selected) ? selected : [];
  const shuffledPool = useMemo(() => shuffle(question.choices_pool), [question.id]);

  const handleUpdateOrder = (newOrder) => {
    if (!disabled) onSelect(newOrder);
  };

  const toggleItem = (choice) => {
    if (disabled) return;
    if (order.includes(choice)) {
      handleUpdateOrder(order.filter((item) => item !== choice));
    } else {
      handleUpdateOrder([...order, choice]);
    }
  };

  const moveItem = (index, delta) => {
    if (disabled) return;
    const nextIndex = index + delta;
    if (nextIndex < 0 || nextIndex >= order.length) return;
    const nextOrder = [...order];
    const [item] = nextOrder.splice(index, 1);
    nextOrder.splice(nextIndex, 0, item);
    handleUpdateOrder(nextOrder);
  };

  const handleDragStart = (event, index) => {
    event.dataTransfer.setData('text/plain', String(index));
  };

  const handleDrop = (event, targetIndex) => {
    event.preventDefault();
    if (disabled) return;
    const sourceIndex = Number(event.dataTransfer.getData('text/plain'));
    if (Number.isNaN(sourceIndex) || sourceIndex === targetIndex) return;
    const nextOrder = [...order];
    const [item] = nextOrder.splice(sourceIndex, 1);
    nextOrder.splice(targetIndex, 0, item);
    handleUpdateOrder(nextOrder);
  };

  return (
    <div className="space-y-6">
      <div>
        <p className="text-sm font-semibold text-slate-600 dark:text-slate-300">{question.prompt}</p>
        <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">Click items to add or remove, then drag or use arrows to reorder.</p>
      </div>

      <div className="space-y-3 rounded-2xl bg-slate-50 p-4 dark:bg-slate-950">
        <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-200">Your order</h4>
        {order.length > 0 ? (
          <ol className="space-y-2">
            {order.map((item, idx) => (
              <li
                key={item}
                draggable={!disabled}
                onDragStart={(event) => handleDragStart(event, idx)}
                onDragOver={(event) => event.preventDefault()}
                onDrop={(event) => handleDrop(event, idx)}
                className="flex items-center justify-between gap-3 rounded-2xl bg-white p-3 dark:bg-slate-900"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-900 text-xs font-bold text-white dark:bg-slate-100 dark:text-slate-950">
                    {idx + 1}
                  </span>
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-200">{item}</span>
                </div>
                <div className="flex items-center gap-2">
                  <button type="button" onClick={() => moveItem(idx, -1)} disabled={disabled || idx === 0} className="rounded-full border border-slate-200 p-2 text-slate-700 transition hover:bg-slate-100 disabled:opacity-50 dark:border-slate-800 dark:text-slate-200 dark:hover:bg-slate-800">↑</button>
                  <button type="button" onClick={() => moveItem(idx, 1)} disabled={disabled || idx === order.length - 1} className="rounded-full border border-slate-200 p-2 text-slate-700 transition hover:bg-slate-100 disabled:opacity-50 dark:border-slate-800 dark:text-slate-200 dark:hover:bg-slate-800">↓</button>
                </div>
              </li>
            ))}
          </ol>
        ) : (
          <p className="text-sm text-slate-500 dark:text-slate-400">Select items to arrange them</p>
        )}
      </div>

      <div className="space-y-2">
        <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-200">Available items</h4>
        <div className="flex flex-wrap gap-2">
          {shuffledPool.map((choice) => {
            const isSelected = order.includes(choice);
            return (
              <button
                key={choice}
                type="button"
                disabled={disabled}
                onClick={() => toggleItem(choice)}
                className={`rounded-2xl border-2 px-4 py-2 text-sm font-medium transition ${
                  isSelected
                    ? 'border-slate-900 bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-950'
                    : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200'
                }`}
              >
                {choice}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
