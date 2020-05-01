// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
// If you inherit from a class, make sure you REQUIRE that class
const Employee = require("./Employee");

/**In addition to Employee's properties and methods, Engineer will also have:
 * github  // GitHub username
 * getGithub
 * getRole() // Overridden to return 'Engineer' */

// Basic class structure:
class Engineer extends Employee {
  //still need name, id, email to pass up from super
  // at github to grab username
  constructor(name, id, email, gitHub) {
    super(name, id, email);
    this.github = gitHub;
  }

  getRole() {
    return "Engineer"
  }
    
}

module.exports = Engineer;

