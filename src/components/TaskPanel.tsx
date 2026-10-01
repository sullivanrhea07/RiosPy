import type { Task } from '../types/lesson';

interface Props {
  tasks: Task[];
  currentTaskIndex: number;
  completedTasks: Set<string>;
  showHint: boolean;
  showExample: boolean;
  canAdvance: boolean;
  onShowHint: () => void;
  onShowExample: () => void;
  onUseExample: () => void;
  onNextTask: () => void;
  onSkipTask: () => void;
}

export function TaskPanel({
  tasks,
  currentTaskIndex,
  completedTasks,
  showHint,
  showExample,
  canAdvance,
  onShowHint,
  onShowExample,
  onUseExample,
  onNextTask,
  onSkipTask,
}: Props) {
  const task = tasks[currentTaskIndex];
  if (!task) return null;

  const isCompleted = completedTasks.has(task.id);
  const isLast = currentTaskIndex === tasks.length - 1;

  return (
    <div className="task-panel">
      <h3>
        Task {currentTaskIndex + 1} of {tasks.length}
        {isCompleted && <span className="check"> ✓</span>}
      </h3>
      <p>{task.description}</p>

      {showHint && <p className="hint">💡 Hint: {task.hint}</p>}

      {showExample && (
        <div className="example-box">
          <div className="example-header">
            <span>📖 Example solution</span>
            <button onClick={onUseExample} className="secondary small">
              Use in editor
            </button>
          </div>
          <pre className="example-code">{task.example}</pre>
        </div>
      )}

      <div className="task-actions">
        {!showHint && (
          <button onClick={onShowHint} className="secondary">
            Show Hint
          </button>
        )}
        {!showExample && (
          <button onClick={onShowExample} className="secondary">
            How to
          </button>
        )}
        {canAdvance && isCompleted && (
          <button onClick={onNextTask}>Next Task →</button>
        )}
        {canAdvance && !isCompleted && (
          <button onClick={onSkipTask} className="secondary">Skip Task →</button>
        )}
        {isCompleted && isLast && (
          <p className="success">🎉 Lesson complete!</p>
        )}
      </div>
    </div>
  );
}
