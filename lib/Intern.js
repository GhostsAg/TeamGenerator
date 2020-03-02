const Employee = require("./Employee");


function Intern(name, id, email, school) {
    Employee.call(this, name, id, email);
    this.school = school;
    this.getRole = function() {
        let role = "Intern";
        return role;
    }
    this.getSchool = function() {
        return school;
    }
}

module.exports = Intern;