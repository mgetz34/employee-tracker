class Role {
    // constructor(id, title, salary, department_id) {
    //     this.id = id;
    //     this.title = title;
    //     this.salary = salary;
    //     this.department_id = department_id;
    // }

    getId = () => this.id;

    getTitle = () => this.title;

    getSalary = () => this.salary;

    getDepartment = () => this.department_id;

    getRole = () => 'Role';
}

module.exports = Role;