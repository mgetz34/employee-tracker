const inquirer = require('inquirer');
const mysql = require('mysql2');
require('dotenv').config()

const db = mysql.createConnection(
    {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    },
    console.log(`Connected to the company_db database.`)
);
db.connect((err) => {
    if (err) {
        throw error;
    }
});
// GIVEN a command - line application that accepts user input
// WHEN I start the application
// THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
start();
function start() {
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'options',
                message: "What would you like to do?",
                choices: ["view all departments", "view all roles", "view all employees", "add a department",
                    "delete a department", "add a role", "delete a role", "add an employee", "delete an employee", "update an employee role"]
            }
        ])
        .then((data) => {
            if (data.options === "view all departments") {
                viewDepartments();
            }
            if (data.options === "view all roles") {
                viewRoles();
            }
            if (data.options === "view all employees") {
                viewEmployees();
            }
            if (data.options === "add a department") {
                addDepartment();
            }
            if (data.options === "delete a department") {
                deleteDepartment();
            }
            if (data.options === "add a role") {
                addRole();
            }
            if (data.options === "delete a role") {
                deleteRole();
            }
            if (data.options === "add an employee") {
                addEmployee();
            }
            if (data.options === "delete an employee") {
                deleteEmployee();
            }
            if (data.options === "update an employee role") {
                updateEmployee();
            } else {
                return;
            }
        })
};
// WHEN I choose to view all departments
// THEN I am presented with a formatted table showing department names and department ids
function viewDepartments() {
    db.query('SELECT * FROM department', function (err, results) {
        console.table(results)
    });
};
// WHEN I choose to view all roles
// THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
function viewRoles() {
    db.query('SELECT * FROM role', function (err, results) {
        console.table(results);
    });
};
// WHEN I choose to view all employees
// THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
function viewEmployees() {
    db.query('SELECT * FROM employee', function (err, results) {
        console.table(results);
    });
};
// WHEN I choose to add a department
// THEN I am prompted to enter the name of the department and that department is added to the database
function addDepartment() {
    inquirer
        .prompt([
            {
                type: "input",
                name: "department",
                message: "What is the name of the new department?"
            }
        ]).then((answers) => {
            db.query(`INSERT INTO department(name) VALUES ('${answers.department}')`, (err, results) => {
                if (err) {
                    console.log(err)
                } else {
                    viewDepartments();
                }
            })
        })
};

function deleteDepartment() {
    inquirer
        .prompt([
            {
                type: "input",
                name: "department",
                message: "Which department do you want to delete?"
            }
        ]).then((answers) => {
            db.query(`DELETE FROM department WHERE name = ?`, `${answers.department}`, (err, result) => {
                if (err) {
                    console.log(err)
                } else {
                    viewDepartments();
                }
            })
        })
};
// WHEN I choose to add a role
// THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
function addRole() {
    inquirer
        .prompt([
            {
                type: "input",
                name: "role_title",
                message: "What is the name of the new role?"
            },
            {
                type: "input",
                name: "role_salary",
                message: "What is the salary of the new role?"
            },
            {
                type: "input",
                name: "department_id",
                message: "What is the department id of the new role?"
            }
        ]).then((answers) => {
            db.query(`INSERT INTO role(title, salary, department_id) VALUES ('${answers.role_title}', '${answers.role_salary}', '${answers.department_id}')`, (err, results) => {
                if (err) {
                    console.log(err)
                } else {
                    viewRoles();
                }
            })
        })
};

function deleteRole() {
    inquirer
        .prompt([
            {
                type: "input",
                name: "role",
                message: "Which role do you want to delete?"
            }
        ]).then((answers) => {
            db.query(`DELETE FROM role WHERE title = ?`, `${answers.role}`, (err, result) => {
                if (err) {
                    console.log(err)
                } else {
                    viewRoles();
                }
            })
        })
};
// WHEN I choose to add an employee
// THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
function addEmployee() {
    inquirer
        .prompt([
            {
                type: "input",
                name: "first_name",
                message: "What is the first name of the new employee?"
            },
            {
                type: "input",
                name: "last_name",
                message: "What is the last name of the new employee?"
            },
            {
                type: "input",
                name: "role_id",
                message: "What is the employee's role id?"
            },
            {
                type: "input",
                name: "manager_id",
                message: "What is the employee's manager id?"
            }
        ]).then((answers) => {
            db.query(`INSERT INTO employee(first_name, last_name, role_id, manager_id) VALUES 
            ('${answers.first_name}', '${answers.last_name}', '${answers.role_id}', '${answers.manager_id}')`, (err, results) => {
                if (err) {
                    console.log(err)
                } else {
                    viewEmployees();
                }
            })
        })
};

function deleteEmployee() {
    inquirer
        .prompt([
            {
                type: "input",
                name: "employee_id",
                message: "Which employee do you want to delete? (use employee_id)"
            }
        ]).then((answers) => {
            db.query(`DELETE FROM employee WHERE id = ?`, `${answers.employee_id}`, (err, result) => {
                if (err) {
                    console.log(err)
                } else {
                    viewEmployees();
                }
            })
        })
};
// WHEN I choose to update an employee role
// THEN I am prompted to select an employee to update and their new role and this information is updated in the datab
function updateEmployee() {
    inquirer
        .prompt([
            {
                type: "input",
                name: "employee_id",
                message: "What is the id of the employee you would like to update?"
            },
            {
                type: "input",
                name: "first_name",
                message: "Updated first name?"
            },
            {
                type: "input",
                name: "last_name",
                message: "Updated last name?"
            },
            {
                type: "input",
                name: "role_id",
                message: "Updated role id?"
            },
            {
                type: "input",
                name: "manager_id",
                message: "Updated manager id?"
            }
        ]).then((answers) => {
            db.query(`UPDATE employee SET first_name='${answers.first_name}', last_name='${answers.last_name}', role_id='${answers.role_id}',
             manager_id = '${answers.manager_id}'
             WHERE id='${answers.employee_id}'`, (err, results) => {
                if (err) {
                    console.log(err)
                } else {
                    viewEmployees();
                }
            })
        })
};