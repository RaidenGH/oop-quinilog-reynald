// Problem Set No. 9

// Create a Rectangle class that calculates and implements the following methods:

// perimeter

// area

// volume

// Length, Width, Height should be initializable.

class Rectangle {
  private length: number
  private width: number
  private height: number

  constructor(length: number, width: number, height: number) {
    this.length = length
    this.width = width
    this.height = height
  }

  getPerimeter(): number {
    return 2 * (this.length + this.width)
  }

  getArea(): number {
    return this.length * this.width
  }

  getVolume(): number {
    return this.length * this.width * this.height
  }
}
const rectangle = new Rectangle(5, 10, 2)
console.log(rectangle.getPerimeter())
console.log(rectangle.getArea())
console.log(rectangle.getVolume())
