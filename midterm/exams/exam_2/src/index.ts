// Exam No. 2

// Create a function that will accept an array of numbers (in any order) and sort it from largest to smallest.

// It should be built using loops.

// Example:

// function input => [55, 1, 3, 2, 10]
// output => [55, 10, 3, 2, 1]
// Another example:

// function input => [10, -30, 0, -2, 3]
// output => [10, 3, 0, -2, -30]

function prompt(question: string, callback: Function): void {
  const stdin = process.stdin,
    stdout = process.stdout

  stdin.resume()
  stdout.write(question)

  stdin.once('data', function (data): void {
    callback(data.toString().trim())
  })
}

function sortingArray(array : number[]): number []{
  let num = 0
  for (let i = 0; i < array.length; i++) {
    for (let j = i; j < array.length; j++) {
      if (array[j] > array[i]) {
        num = array[j]
        array[j] = array[i]
        array[i] = num
      }
    }
  }
  return array
}

prompt('Enter Function Input:',function(inputFunction:string):void{
  const Function = inputFunction.split(',').map(Number)

  const sortedArray= sortingArray(Function)
  console.log(`Sorted Array:`,sortedArray)
})
