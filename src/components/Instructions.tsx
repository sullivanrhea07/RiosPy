interface Props {
  title: string;
  instructions: string;
}

export function Instructions({ title, instructions }: Props) {
  return (
    <div className="instructions">
      <h2>{title}</h2>
      <pre className="instructions-text">{instructions}</pre>
    </div>
  );
}
