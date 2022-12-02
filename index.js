const inquirer = require('inquirer');
const art = require('ascii-art')
art.font("Employee Tracker", 'doom', (err, rendered) => {
});

// GIVEN a command - line application that accepts user input
// WHEN I start the application
// THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role

const optionsArr = [
    {
        name: "view all departments",
        value: null
    },
    {
        name: "view all roles",
        value: null

    },
    {
        name: "view all employees",
        value: null
    },
    {
        name: "add a department",
        value: null
    },
    {
        name: "add a role",
        value: null
    },
    {
        name: "add an employee",
        value: null
    },
    {
        name: "update an employee role",
        value: null
    }];


inquirer
    .prompt([
        {
            type: 'list',
            name: 'options',
            message: "What would you like to do?",
            choices: optionsArr
        }
    ])


// WHEN I choose to view all departments
// THEN I am presented with a formatted table showing department names and department ids