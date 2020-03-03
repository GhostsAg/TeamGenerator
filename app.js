const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team.html");
const render = require("./lib/htmlRenderer");

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
    const engineer = new Engineer(response.engineerName, response.engineerId, response.engineerEmail, response.engineerGit);
    const intern = new Intern(response.internName, response.internId, response.internEmail, response.internSchool);
    const manager = new Manager(response.managerName, response.managerId, response.managerEmail, response.managerOffice);

    const employees = [engineer, intern, manager];
    fs.writeFileSync("./output/index.html", render(employees), "utf-8");
});
