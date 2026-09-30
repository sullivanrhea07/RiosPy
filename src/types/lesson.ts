export interface Task {
  id: string;
  description: string;
  hint: string;
  /** Example solution shown when the student clicks "How to" */
  example: string;
  /** Receives student code and captured stdout. Return true if task is complete. */
  validate: (code: string, output: string) => boolean;
  starterCode: string;
}

export interface Lesson {
  id: string;
  title: string;
  /** Short overview shown above the editor */
  instructions: string;
  tasks: Task[];
}
