function createMultiplicationTable(rows: number, cols: number): number[][] {
  const table: number[][] = []

  for (let i = 1; i <= rows; i++) {
    const row: number[] = []

    for (let j = 1; j <= cols; j++) {
      row.push(i * j)
    }

    table.push(row)
  }

  return table
}

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
})

readline.question('Enter the number of rows: ', (rows: string) => {
  readline.question('Enter the number of columns: ', (cols: string) => {
    const multiplicationTable = createMultiplicationTable(
      parseInt(rows),
      parseInt(cols)
    )
    console.table(multiplicationTable)
    readline.close()
  })
})
