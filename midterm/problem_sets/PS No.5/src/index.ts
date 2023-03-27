// Problem Set No. 5

// Create a function that will accept an array of numbers (in any order) and sort it from smallest to largest.
// It should be built using loops.

// Example:

// function input => [55, 1, 3, 2, 10]
// output => [1, 2, 3, 10, 55]

function prompt(question: string, callback: Function): void {
  const stdin = process.stdin,
    stdout = process.stdout

    stdin.resume()
    stdout.write(question)
    
    stdin.once('data', function (data): void {
      callback(data.toString().trim())
    })
  }

  prompt('Enter Numbers: ', function (inputNumbers: string): void {
    const numbers = inputNumbers.split(',').map(Number)
    
    function sortArray(numbers: number[]): number[]{
      for (let i = 0; i < numbers.length - 1; i++){
        for (let j = i + 1; j < numbers.length; j++){
          if (numbers[j] < numbers[i]){
            const array = numbers[j]
            numbers[j] = numbers[i]
            numbers[i] = array
          }
        }
      }
      return numbers
    }
    const sortedNumbers = sortArray(numbers)
    console.log('Sorted numbers: ', sortedNumbers)
  })
    