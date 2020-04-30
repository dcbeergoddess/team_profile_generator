// TODO: Write code to define and export the Employee class
/** The first class is an Employee parent class with the following properties and
 * methods
 * name
 * id
 * email
 * getName()
 * getId()
 * getEmail()
 * getRole() // Returns 'Employee' */

class Employee {
  constructor (name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email ; 
  }
  //possible methods in this class above from lesson readme

}

/*
Example class/shape constructor
class Shape {
  // Just like constructor functions, classes can accept arguments
  constructor(area, perimeter) {
    this.area = area;
    this.perimeter = perimeter;
  }

  printInfo() {
    console.log(`Area: ${this.area}`);
    console.log(`Perimeter: ${this.perimeter}`);
  }
}

const shape = new Shape(25, 25);

shape.printInfo();
*/

module.exports = Employee