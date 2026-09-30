import type { Lesson } from '../types/lesson';

export const lesson12: Lesson = {
  id: '12',
  title: 'Temperature Conversion',
  instructions: `Write functions that convert between Celsius and Fahrenheit.

Formulas:
  °F = (°C × 9/5) + 32
  °C = (°F − 32) × 5/9

You will create two small conversion functions and test them.`,
  tasks: [
    {
      id: '1',
      description: 'Write a function `c_to_f(celsius)` that converts Celsius to Fahrenheit and returns the result. Print c_to_f(100).',
      hint: 'def c_to_f(celsius):\n    return celsius * 9 / 5 + 32\n\nprint(c_to_f(100))',
      example: `def c_to_f(celsius):
    return celsius * 9 / 5 + 32

print(c_to_f(100))`,
      starterCode: `# Convert 100°C to Fahrenheit\n`,
      validate: (code, output) =>
        /def\s+c_to_f\s*\(/.test(code) &&
        output.includes('212'),
    },
    {
      id: '2',
      description: 'Write a function `f_to_c(fahrenheit)` that converts Fahrenheit to Celsius. Print f_to_c(32).',
      hint: 'def f_to_c(fahrenheit):\n    return (fahrenheit - 32) * 5 / 9\n\nprint(f_to_c(32))',
      example: `def f_to_c(fahrenheit):
    return (fahrenheit - 32) * 5 / 9

print(f_to_c(32))`,
      starterCode: `# Convert 32°F to Celsius\n`,
      validate: (code, output) =>
        /def\s+f_to_c\s*\(/.test(code) &&
        (output.includes('0') || output.includes('0.0')),
    },
  ],
};
