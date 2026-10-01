interface Props {
  code: string;
  onChange: (code: string) => void;
  stdin: string;
  onStdinChange: (stdin: string) => void;
  onRun: () => void;
  onReset: () => void;
  isRunning: boolean;
}

export function PythonEditor({
  code,
  onChange,
  stdin,
  onStdinChange,
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
        <button onClick={onReset} className="secondary">
          Reset
        </button>
      </div>
      <label className="stdin-panel">
        <span>Program Input</span>
        <textarea
          value={stdin}
          onChange={(e) => onStdinChange(e.target.value)}
          spellCheck={false}
          className="stdin-area"
          aria-label="Program input, one value per input call"
          placeholder="One value per input() call"
          rows={2}
        />
      </label>
      <textarea
        value={code}
        onChange={(e) => onChange(e.target.value)}
        spellCheck={false}
        className="code-area"
      />
    </div>
  );
}
