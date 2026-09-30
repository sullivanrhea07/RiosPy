import type { Lesson } from '../types/lesson';

export const lesson13: Lesson = {
  id: '13',
  title: 'List Comprehensions',
  instructions: `List comprehensions give you a compact way to build lists:

  squares = [x ** 2 for x in range(1, 6)]
  # → [1, 4, 9, 16, 25]

You can also add a condition:

  evens = [x for x in range(10) if x % 2 == 0]
  # → [0, 2, 4, 6, 8]`,
  tasks: [
    {
      id: '1',
      description: 'Use a list comprehension to create a list of the squares of numbers 1 through 5. Print the list.',
      hint: 'squares = [x ** 2 for x in range(1, 6)]\nprint(squares)',
      example: `squares = [x ** 2 for x in range(1, 6)]
print(squares)`,
      starterCode: `# Create [1, 4, 9, 16, 25] with a list comprehension\n`,
      validate: (code, output) =>
        /for\s+\w+\s+in\s+/.test(code) &&
        /\[.*for.*\]/.test(code) &&
        output.includes('1') &&
        output.includes('25'),
    },
    {
      id: '2',
      description: 'Create a list of even numbers from 0 to 10 (inclusive) using a list comprehension with a condition. Print it.',
      hint: 'evens = [x for x in range(11) if x % 2 == 0]\nprint(evens)',
      example: `evens = [x for x in range(11) if x % 2 == 0]
print(evens)`,
      starterCode: `# Even numbers 0–10 with a list comprehension\n`,
      validate: (code, output) =>
        /if\s+/.test(code) &&
        /\[.*for.*\]/.test(code) &&
        output.includes('0') &&
        output.includes('10') &&
        !output.includes('1,'),
    },
  ],
};
