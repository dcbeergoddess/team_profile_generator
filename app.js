const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const validator = require("email-validator")
const chalk = require("chalk");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

// This file will generate the final HTML. You don't need to touch this at all!
const render = require("./lib/htmlRenderer");

// This will be an array of all team member objects created
const teamMembers = [];

// This will be an array of the id values created for each object so there are no duplicates
//pushed these to the array but never went anywhere with it
const idArray = [];


function start() {
  inquirer.prompt([
    {
      type: "list",
      message: "Choose an employee type:",
      name: "type",
      choices: [
        chalk.magenta("Manager"),
        chalk.yellow("Engineer"),
        chalk.blueBright("Intern"),
        chalk.greenBright("Finished")
      ]
    }
  ]).then(response => {
    // process all the answers
    if (response.type === chalk.magenta("Manager")) {
      createManager("Manager");
    } else if (response.type === chalk.yellow("Engineer")) {
      createEngineer("Engineer");
    } else if (response.type === chalk.blueBright("Intern")) {
      createIntern("Intern");
    } else {
      console.info(chalk.green("All Finished!"))
      // console.log(teamMembers)
      // console.log(idArray)
      finish();
    }
  })
}
function createManager() {
  // console.log("Please build your team");
  inquirer.prompt([
    {
      type: "input",
      name: "managerName",
      message: "What is your name?",
      // Note how the validate function works
      validate: answer => {
        if (answer !== "") {
          return true;
        }
        return chalk.red("Please enter at least one character.");
      }
    },
    {
      type: "input",
      name: "managerId",
      message: "Enter Your ID",
      validate: answer => {
        if (answer !== "") {
          return true;
        }
        return chalk.red("Please enter at least one character.");
      }
    },
    {
      type: "input",
      name: "managerEmail",
      message: "Enter Your Email",
      validate: answer => {
        if (validator.validate(answer) === true) {
          return true;
        } return chalk.red("Please entder valid e-mail")
      }
    },
    {
      type: "input",
      name: "officeNumber",
      message: "Enter Your Office Number",
      validate: answer => {
        if (answer !== "") {
          return true;
        }
        return chalk.red("Please enter at least one character.");
      }
    }

  ]).then(response => {
    
    const managerObj = new Manager(response.managerName, response.managerId, response.managerEmail, response.officeNumber)
    teamMembers.push(managerObj)
    idArray.push(response.managerId)
    start();
  });
}


function createEngineer() {
  // console.log("Please build your team");
  inquirer.prompt([
    {
      type: "input",
      name: "engineerName",
      message: "What is your Engineer's name?",
      validate: answer => {
        if (answer !== "") {
          return true;
        }
        return chalk.red("Please enter at least one character.");
      }
    },
    {
      type: "input",
      name: "engineerId",
      message: "Enter Engineer ID",
      validate: answer => {
        if (answer !== "") {
          return true;
        }
        return chalk.red("Please enter at least one character.");
      }
    },
    {
      type: "input",
      name: "engineerEmail",
      message: "Enter Engineer Email",
      validate: answer => {
        if (validator.validate(answer) === true) {
          return true;
        } return chalk.red("Please enter valid e-mail")
      }
    },
    {
      type: "input",
      name: "github",
      message: "Enter Engineer Git Hub Username",
      validate: answer => {
        if (answer !== "") {
          return true;
        }
        return chalk.red("Please enter at least one character.");
      }
    }
  ]).then(response => {

    const engineerObj = new Engineer(response.engineerName, response.engineerId, response.engineerEmail, response.github)
    teamMembers.push(engineerObj)
    idArray.push(response.engineerId)
    start();

  });
}


function createIntern() {
  inquirer.prompt([
    {
      type: "input",
      name: "internName",
      message: "What is your Intern's name?",
      validate: answer => {
        if (answer !== "") {
          return true;
        }
        return chalk.red("Please enter at least one character.");
      }
    },
    {
      type: "input",
      name: "internId",
      message: "Enter Intern ID",
      validate: answer => {
        if (answer !== "") {
          return true;
        }
        return chalk.red("Please enter at least one character.");
      }
    },
    {
      type: "input",
      name: "internEmail",
      message: "Enter Intern Email",
      validate: answer => {
        if (validator.validate(answer) === true) {
          return true;
        } return chalk.red("Please enter valid e-mail")
      }
    },
    {
      type: "input",
      name: "school",
      message: "Enter Intern's School",
      validate: answer => {
        if (answer !== "") {
          return true;
        }
        return chalk.red("Please enter at least one character.");
      }
    }


  ]).then(response => {
    const internObj = new Intern(response.internName, response.internId, response.internEmail, response.school)
    teamMembers.push(internObj)
    idArray.push(response.internId)
    start();

  });
}


function finish() {
  const html = render(teamMembers);
  fs.writeFile("index.html", html, error => {
    if (error) {
      return console.log(Error)
    } else {
      return console.log(chalk.black.bgMagentaBright("You have created your team page!!"))
    }
  })
}
start();






