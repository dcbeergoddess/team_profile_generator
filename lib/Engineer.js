// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
// If you inherit from a class, make sure you REQUIRE that class
const Employee = require("./Employee");





// Basic class structure:

class Engineer extends Employee {
  constructor(prop1, prop2) {
    super(prop1, prop2);
    this.prop1 = prop1;
    this.prop2 = prop2;
  }

  getProp1() {
    // return something...
  }

  setProp1() {
    // do something...
  }
    
}

module.exports = Engineer;

/* another example from class activities
//make sure to require the parent class!!!
const Shape = require("./shape");


//rectangle is a type of shape
class Rectangle extends Shape {
  constructor(sideA, sideB) {
    //calculate area and perimeter becuase the parent class needs it
    const area = sideA * sideB;
    const perimeter = sideA * 2 + sideB * 2;

    //pass thoose values up to the parent class
    //THIS COULD BE HELPFUL FOR HOMEWORK
    super(area, perimeter);

    //set properties for the new rectangle object being made
    this.sideA = sideA;
    this.sideB = sideB;
  }

  //here we are overriding the parent class printInfo()
  // printInfo(){
  //   console.log("hello")
  // }
}

//instantiate a new object
const rectangle = new Rectangle(12, 9);
rectangle.printInfo();

//First you are instantiating the properties of shape into the rectangle and then instantiating a rectangle object with properties of both parent classes

*/