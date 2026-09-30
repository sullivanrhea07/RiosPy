import type { Lesson } from '../types/lesson';

export const lesson03: Lesson = {
  id: '03',
  title: 'Introducing Lists',
  instructions: `A list is an ordered collection of items. You create a list with square brackets:

  fruits = ["apple", "banana", "cherry"]

Items are accessed by index (starting at 0):

  fruits[0]  →  "apple"

You can also use negative indexes to count from the end:

  fruits[-1]  →  "cherry"`,
  tasks: [
    {
      id: '1',
      description: 'Create a list called `fruits` that contains at least three string items.',
      hint: 'fruits = ["apple", "banana", "cherry"]',
      starterCode: `# Create a list of fruits\n`,
      validate: (code) => /fruits\s*=\s*\[.*["'].*["'].*\]/.test(code),
    },
    {
      id: '2',
      description: 'Print the first item of the list (index 0).',
      hint: 'print(fruits[0])',
      starterCode: `fruits = ["apple", "banana", "cherry"]\n# Print the first fruit\n`,
      validate: (code, output) =>
        /print\s*\(\s*fruits\s*\[\s*0\s*\]\s*\)/.test(code) &&
        output.trim().length > 0,
    },
    {
      id: '3',
      description: 'Print the last item of the list using a negative index.',
      hint: 'print(fruits[-1])',
      starterCode: `fruits = ["apple", "banana", "cherry"]\n# Print the last fruit using a negative index\n`,
      validate: (code, output) =>
        /print\s*\(\s*fruits\s*\[\s*-\s*1\s*\]\s*\)/.test(code) &&
        output.trim().length > 0,
    },
  ],
};
