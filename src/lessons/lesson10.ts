import type { Lesson } from '../types/lesson';

export const lesson10: Lesson = {
  id: '10',
  title: 'String Methods',
  instructions: `Strings come with many useful methods:

  text.upper()          → "HELLO"
  text.lower()          → "hello"
  text.title()          → "Hello World"
  text.strip()          → removes leading/trailing whitespace
  text.replace(a, b)    → replaces occurrences of a with b
  text.startswith(s)    → True/False
  text.endswith(s)      → True/False
  text.split()          → list of words
  " ".join(list)        → joins a list into a string

Remember: string methods return a new string; they do not change the original.`,
  tasks: [
    {
      id: '1',
      description: 'Convert the string to uppercase and print it.',
      hint: 'print(message.upper())',
      example: `message = "hello, world"
print(message.upper())`,
      starterCode: `message = "hello, world"\n# Print it in uppercase\n`,
      validate: (code, output) =>
        /\.upper\s*\(/.test(code) &&
        /HELLO/.test(output),
    },
    {
      id: '2',
      description: 'Replace "World" with "Python" and print the result.',
      hint: 'print(message.replace("World", "Python"))',
      example: `message = "Hello, World!"
print(message.replace("World", "Python"))`,
      starterCode: `message = "Hello, World!"\n# Replace World with Python\n`,
      validate: (code, output) =>
        /\.replace\s*\(/.test(code) &&
        /Python/.test(output),
    },
    {
      id: '3',
      description: 'Split the sentence into a list of words, then join them back with a hyphen (-). Print the result.',
      hint: 'words = sentence.split()\nprint("-".join(words))',
      example: `sentence = "Python is awesome"
words = sentence.split()
print("-".join(words))`,
      starterCode: `sentence = "Python is awesome"\n# Split then join with hyphens\n`,
      validate: (code, output) =>
        /\.split\s*\(/.test(code) &&
        /\.join\s*\(/.test(code) &&
        /Python-is-awesome/.test(output),
    },
  ],
};
