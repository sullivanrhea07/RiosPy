import type { Lesson } from '../types/lesson';

export const lesson08: Lesson = {
  id: '08',
  title: 'while Loops',
  instructions: `A while loop keeps running as long as a condition is True:

  count = 0
  while count < 5:
      print(count)
      count += 1

Be careful — if the condition never becomes False you create an infinite loop.

You can use  break  to exit early and  continue  to skip to the next iteration.`,
  tasks: [
    {
      id: '1',
      description: 'Use a while loop to print the numbers 0, 1, 2, 3, 4.',
      hint: 'count = 0\nwhile count < 5:\n    print(count)\n    count += 1',
      starterCode: `# Print 0 through 4 with a while loop\n`,
      validate: (code, output) =>
        /while\s+/.test(code) &&
        output.includes('0') &&
        output.includes('4') &&
        !output.includes('5'),
    },
    {
      id: '2',
      description: 'Start with `n = 10`. Keep dividing n by 2 (integer division) and printing it until n becomes 0.',
      hint: 'n = 10\nwhile n > 0:\n    print(n)\n    n = n // 2',
      starterCode: `n = 10\n# Keep dividing by 2 and printing until 0\n`,
      validate: (code, output) =>
        /while\s+/.test(code) &&
        /\/\//.test(code) &&
        output.includes('10') &&
        output.includes('5') &&
        output.includes('1'),
    },
    {
      id: '3',
      description: 'Print numbers from 1 to 10, but skip the number 5 using continue.',
      hint: 'i = 0\nwhile i < 10:\n    i += 1\n    if i == 5:\n        continue\n    print(i)',
      starterCode: `# Print 1-10 but skip 5\n`,
      validate: (code, output) =>
        /while\s+/.test(code) &&
        /continue/.test(code) &&
        output.includes('1') &&
        output.includes('10') &&
        !output.includes('5'),
    },
  ],
};
