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
    async (
      code: string,
      requestInput?: (prompt: string) => Promise<string>,
      onOutput?: (chunk: string) => void,
    ): Promise<{ output: string; error: string | null }> => {
      if (!pyodide) {
        return { output: '', error: 'Python runtime not ready' };
      }

      try {
        pyodide.globals.set(
          '_rio_request_input',
          requestInput ?? (() => Promise.reject(new Error('No terminal input handler is available.'))),
        );
        pyodide.globals.set('_rio_write_output', onOutput ?? (() => {}));
        pyodide.runPython(`
import sys
import ast

class _RioStdout:
    def __init__(self):
        self.parts = []

    def write(self, text):
        text = str(text)
        self.parts.append(text)
        _rio_write_output(text)
        return len(text)

    def flush(self):
        pass

    def getvalue(self):
        return ''.join(self.parts)

sys.stdout = _RioStdout()

async def _rio_terminal_input(prompt=''):
    return await _rio_request_input(str(prompt))
        `);

        await pyodide.runPythonAsync(`
class _RioInputTransformer(ast.NodeTransformer):
    def visit_Call(self, node):
        self.generic_visit(node)
        if isinstance(node.func, ast.Name) and node.func.id == 'input':
            replacement = ast.Await(
                value=ast.Call(
                    func=ast.Name(id='_rio_terminal_input', ctx=ast.Load()),
                    args=node.args,
                    keywords=node.keywords,
                )
            )
            return ast.copy_location(replacement, node)
        return node

_rio_tree = ast.parse(${JSON.stringify(code)})
_rio_tree = _RioInputTransformer().visit(_rio_tree)
ast.fix_missing_locations(_rio_tree)
_rio_namespace = {'_rio_terminal_input': _rio_terminal_input}
_rio_compiled = compile(
    _rio_tree,
    '<exec>',
    'exec',
    flags=ast.PyCF_ALLOW_TOP_LEVEL_AWAIT,
)
_rio_result = eval(_rio_compiled, _rio_namespace, _rio_namespace)
if _rio_result is not None:
    await _rio_result
        `);

        const output = pyodide.runPython('sys.stdout.getvalue()');
        return { output: String(output), error: null };
      } catch (err: any) {
        const message = err.message || String(err);
        let output = '';
        try {
          output = String(pyodide.runPython('sys.stdout.getvalue()'));
        } catch {
          // Python may fail before stdout is initialized.
        }
        return {
          output,
          error: message.includes('EOFError')
            ? 'The program requested input, but no terminal response was received.'
            : message,
        };
      }
    },
    [pyodide]
  );

  return { pyodide, loading, error, runPython };
}
