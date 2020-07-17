const Employee = require("./Employee");


class Intern extends Employee {
  //constructor/super
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }

  getName() {
    return this.name
  }
  getRole(){
    return "Intern"
  }
  getId(){
    return this.id 
  }
  getEmail(){
    return this.email
  }
  getSchool(){
    return this.school
  }
}

module.exports = Intern;