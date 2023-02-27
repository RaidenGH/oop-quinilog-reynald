// Seatwork No. 1

// Create a program that will calculate the volume of cylinder in meters.

// Volume of cylinder formula:

// V = π r^2 h 

// where:
// r = radius
// h = height

// --------------------------

// Example:

// Enter radius in meters: 2
// Enter height in meters: 3

// The volume of cylinder is 37.7xxxxx cubic meters.

function prompt(question: string, callback: Function): void {
    const stdin = process.stdin,
      stdout = process.stdout
  
    stdin.resume()
    stdout.write(question)
  
    stdin.once('data', function (data): void {
      callback(data.toString().trim())
    })
  }
prompt('Enter Radius in meters: ', function (inputRadius: string): void {
    const Radius = +inputRadius
  
    if (Radius < 0) {
      console.log('Invalid radius input')
      return
    }
  

    prompt('Enter height in meters: ', function (inputHeight: string): void {
      const height = +inputHeight
  
      if (height < 0) {
        console.log('Invalid height input')
        return
      }
  
      
      const cylinder = (Radius * Radius * height * Math.PI) 
  
      console.log(`The volume of the cylinder is ${cylinder} meters`)
    })
  })