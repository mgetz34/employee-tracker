const Department = require('./department');

class Employee extends Department {
    constructor(id, first_name, last_name, role_id, manager_id) {
        this.id = id;
        this.first_name = first_name;
        this.last_name = last_name;
        this.role_id = role_id;
        this.manager_id = manager_id;
    }

    getId = () => this.id;

    getFirstName = () => this.first_name;

    getLastName = () => this.last_name;

    getRoldId = () => this.role_id;

    getManagerId = () => this.manager_id;

    getEmployee = () => 'Employee';
}

module.exports = Employee;