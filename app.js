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
        name: "engineerName",
        validate: function(input) {
            let done = this.async();
            validStr(input, "name", done);
        }
    },
    {
        message: "What is the engineer id?",
        name: "engineerId",
        validate: function(input) {
            let done = this.async();
            validNum(input, "id", done);
        }
    },
    {
        message: "What is the engineer email?",
        name: "engineerEmail",
        validate: function(input) {
            let done = this.async();
            validStr(input, "email", done);
        }
    },
    {
        message: "What is the engineer gitHub username?",
        name: "engineerGit",
        validate: function(input) {
            let done = this.async();
            validStr(input, "gitHub username", done);
        }
    },
    {
        message: "What is the intern name?",
        name: "internName",
        validate: function(input) {
            let done = this.async();
            validStr(input, "name", done);
        }
    },
    {
        message: "What is the intern id?",
        name: "internId",
        validate: function(input) {
            let done = this.async();
            validNum(input, "id", done);
        }
    },
    {
        message: "What is the intern email?",
        name: "internEmail",
        validate: function(input) {
            let done = this.async();
            validStr(input, "email", done);
        }
    },
    {
        message: "What is the name of the interns school?",
        name: "internSchool",
        validate: function(input) {
            let done = this.async();
            validStr(input, "school name", done);
        }
    },
    {
        message: "What is the manager name?",
        name: "managerName",
        validate: function(input) {
            let done = this.async();
            validStr(input, "name", done);
        }
    },
    {
        message: "What is the manager id?",
        name: "managerId",
        validate: function(input) {
            let done = this.async();
            validNum(input, "id", done);
        } 
    },
    {
        message: "What is the manager email?",
        name: "managerEmail",
        validate: function(input) {
            let done = this.async();
            validStr(input, "email", done);
        }
    },
    {
        message: "Whats is the manager office number?",
        name: "managerOffice",
        validate: function(input) {
            let done = this.async();
            validNum(input, "office number", done);
        }
    }
]).then(function(response) {
    const engineer = new Engineer(response.engineerName, response.engineerId, response.engineerEmail, response.engineerGit);
    const intern = new Intern(response.internName, response.internId, response.internEmail, response.internSchool);
    const manager = new Manager(response.managerName, response.managerId, response.managerEmail, response.managerOffice);

    const employees = [engineer, intern, manager];
    fs.writeFileSync("./output/index.html", render(employees), "utf-8");
});

function validStr(input, name, done) {
    isNaN(parseInt(input)) === true ? done(null, true) : done(`Please enter a valid ${name}.`, false);  
}

function validNum(input, name, done) {
    isNaN(parseInt(input)) === false ? done(null, true) : done(`Please enter a valid ${name} number.`, false);
}