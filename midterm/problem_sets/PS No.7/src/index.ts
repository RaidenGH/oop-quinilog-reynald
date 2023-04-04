// Problem Set No. 7

// Refactor Problem Set No. 4 using functions.
// Also add ability to calculate power of a number using for loops only.

// (refer to our lecture)

function prompt(question: string, callback: Function): void {
  const stdin = process.stdin,
    stdout = process.stdout

  stdin.resume()
  stdout.write(question)

  stdin.once('data', function (data): void {
    callback(data.toString().trim())
  })
}

function calculatePower(base: number, exponent: number): number {
  let result = 1

  for (let i = 0; i < exponent; i++) {
    result *= base
  }

  return result
}

prompt('Enter First Input:', function(inputFirstNumber: string): void{
  prompt('Select "+", "-", "*", "/", "^" for operator:', function(inputOperator: string):void{
    prompt('Enter second input:', function(inputSecondNumber: string):void {
      let FirstNumber = +inputFirstNumber
      let SecondNumber = +inputSecondNumber
      let result;

      for (let i = 0; i < 1; i++) {
        if (inputOperator === '+') {
          result = FirstNumber + SecondNumber
          console.log(`${FirstNumber} + ${SecondNumber} = ${result}`)
        } else if (inputOperator === '-') {
          result = FirstNumber - SecondNumber
          console.log(`${FirstNumber} - ${SecondNumber} = ${result}`)
        } else if (inputOperator === '*') {
          result = FirstNumber * SecondNumber
          console.log(`${FirstNumber} * ${SecondNumber} = ${result}`)
        } else if (inputOperator === '/') {
          result = FirstNumber / SecondNumber
          console.log(`${FirstNumber} / ${SecondNumber} = ${result}`)
        } else if (inputOperator === '^') {
          result = calculatePower(FirstNumber, SecondNumber)
          console.log(`${FirstNumber} ^ ${SecondNumber} = ${result}`)
        } else {
          console.log('Invalid Operator')
        }
      }
    })
  })
})


