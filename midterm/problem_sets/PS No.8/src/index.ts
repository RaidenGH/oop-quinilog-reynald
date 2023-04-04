type Transaction = {
  transactionId: number
  productName: string
  quantity: number
  price: number
  cashier: string
}

const transactions: Transaction[] = [
  {
    transactionId: 1,
    productName: 'Milo',
    quantity: 1,
    price: 10.0,
    cashier: 'Sophia',
  },
  {
    transactionId: 2,
    productName: 'Gatas na Choco',
    quantity: 2,
    price: 30.0,
    cashier: 'Alicia',
  },
  {
    transactionId: 3,
    productName: 'Choco na Gatas',
    quantity: 3,
    price: 45.0,
    cashier: 'Rachel',
  },
  {
    transactionId: 4,
    productName: 'Lomi',
    quantity: 1,
    price: 50.0,
    cashier: 'Kathlyn',
  },
  {
    transactionId: 5,
    productName: 'Snowbear',
    quantity: 2,
    price: 5.0,
    cashier: 'Grace',
  },
  {
    transactionId: 6,
    productName: 'Milo',
    quantity: 4,
    price: 40.0,
    cashier: 'Sophia',
  },
]

function totalSales(transactions: Transaction[]): number {
  let sales = 0

  transactions.forEach((transaction) => {
    sales += transaction.price * transaction.quantity
  })

  return sales
}

function totalTransactions(transactions: Transaction[]): number {
  return transactions.length
}

function highestSalesCashierName(transactions: Transaction[]): string {
  const SalesByCashier: { [key: string]: number } = {}

  transactions.forEach((transaction) => {
    if (SalesByCashier[transaction.cashier]) {
      SalesByCashier[transaction.cashier] += transaction.price * transaction.quantity
    } else {
      SalesByCashier[transaction.cashier] = transaction.price * transaction.quantity
    }
  })

  const sortedSales = Object.entries(SalesByCashier).sort((a, b) => b[1] - a[1])

  return sortedSales[0][0]
}

console.log('All transactions:', transactions)
console.log('Total sales:', totalSales(transactions))
console.log('Total transactions:', totalTransactions(transactions))
console.log('Cashier with highest sales:', highestSalesCashierName(transactions))
