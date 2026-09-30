import type { Lesson } from '../types/lesson';

export const lesson07: Lesson = {
  id: '07',
  title: 'for Loops',
  instructions: `A for loop lets you process every item in a sequence:

  for fruit in fruits:
      print(fruit)

You can also loop over a range of numbers:

  for i in range(5):        # 0, 1, 2, 3, 4
      print(i)

  for i in range(1, 6):     # 1, 2, 3, 4, 5
      print(i)

  for i in range(0, 10, 2): # 0, 2, 4, 6, 8
      print(i)`,
  tasks: [
    {
      id: '1',
      description: 'Loop through the list of fruits and print each one on its own line.',
      hint: 'for fruit in fruits:\n    print(fruit)',
      example: `fruits = ["apple", "banana", "cherry"]
for fruit in fruits:
    print(fruit)`,
      starterCode: `fruits = ["apple", "banana", "cherry"]\n# Print each fruit\n`,
      validate: (code, output) =>
        /for\s+\w+\s+in\s+fruits\s*:/.test(code) &&
        output.toLowerCase().includes('apple') &&
        output.toLowerCase().includes('banana') &&
        output.toLowerCase().includes('cherry'),
    },
    {
      id: '2',
      description: 'Use range() to print the numbers 1 through 5 (inclusive), each on a new line.',
      hint: 'for i in range(1, 6):\n    print(i)',
      example: `for i in range(1, 6):
    print(i)`,
      starterCode: `# Print numbers 1 to 5\n`,
      validate: (code, output) =>
        /for\s+\w+\s+in\s+range\s*\(/.test(code) &&
        output.includes('1') &&
        output.includes('5') &&
        !output.includes('0'),
    },
    {
      id: '3',
      description: 'Print only the even numbers from 0 to 10 (inclusive) using range with a step.',
      hint: 'for i in range(0, 11, 2):\n    print(i)',
      example: `for i in range(0, 11, 2):
    print(i)`,
      starterCode: `# Print even numbers from 0 to 10\n`,
      validate: (code, output) =>
        /range\s*\(/.test(code) &&
        output.includes('0') &&
        output.includes('10') &&
        !output.includes('1\n') &&
        !output.includes('3\n'),
    },
  ],
};
