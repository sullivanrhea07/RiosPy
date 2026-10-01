import type { Lesson } from '../types/lesson';

export const lesson16: Lesson = {
  id: '16',
  title: 'Practice Problems: Easy',
  instructions: `Start with short programs that combine variables, arithmetic, and simple decisions.

Each challenge begins with sample values in the starter code. Solve the task by writing the program logic, then change the values to test other cases.

The quadrant activity uses the coordinate plane like a city map: x moves left or right, and y moves up or down. The signs of the coordinates tell you which quadrant contains the point.`,
  tasks: [
    {
      id: '1',
      description: 'A student spends 40% of a weekly allowance on food and 15% on transportation. Calculate both expenses and the remaining savings. Print each amount to two decimal places.',
      hint: 'food = allowance * 0.40\ntransport = allowance * 0.15\nsavings = allowance - food - transport',
      example: `allowance = 1500
food = allowance * 0.40
transportation = allowance * 0.15
savings = allowance - food - transportation
print(f"Food: {food:.2f}")
print(f"Transportation: {transportation:.2f}")
print(f"Savings: {savings:.2f}")`,
      starterCode: `allowance = 1500\n# Calculate and print the three amounts to 2 decimal places\n`,
      validate: (code, output) =>
        /allowance\s*\*\s*0?\.4/.test(code) &&
        output.includes('600.00') &&
        output.includes('225.00') &&
        output.includes('675.00'),
    },
    {
      id: '2',
      description: 'Convert the Celsius temperature to Fahrenheit and Kelvin. Use F = C * 9 / 5 + 32 and K = C + 273.15, and print both results to two decimal places.',
      hint: 'fahrenheit = celsius * 9 / 5 + 32\nkelvin = celsius + 273.15',
      example: `celsius = 25
fahrenheit = celsius * 9 / 5 + 32
kelvin = celsius + 273.15
print(f"Fahrenheit: {fahrenheit:.2f}")
print(f"Kelvin: {kelvin:.2f}")`,
      starterCode: `celsius = 25\n# Calculate and print Fahrenheit and Kelvin\n`,
      validate: (code, output) =>
        /9\s*\/\s*5/.test(code) &&
        output.includes('77.00') &&
        output.includes('298.15'),
    },
    {
      id: '3',
      description: 'A package costs ₱80 per kilogram to ship, plus a fixed ₱50 handling fee. Calculate the shipping cost and total for a 3.5 kg package.',
      hint: 'shipping = weight * 80\ntotal = shipping + 50',
      example: `weight = 3.5
shipping = weight * 80
handling = 50
total = shipping + handling
print(f"Shipping Cost: ₱{shipping:.2f}")
print(f"Handling Fee: ₱{handling:.2f}")
print(f"Total Cost: ₱{total:.2f}")`,
      starterCode: `weight = 3.5\n# Calculate the shipping cost and total cost\n`,
      validate: (code, output) =>
        /weight\s*\*\s*80/.test(code) &&
        output.includes('280.00') &&
        output.includes('330.00'),
    },
    {
      id: '4',
      description: 'Use the point (x, y) = (-4, 3). Like locating a place on a map, determine which quadrant contains the point and print “Quadrant II”. Also handle points on either axis by printing “On an axis”.',
      hint: 'Check whether x and y are positive or negative with if/elif/else.',
      example: `x = -4
y = 3
if x == 0 or y == 0:
    print("On an axis")
elif x > 0 and y > 0:
    print("Quadrant I")
elif x < 0 and y > 0:
    print("Quadrant II")
elif x < 0 and y < 0:
    print("Quadrant III")
else:
    print("Quadrant IV")`,
      starterCode: `x = -4\ny = 3\n# Determine and print the quadrant (or whether the point is on an axis)\n`,
      validate: (code, output) =>
        /if\s+/.test(code) &&
        /x/.test(code) &&
        /y/.test(code) &&
        output.trim() === 'Quadrant II',
    },
    {
      id: '5',
      description: 'Convert 7,384 seconds into hours, minutes, and seconds. Print the result as 2 hours, 3 minutes, and 4 seconds. Use integer division and remainder rather than converting to text.',
      hint: 'hours = seconds // 3600\nminutes = seconds % 3600 // 60\nremaining_seconds = seconds % 60',
      example: `seconds = 7384
hours = seconds // 3600
minutes = seconds % 3600 // 60
remaining_seconds = seconds % 60
print(f"{hours}:{minutes:02d}:{remaining_seconds:02d}")`,
      starterCode: `seconds = 7384\n# Calculate and print hours:minutes:seconds\n`,
      validate: (code, output) =>
        /\/\//.test(code) &&
        /%/.test(code) &&
        output.trim() === '2:03:04',
    },
    {
      id: '6',
      description: 'Break ₱2,864 into the fewest bills and coins using denominations ₱1,000, ₱500, ₱100, ₱50, ₱20, ₱10, ₱5, and ₱1. Print each denomination and its count.',
      hint: 'For each denomination, use count = amount // denomination, then update amount with amount % denomination.',
      example: `amount = 2864
for denomination in [1000, 500, 100, 50, 20, 10, 5, 1]:
    count = amount // denomination
    amount = amount % denomination
    print(f"{denomination}: {count}")`,
      starterCode: `amount = 2864\ndenominations = [1000, 500, 100, 50, 20, 10, 5, 1]\n# Print the count for each denomination and update the remaining amount\n`,
      validate: (code, output) =>
        /for\s+/.test(code) &&
        /denominations/.test(code) &&
        /\/\//.test(code) &&
        output.includes('1000: 2') &&
        output.includes('1: 4'),
    },
  ],
};
