function prompt(question: string, callback: Function): void {
    const stdin = process.stdin,
      stdout = process.stdout
  
    stdin.resume()
    stdout.write(question)
  
    stdin.once('data', function (data): void {
      callback(data.toString().trim())
    })
  }
  
prompt('Input the A value:', function (InputHeigth: string ): void {
    prompt('Input the B value:', function (InputBase: string ): void {
        prompt('Input the C value:', function (InputHypotenuse: string ): void{


            let A = +InputHeigth
            let B = +InputBase
            let C = +InputHypotenuse


            const RightAngle = (`C + math.s`)


            console.log(`The calculation of the Hypotenuse of a RightAngle in meter is: ${RightAngle}`)



        })

    })


})
    




