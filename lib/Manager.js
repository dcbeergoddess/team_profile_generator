const Employee = require("./Employee");


class Manager extends Employee {
  //basic constructor/super code
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