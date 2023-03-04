function prompt(question: string, callback: Function): void {
  const stdin = process.stdin,
    stdout = process.stdout

  stdin.resume()
  stdout.write(question)

  stdin.once('data', function (data): void {
    callback(data.toString().trim())
  })
}

prompt('Enter Height:', function (inputHeight: string): void {
  const Height = +inputHeight
  if (Height <= 0) console.log(`invalid`)

  else{
    prompt('Enter Base:', function(inputBase: string): void{
      const Base = +inputBase
      const Hypotenuse= Math.pow(Height,2)+Math.pow(Base,2)
      const Result= Math.sqrt(Hypotenuse)
      console.log(`The Result:${Result}`)

    })
  }
})
