// packages and importing generateMarkdown to create readme
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

//command line prompt questions
const questions = 
    [
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
        name: "table-of-contents",
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
]

       


// writes the readme file
function runQuery() {
    return inquirer.prompt(questions)
    .then((answers) =>{
        const mark = generateMarkdown(answers)
        fs.writeFile('README.md', mark, function (err){
            if (err) {
                console.log('Could not create README')
            } else {
                console.log('Created README')
            }
        })
    })
    .catch((error) =>{
        console.log(error)
    })
}
   
// initializes app
runQuery()


