// inquirer required packages
const inquirer = require("inquirer")

const Engineer = require('.lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('.lib/Manager');

// generatePage to create HTML for employee's profile page 
const generatePage = require('./src/generatePage');
const fs = require('fs');

const team = [];

// Initailizes prompts to get manager info
const renderManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the team manager's name?",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter valid name!");
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the manager's employee ID?",
            validate: idInput => {
                if (idInput) {
                    return true
                } else {
                    console.log("Please enter employee ID!");
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the manager's email address?",
            validate: emailInput => {
                if (emailInput) {
                    return true
                } else {
                    console.log("Please enter email address!");
                    return false
                }
            }
        },
        {
            type: "input",
            name: 'officeNumber',
            message: "What is the manager's office number?",
            validate: officeNumberInput => {
                if (officeNumberInput) {
                    return true
                } else {
                    console.log("Please enter office number!");
                    return false
                }
            }
        }
    ])
        .then(({ name, id, email, officeNumber }) => {
            const manager = new Manager(name, id, email, officeNumber);
            //push manager data to team array
            team.push(manager);

            menuOp();
        });
};

const menuOp = () => {
    return inquirer.prompt(
        {
            type: 'confirm',
            name: 'addEmployee',
            message: "Would you like to add a new employee to your team?",
        }
    )
        .then(answer => {
            if (answer.addEmployee) {
                console.log("Added new employee!")
                newEmployee();
            } else {
                console.log("Forming team profile!")
                buildTeam();
            }
        })
};

const newEmployee = () => {
    return inquirer.prompt(
        {
            type: 'list',
            name: 'employeeType',
            message: "What employee type would you like to add to the team?",
            choices: ['Engineer', 'Intern', 'Return']
        }
    )
        .then(response => {
            if (response.employeeType === 'Engineer') {
                buildEngineer();
            }
            else if (response.employeeType === 'Intern') {
                buildIntern();
            } else {
                menuOp();
            }
        });
}

const buildEngineer = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the engineer's name?",
            validate: vlaue => {
                if (value) {
                    return true;
                } else {
                    console.log('Please enter a valid name!');
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the engineer's ID number?"
         },
         {
             type: 'input',
             name: 'email',
             message: "What is the engineer's email address?"
         },
         {
             type: 'input',
             name: 'github',
             message: "What is the engineer's Github username?"
         }
    ])
    .then(({name, id, email, github}) => {
        const engineer = new Engineer(name, id, email, github);
        // push engineer data to team array
        team.push(engineer);

        menuOp();
    });
};

const buildIntern = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the intern's name?",
            validate: value => {
                if (value) {
                    return true;
                } else {
                    console.log('Please enter a valid name!');
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the intern's ID number?"
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the intern's email address?"
        },
        {
            type: 'input',
            name: 'school',
            message: "What school does the intern attend?"

        }
    ])
    .then(({name, id, email, school}) => {
        const intern = new Intern(name, id, email, school);
        // push intern data to team array
        team.push(intern);

        menuOp();
    });
};

const buildTeam = () => {
    console.log("New team has been created!");
    const teamProfile = generatePage(team);

    fs.writeFile('./dist/index.html', teamProfile, err => {
        if (err) {
            console.log(err);
            return;
        }
    })
};

renderManager();