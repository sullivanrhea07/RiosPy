interface Props {
  onMenuClick?: () => void;
  showMenuButton?: boolean;
}

export function Header({ onMenuClick, showMenuButton }: Props) {
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
      <span className="badge">TypeScript + Pyodide</span>
    </header>
  );
}
