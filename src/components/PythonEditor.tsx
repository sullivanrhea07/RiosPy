interface Props {
  code: string;
  onChange: (code: string) => void;
  onRun: () => void;
  onReset: () => void;
  isRunning: boolean;
}

export function PythonEditor({
  code,
  onChange,
  onRun,
  onReset,
  isRunning,
}: Props) {
  return (
    <div className="editor">
      <div className="editor-toolbar">
        <button onClick={onRun} disabled={isRunning}>
          {isRunning ? 'Running…' : '▶ Run Code'}
        </button>
        <button onClick={onReset} className="secondary" disabled={isRunning}>
          Reset
        </button>
      </div>
      <textarea
        value={code}
        onChange={(e) => onChange(e.target.value)}
        spellCheck={false}
        className="code-area"
      />
    </div>
  );
}
