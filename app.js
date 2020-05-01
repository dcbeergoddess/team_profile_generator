const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

// This file will generate the final HTML. You don't need to touch this at all!
const render = require("./lib/htmlRenderer");

// This will be an array of all team member objects created
const teamMembers = [];

// This will be an array of the id values created for each object so there are no duplicates
const idArray = [];

//start()
//Do you want a team member? if so, choose a type:
  // Manager, Engineer, Intern, I'm Done

function start () {
  inquirer.prompt([
    {
      type: "list",
      message: "Choose an employee type:",
      name: "type",
      choices: [
        "Manager",
        "Engineer",
        "Intern",
        "Finished"
      ]
    }
  ]).then( response => {
    // process all the answers
    if (response.type === "Manager") {
      createManager("Manager");
    } else if (response.type === "Engineer") {
      createEngineer("Engineer");
    } else if (response.type === "Intern") {
      createIntern("Intern");
    } else {
      console.info("All Finished!")
      console.log(teamMembers)
      console.log(idArray)
      finish();
    }
  })
}
/*
function createEmployee(employeeType){
  inquirer.prompt([
    {
    type: "input",
    message: "Enter name:",
    name: "name"
  }
  ]).then( employeeData => {
    createManager(employeeData);
    createEngineer(employeeData);
    createIntern(employeeData);
  })
}

//not going to use the above example. going to declare const = Employee questions and then pass into each employee function

const employeeData = [
  {
    type: "input",
    name: "name",
    message: "Enter Employee Name:",
    
  },
  {
    type: "input",
    name: "id",
    message: "Enter Employee ID"
  },
  {
    type: "input",
    name: "email",
    message: "Enter Employee Email"
  }
]
*/
// createManager()
  //ask all the manager questions, when done, go back to start()
// STUDENT: This function generates all the questions for creating the manager. You need to add more to this.
function createManager(){
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
        return "Please enter at least one character.";
      }
    },
    {
      type: "input",
      name: "managerId",
      message: "Enter Your ID"
    },
    {
      type: "input",
      name: "managerEmail",
      message: "Enter Your Email"
    },
    {
      type: "input",
      name: "officeNumber",
      message: "Enter Your Office Number"
    }
    
   

    ]).then(response  => {
      // STUDENT: Process the response by instatiating a new object in the Manager class
      // process all the answers
      const managerObj = new Manager (response.managerName, response.managerId, response.managerEmail, response.officeNumber)
      teamMembers.push(managerObj)
      idArray.push(response.managerId)
      start();


      // Now call the next question set
      // createTeam(); (commented out from gary example)
    });
}

function createEngineer(){
  // console.log("Please build your team");
  inquirer.prompt([
    {
      type: "input",
      name: "engineerName",
      message: "What is your Engineer's name?",
      // Note how the validate function works
      validate: answer => {
        if (answer !== "") {
          return true;
        }
        return "Please enter at least one character.";
      }
    },
    {
      type: "input",
      name: "engineerId",
      message: "Enter Engineer ID"
    },
    {
      type: "input",
      name: "engineerEmail",
      message: "Enter Engineer Email"
    },
    {
      type: "input",
      name: "gitHub",
      message: "Enter Engineer Git Hub Username"
    }
    
  

    ]).then(response  => {
     
      const engineerObj = new Engineer (response.engineerName, response.engineerId, response.engineerEmail, response.gitHub)
      teamMembers.push(engineerObj)
      idArray.push(response.engineerId)
      start();


      // Now call the next question set
      // createTeam(); (commented out from gary example)
    });
}
function createIntern(){
  // console.log("Please build your team");
  inquirer.prompt([
    {
      type: "input",
      name: "internName",
      message: "What is your Intern's name?",
      // Note how the validate function works
      validate: answer => {
        if (answer !== "") {
          return true;
        }
        return "Please enter at least one character.";
      }
    },
    {
      type: "input",
      name: "internId",
      message: "Enter Intern ID"
    },
    {
      type: "input",
      name: "internEmail",
      message: "Enter Intern Email"
    },
    {
      type: "input",
      name: "school",
      message: "Enter Intern's School" 
    }
    
    // STUDENT: Add other questions here!

    ]).then(response  => {
      // STUDENT: Process the response by instatiating a new object in the Manager class
      // process all the answers
      const internObj = new Intern (response.internName, response.internId, response.internEmail, response.school )
      teamMembers.push(internObj)
      idArray.push(response.internId)
      start();

    });
}
  function finish() {

    const html = render(teamMembers);

    fs.writeFile("index.html", html, error => {
      if (error){
        return console.log(Error)
      } else {
        return console.log("Success!")
      }
    })
  }
start();






