function prompt(question: string, callback: Function): void {
    const stdin = process.stdin,
      stdout = process.stdout
  
    stdin.resume()
    stdout.write(question)
  
    stdin.once('data', function (data): void {
      callback(data.toString().trim())
    })
  }


  prompt('Select Option: (1) for Voltage, (2) for Current:, (3) for Resistance:, (-1) for Exit', function (inputOptions: string): void{
    prompt('Enter Current:', function (inputCurrent: string): void{
        prompt('Enter Resistance:', function (inputResistance: string): void{
            prompt('Enter Voltage:', function (inputVoltage: string): void{
                
                let V = +inputVoltage
                let I = +inputCurrent
                let R = +inputResistance
                let Option = +inputOptions

            const Voltage = I * 
            const Current = 



            })

        })
    })


  })