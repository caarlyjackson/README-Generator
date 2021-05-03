// TODO: Include packages needed for this application
const inquirer = require('inquirer');
// const fs = require('fs');
// const InputPrompt = require('inquirer/lib/prompts/input');


// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "github"
    },
    {
        type: "input",
        message: "What is your email?",
        name: "email"
    },
    {
        type: "input",
        message: "What is the title of your project:",
        name: "title"
    },
    {
        type: "input",
        message: "Please enter a description of your project:",
        name: "description"
    },
    {
        type: "input",
        message: "Installation:",
        name: "installation"
    },
    {
        type: "input",
        message: "Usage:",
        name: "usage"
    },
    {
        type: "list",
        message: "License Type:",
        choices: ['Apache 2.0', 'BSD 3', 'GPL 3.0', 'MIT', 'None'],
        name: "license"
    },
    {
        type: "list",
        message: "What command should be run to install dependencies?",
        choices: ['npm i'],
        name: "installDependencies"
    },
    {
        type: "list",
        message: "What command should be run to run test?",
        choices: ['npm test'],
        name: "testing"
    },
    {
        type: "input",
        message: "What does the user need to know about using the repo?",
        name: "testing"
    },
    {
        type: "input",
        message: "What does the user need to know about contributing to the repo?",
        name: "contributers"
    },
    {
        type: "input",
        message: "Any additional Questions?",
        name: "questions"
    }
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const fileName = $; { data.title }

    `
#  ${data.title}

## Description
${data.description}
    
## Table of Contents
    - [Installation](#installation)
    - [Usage](#usage)
    - [Contributers](#contributers)
    - [Tests](#tests)
    - [Questions](#questions)


## Installation
To install necessary dependencies run the following command:
    
```
    $; { data.installation }
    $; { data.installation }
    ```

## Usage
${answers.usage}

## License
This project is licensed under the ${answers.license} license.

## Contributers
${answers.contributers}

## Tests
To run tests, use the following command:
```
    ${ answers.tests }
    ```

## Questions
If you have any questions about the repo, open an issue or contact me directly at ${answers.email}. You can find more of my work at [${answers.github}] (https://github.com/${answers.github}/)
`;
}


// TODO: Create a function to initialize app
function init() { }


// Function call to initialize app
init();
