// Exam No. 1

// Create a program that will accept a positive integer and print the divisible by 5 numbers starting from 0

// Example:

// Enter a positive integer: 26

// Output:
// 5
// 10
// 15
// 20
// 25
// Another example:

// Enter a positive integer: 10

// Output:
// 5
// 10

function prompt(question: string, callback: Function): void {
  const stdin = process.stdin,
    stdout = process.stdout

  stdin.resume()
  stdout.write(question)

  stdin.once('data', function (data): void {
    callback(data.toString().trim())
  })
}
prompt('Enter a Positive Enteger:', function (inputInteger: number): void {
  console.log('Output:')
  for (let i = 1; i <= inputInteger; i++) {
    if (i % 5 === 0) {
      console.log(i)
    }
  }
})
