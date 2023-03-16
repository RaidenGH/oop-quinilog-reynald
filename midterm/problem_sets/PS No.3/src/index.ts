// Problem Set No. 3

// Create a program that will convert temperaturs to C, F, K and vice versa.

// Formula:

// K = C + 273.15
// C = (5/9)(F-32)
// F = (9/5 C) + 32

// Example:

// Select (C) for Celsius, (F) for Fahrenheit, (K) for Kelvin: C
// Enter temperature in Celsius: 25
// Convert to: (F) for Fahrenheit, (K) for Kelvin: K
// Temperature in Kelvin: 298

// -------------

// Select (C) for Celsius, (F) for Fahrenheit, (K) for Kelvin: F
// Enter temperature in Fahrenheit: 100
// Convert to: (C) for Celsius, (K) for Kelvin: K
// Temperature in Kelvin: 310.7778

function prompt(question: string, callback: Function): void {
  const stdin = process.stdin,
    stdout = process.stdout

  stdin.resume()
  stdout.write(question)

  stdin.once('data', function (data): void {
    callback(data.toString().trim())
  })
}

prompt('Enter: (C) for Celsius, (F) for Fahrenheit, (K) for Kelvin:', function (
  inputChoices: string
): void {
  switch (inputChoices.toUpperCase()) {
    case 'C':
      prompt('Enter Celsius:', function (inputCelsius: string): void {
        prompt('Convert to (F) Fahrenheit, (K) for Kelvin:', function (inputChoices:string): void {
          const Celsius = +inputCelsius
          const Fahrenheit = Celsius * 1.8 + 32
          const Kelvin = 273.15 + Celsius
          
          switch (inputChoices.toUpperCase()){
            case 'F':
              console.log (`Temperature in Fahrenheit: ${Fahrenheit}°`)
              break
              case 'K':
                console.log (`Temperature in Kelvin: ${Kelvin}°`)
          }
        })
      })
      break
    case 'F':
      prompt('Enter Fahrenheit:', function (inputFahrenheit: string): void {
        prompt('Convert to (C) Celsius, (K) for Kelvin:',function(inputChoices:string):void{
          const Fahrenheit = +inputFahrenheit
          const Kelvin = (Fahrenheit - 32) / 1.8 + 273.15
          const Celsius = (5/9)*(Fahrenheit-32)
          
          switch(inputChoices.toUpperCase()){
            case 'C':
              console.log(`Temperature in Celsius: ${Celsius}°`)
              break
              case 'K':
               console.log(`Temperature in Kelvin: ${Kelvin}°`)
          }
        })
      })
    break
    case 'K':
      prompt('Enter Kelvin:', function (inputKelvin: string): void{
        prompt('Convert to (C) Celsius, (F) for Fahrenheit:',function(inputChoices:string):void{
          const Kelvin = +inputKelvin
          const Celsius = Kelvin - 273.15
          const Fahrenheit = (Kelvin - 273.15) * 1.8 + 32

          switch (inputChoices.toUpperCase()){
            case 'C':
              console.log(`Temperature in Celsius: ${Celsius}°`)
              break
              case 'F':
                console.log(`Temperature in Fahrenheit: ${Fahrenheit}°`)
          }
        })
      })
      break
      default:
        console.log('Invalid')
        break
  }
})
