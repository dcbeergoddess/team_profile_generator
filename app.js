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
        "Manger",
        "Engineer",
        "Intern",
        "Finished"
      ]
    }
  ]).then( response => {
    // process all the answers
    if( response.type === "Manager" ){
      createManager();
    } else if( response.type === "Engineer" ){
      createEngineer();
    } else if( response.type === "Intern" ){
      createIntern();
    } else {
      console.log("All Finished!")
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
      message: "What is your Manager's name?",
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
      message: "Enter Manager ID"
    },
    {
      type: "input",
      name: "managerEmail",
      message: "Enter Manager Email"
    }
    
    // STUDENT: Add other questions here!

    ]).then(response  => {
      // STUDENT: Process the response by instatiating a new object in the Manager class
      // process all the answers
      const managerObj = new Manager (response.managerName, response.managerId, response.managerEmail)
      teamMembers.push(managerObj)
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
      name: "EngineerEmail",
      message: "Enter Engineer Email"
    }
    
    // STUDENT: Add other questions here!

    ]).then(response  => {
      // STUDENT: Process the response by instatiating a new object in the Manager class
      // process all the answers
      const engineerObj = new Manager (response.engineerName, response.engineerId, response.engineerEmail)
      teamMembers.push(engineerObj)
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
    }
    
    // STUDENT: Add other questions here!

    ]).then(response  => {
      // STUDENT: Process the response by instatiating a new object in the Manager class
      // process all the answers
      const internObj = new Manager (response.internName, response.internId, response.internEmail )
      teamMembers.push(internObj)
      start();


      // Now call the next question set
      // createTeam(); (commented out from gary example)
    });
}

// This function starts team creation.
function createTeam() {
  inquirer.prompt([
    // STUDENT: Ask which type of team member should be created with a list of choices

  ]).then(userChoice => {
    // STUDENT: Based on which choice they make, call the correct function to ask more questions.
    // If no choice is made, then go to the rendering function.


  });
}

// This function starts team creation.
function createEngineer() {
  inquirer.prompt([
    // STUDENT:  Engineer questions

  ]).then(userChoice => {
    // STUDENT: Make sure the id supplied is unique, then take the data supplied and 
    // instantiate the Engineer constructor.
    
    
    // STUDENT: When finished:
       // Add the new object to the team member array
       // Pass control back to the createTeam() function

  });
}

// STUDENT: Now create a function for creating an Intern using the code above as an example


// STUDENT: This function will call the render function required near the top (line 12), 
// and pass INTO it the teamMembers area; from there, write the HTML returned back to a file 
// in a directory called output.
function renderHtmlPage(){
  const html = render(teamMembers)
  fs.writeFile("output/index.html", html, err => {

  })
}

// This is our starter function.
// Note that we use separate functions for different questions in inquirer to 
// help keep code organized.
function startMenu() {

  // Here we start things off by calling the createManager function
  createManager()

}


// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```


startMenu();