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
                    "delete a department", "add a role", "delete a role", "add an employee", "update an employee role"]
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
            if (data.options === "update an employee role") {
                updateEmployee();
            } else {
                return;
            }
        })
};

function viewDepartments() {
    db.query('SELECT * FROM department', function (err, results) {
        console.table(results)
    });
};
function viewRoles() {
    db.query('SELECT * FROM role', function (err, results) {
        console.table(results);
    });
};
function viewEmployees() {
    db.query('SELECT * FROM employee', function (err, results) {
        console.table(results);
    });
};

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
            },
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
// function addEmployee();
// function updateEmployee();