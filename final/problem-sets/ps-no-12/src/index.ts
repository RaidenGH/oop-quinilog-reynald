// Problem Set No. 12

// Given the base class:

// class Person() {
//     public firstName: string = 0
//     public lastName: string = 0

//     constructor(firstName: string, lastName: string) {
//         this.firstName = firstName
//         this.lastName = lastName
//     }
// }
// Create two child classes namely:

// Employee class
// Student class
// The child classes (Employee, Student) should extend the class Person.

// Employee class should implement the ff:

// can initialize salary in Philippine Peso (should be private)

// can call displaySalary public function to display the salary

// Student class should implement the ff:

// can initialize score (number) and should 0 to 100 range

// can calculate and call getPercentageMark public function which calculates the percentage mark of score if total score is 100
class Person {
  public firstName: string 
  public lastName: string 

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName
    this.lastName = lastName
  }
}

class Employee extends Person {
  private salary: number

  constructor(firstName: string, lastName: string, salary: number) {
    super(firstName, lastName)
    this.salary = salary
  }

  public displaySalary(): void {
    console.log(`Salary: ${this.salary} PHP`)
  }
}

class Student extends Person {
  private score: number

  constructor(firstName: string, lastName: string, score: number) {
    super(firstName, lastName)

    if (score < 0 || score > 100) {
      console.log("Score should be in the range of 0 to 100.")
    }

    this.score = score
  }

  public getPercentageMark(): number {
    return (this.score / 100) * 100
  }
}



const employee = new Employee("John", "Doe", 50000)
employee.displaySalary()

const student = new Student("Jane", "Smith", 100)
console.log('Student:',student.getPercentageMark())





