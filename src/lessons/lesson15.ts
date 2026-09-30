import type { Lesson } from '../types/lesson';

export const lesson15: Lesson = {
  id: '15',
  title: 'Nested Data',
  instructions: `Real programs often combine lists and dictionaries.

Example – a list of dictionaries:

  students = [
      {"name": "Alex", "score": 92},
      {"name": "Sam",  "score": 85},
      {"name": "Jordan", "score": 88}
  ]

You can loop through the list and access each dictionary’s keys.`,
  tasks: [
    {
      id: '1',
      description: 'Loop through the list of students and print each student’s name.',
      hint: 'for student in students:\n    print(student["name"])',
      starterCode: `students = [
    {"name": "Alex", "score": 92},
    {"name": "Sam", "score": 85},
    {"name": "Jordan", "score": 88}
]
# Print each name\n`,
      validate: (code, output) =>
        /for\s+\w+\s+in\s+students\s*:/.test(code) &&
        output.toLowerCase().includes('alex') &&
        output.toLowerCase().includes('sam') &&
        output.toLowerCase().includes('jordan'),
    },
    {
      id: '2',
      description: 'Print only the names of students who scored 90 or higher.',
      hint: 'for student in students:\n    if student["score"] >= 90:\n        print(student["name"])',
      starterCode: `students = [
    {"name": "Alex", "score": 92},
    {"name": "Sam", "score": 85},
    {"name": "Jordan", "score": 88}
]
# Print names of students with score >= 90\n`,
      validate: (code, output) =>
        /if\s+/.test(code) &&
        /score/.test(code) &&
        output.toLowerCase().includes('alex') &&
        !output.toLowerCase().includes('sam'),
    },
  ],
};
