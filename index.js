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
                choices: ["view all departments", "view all roles", "view all employees",
                    "add a department", "delete a department", "add a role", "add an employee", "update an employee role"]
            }
        ])
        .then((data) => {
            if (data.options === "view all departments") {
                //view all departments query
                db.query('SELECT * FROM department', function (err, results) {
                    console.table(results);
                });
            }
            if (data.options === "view all roles") {
                //view all roles query
                db.query('SELECT * FROM role', function (err, results) {
                    console.table(results);
                });
            }
            if (data.options === "view all employees") {
                //view all employees query
                db.query('SELECT * FROM employee', function (err, results) {
                    console.table(results);
                });
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
            if (data.options === "add an employee") {
                addEmployee();
            }
            if (data.options === "update an employee role") {
                updateEmployee();
            }
        })
};

function viewDepartments() {
    db.query('SELECT * FROM department', function (err, results) {
        console.table(results)
    })
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
            db.query(`DELETE FROM department WHERE name = '${answers.department}')`, (err, results) => {
                if (err) {
                    console.log(err)
                } else {
                    viewDepartments();
                }
            })
        })
};







// function addRole();
// function addEmployee();
// function updateEmployee();