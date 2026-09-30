import type { Lesson } from '../types/lesson';

interface Props {
  lessons: Lesson[];
  currentLessonId: string;
  onSelect: (id: string) => void;
}

export function LessonNavigation({ lessons, currentLessonId, onSelect }: Props) {
  return (
    <nav className="lesson-nav">
      <h3>Lessons</h3>
      <ul>
        {lessons.map((lesson) => (
          <li key={lesson.id}>
            <button
              className={lesson.id === currentLessonId ? 'active' : ''}
              onClick={() => onSelect(lesson.id)}
            >
              {lesson.id}. {lesson.title}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
