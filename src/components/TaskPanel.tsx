import type { Task } from '../types/lesson';

interface Props {
  tasks: Task[];
  currentTaskIndex: number;
  completedTasks: Set<string>;
  showHint: boolean;
  onShowHint: () => void;
  onNextTask: () => void;
}

export function TaskPanel({
  tasks,
  currentTaskIndex,
  completedTasks,
  showHint,
  onShowHint,
  onNextTask,
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

      <div className="task-actions">
        {!showHint && (
          <button onClick={onShowHint} className="secondary">
            Show Hint
          </button>
        )}
        {isCompleted && !isLast && (
          <button onClick={onNextTask}>Next Task →</button>
        )}
        {isCompleted && isLast && (
          <p className="success">🎉 Lesson complete!</p>
        )}
      </div>
    </div>
  );
}
