const inquirer = require('inquirer');
const art = require('ascii-art')
// art.font("Employee Tracker", 'doom', (err, rendered) => {
// });

// GIVEN a command - line application that accepts user input
// WHEN I start the application
// THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
function start() {
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'options',
                message: "What would you like to do?",
                choices: ["view all departments", "view all roles", "view all employees", "add a department", "add a role", "add an employee", "update an employee role"]
            }
        ])
        .then((data) => {
            if (data.options === "view all departments") {
                //view all departments query
            }
            if (data.options === "view all roles") {
                //view all roles query
            }
            if (data.options === "view all employees") {
                //view all employees query
            }
            if (data.options === "add a department") {
                //add a department post req?
            }
            if (data.options === "add a role") {
                //add a role post req?
            }
            if (data.options === "add an employee") {
                //add am employee post req?
            }
            if (data.options === "update an employee role") {
                //update an employee post req?
            }
        })
};

start();