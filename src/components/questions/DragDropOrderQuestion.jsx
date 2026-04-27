export default function DragDropOrderQuestion({ question, selected = [], onSelect, feedback, disabled }) {
  const order = Array.isArray(selected) ? selected : [];
  const correctOrder = Array.isArray(question.answer_order) ? question.answer_order : [];

  const handleUpdateOrder = (newOrder) => {
    if (!disabled) onSelect(newOrder);
  };

  const addItem = (choice) => {
    if (disabled || order.includes(choice)) return;
    handleUpdateOrder([...order, choice]);
  };

  const removeItem = (index) => {
    if (disabled) return;
    handleUpdateOrder(order.filter((_, i) => i !== index));
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
        <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">Click items below to add them, drag or use arrows to reorder, click ✕ to remove.</p>
      </div>

      <div className="space-y-3 rounded-2xl bg-slate-50 p-4 dark:bg-slate-950">
        <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-200">Your order</h4>
        {order.length > 0 ? (
          <ol className="space-y-2">
            {order.map((item, idx) => {
              const isCorrect = feedback && correctOrder[idx] === item;
              const isWrong = feedback && correctOrder[idx] !== item;

              return (
                <li
                  key={item}
                  draggable={!disabled}
                  onDragStart={(event) => handleDragStart(event, idx)}
                  onDragOver={(event) => event.preventDefault()}
                  onDrop={(event) => handleDrop(event, idx)}
                  className={`flex items-center justify-between gap-3 rounded-2xl border-2 p-3 transition ${
                    isCorrect
                      ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-900/20'
                      : isWrong
                      ? 'border-rose-500 bg-rose-50 dark:bg-rose-900/20'
                      : 'border-transparent bg-white dark:bg-slate-900'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold ${
                      isCorrect
                        ? 'bg-emerald-500 text-white'
                        : isWrong
                        ? 'bg-rose-500 text-white'
                        : 'bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-950'
                    }`}>
                      {idx + 1}
                    </span>
                    <span className={`text-sm font-medium ${
                      isCorrect ? 'text-emerald-900 dark:text-emerald-200'
                      : isWrong ? 'text-rose-900 dark:text-rose-200'
                      : 'text-slate-700 dark:text-slate-200'
                    }`}>{item}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    {!disabled && (
                      <>
                        <button type="button" onClick={() => moveItem(idx, -1)} disabled={idx === 0} className="rounded-full border border-slate-200 p-2 text-slate-700 transition hover:bg-slate-100 disabled:opacity-30 dark:border-slate-800 dark:text-slate-200 dark:hover:bg-slate-800">↑</button>
                        <button type="button" onClick={() => moveItem(idx, 1)} disabled={idx === order.length - 1} className="rounded-full border border-slate-200 p-2 text-slate-700 transition hover:bg-slate-100 disabled:opacity-30 dark:border-slate-800 dark:text-slate-200 dark:hover:bg-slate-800">↓</button>
                        <button type="button" onClick={() => removeItem(idx)} className="rounded-full border border-slate-200 p-2 text-rose-500 transition hover:bg-rose-50 dark:border-slate-800 dark:hover:bg-rose-900/20">✕</button>
                      </>
                    )}
                  </div>
                </li>
              );
            })}
          </ol>
        ) : (
          <p className="text-sm text-slate-500 dark:text-slate-400">Select items to arrange them</p>
        )}
      </div>

      {feedback && correctOrder.length > 0 && (
        <div className="rounded-2xl bg-slate-100 p-4 dark:bg-slate-900">
          <p className="text-xs font-semibold text-slate-600 dark:text-slate-300 mb-2">Correct order:</p>
          <ol className="space-y-1">
            {correctOrder.map((item, idx) => (
              <li key={idx} className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-white text-xs font-bold">{idx + 1}</span>
                {item}
              </li>
            ))}
          </ol>
        </div>
      )}

      <div className="space-y-2">
        <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-200">Available items</h4>
        <div className="flex flex-wrap gap-2">
          {question.choices_pool.map((choice) => {
            const isSelected = order.includes(choice);
            return (
              <button
                key={choice}
                type="button"
                disabled={disabled || isSelected}
                onClick={() => addItem(choice)}
                className={`rounded-2xl border-2 px-4 py-2 text-sm font-medium transition ${
                  isSelected
                    ? 'border-slate-300 bg-slate-100 text-slate-400 cursor-not-allowed dark:border-slate-700 dark:bg-slate-800 dark:text-slate-500'
                    : 'border-slate-200 bg-white text-slate-700 hover:border-slate-400 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200'
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
