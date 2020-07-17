const Employee = require("./Employee");


// Basic class structure:
class Engineer extends Employee {
  //need name, id, email to pass up from super
  // at github to grab username
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
  }
  getName() {
    return this.name
  }
  getRole() {
    return "Engineer"
  }
  getId(){
    return this.id 
  }
  getEmail(){
    return this.email
  }
  getGithub(){
    return this.github
  } 
}

module.exports = Engineer;

