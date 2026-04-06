import MultipleChoiceQuestion from './MultipleChoiceQuestion';
import DropdownQuestion from './DropdownQuestion';
import YesNoQuestion from './YesNoQuestion';
import SingleSelectQuestion from './SingleSelectQuestion';
import MultiSelectQuestion from './MultiSelectQuestion';
import DragDropQuestion from './DragDropQuestion';
import DragDropOrderQuestion from './DragDropOrderQuestion';

export default function QuestionRenderer({ question, selected, onSelect, feedback, disabled }) {
  const type = question.type;

  const renderers = {
    multiple_choice: MultipleChoiceQuestion,
    multiple_choice_multi_select: MultiSelectQuestion,
    hotspot_dropdown: DropdownQuestion,
    hotspot_yes_no: YesNoQuestion,
    hotspot_single_select: SingleSelectQuestion,
    drag_and_drop: DragDropQuestion,
    drag_and_drop_order: DragDropOrderQuestion,
  };

  const Renderer = renderers[type];

  if (!Renderer) {
    return <div className="card-base text-red-600">Unknown question type: {type}</div>;
  }

  return (
    <div className="space-y-4">
      {/* Display image if present */}
      {question.img && question.img !== 'null' && (
        <div className="rounded-2xl bg-slate-100 p-4 dark:bg-slate-800">
          <img
            src={question.img}
            alt="Question reference"
            className="w-full max-h-96 object-contain rounded-xl"
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
        </div>
      )}
      <Renderer question={question} selected={selected} onSelect={onSelect} feedback={feedback} disabled={disabled} />
    </div>
  );
}
