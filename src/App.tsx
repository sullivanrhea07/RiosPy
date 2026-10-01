import { useState, useEffect, useCallback } from 'react';
import { Header } from './components/Header';
import { LessonNavigation } from './components/LessonNavigation';
import { Instructions } from './components/Instructions';
import { TaskPanel } from './components/TaskPanel';
import { PythonEditor } from './components/PythonEditor';
import { Terminal } from './components/Terminal';
import { lessons } from './lessons';
import { usePyodide } from './hooks/usePyodide';
import './App.css';

function normalizeOutput(output: string) {
  return output
    .replace(/\r\n/g, '\n')
    .split('\n')
    .map((line) => line.trimEnd())
    .join('\n')
    .trim();
}

function App() {
  const [currentLessonId, setCurrentLessonId] = useState(lessons[0].id);
  const [currentTaskIndex, setCurrentTaskIndex] = useState(0);
  const [code, setCode] = useState('');
  const [output, setOutput] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [completedTasks, setCompletedTasks] = useState<Set<string>>(new Set());
  const [showHint, setShowHint] = useState(false);
  const [showExample, setShowExample] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const { loading, error: pyodideError, runPython } = usePyodide();

  const lesson = lessons.find((l) => l.id === currentLessonId)!;
  const task = lesson.tasks[currentTaskIndex];

  // Load starter code when lesson or task changes
  useEffect(() => {
    setCode(task.starterCode);
    setOutput('');
    setError(null);
    setSuccessMessage(null);
    setShowHint(false);
    setShowExample(false);
  }, [currentLessonId, currentTaskIndex, task.starterCode]);

  const handleRun = useCallback(async () => {
    setIsRunning(true);
    setError(null);
    setSuccessMessage(null);

    const expected = await runPython(task.example);
    const result = await runPython(code);
    setOutput(result.output);
    setError(result.error ?? (expected.error ? 'Could not check this task.' : null));

    if (
      !result.error &&
      !expected.error &&
      normalizeOutput(result.output) === normalizeOutput(expected.output)
    ) {
      setCompletedTasks((prev) => new Set(prev).add(task.id));
      setSuccessMessage('✓ Correct! Task completed.');
    }

    setIsRunning(false);
  }, [code, runPython, task]);

  const handleReset = () => {
    setCode(task.starterCode);
    setOutput('');
    setError(null);
    setSuccessMessage(null);
  };

  const handleUseExample = () => {
    setCode(task.example);
    setOutput('');
    setError(null);
    setSuccessMessage(null);
  };

  const handleSelectLesson = (id: string) => {
    setCurrentLessonId(id);
    setCurrentTaskIndex(0);
    setCompletedTasks(new Set());
    setSidebarOpen(false); // close mobile menu after selecting
  };

  const handleAdvanceTask = () => {
    if (currentTaskIndex < lesson.tasks.length - 1) {
      setCurrentTaskIndex((index) => index + 1);
      return;
    }

    const lessonIndex = lessons.findIndex((item) => item.id === currentLessonId);
    const nextLesson = lessons[lessonIndex + 1];
    if (nextLesson) handleSelectLesson(nextLesson.id);
  };

  if (loading) {
    return (
      <div className="loading-screen">
        <h2>Loading Python runtime…</h2>
        <p>This may take a few seconds the first time.</p>
      </div>
    );
  }

  if (pyodideError) {
    return (
      <div className="loading-screen">
        <h2>Failed to load Python</h2>
        <p>{pyodideError}</p>
      </div>
    );
  }

  return (
    <div className="app">
      <Header
        showMenuButton
        onMenuClick={() => setSidebarOpen((o) => !o)}
      />

      {/* Mobile overlay when sidebar is open */}
      {sidebarOpen && (
        <div
          className="sidebar-overlay"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <div className="main-layout">
        <aside className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
          <LessonNavigation
            lessons={lessons}
            currentLessonId={currentLessonId}
            onSelect={handleSelectLesson}
          />
        </aside>

        <main className="center">
          <Instructions title={lesson.title} instructions={lesson.instructions} />
          <PythonEditor
            code={code}
            onChange={setCode}
            onRun={handleRun}
            onReset={handleReset}
            isRunning={isRunning}
          />
        </main>

        <aside className="right-panel">
          <TaskPanel
            tasks={lesson.tasks}
            currentTaskIndex={currentTaskIndex}
            completedTasks={completedTasks}
            showHint={showHint}
            showExample={showExample}
            onShowHint={() => setShowHint(true)}
            onShowExample={() => setShowExample(true)}
            onUseExample={handleUseExample}
            canAdvance={currentTaskIndex < lesson.tasks.length - 1 || lessons[lessons.length - 1]?.id !== lesson.id}
            onNextTask={handleAdvanceTask}
            onSkipTask={handleAdvanceTask}
          />
          <Terminal
            output={output}
            error={error}
            successMessage={successMessage}
          />
        </aside>
      </div>
    </div>
  );
}

export default App;
