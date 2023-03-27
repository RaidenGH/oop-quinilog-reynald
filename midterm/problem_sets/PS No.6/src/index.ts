// Problem Set No. 6

// Create a function that will accept an array of numbers (in any order) and filter it (by odd or even) and assign to two arrays.
// It should be built using loops.

// Note: Only use one function and you can call this function twice (for odd and even application).
// Hint: make use of optional named parameter OR an extra argument to identify if calculating odd or even.

// Example:

// function input => [10, 1, 2, 2, 5]
// odd output => [1, 5]
// even output => [10, 2, 2]

function prompt(question: string, callback: Function): void {
  const stdin = process.stdin,
    stdout = process.stdout

  stdin.resume()
  stdout.write(question)

  stdin.once('data', function (data): void {
    callback(data.toString().trim())
  })
}

function SortNumber(numbers: number[], isOdd = true): number[] {
  const result: number[] = []
  const parity = isOdd ? 1 : 0

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === parity) {
      result.push(numbers[i])
    }
  }

  return result
}
prompt('Enter Numbers:', function (inputNumbers: string): void {
  const numbers = inputNumbers.split(',').map(Number)
  const oddNumbers = SortNumber(numbers, true)
  const evenNumbers = SortNumber(numbers, false)

  console.log(`Odd numbers: [${oddNumbers}]`)
  console.log(`Even numbers:[${evenNumbers}]`)
})
