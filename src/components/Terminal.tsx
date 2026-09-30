interface Props {
  output: string;
  error: string | null;
  successMessage?: string | null;
}

export function Terminal({ output, error, successMessage }: Props) {
  return (
    <div className="terminal">
      <div className="terminal-header">Output</div>
      <pre className="terminal-body">
        {error ? (
          <span className="error">{error}</span>
        ) : (
          <>
            {output || <span className="muted">Run your code to see output…</span>}
            {successMessage && (
              <>
                {'\n\n'}
                <span className="success">{successMessage}</span>
              </>
            )}
          </>
        )}
      </pre>
    </div>
  );
}
