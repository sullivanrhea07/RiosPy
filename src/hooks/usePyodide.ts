import { useState, useEffect, useCallback } from 'react';

declare global {
  interface Window {
    loadPyodide: any;
  }
}

export function usePyodide() {
  const [pyodide, setPyodide] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function load() {
      try {
        // Load the Pyodide script if not already present
        if (!window.loadPyodide) {
          await new Promise<void>((resolve, reject) => {
            const script = document.createElement('script');
            script.src = 'https://cdn.jsdelivr.net/pyodide/v0.26.2/full/pyodide.js';
            script.onload = () => resolve();
            script.onerror = () => reject(new Error('Failed to load Pyodide'));
            document.head.appendChild(script);
          });
        }

        const py = await window.loadPyodide({
          indexURL: 'https://cdn.jsdelivr.net/pyodide/v0.26.2/full/',
        });
        setPyodide(py);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load Pyodide');
      } finally {
        setLoading(false);
      }
    }

    load();
  }, []);

  const runPython = useCallback(
    async (code: string, stdin = ''): Promise<{ output: string; error: string | null }> => {
      if (!pyodide) {
        return { output: '', error: 'Python runtime not ready' };
      }

      try {
        pyodide.globals.set('_copilot_stdin', stdin);
        pyodide.runPython(`
import sys
from io import StringIO
sys.stdout = StringIO()
sys.stdin = StringIO(_copilot_stdin)
del _copilot_stdin
        `);

        await pyodide.runPythonAsync(`exec(${JSON.stringify(code)}, {})`);

        const output = pyodide.runPython('sys.stdout.getvalue()');
        return { output: String(output), error: null };
      } catch (err: any) {
        return {
          output: '',
          error: err.message || String(err),
        };
      }
    },
    [pyodide]
  );

  return { pyodide, loading, error, runPython };
}
