// Multiplication Table

// function createMultiplicationTable(rows: number, cols: number) {
//     for (let i = 1; i <= rows; i++) {
//       let row = '';
//       for (let j = 1; j <= cols; j++) {
//         row += `${i * j}\t`;
//       }
//       console.log(row);
//     }
//   }

//   // Example usage: create a 10x10 multiplication table
//   createMultiplicationTable(10, 10);

// const number = 1

// // Using a for loop to iterate over the array
// for (let i = 1; i < 11; i++) {
//   console.log(number + 'X' + i + '=' + number * i)
// }

// // // Using a for...of loop to iterate over the array
// // for (let num of numbers) {
// //   console.log(num);
// // }

// // // Using a forEach loop to iterate over the array
// // numbers.forEach(num => console.log(num));

// //map
// const numbers: number[] = [1, 2, 3, 4, 5];

// const doubledNumbers = numbers.map(num => num * 3);

// console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]

// interface Item {
//     name: string;
//     price: number;
//   }
  
//   const items: Item[] = [
//     { name: 'item1', price: 10 },
//     { name: 'item2', price: 20 },
//     { name: 'item3', price: 30 }
//   ];
  
//   const total = items.reduce((sum, item) => sum + item.price, 0);
  
//   console.log(total); // Output: 60

// interface Person {
//     name: string;
//     age: number;
//   }
  
//   const people: Person[] = [
//     { name: 'Alice', age: 25 },
//     { name: 'Bob', age: 30 },
//     { name: 'Charlie', age: 35 }
//   ];
  
//   const adults = people.filter(person => person.age >= 18);
  
//   console.log(adults); // Output: [{ name: 'Alice', age: 25 }, { name: 'Bob', age: 30 }, { name: 'Charlie', age: 35 }]



// function createMultiplicationTable(rows: number, cols: number): number[][] {
//     const table: number[][] = [];
  
//     for (let i = 1; i <= rows; i++) {
//       const row: number[] = [];
  
//       for (let j = 1; j <= cols; j++) {
//         row.push(i * j);
//       }
  
//       table.push(row);
//     }
  
//     return table;
//   }
  
//   const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
//   });
  
//   readline.question('Enter the number of rows: ', (rows: string) => {
//     readline.question('Enter the number of columns: ', (cols: string) => {
//       const multiplicationTable = createMultiplicationTable(parseInt(rows), parseInt(cols));
//       console.table(multiplicationTable);
//       readline.close();
//     });
//   });
  