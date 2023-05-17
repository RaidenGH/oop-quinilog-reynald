// Problem Set No. 11

// Given the base class:

// class Shape() {
//     public length: number = 0
//     public width: number = 0
//     public height: number = 0

//     constructor(length: number, width: number, height: number) {
//         this.length = length
//         this.width = width
//         this.height = height
//     }
// }
// Create two child classes namely:

// Rectangle class
// Square class
// that will accept length, width, and height in constructor.

// The child classes (Rectangle, Square) should extend the class Shape.

// For the formula:

// Area of square = length * width

// Perimeter of square = 4s => the side can be length, width, height since they are all equal

// Volume of square = length * width * height

// Area of rectangle = length * width

// Perimeter of rectangle = 2L + 2W

// Volume of rectangle = length * width * height

class Shape {
  public length: number = 0
  public width: number = 0
  public height: number = 0

  constructor(length: number, width: number, height: number) {
    this.length = length
    this.width = width
    this.height = height
  }
}

class Rectangle extends Shape {
  get area(): number {
    return this.length * this.width
  }

  get perimeter(): number {
    return 2 * (this.length + this.width)
  }

  get volume(): number {
    return this.length * this.width * this.height
  }
}

class Square extends Shape {
  get area(): number {
    return this.length * this.width
  }

  get perimeter(): number {
    return 4 * this.length
  }

  get volume(): number {
    return this.length * this.width * this.height
  }
}
const rectangle = new Rectangle(4, 5, 2)
console.log(rectangle.area)
console.log(rectangle.perimeter)
console.log(rectangle.volume)

console.log('\n')

const square = new Square(3, 3, 3)
console.log(square.area)
console.log(square.perimeter)
console.log(square.volume)
