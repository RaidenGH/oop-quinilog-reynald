// Exam No. 3

// Create separate functions that will accept an array of objects like below:

// quarterSales = [
//     {
//         id: 1,
//         quarter: "Q1",
//         year: "2022",
//         sales: 1000000,
//         expenses: 500000
//     },
//     {
//         id: 2,
//         quarter: "Q2",
//         year: "2022",
//         sales: 1000000,
//         expenses: 600000
//     },
//     {
//         id: 3,
//         quarter: "Q3",
//         year: "2022",
//         sales: 2000000,
//         expenses: 500000
//     },
//     {
//         id: 4,
//         quarter: "Q4",
//         year: "2022",
//         sales: 1000000,
//         expenses: 600000
//     },
//     {
//         id: 5,
//         quarter: "Q1",
//         year: "2023",
//         sales: 3000000,
//         expenses: 800000
//     },
//     {
//         id: 6,
//         quarter: "Q2",
//         year: "2023",
//         sales: 4000000,
//         expenses: 600000
//     },
//     {
//         id: 7,
//         quarter: "Q3",
//         year: "2023",
//         sales: 1500000,
//         expenses: 700000
//     },
//     {
//         id: 8,
//         quarter: "Q4",
//         year: "2023",
//         sales: 2000000,
//         expenses: 800000
//     }
// ]
// Create the following functions below:

// total sales by year => totalSales(year) .. example totalSales("2022") or totalSales("2023")

// total expenses by year => totalExpenses(year) .. example totalExpenses("2022") or totalExpenses("2023")

// print quarter and year with highest sales => getHighestSalesRecord() .. it should print the quarter and year with highest sales
function prompt(question: string, callback: Function): void {
    const stdin = process.stdin,
      stdout = process.stdout
  
    stdin.resume()
    stdout.write(question)
  
    stdin.once('data', function (data): void {
      callback(data.toString().trim())
    })
  }
  
const quarterSales = [
    {
        id: 1,
        quarter: "Q1",
        year: "2022",
        sales: 1000000,
        expenses: 500000
    },
    {
        id: 2,
        quarter: "Q2",
        year: "2022",
        sales: 1000000,
        expenses: 600000
    },
    {
        id: 3,
        quarter: "Q3",
        year: "2022",
        sales: 2000000,
        expenses: 500000
    },
    {
        id: 4,
        quarter: "Q4",
        year: "2022",
        sales: 1000000,
        expenses: 600000
    },
    {
        id: 5,
        quarter: "Q1",
        year: "2023",
        sales: 3000000,
        expenses: 800000
    },
    {
        id: 6,
        quarter: "Q2",
        year: "2023",
        sales: 4000000,
        expenses: 600000
    },
    {
        id: 7,
        quarter: "Q3",
        year: "2023",
        sales: 1500000,
        expenses: 700000
    },
    {
        id: 8,
        quarter: "Q4",
        year: "2023",
        sales: 2000000,
        expenses: 800000
    }
];


function totalSales(year: string) {
    let total = 0;
    quarterSales.forEach(sale => {
        if (sale.year === year) {
            total += sale.sales;
        }
    });
    return total;
}

function totalExpenses(year: string) {
    let total = 0;
    quarterSales.forEach(sale => {
        if (sale.year === year) {
            total += sale.expenses;
        }
    });
    return total;
}


function getHighestSalesRecord() {
    let maxSales = 0;
    let maxQuarter = "";
    let maxYear = "";
    quarterSales.forEach(sale => {
        if (sale.sales > maxSales) {
            maxSales = sale.sales;
            maxQuarter = sale.quarter;
            maxYear = sale.year;
        }
    });
    console.log(`Quarter ${maxQuarter} of ${maxYear} had the highest sales of ${maxSales}.`);
}


prompt('Enter a year to query',function(inputYear:string):void{
    const userInput= inputYear

    console.log(`Total sales for ${userInput}: ${totalSales(userInput)}`);
    console.log(`Total expenses for ${userInput}: ${totalExpenses(userInput)}`);
    getHighestSalesRecord();

})
