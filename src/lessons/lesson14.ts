import type { Lesson } from '../types/lesson';

export const lesson14: Lesson = {
  id: '14',
  title: 'Simple Statistics',
  instructions: `Practice computing basic statistics on a list of numbers.

You will calculate:
  - the sum
  - the average (mean)
  - the minimum and maximum

Python has built-in functions:  sum()  min()  max()  len()`,
  tasks: [
    {
      id: '1',
      description: 'Print the sum of all numbers in the list `scores`.',
      hint: 'print(sum(scores))',
      starterCode: `scores = [88, 92, 79, 93, 85]\n# Print the total\n`,
      validate: (code, output) =>
        /sum\s*\(\s*scores\s*\)/.test(code) &&
        output.includes('437'),
    },
    {
      id: '2',
      description: 'Calculate and print the average of the scores (sum divided by count).',
      hint: 'average = sum(scores) / len(scores)\nprint(average)',
      starterCode: `scores = [88, 92, 79, 93, 85]\n# Print the average\n`,
      validate: (code, output) =>
        /sum\s*\(/.test(code) &&
        /len\s*\(/.test(code) &&
        (output.includes('87.4') || output.includes('87')),
    },
    {
      id: '3',
      description: 'Print both the minimum and the maximum score, each on its own line.',
      hint: 'print(min(scores))\nprint(max(scores))',
      starterCode: `scores = [88, 92, 79, 93, 85]\n# Print min and max\n`,
      validate: (code, output) =>
        /min\s*\(/.test(code) &&
        /max\s*\(/.test(code) &&
        output.includes('79') &&
        output.includes('93'),
    },
  ],
};
