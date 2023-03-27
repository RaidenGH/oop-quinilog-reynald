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

function sortNumbers(numbers: number[]): number[] {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] > numbers[j]) {
        
        const temp = numbers[i];
        numbers[i] = numbers[j];
        numbers[j] = temp;
      }
    }
  }
  return numbers;
}


const input = [55, 1, 3, 2, 10];
const sortedOutput = sortNumbers(input);
console.log(sortedOutput); 
