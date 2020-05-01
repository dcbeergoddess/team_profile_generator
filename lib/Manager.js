// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");

/**In addition to Employee's properties and methods, Manager will also have:
 * officeNumber
 * getRole() // Overridden to return 'Manager' */

class Manager extends Employee {
  //need basic constructor/super code
  constructor (name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }

  getName() {
    return this.name
  }
  getRole(){
    return "Manager"
  }
  getId(){
    return this.id 
  }
  getEmail(){
    return this.email
  }
  getOfficeNumber(){
    return this.officeNumber
  }
}

module.exports = Manager;