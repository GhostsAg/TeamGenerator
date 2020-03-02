const Employee = require("./Employee");

function Manager(name, id, email, officeNum) {
    Employee.call(this, name, id, email);
    this.officeNumber = officeNum;
    this.getRole = function() {
        let role = "Manager";
        return role;
    }
    this.getOfficeNumber = function() {
        return this.officeNumber;
    }
}

module.exports = Manager;