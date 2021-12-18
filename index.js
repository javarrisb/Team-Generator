const inquirer = require("inquirer")

// Initailizes the questions for the app to start
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
            name: 'officeNum',
            message: "What is the manager's office number?",
            validate: officeNumInput => {
                if (officeNumInput) {
                    return true
                } else {
                    console.log("Please enter office number!");
                    return false
                }
            }
        }
    ])
}

renderManager();