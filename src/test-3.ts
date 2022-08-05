interface Shape {
  getArea(): number //Shape interface에는 getArea라는 함수가 꼭 있어야 함
}

class Circle implements Shape {
  //radius: number //생략가능

  constructor(public radius: number) {
    this.radius = radius
  }

  getArea() {
    return this.radius * this.radius * Math.PI
  }
}

class Rectangle implements Shape {
  // width: number
  // height: number

  constructor(private width: number, private height: number) {
    this.width = width
    this.height = height
  }

  getArea() {
    return this.width * this.height
  }
}

const shapes: Shape[] = [new Circle(5), new Rectangle(10, 5)]

shapes.forEach(shape => {
  console.log(shape.getArea())
})

const fiveCircle = new Circle(7)
const fiveRectangle = new Rectangle(7, 55)

console.log(fiveCircle.radius)
//console.log(fiveRectangle.width) // private로 선언했기때문에 Class내에서만 접근가능