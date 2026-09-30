import type { Lesson } from '../types/lesson';

export const lesson01: Lesson = {
  id: '01',
  title: 'Hello, Python!',
  instructions: `Welcome! In this first lesson you will learn how to store information in variables and display text on the screen.

A variable is a name that holds a value. You create one with the = sign.

print() is the function that shows text (or any value) in the output area.`,
  tasks: [
    {
      id: '1',
      description: 'Create a variable called `name` and assign it any string value (text inside quotes).',
      hint: 'name = "Alex"',
      starterCode: `# Create a variable called name\n`,
      validate: (code) => /name\s*=\s*["'].*?["']/.test(code),
    },
    {
      id: '2',
      description: 'Use print() to display a greeting that includes the value of `name`.',
      hint: 'print("Hello, " + name)  or  print(f"Hello, {name}")',
      starterCode: `name = "Alex"\n# Print a greeting that uses the name variable\n`,
      validate: (code, output) =>
        /print\s*\(/.test(code) && /hello/i.test(output) && output.trim().length > 0,
    },
    {
      id: '3',
      description: 'Create a second variable `age` with an integer value, then print both name and age.',
      hint: 'age = 25\nprint(name)\nprint(age)',
      starterCode: `name = "Alex"\n# Create age and print both variables\n`,
      validate: (code, output) =>
        /age\s*=\s*\d+/.test(code) &&
        /print\s*\(/.test(code) &&
        output.trim().split('\n').length >= 2,
    },
  ],
};
