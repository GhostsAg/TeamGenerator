const Employee = require("./Employee");

function Engineer(name, id, email, git) {
    Employee.call(this, name, id, email);
    this.github = git;
    this.getRole = function() {
        let role = "Engineer";
        return role;
    }
    this.getGithub = function() {
        return this.github;
    }
}

module.exports = Engineer;