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

//map
// const numbers: number[] = [1, 2, 3, 4, 5];

// const doubledNumbers = numbers.map(num => num * 3);

// console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]

//reduce
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

//filter
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

// const counter = true

// while (counter) {
//   console.log('I love you')
// }

// Problem 1: Print numbers 1 to 10 using while loop
// let counter = 1

// while (counter <= 1000) {
//   console.log(counter)
//   counter++
// }

// let counter = 0

// while (counter < 10 ){
//     console.log(counter)
//     counter++
// }

// Problem 2: print numbers 2 to 100 by increment of 2
// let counter = 2

// while (counter <= 100) {
//     console.log(counter)
//     counter += 2
// }

// Problem 3: Print 100 to 1
// let counter = 100

// while (counter >= 1) {
//   console.log(counter)
//   counter--
// }

// Problem 4: Calculate the summation of a given integer
// let counter = 1
// let sum = 0

// while (counter <= 10) {
//     sum += counter
//     counter++
// }

// console.log(sum)

// For loops
// Problem 5: Solve Problem 1 using for loops
// for (let counter = 1; counter <= 10; counter++) {
//   console.log(counter)
// }

// Print infinite loops using for loop
// for (;;) {
//   console.log('this is a endless loop')
// }

// Problem 6: Solve problem 3 using for loop
// for (let counter = 100; counter >= 1; counter--) {
//   console.log(counter)
// }

// using arrays
// const numbers= [1, 10, 4, 6, 2, 99, 1000, 2000, 3000]

// for(let index = 0; index < numbers.length; index++) {
//     console.log(numbers[index])
// }

// Problem 7: print passing grades and failing grades from array
// const grades = [100, 75, 89, 72, 74, 80]

// for (let index = 0; index < grades.length; index++) {
//   if (grades[index] >= 75) {
//     console.log(`${grades[index]} is passed`)
//   } else {
//     console.log(`${grades[index]} is failed`)
//   }
// }

// Problem 8: separate passing grades and failing grades
// const grades = [100, 75, 89, 72, 74, 80]
// let passingGrades = []
// let failingGrades = []

// for (let index = 0; index < grades.length; index++) {
//   if (grades[index] >= 75) {
//     passingGrades.push(grades[index])
//   } else {
//     failingGrades.push(grades[index])
//   }
// }

// console.log('passed grades:', passingGrades)
// console.log('failed grades:', failingGrades)

// accessing objects
// const users = [
//   {
//     name: 'Karl',
//     age: 20,
//     location: 'Davao',
//   },
//   {
//     name: 'Anna',
//     age: 17,
//     location: 'Manila',
//   },
//   {
//     name: 'Dan',
//     age: 18,
//     location: 'Cebu',
//   },
// ]

// for (let index = 0; index < users.length; index++) {
//   console.log(
//     `User #${index + 1}: Name: ${users[index]['name']}, Age: ${
//       users[index]['age']
//     }, Location: ${users[index]['location']}`
//   )
// }

// for (let index = 0; index < users.length; index++) {
//   if (users[index]['age'] >= 18) {
//     console.log(
//       `User #${index + 1}: Name: ${users[index]['name']}, Age: ${
//         users[index]['age']
//       }, Location: ${users[index]['location']}`
//     )
//   }
// }

// using foreach
// const cities = ['Manila', 'Tokyo', 'Beirut', 'New York']

// cities.forEach((city) => {
//   console.log(city)
// })

// const users = [
//     {
//       name: 'Karl',
//       age: 20,
//       location: 'Davao',
//     },
//     {
//       name: 'Anna',
//       age: 17,
//       location: 'Manila',
//     },
//     {
//       name: 'Dan',
//       age: 18,
//       location: 'Cebu',
//     },
//   ]
  
//   users.forEach((user) => {
//     console.log(
//       `Name: ${user['name']}, Age: ${user['age']}, Location: ${user['location']}`
//     )
//   })
