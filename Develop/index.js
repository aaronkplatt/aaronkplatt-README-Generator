//node specific
const fs = require('fs');

//third party
const inquirer = require('inquirer');

// array of questions for user
// const questions = [
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
        type: "input",
        name: "license",
        message: "License: "
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

        // console.log(answers);

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
* [Email](#email)

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

## Github
${github}

## Email
${email}`
        
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
