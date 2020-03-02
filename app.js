const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const OUTPUT_DIR = path.resolve("./output/", "output")
const outputPath = path.join("./output/", "team.html");
const render = require("./lib/htmlRenderer");
// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
inquirer.prompt([
    {
        message: "What is the engineer name?",
        name: "engineerName"
    },
    {
        message: "What is the engineer id?",
        name: "engineerId"
    },
    {
        message: "What is the engineer email?",
        name: "engineerEmail"
    },
    {
        message: "What is the engineer gitHub username?",
        name: "engineerGit"
    },
    {
        message: "What is the intern name?",
        name: "internName"
    },
    {
        message: "What is the intern id?",
        name: "internId"
    },
    {
        message: "What is the intern email?",
        name: "internEmail"
    },
    {
        message: "What is the name of the interns school?",
        name: "internSchool"
    },
    {
        message: "What is the manager name?",
        name: "managerName"
    },
    {
        message: "What is the manager id?",
        name: "managerId"
    },
    {
        message: "What is the manager email?",
        name: "managerEmail"
    },
    {
        message: "Whats is the manager office number?",
        name: "managerOffice"
    }
]).then(function(response) {
    console.log(response);
    const engineer = new Engineer(response.engineerName, response.engineerId, response.engineerEmail, response.engineerGit);
    const intern = new Intern(response.internName, response.internId, response.internEmail, response.internSchool);
    const manager = new Manager(response.managerName, response.managerId, response.managerEmail, response.man);

    const employees = [engineer, intern, manager];
    render(employees);
});
// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!
// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.
// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.
// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an 
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work!```