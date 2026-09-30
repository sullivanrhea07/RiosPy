import type { Lesson } from '../types/lesson';

export const lesson04: Lesson = {
  id: '04',
  title: 'Working with Lists',
  instructions: `Lists are mutable — you can change them after creation.

Common methods:
  .append(item)     add to the end
  .insert(i, item)  insert at position i
  .remove(item)     remove the first matching value
  .pop()            remove and return the last item
  len(list)         return the number of items

You can also change an item by index:  my_list[0] = "new value"`,
  tasks: [
    {
      id: '1',
      description: 'Start with the list below. Use .append() to add "orange" to the end, then print the list.',
      hint: 'fruits.append("orange")\nprint(fruits)',
      starterCode: `fruits = ["apple", "banana", "cherry"]\n# Append "orange" and print the list\n`,
      validate: (code, output) =>
        /\.append\s*\(\s*["']orange["']\s*\)/.test(code) &&
        /print\s*\(\s*fruits\s*\)/.test(code) &&
        /orange/.test(output),
    },
    {
      id: '2',
      description: 'Use .insert() to put "mango" at the beginning of the list (index 0), then print the list.',
      hint: 'fruits.insert(0, "mango")\nprint(fruits)',
      starterCode: `fruits = ["apple", "banana", "cherry"]\n# Insert "mango" at index 0 and print\n`,
      validate: (code, output) =>
        /\.insert\s*\(\s*0\s*,\s*["']mango["']\s*\)/.test(code) &&
        /mango/.test(output),
    },
    {
      id: '3',
      description: 'Print the length of the list using the len() function.',
      hint: 'print(len(fruits))',
      starterCode: `fruits = ["apple", "banana", "cherry", "date"]\n# Print how many items are in the list\n`,
      validate: (code, output) =>
        /len\s*\(\s*fruits\s*\)/.test(code) &&
        output.includes('4'),
    },
  ],
};
