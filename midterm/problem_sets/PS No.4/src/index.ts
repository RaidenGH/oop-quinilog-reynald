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

prompt('Enter First Input:', function(inputFirstNumber: string): void{
prompt('Select "+", "-", "*", "/" for operator:', function(inputOperator: string):void{
  prompt('Enter second input:', function(inputSecondNumber: string):void {
    let FirstNumber = +inputFirstNumber
    let SecondNumber = +inputSecondNumber

    if (inputOperator === '+'){
      const Sum = FirstNumber + SecondNumber
      
      console.log(`${FirstNumber} + ${SecondNumber} = ${Sum}`)
    }
    else if (inputOperator === '-'){
      const Subtract = FirstNumber - SecondNumber

      console.log(`${FirstNumber} - ${SecondNumber} = ${Subtract}`)
    }
    else if (inputOperator === '*'){
      const Multiply= FirstNumber * SecondNumber

      console.log(`${FirstNumber} * ${SecondNumber} = ${Multiply}`)
    }
    else if (inputOperator === '/'){
      const Devide= FirstNumber / SecondNumber

      console.log(`${FirstNumber} / ${SecondNumber} = ${Devide}`)
    }
  })
})
})