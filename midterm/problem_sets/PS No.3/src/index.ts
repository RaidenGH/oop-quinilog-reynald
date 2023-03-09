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
  switch (inputChoices) {
    case 'C':
      prompt('Enter Celsius:', function (inputCelsius: string): void {
        const Celsius = +inputCelsius
        const Kelvin = 273.15
        const Result = Kelvin + Celsius

        console.log(`Temperature in Kelvin: ${Result}`)
      })
      break
    case 'F':
      prompt('Enter Fahrenheit:', function (inputFahrenheit: string): void {
        const Fahrenheit = +inputFahrenheit
        const Result = (Fahrenheit - 32) / 1.8 + 273.15

        console.log(`Temperature in Kelvin: ${Result}`)
      })
      break
    default:
      break
  }
})
