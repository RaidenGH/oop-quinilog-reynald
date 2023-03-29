// Problem Set No. 7

// Refactor Problem Set No. 4 using functions.
// Also add ability to calculate power of a number using for loops only.

// (refer to our lecture)

function prompt(question: string, callback: Function): void {
  const stdin = process.stdin,
    stdout = process.stdout;

  stdin.resume();
  stdout.write(question);

  stdin.once('data', function (data): void {
    callback(data.toString().trim());
  });
}

function calculateSum(numbers: number[]): number {
  let total = 0;
  for (let number of numbers) {
    total += number;
  }
  return total;
}

function calculateMean(numbers: number[]): number {
  if (numbers.length === 0) {
    return 0;
  } else {
    return calculateSum(numbers) / numbers.length;
  }
}

function calculateMedian(numbers: number[]): number {
  const sortedNumbers = numbers.slice().sort((a, b) => a - b);
  const length = sortedNumbers.length;
  const middle = Math.floor(length / 2);
  if (length % 2 === 0) {
    return (sortedNumbers[middle-1] + sortedNumbers[middle]) / 2;
  } else {
    return sortedNumbers[middle];
  }
}

function calculateMode(numbers: number[]): number {
  let modeCount = 0;
  let mode = 0;
  for (let number of numbers) {
    const count = numbers.filter(n => n === number).length;
    if (count > modeCount) {
      modeCount = count;
      mode = number;
    }
  }
  return mode;
}

function calculatePower(base: number, exponent: number): number {
  let result = 1;
  for (let i = 0; i < exponent; i++) {
    result *= base;
  }
  return result;
}

prompt('Enter The Numbers:',function(inputNumbers:string):void{
  const numbers = inputNumbers.split(',').map(Number);
  
  console.log(`Numbers: ${numbers}`);
  console.log('Sum:', calculateSum(numbers));
  console.log('Mean:', calculateMean(numbers));
  console.log('Median:', calculateMedian(numbers));
  console.log('Mode:', calculateMode(numbers));
  console.log('Power:', calculatePower(2, 3));  
});
