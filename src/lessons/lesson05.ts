import type { Lesson } from '../types/lesson';

export const lesson05: Lesson = {
  id: '05',
  title: 'if Statements',
  instructions: `Conditional statements let your program make decisions.

  if condition:
      # runs when condition is True
  elif other_condition:
      # runs when the first was False and this is True
  else:
      # runs when none of the above were True

Comparison operators:  ==  !=  <  >  <=  >=

You can combine conditions with  and  /  or  /  not`,
  tasks: [
    {
      id: '1',
      description: 'Write an if statement that prints "You are an adult" if the variable `age` is greater than or equal to 18.',
      hint: 'if age >= 18:\n    print("You are an adult")',
      starterCode: `age = 20\n# Write an if statement that checks age\n`,
      validate: (code, output) =>
        /if\s+age\s*>=\s*18\s*:/.test(code) &&
        /adult/i.test(output),
    },
    {
      id: '2',
      description: 'Extend the previous idea: if age >= 18 print "adult", otherwise print "minor".',
      hint: 'if age >= 18:\n    print("adult")\nelse:\n    print("minor")',
      starterCode: `age = 15\n# if / else that prints "adult" or "minor"\n`,
      validate: (code, output) =>
        /if\s+age\s*>=\s*18/.test(code) &&
        /else\s*:/.test(code) &&
        /minor/i.test(output),
    },
    {
      id: '3',
      description: 'Check a score. If score >= 90 print "A", elif score >= 80 print "B", else print "C or below".',
      hint: 'Use if / elif / else',
      starterCode: `score = 85\n# Grade the score\n`,
      validate: (code, output) =>
        /if\s+score\s*>=\s*90/.test(code) &&
        /elif\s+score\s*>=\s*80/.test(code) &&
        /B/.test(output),
    },
  ],
};
