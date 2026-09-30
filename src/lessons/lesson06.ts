import type { Lesson } from '../types/lesson';

export const lesson06: Lesson = {
  id: '06',
  title: 'Dictionaries',
  instructions: `A dictionary stores data as key-value pairs:

  person = {
      "name": "Alex",
      "age": 25,
      "city": "Anchorage"
  }

Access a value with the key:  person["name"]

Add or update:  person["email"] = "alex@example.com"

Useful methods:  .keys()  .values()  .items()  .get(key, default)`,
  tasks: [
    {
      id: '1',
      description: 'Create a dictionary called `person` with keys "name" and "age". Then print the name.',
      hint: 'person = {"name": "Alex", "age": 25}\nprint(person["name"])',
      example: `person = {"name": "Alex", "age": 25}
print(person["name"])`,
      starterCode: `# Create a person dictionary and print the name\n`,
      validate: (code, output) =>
        /person\s*=\s*\{/.test(code) &&
        /["']name["']\s*:/.test(code) &&
        /print\s*\(\s*person\s*\[\s*["']name["']\s*\]\s*\)/.test(code) &&
        output.trim().length > 0,
    },
    {
      id: '2',
      description: 'Add a new key "city" with any string value to the dictionary, then print the whole dictionary.',
      hint: 'person["city"] = "Anchorage"\nprint(person)',
      example: `person = {"name": "Alex", "age": 25}
person["city"] = "Anchorage"
print(person)`,
      starterCode: `person = {"name": "Alex", "age": 25}\n# Add a "city" key and print the dictionary\n`,
      validate: (code, output) =>
        /person\s*\[\s*["']city["']\s*\]\s*=/.test(code) &&
        /city/.test(output),
    },
    {
      id: '3',
      description: 'Use .get() to safely retrieve a key that might not exist. Print the result of person.get("email", "not provided").',
      hint: 'print(person.get("email", "not provided"))',
      example: `person = {"name": "Alex", "age": 25}
print(person.get("email", "not provided"))`,
      starterCode: `person = {"name": "Alex", "age": 25}\n# Use .get() with a default value\n`,
      validate: (code, output) =>
        /\.get\s*\(\s*["']email["']/.test(code) &&
        /not provided/i.test(output),
    },
  ],
};
