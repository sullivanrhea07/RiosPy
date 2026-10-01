import type { Lesson } from '../types/lesson';

export const lesson17: Lesson = {
  id: '17',
  title: 'Practice Problems: Moderate',
  instructions: `These challenges combine conditions, validation, and loops. Pay attention to boundary cases such as invalid values, ties, and leap years.

For the four-bit exercise, imagine four switches that can each be off (0) or on (1). Print every possible arrangement exactly once.`,
  tasks: [
    {
      id: '1',
      description: 'Approve an ATM withdrawal only when it is positive, a multiple of ₱100, no more than ₱20,000, and no greater than the balance. For the given values, print “Withdrawal Approved” and the remaining balance.',
      hint: 'Combine the rules in one if condition using and. The amount must also satisfy withdrawal % 100 == 0.',
      example: `balance = 15000
withdrawal = 5000
if (withdrawal > 0 and withdrawal % 100 == 0
        and withdrawal <= balance and withdrawal <= 20000):
    print("Withdrawal Approved")
    print(f"Remaining Balance: ₱{balance - withdrawal}")
else:
    print("Invalid withdrawal amount")`,
      starterCode: `balance = 15000\nwithdrawal = 5000\n# Check all ATM rules and print the decision and remaining balance\n`,
      validate: (code, output) =>
        /if\s+/.test(code) &&
        /%\s*100/.test(code) &&
        output.includes('Withdrawal Approved') &&
        output.includes('10000'),
    },
    {
      id: '2',
      description: 'A student receives a full scholarship with GPA 1.25 or better. Otherwise, award a partial scholarship when GPA is 1.75 or better and family income is at most ₱300,000. The sample student has GPA 1.50 and income ₱250,000.',
      hint: 'Check the full-scholarship rule first, then the partial-scholarship rule.',
      example: `gpa = 1.50
income = 250000
if gpa <= 1.25:
    print("Full Scholarship")
elif gpa <= 1.75 and income <= 300000:
    print("Partial Scholarship")
else:
    print("Not Eligible")`,
      starterCode: `gpa = 1.50\nincome = 250000\n# Determine the scholarship category\n`,
      validate: (code, output) =>
        /elif/.test(code) &&
        /income/.test(code) &&
        output.trim() === 'Partial Scholarship',
    },
    {
      id: '3',
      description: 'Determine how many days February has in 2024. A year is a leap year when it is divisible by 400, or divisible by 4 but not by 100. Print “February has 29 days.” Handle other months and invalid month numbers too.',
      hint: 'Use the complete leap-year expression: year % 400 == 0 or (year % 4 == 0 and year % 100 != 0).',
      example: `month = 2
year = 2024
if month < 1 or month > 12:
    print("Invalid Input")
elif month == 2:
    if year % 400 == 0 or (year % 4 == 0 and year % 100 != 0):
        print("February has 29 days.")
    else:
        print("February has 28 days.")
elif month in [4, 6, 9, 11]:
    print("30 days")
else:
    print("31 days")`,
      starterCode: `month = 2\nyear = 2024\n# Validate the month and print the correct number of days\n`,
      validate: (code, output) =>
        /%\s*400/.test(code) &&
        /%\s*100/.test(code) &&
        output.trim() === 'February has 29 days.',
    },
    {
      id: '4',
      description: 'Given side lengths 5, 5, and 8, first determine whether they form a valid triangle. If valid, classify it as equilateral, isosceles, or scalene and print “Isosceles triangle”.',
      hint: 'A triangle is valid when the sum of any two sides is greater than the third side.',
      example: `a, b, c = 5, 5, 8
if a + b <= c or a + c <= b or b + c <= a:
    print("Not a triangle")
elif a == b == c:
    print("Equilateral triangle")
elif a == b or a == c or b == c:
    print("Isosceles triangle")
else:
    print("Scalene triangle")`,
      starterCode: `a, b, c = 5, 5, 8\n# Validate the sides, then print the triangle type\n`,
      validate: (code, output) =>
        /if\s+/.test(code) &&
        /a\s*\+\s*b/.test(code) &&
        output.trim() === 'Isosceles triangle',
    },
    {
      id: '5',
      description: 'Write FizzBuzz for numbers 1 through 30: print Fizz for multiples of 3, Buzz for multiples of 5, FizzBuzz for both, and the number otherwise. Check the “both” case before the individual cases.',
      hint: 'Test divisibility by 15 first, or test both number % 3 == 0 and number % 5 == 0.',
      example: `for number in range(1, 31):
    if number % 15 == 0:
        print("FizzBuzz")
    elif number % 3 == 0:
        print("Fizz")
    elif number % 5 == 0:
        print("Buzz")
    else:
        print(number)`,
      starterCode: `# Print the FizzBuzz sequence from 1 through 30\n`,
      validate: (code, output) => {
        const lines = output.trim().split('\n');
        return /for\s+/.test(code) &&
          lines.length === 30 &&
          lines[2] === 'Fizz' &&
          lines[4] === 'Buzz' &&
          lines[14] === 'FizzBuzz' &&
          lines[29] === 'FizzBuzz';
      },
    },
    {
      id: '6',
      description: 'Print all 16 possible four-bit patterns, from 0000 through 1111, one per line. Use four nested loops where each bit takes the values 0 and 1; keep leading zeroes.',
      hint: 'Use four loops over range(2), then print the four bit values together.',
      example: `for first in range(2):
    for second in range(2):
        for third in range(2):
            for fourth in range(2):
                print(f"{first}{second}{third}{fourth}")`,
      starterCode: `# Use four nested loops to print every four-bit pattern\n`,
      validate: (code, output) => {
        const lines = output.trim().split('\n');
        return (code.match(/for\s+\w+\s+in\s+range\s*\(\s*2\s*\)/g) ?? []).length >= 4 &&
          lines.length === 16 &&
          lines[0] === '0000' &&
          lines[15] === '1111';
      },
    },
    {
      id: '7',
      description: 'Calculate the average of scores 82, 91, and 77. Print “Excellent” for an average of at least 90, “Pass” for at least 75, and “Fail” otherwise. Also print the average to two decimal places.',
      hint: 'Add the scores, divide by how many there are, then use if/elif/else for the category.',
      example: `scores = [82, 91, 77]
average = sum(scores) / len(scores)
print(f"Average: {average:.2f}")
if average >= 90:
    print("Excellent")
elif average >= 75:
    print("Pass")
else:
    print("Fail")`,
      starterCode: `scores = [82, 91, 77]\n# Calculate and print the average and its category\n`,
      validate: (code, output) =>
        /average/.test(code) &&
        /if\s+/.test(code) &&
        output.includes('83.33') &&
        output.includes('Pass'),
    },
    {
      id: '8',
      description: 'Calculate BMI for a person who weighs 70 kg and is 1.75 m tall. BMI is weight / height squared. Print the BMI to two decimals and classify it as Underweight (<18.5), Normal (<25), Overweight (<30), or Obese.',
      hint: 'Use weight / (height ** 2), then compare the result against each threshold in order.',
      example: `weight = 70
height = 1.75
bmi = weight / (height ** 2)
print(f"BMI: {bmi:.2f}")
if bmi < 18.5:
    print("Underweight")
elif bmi < 25:
    print("Normal")
elif bmi < 30:
    print("Overweight")
else:
    print("Obese")`,
      starterCode: `weight = 70\nheight = 1.75\n# Calculate and classify BMI\n`,
      validate: (code, output) =>
        /\*\*\s*2/.test(code) &&
        /elif/.test(code) &&
        output.includes('22.86') &&
        output.includes('Normal'),
    },
  ],
};
