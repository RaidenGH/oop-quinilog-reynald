// Problem Set No. 10

// Create a Circle class that accepts a Radius, Height initialization and implements the following methods:

// diameter

// circumference

// area

// volume
class Circle {
  private radius: number
  private height: number

  constructor(radius: number, height: number) {
    this.radius = radius
    this.height = height
  }

  getDiameter(): number {
    return 2 * this.radius
  }

  getCircumference(): number {
    return 2 * Math.PI * this.radius
  }

  getArea(): number {
    return Math.PI * this.radius * this.radius
  }

  getVolume(): number {
    return Math.PI * this.radius * this.radius * this.height
  }
}
const circle = new Circle(10, 23)
console.log(circle.getDiameter())
console.log(circle.getCircumference())
console.log(circle.getArea())
console.log(circle.getVolume())