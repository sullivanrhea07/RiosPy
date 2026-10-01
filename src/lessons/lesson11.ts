import type { Lesson } from '../types/lesson';

export const lesson11: Lesson = {
  id: '11',
  title: 'FizzBuzz',
  instructions: `FizzBuzz is a classic programming exercise.

Rules:
  - For multiples of 3, print "Fizz"
  - For multiples of 5, print "Buzz"
  - For multiples of both 3 and 5, print "FizzBuzz"
  - Otherwise print the number itself

You will implement this for the numbers 1 through 25.`,
  tasks: [
    {
      id: '1',
      description: 'Write a loop from 1 to 25. For each number: if divisible by both 3 and 5 print "FizzBuzz", elif by 3 print "Fizz", elif by 5 print "Buzz", else print the number.',
      hint: 'for i in range(1, 21):\n    if i % 15 == 0:\n        print("FizzBuzz")\n    elif i % 3 == 0:\n        print("Fizz")\n    elif i % 5 == 0:\n        print("Buzz")\n    else:\n        print(i)',
      example: `for i in range(1, 21):
    if i % 15 == 0:
        print("FizzBuzz")
    elif i % 3 == 0:
        print("Fizz")
    elif i % 5 == 0:
        print("Buzz")
    else:
        print(i)`,
      starterCode: `# FizzBuzz from 1 to 25\n`,
      validate: (code, output) => {
        const lines = output.trim().split('\n');
        return (
          /for\s+/.test(code) &&
          lines.length >= 25 &&
          lines[2] === 'Fizz' &&
          lines[4] === 'Buzz' &&
          lines[14] === 'FizzBuzz'
        );
      },
    },
  ],
};
