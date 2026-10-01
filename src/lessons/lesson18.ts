import type { Lesson } from '../types/lesson';

export const lesson18: Lesson = {
  id: '18',
  title: 'Practice Problems: Hard',
  instructions: `These problems focus on algorithms: repeated digit processing, nested iteration, and careful handling of special cases.

Try to solve each challenge with basic Python operations and loops before reaching for shortcuts. The starter values are samples; change them after your program works.`,
  tasks: [
    {
      id: '1',
      description: 'Determine whether 153 is an Armstrong number. Raise each digit to the number of digits, add the results, and compare the sum with the original number. Process digits with arithmetic and loops, not string conversion.',
      hint: 'Count the digits first with a loop. Then repeatedly get the last digit with % 10 and remove it with // 10.',
      example: `number = 153
original = number
digit_count = 0
temp = number
while temp > 0:
    digit_count += 1
    temp //= 10
total = 0
while number > 0:
    digit = number % 10
    total += digit ** digit_count
    number //= 10
if total == original:
    print(f"{original} is an Armstrong Number.")
else:
    print(f"{original} is NOT an Armstrong Number.")`,
      starterCode: `number = 153\n# Determine whether number is an Armstrong number without converting to text\n`,
      validate: (code, output) =>
        /while\s+/.test(code) &&
        /%\s*10/.test(code) &&
        /\/\/\s*=\s*10/.test(code) &&
        output.includes('Armstrong Number'),
    },
    {
      id: '2',
      description: 'Find the first digit that repeats while reading 583521 from left to right. Print “First repeated digit: 5”. If there is no repeated digit, print “No repeated digit”. Do not use .count().',
      hint: 'Reverse the number into a list of digits, then scan that list from left to right while tracking digits already seen.',
      example: `number = 583521
digits = []
while number > 0:
    digits.append(number % 10)
    number //= 10
digits.reverse()
seen = set()
for digit in digits:
    if digit in seen:
        print(f"First repeated digit: {digit}")
        break
    seen.add(digit)
else:
    print("No repeated digit")`,
      starterCode: `number = 583521\n# Find the first repeated digit without using .count()\n`,
      validate: (code, output) =>
        /for\s+/.test(code) &&
        /seen/.test(code) &&
        !/\.count\s*\(/.test(code) &&
        output.trim() === 'First repeated digit: 5',
    },
    {
      id: '3',
      description: 'Find the digital root of 9875 by repeatedly adding its digits until one digit remains. Do not convert the number to a string.',
      hint: 'Use an outer loop while the number is at least 10. Inside it, repeatedly add the last digit and remove it.',
      example: `number = 9875
while number >= 10:
    digit_sum = 0
    while number > 0:
        digit_sum += number % 10
        number //= 10
    number = digit_sum
print(f"Digital Root: {number}")`,
      starterCode: `number = 9875\n# Repeatedly sum digits until only one digit remains\n`,
      validate: (code, output) =>
        (code.match(/while\s+/g) ?? []).length >= 2 &&
        /%\s*10/.test(code) &&
        output.trim() === 'Digital Root: 2',
    },
    {
      id: '4',
      description: 'A vending machine accepts ₱1, ₱5, ₱10, and ₱25 coins. Count the different combinations that make ₱6; coin order does not matter. Use nested loops to explore possible quantities.',
      hint: 'Loop over possible counts of each coin. Count a combination when the weighted sum equals the target.',
      example: `amount = 6
combinations = 0
for twenty_fives in range(amount // 25 + 1):
    for tens in range(amount // 10 + 1):
        for fives in range(amount // 5 + 1):
            for ones in range(amount + 1):
                total = twenty_fives * 25 + tens * 10 + fives * 5 + ones
                if total == amount:
                    combinations += 1
print(f"Number of combinations: {combinations}")`,
      starterCode: `amount = 6\ncombinations = 0\n# Count all coin quantities that add up to amount\n`,
      validate: (code, output) =>
        (code.match(/for\s+/g) ?? []).length >= 4 &&
        /==\s*amount/.test(code) &&
        output.trim() === 'Number of combinations: 2',
    },
    {
      id: '5',
      description: 'Find and print the proper divisors of 28, their sum, and whether 28 is a perfect number. Proper divisors exclude the number itself; a perfect number equals the sum of its proper divisors.',
      hint: 'Try every divisor from 1 up to (but not including) the number and add those that divide evenly.',
      example: `number = 28
divisors = []
for divisor in range(1, number):
    if number % divisor == 0:
        divisors.append(divisor)
divisor_sum = sum(divisors)
print("Proper Divisors:", *divisors)
print("Sum:", divisor_sum)
if divisor_sum == number:
    print(f"{number} is a Perfect Number.")
else:
    print(f"{number} is not a Perfect Number.")`,
      starterCode: `number = 28\n# Find proper divisors and check whether their sum equals number\n`,
      validate: (code, output) =>
        /for\s+/.test(code) &&
        /%/.test(code) &&
        output.includes('1 2 4 7 14') &&
        output.includes('Sum: 28') &&
        output.includes('Perfect Number'),
    },
    {
      id: '6',
      description: 'Check whether “Hello123@” is strong: it must have at least 8 characters, an uppercase letter, a lowercase letter, a digit, and one of ! @ # $ %. Print “Strong Password” when every rule is satisfied.',
      hint: 'Use flags while looping through the password characters, then combine the flags with and.',
      example: `password = "Hello123@"
has_upper = False
has_lower = False
has_digit = False
has_special = False
for character in password:
    if character.isupper():
        has_upper = True
    elif character.islower():
        has_lower = True
    elif character.isdigit():
        has_digit = True
    elif character in "!@#$%":
        has_special = True
if len(password) >= 8 and has_upper and has_lower and has_digit and has_special:
    print("Strong Password")
else:
    print("Weak Password")`,
      starterCode: `password = "Hello123@"\n# Check each password requirement and print the result\n`,
      validate: (code, output) =>
        /for\s+/.test(code) &&
        /isupper/.test(code) &&
        /islower/.test(code) &&
        /isdigit/.test(code) &&
        output.trim() === 'Strong Password',
    },
    {
      id: '7',
      description: 'Determine whether 145 is a Strong Number. A Strong Number equals the sum of the factorials of its digits (1! + 4! + 5! = 145). Calculate factorials with loops, without importing math.',
      hint: 'For each digit, compute its factorial with a second loop, add it to the total, then remove the digit.',
      example: `number = 145
original = number
total = 0
while number > 0:
    digit = number % 10
    factorial = 1
    for factor in range(1, digit + 1):
        factorial *= factor
    total += factorial
    number //= 10
if total == original:
    print(f"{original} is a Strong Number.")
else:
    print(f"{original} is not a Strong Number.")`,
      starterCode: `number = 145\n# Sum the factorial of each digit and check the result\n`,
      validate: (code, output) =>
        /while\s+/.test(code) &&
        /for\s+/.test(code) &&
        /factorial/.test(code) &&
        output.includes('Strong Number'),
    },
    {
      id: '8',
      description: 'Convert decimal number 13 to binary without using bin(). Repeatedly divide by 2, collect the remainders, and print the bits in reverse order as 1101.',
      hint: 'Append number % 2 to a list, update number with number // 2, then reverse the remainders.',
      example: `number = 13
bits = []
while number > 0:
    bits.append(str(number % 2))
    number //= 2
bits.reverse()
print("".join(bits))`,
      starterCode: `number = 13\n# Convert to binary using division and remainders, not bin()\n`,
      validate: (code, output) =>
        /while\s+/.test(code) &&
        /%\s*2/.test(code) &&
        /\/\/\s*=\s*2/.test(code) &&
        !/\bbin\s*\(/.test(code) &&
        output.trim() === '1101',
    },
    {
      id: '9',
      description: 'Print the first 10 Fibonacci numbers, starting with 0 and 1. Use a loop and update the two previous values each time.',
      hint: 'Start with first = 0 and second = 1. Each loop prints first, then shifts the pair forward.',
      example: `first = 0
second = 1
for _ in range(10):
    print(first)
    first, second = second, first + second`,
      starterCode: `first = 0\nsecond = 1\n# Print the first 10 Fibonacci numbers\n`,
      validate: (code, output) => {
        const values = output.trim().split('\n');
        return /for\s+/.test(code) &&
          values.length === 10 &&
          values[0] === '0' &&
          values[1] === '1' &&
          values[9] === '34';
      },
    },
  ],
};
