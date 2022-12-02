class Role {
    // constructor(id, title, salary, department_id) {
    //     this.id = id;
    //     this.title = title;
    //     this.salary = salary;
    //     this.department_id = department_id;
    // }

        // WHEN I choose to view all roles
// THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role

    // WHEN I choose to add a role
// THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database

    getId = () => this.id;

    getTitle = () => this.title;

    getSalary = () => this.salary;

    getDepartment = () => this.department_id;

    getRole = () => 'Role';
}

module.exports = Role;