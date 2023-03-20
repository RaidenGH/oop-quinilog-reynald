// Seatwork No. 4

// Create a program that will accept a positive number and calculate its factorial.

// Example:

// Enter a positive number: 0
// Factorial of 0! is 1

// ---

// Enter a positive number: 4
// Factorial of 4! is 24

function prompt(question: string, callback: Function): void {
  const stdin = process.stdin,
    stdout = process.stdout

  stdin.resume()
  stdout.write(question)

  stdin.once('data', function (data): void {
    callback(data.toString().trim())
  })
}

prompt('Enter a positive number:', function (inputFactorial: string): void {
  const Factorial = +inputFactorial

  if (Factorial < 0) {
    console.log('Error: Please enter a positive number')
  } else if (Factorial === 0) {
    console.log('Factorial of 0! is 1')
  } else {
    let factorial = 1
    for (let i = 1; i <= Factorial; i++) {
      factorial *= i
    }
    console.log(`Factorial of ${Factorial}! is ${factorial}`)
  }
})
