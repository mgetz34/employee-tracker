const inquirer = require('inquirer');
const art = require('ascii-art')
art.font("Employee Tracker", 'doom', (err, rendered) => {
});

// GIVEN a command - line application that accepts user input
// WHEN I start the application
// THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
inquirer
    .prompt([
        {
            type: 'list',
            name: 'options',
            message: "What would you like to do?",
            choices: ["view all departments", "view all roles", "view all employees", "add a department", "add a role", "add an employee", "update an employee role"]
        }
    ])


