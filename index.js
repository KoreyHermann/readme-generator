// TODO: Include packages needed for this application
const inquirer = require('inquirer');
// TODO: Create an array of questions for user input


const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?",
    },
    {
        type: "input",
        name: "description",
        message: "What is the function of your project?",
    },
    {
        type: "input",
        name: "table of contents",
        message: "What are the table of contents for your project?",
    },
    {
        type: "input",
        name: "installation",
        message: "What are the installation instructions for your project?",
    },
    {
        type: "input",
        name: "usage",
        message: "What are the uses for your project?",
    },
    {
        type: "list",
        name: "license",
        message: "Select the license you used for this project.",
        choices: [
            "MIT",
            "Apache",
            "Boost",
        ],
    },
    {
        type: "input",
        name: "contributing",
        message: "Who contributed to this project?",
    },
    {
        type: "input",
        name: "tests",
        message: "Was there any testing done with this project?",
    },
    {
        type: "input",
        name: "questions",
        message: "Where do I submit questions about this project?",
    },
    {
        type: "input",
        name: "github",
        message: "Please enter your GitHub username.",
    },
    {
        type: "input",
        name: "email",
        message: "Please enter your email.",
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
