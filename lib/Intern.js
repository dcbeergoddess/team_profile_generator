// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

/**In addition to Employee's properties and methods, Intern will also have:
 * school
 * getSchool()
 * getRole() // Overridden to return 'Intern' */

class Intern extends Employee {
  //need constructor/super
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }
  getRole(){
    return "Intern"
  }
}

module.exports = Intern;