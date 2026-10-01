interface Props {
  output: string;
  error: string | null;
  successMessage?: string | null;
  pendingPrompt: string | null;
  inputValue: string;
  onInputChange: (value: string) => void;
  onSubmitInput: () => void;
}

export function Terminal({
  output,
  error,
  successMessage,
  pendingPrompt,
  inputValue,
  onInputChange,
  onSubmitInput,
}: Props) {
  return (
    <div className="terminal">
      <div className="terminal-header">Terminal</div>
      <pre className="terminal-body">
        {output || (!error && <span className="muted">Run your code to see output…</span>)}
        {error && (
          <>
            {output && '\n'}
            <span className="error">{error}</span>
          </>
        )}
        {successMessage && (
          <>
            {'\n\n'}
            <span className="success">{successMessage}</span>
          </>
        )}
      </pre>
      {pendingPrompt !== null && (
        <form
          className="terminal-input"
          onSubmit={(event) => {
            event.preventDefault();
            onSubmitInput();
          }}
        >
          <label htmlFor="terminal-input-value">{pendingPrompt || 'Input'}</label>
          <input
            id="terminal-input-value"
            autoFocus
            value={inputValue}
            onChange={(event) => onInputChange(event.target.value)}
            aria-label="Python input"
          />
          <button type="submit">Enter</button>
        </form>
      )}
    </div>
  );
}
