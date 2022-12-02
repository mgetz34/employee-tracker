class Employee {
    // constructor(id, first_name, last_name, role_id, manager_id) {
    //     this.id = id;
    //     this.first_name = first_name;
    //     this.last_name = last_name;
    //     this.role_id = role_id;
    //     this.manager_id = manager_id;
    // }

// WHEN I choose to view all employees
// THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to

    // WHEN I choose to add an employee
// THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database

// WHEN I choose to update an employee role
// THEN I am prompted to select an employee to update and their new role and this information is updated in the datab

    getId = () => this.id;

    getFirstName = () => this.first_name;

    getLastName = () => this.last_name;

    getRoldId = () => this.role_id;

    getManagerId = () => this.manager_id;

    getEmployee = () => 'Employee';
}

module.exports = Employee;