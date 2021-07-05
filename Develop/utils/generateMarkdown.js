const fs = require('fs');
const chalk = require('chalk');

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}


const writeFile = fileContent => {
  return new Promise((resolve, reject) => {
    fs.writeFile(__dirname, fileContent, err => {
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

// TODO: Create a function to generate markdown for README
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


module.exports = generateMarkdown;
module.exports = writeFile; 
