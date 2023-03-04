function prompt(question: string, callback: Function): void {
  const stdin = process.stdin,
    stdout = process.stdout

  stdin.resume()
  stdout.write(question)

  stdin.once('data', function (data): void {
    callback(data.toString().trim())
  })
}

prompt('Select options: (1)Voltage, (2)Current, (3)Resistance, (-1)Exit: ',
  function (inputOption: string): void {
    const options = +inputOption

    switch (options) {
      case 1:
        prompt('Enter Current: ', function (inputCurrent: string): void {
          prompt('Enter Resistance: ', function (
            inputResistance: string): void {
            let Current = +inputCurrent
            let Resistance = +inputResistance
            const Voltage = Current * Resistance

            console.log(`The Voltage is ${Voltage}V`)
          
          })
        })
        break
        case 2:
          prompt ('Enter Voltage: ', function (inputVoltage: string): void{
            prompt ('Enter Resistance: ', function (inputResistance: string): void{
              let Voltage= +inputVoltage
              let Resistance= +inputResistance
              const Current= Voltage/Resistance

              console.log(`The Current is ${Current}A`)
            })
          })
          break
          case 3:
            prompt ('Enter Voltage: ', function (inputVoltage: string): void{
              prompt ('Enter Current: ', function (inputCurrent: string): void{
                let Voltage= +inputVoltage
                let Current= +inputCurrent
                const Resistance= Voltage/Current

                console.log(`The Resistance is ${Resistance}ohms`)

              })
            })
            break
            case -1:
              console.log('Close')
              break
              default:
                break

                
              
    }
  }
)
