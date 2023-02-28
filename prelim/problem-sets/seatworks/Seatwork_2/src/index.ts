// Seatwork No. 2

// Create a program that will allow user to select between calculating perimeter of
// rectangle and area of rectangle.

// P = 2L + 2W
// A = L W

// --------------------------

// Example #1:

// Enter (1) for perimeter, (2) for area in meters: 1
// Enter L: 2
// Enter W: 2

// The perimeter of rectangle is 8 meters.

// Example #2:

// Enter (1) for perimeter, (2) for area in meters: 1
// Enter L: 2
// Enter W: 2

// The area of rectangle is 4 square meters.

function prompt(question: string, callback: Function): void {
  const stdin = process.stdin,
    stdout = process.stdout

  stdin.resume()
  stdout.write(question)

  stdin.once('data', function (data): void {
    callback(data.toString().trim())
  })
}

prompt('Enter (1) for perimeter, (2) for area in meters:', function (
  inputChoice: string
): void {
  prompt('Enter Length: ', function (inputLegnth: string): void {
    prompt('Enter Width: ', function (inputWidth: string): void {
      const Length = +inputLegnth
      const Choice = +inputChoice
      const Width = +inputWidth
      const perimeter = 2 * Length + 2 * Width
      const area = Length * Width

      switch (Choice) {
        case 1:
          console.log(`The perimeter of rectangle is ${perimeter} cmeters.`)
          break
        case 2:
          console.log(`The area of rectangle is ${area} square meters.`)
          break
        default:
          console.log('INVALID!')
          break
      }
    })
  })
})
