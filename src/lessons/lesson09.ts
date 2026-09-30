import type { Lesson } from '../types/lesson';

export const lesson09: Lesson = {
  id: '09',
  title: 'Functions',
  instructions: `Functions let you package reusable code.

  def greet(name):
      """Return a friendly greeting."""
      return "Hello, " + name

  message = greet("Alex")
  print(message)

- def starts the definition
- Parameters go inside the parentheses
- return sends a value back to the caller
- Docstrings (triple quotes) describe what the function does`,
  tasks: [
    {
      id: '1',
      description: 'Define a function called `greet` that takes one parameter `name` and returns a string "Hello, " followed by the name. Then call it with "Alex" and print the result.',
      hint: 'def greet(name):\n    return "Hello, " + name\n\nprint(greet("Alex"))',
      example: `def greet(name):
    return "Hello, " + name

print(greet("Alex"))`,
      starterCode: `# Define greet and call it\n`,
      validate: (code, output) =>
        /def\s+greet\s*\(\s*name\s*\)\s*:/.test(code) &&
        /return\s+/.test(code) &&
        /hello.*alex/i.test(output),
    },
    {
      id: '2',
      description: 'Write a function `add` that takes two parameters and returns their sum. Call it with 7 and 3 and print the result.',
      hint: 'def add(a, b):\n    return a + b\n\nprint(add(7, 3))',
      example: `def add(a, b):
    return a + b

print(add(7, 3))`,
      starterCode: `# Define add(a, b) and print add(7, 3)\n`,
      validate: (code, output) =>
        /def\s+add\s*\(/.test(code) &&
        /return\s+/.test(code) &&
        output.includes('10'),
    },
    {
      id: '3',
      description: 'Write a function `is_even` that takes a number and returns True if it is even, False otherwise. Test it with 4 and print the result.',
      hint: 'def is_even(n):\n    return n % 2 == 0\n\nprint(is_even(4))',
      example: `def is_even(n):
    return n % 2 == 0

print(is_even(4))`,
      starterCode: `# Define is_even and test with 4\n`,
      validate: (code, output) =>
        /def\s+is_even\s*\(/.test(code) &&
        /%\s*2/.test(code) &&
        /True/.test(output),
    },
  ],
};
