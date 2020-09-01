//node specific
const fs = require('fs');

//third party
const inquirer = require('inquirer');

inquirer
    .prompt([
    {
        type: "input",
        name: "title",
        message: "What is the Title for your porject?"
      },
      {
        type: "input",
        name: "description",
        message: "Describe your Project in 1-2 sentences: "
      },
      {
        type: "input",
        name: "installation",
        message: "Installation Instructions: "
      },
      {
        type: "input",
        name: "usage",
        message: "What is the Usage of your Project?"
      },
      {
        type: "input",
        name: "guidelines",
        message: "Contribution Guidelines: "
      },
      {
        type: "input",
        name: "test",
        message: "Test Instructions: "
      },
      {
        type: "list",
        name: "license",
        message: "License: ",
        choices: ["Apache License 2.0", "GNU General Public License v3.0", "MIT License", 'BSD 3-Clause "New" or "Revised" License']
      },
      {
        type: "input",
        name: "github",
        message: "Enter your GitHub Username: "
      },
      {
        type: "input",
        name: "email",
        message: "Email: "
      }
    ])
    .then(function(answers) {
        //variables set and ready to go
        const title = answers.title;
        const description = answers.description;
        const installation = answers.installation;
        const usage = answers.usage;
        const guidelines = answers.guidelines;
        const test = answers.test;
        const license = answers.license;
        const github = answers.github;
        const email = answers.email;

        // if (license === "Apache License 2.0") {
        //   var badgeVariable = 'https://img.shields.io/badge/Apache%20License%202.0-license-black';
        // } 
        var listBadge;

    if (license === 'Apache License 2.0') {
        listBadge = 'https://img.shields.io/badge/Apache%20License%202.0-license-black'
    } else if (license === 'GNU General Public License v3.0'){
        listBadge = 'https://img.shields.io/badge/GNU%20General%20Public%20License%20v3.0-license-black'
    } else if (license === 'BSD 3-Clause "New" or "Revised" License') {
        listBadge = 'https://img.shields.io/license/BSD%203--Clause%60-badge-black'
    } else if (license === 'MIT License') {
        listBadge = 'https://img.shields.io/license/MIT-badge-black'
    };

        //Hard coded README
        const readmeOutput = 
`# ${title}

## Project Despription
${description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Guidelines](#guidelines)
* [test](#test)
* [license](#license)
* [Github](#github)
* [Questions](#questions)

## Installation
${installation}

## Usage
${usage}

## Guidelines
${guidelines}

## test
${test}

## license
${license}
![GitHub badge](${listBadge})

## Github
https://github.com/${github}

## Questions
If you have any questions please send an email to ${email}`
        
        //funtion to write readme file
        fs.writeFile('./README.md', readmeOutput, function (error) {
            if(error) {
                console.log('There was an error: ', error);
            } else {
                console.log("All done!");
            }
        })

    });
// function to write README file
// function writeToFile(fileName, data) {
// }

// function to initialize program
// function init() {

// }

// function call to initialize program
// init();
