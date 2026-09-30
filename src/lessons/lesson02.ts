import type { Lesson } from '../types/lesson';

export const lesson02: Lesson = {
  id: '02',
  title: 'Numbers & Math',
  instructions: `Python can do arithmetic with the usual operators:

  +   addition
  -   subtraction
  *   multiplication
  /   division (always returns a float)
  //  integer division
  %   remainder (modulo)
  **  exponent (power)

You can store the results of calculations in variables.`,
  tasks: [
    {
      id: '1',
      description: 'Calculate 15 + 27 and store the result in a variable named `total`. Then print `total`.',
      hint: 'total = 15 + 27\nprint(total)',
      example: `total = 15 + 27
print(total)`,
      starterCode: `# Calculate 15 + 27 and print the result\n`,
      validate: (code, output) =>
        /total\s*=\s*15\s*\+\s*27/.test(code) &&
        /print\s*\(\s*total\s*\)/.test(code) &&
        output.includes('42'),
    },
    {
      id: '2',
      description: 'Calculate the area of a rectangle that is 8 units wide and 5 units tall. Store it in `area` and print it.',
      hint: 'area = 8 * 5\nprint(area)',
      example: `area = 8 * 5
print(area)`,
      starterCode: `# width = 8, height = 5\n# Calculate and print the area\n`,
      validate: (code, output) =>
        /area\s*=/.test(code) &&
        /print\s*\(\s*area\s*\)/.test(code) &&
        output.includes('40'),
    },
    {
      id: '3',
      description: 'Use exponentiation to calculate 2 raised to the power of 10. Print the result.',
      hint: 'print(2 ** 10)',
      example: `print(2 ** 10)`,
      starterCode: `# Calculate 2 to the power of 10\n`,
      validate: (code, output) =>
        /\*\*/.test(code) && output.includes('1024'),
    },
  ],
};
