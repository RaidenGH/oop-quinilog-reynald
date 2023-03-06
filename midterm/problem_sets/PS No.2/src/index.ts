// Problem Set No. 4

// Create a program that will function like a calculator.
// It should accept a first input, operator and second input then calculate 
// the result.

// Example:

// Enter first input: 2
// Select "+", "-", "*", "/" for operator: +
// Enter second input: 3
// 2 + 3 = 5

// -------------

// Enter first input: 2
// Select "+", "-", "*", "/" for operator: *
// Enter second input: 3
// 2 * 3 = 6

function prompt(question: string, callback: Function): void {
    const stdin = process.stdin,
      stdout = process.stdout
  
    stdin.resume()
    stdout.write(question)
  
    stdin.once('data', function (data): void {
      callback(data.toString().trim())
    })
  }

  