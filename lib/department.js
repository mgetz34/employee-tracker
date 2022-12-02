class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    
    getId = () => this.id;

    getName = () => this.name;

    getDepartment = () => 'Department';
} 

module.exports = Department;