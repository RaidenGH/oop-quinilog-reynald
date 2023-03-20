// Seatwork No. 3

// Create a program that will accept an integer range and print if it is a odd or even number.

// Example:

// Enter range: 5

// 1 is odd
// 2 is even
// 3 is odd
// 4 is even
// 5 is odd

function prompt(question: string, callback: Function): void {
  const stdin = process.stdin,
    stdout = process.stdout

  stdin.resume()
  stdout.write(question)

  stdin.once('data', function (data): void {
    callback(data.toString().trim())
  })
}

prompt('Enter Range:', function(inputRange: string): void {
  const Range = +inputRange
  

  for (let n = 1; n <= Range; n++) {
    if(n % 2 === 0){
      console.log(`${n} is Even`)
    }
    else {
      console.log(`${n} is Odd`)
    }
  }
})
