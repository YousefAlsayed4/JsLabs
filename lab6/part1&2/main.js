class Shape {
    constructor(name, sides, sideLength) {
      this.name = name;
      this.sides = sides;
      this.sideLength = sideLength;
    }
    calcPerimeter() {
      const perimeter = this.sides * this.sideLength;
      console.log(`Perimeter of ${this.name} = `+perimeter);
    }
  }
  var square = new Shape("square", 4, 5);
  square.calcPerimeter();
  
  const triangle = new Shape("triangle", 3, 3);
  triangle.calcPerimeter();

  /************************************************ */

  class Square extends Shape {
    constructor(sideLength) {
      super("square", 4, sideLength);
    }
  
    calcArea() {
      const area = this.sideLength * this.sideLength;
      console.log(`Area of square = `+ area );
    }
  }
  
  var Square = new Square(5);
  square.calcPerimeter(); 
  square.calcArea();
  