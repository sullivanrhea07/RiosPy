# Python Learning Platform

A TypeScript + React educational web app for teaching Python.  
Students write and run **real Python** in the browser via **Pyodide**.

The curriculum is inspired by the structure of *Python Crash Course* (Eric Matthes)  
and the gentle exercise style of *Python Programming Exercises, Gently Explained* (Al Sweigart).  
All lesson content and exercises are original.

## Features

- 15 progressive lessons covering core beginner topics
- Three-panel layout (lessons | instructions + editor | tasks + terminal)
- Multiple tasks per lesson with automatic validation
- Hints, reset, and “task completed” feedback
- Real Python execution in the browser (Pyodide)
- Dark, distraction-free UI

## Lessons

| #  | Title                     | Concepts                              |
|----|---------------------------|--------------------------------------|
| 01 | Hello, Python!            | Variables, print                     |
| 02 | Numbers & Math            | Arithmetic operators                 |
| 03 | Introducing Lists         | Creating & indexing lists            |
| 04 | Working with Lists        | append, insert, len                  |
| 05 | if Statements             | Conditionals, elif, else             |
| 06 | Dictionaries              | Key-value pairs, .get()              |
| 07 | for Loops                 | Iterating lists & range()            |
| 08 | while Loops               | while, break, continue               |
| 09 | Functions                 | def, parameters, return              |
| 10 | String Methods            | upper, replace, split, join          |
| 11 | FizzBuzz                  | Classic logic exercise               |
| 12 | Temperature Conversion    | Writing conversion functions         |
| 13 | List Comprehensions       | Compact list building                |
| 14 | Simple Statistics         | sum, min, max, average               |
| 15 | Nested Data               | Lists of dictionaries                |

## Quick start

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually http://localhost:5173).  
The first load downloads the Pyodide runtime (~10–15 MB).

## Project structure

```
python-learning-platform/
├── src/
│   ├── components/     # UI panels
│   ├── hooks/          # usePyodide
│   ├── lessons/        # All lesson data (lesson01.ts … lesson15.ts)
│   ├── types/          # TypeScript interfaces
│   ├── App.tsx
│   └── main.tsx
├── package.json
├── vite.config.ts
└── README.md
```

## Adding new lessons

1. Create `src/lessons/lessonXX.ts` exporting a `Lesson` object.
2. Import it and add it to the array in `src/lessons/index.ts`.

Each task needs:
- `description` – what the student should do
- `hint` – a short tip
- `starterCode` – code shown when the task loads
- `validate(code, output)` – returns `true` when the task is complete

## License

MIT (for the platform code).  
Lesson content is original and free to use.
