// TODO: Include packages needed for this application
const fs = require('fs')
const inquirer = require('inquirer');
const { title } = require('process');
const chalk = require('chalk');
// const  { generateMarkdown, writeFile } = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const askQuestions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project? [REQUIRED]',
            validate: titleInput => {
                if(titleInput) {
                    return true;
                } else {
                    console.log(chalk.red('\nPlease enter a valid title'))
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'What is the description for your project? [REQUIRED]',
            validate: descInput => {
                if(descInput) {
                    return true;
                } else {
                    console.log(chalk.red('\nPlease enter a description'))
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What are the steps required to install your project? [REQUIRED]',
            validate: installInput => {
                if(installInput) {
                    return true;
                } else {
                    console.log(chalk.red('\nPlease enter valid install instructions.'))
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide instructions and examples to use. [REQUIRED]',
            validate: usageInput => {
                if(usageInput) {
                    return true;
                } else {
                    console.log(chalk.red('\nPlease enter valid instructions or examples.'))
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'Please add guidelines for any developers looking to contribute to this project. [REQUIRED]',
            validate: titleInput => {
                if(titleInput) {
                    return true;
                } else {
                    console.log(chalk.red('\nPlease enter a valid title'))
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Provide some test examples IF any.',
        },
        {
            type: 'list',
            name: 'license',
            message: 'Please choose what license you will be using? [REQUIRED] ',
            choices: ['Apache License 2.0', 'GNU General', 'Public License v3.0', 'MIT License', 'Mozilla Public License 2.0','The Unlicense'],
            validate: licenseInput => {
                if(licenseInput) {
                    return true;
                } else {
                    console.log(chalk.red('\nPlease select a valid License.'))
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your Github Username? [REQUIRED]',
            validate: githubInput => {
                if(githubInput) {
                    return true;
                } else {
                    console.log(chalk.red('\nPlease enter a valid Github Username'))
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address? [REQUIRED]',
            validate: emailInput => {
                if(emailInput) {
                    return true;
                } else {
                    console.log(chalk.red('\nPlease enter a valid email.'))
                    return false;
                }
            }
        },
    ])
    .then(data => {
        return data;
    })
};

function generateMarkdown(data) {
    return `
    # ${data.title}
    # ${data.description}
    # ${data.usage}
    # ${data.contribution}
    # ${data.tests}
    # ${data.license}
    # ${data.github}
    # ${data.email}
  `;
  }

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
      fs.writeFile('./README.md', fileContent, err => {
        // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
        if (err) {
          reject(err);
          // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
          return;
        }
  
        // if everything went well, resolve the Promise and send the successful data to the `.then()` method
        resolve({
          ok: true,
          message: chalk.green('File Created!')
        });
      });
    });
  };


askQuestions()
    .then(data => {
        console.log(data)
        return generateMarkdown(data);
    })
    .then(readmeFile => {
        return writeFile(readmeFile)
    })
    .catch(err => {
        console.log(err)
    })
