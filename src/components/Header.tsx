interface Props {
  view: 'lessons' | 'playground';
  onViewChange: (view: 'lessons' | 'playground') => void;
  onMenuClick?: () => void;
  showMenuButton?: boolean;
}

export function Header({ view, onViewChange, onMenuClick, showMenuButton }: Props) {
  return (
    <header className="header">
      {showMenuButton && (
        <button
          className="menu-btn"
          onClick={onMenuClick}
          aria-label="Open lessons menu"
        >
          ☰
        </button>
      )}
      <h1>Python Learning Platform</h1>
      <nav className="view-switcher" aria-label="Workspace">
        <button
          className={view === 'lessons' ? 'selected' : ''}
          aria-pressed={view === 'lessons'}
          onClick={() => onViewChange('lessons')}
        >
          Lessons
        </button>
        <button
          className={view === 'playground' ? 'selected' : ''}
          aria-pressed={view === 'playground'}
          onClick={() => onViewChange('playground')}
        >
          Playground
        </button>
      </nav>
      <span className="badge">TypeScript + Pyodide</span>
    </header>
  );
}
