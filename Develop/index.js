// To bring in the packages needed for this application, we require: node's built-in File System module; the npm package inquirer for gathering user input; and our local module generateMarkdown.js, which has the generateMarkdown function we will use to generate the user's customized README content.   
let fs = require('fs');
let inquirer = require('inquirer');
let generateMarkdown = require('../Develop/generateMarkdown.js');


// The below questions will be passed to inquirer's prompt method to prompt the user for their responses.
const questions = [
    {
        type: "input",
        name: "title",
        message: "1. What will the title for your README be?"
    },
    {   
        type: "list",
        name: "license",
        message: "2. Please choose a license from the following list of options.", 
        choices: ["MIT License", "Apache 2.0 License", "GNU GPL v3 License", "Mozilla Public License 2.0", "BSD 3-Clause License", "ISC License (ISC)"]
    },
    {
        type: "list", 
        name: "licenseColor", 
        message: "3. Please choose a color for your README's license badge.",
        choices: ["blue", "orange", "green", "yellow"]
    },  
    {
        type: "input",
        name: "description",
        message: "4. Please enter the description for your README's Description section."
    },
    {
        type: "input", 
        name: "installation", 
        message: "5. Please enter the installation instructions for your README's Installation section."
    },
    {
        type: "input", 
        name: "usage", 
        message: "6. Please enter the usage information for your README's Usage section."
    }, 
    {
        type: "input", 
        name: "features", 
        message: "7. Please enter a description of features for your README's Features section."
    }, 
    {
        type: "input", 
        name: "tests", 
        message: "8. Please enter test instructions for your README's Tests section."
    }, 
    {
        type: "input",
        name: "contributing",
        message: "9. Please enter guidelines for contributing to your project for your README's Contributing section." 
    }, 
    {
        type: "input", 
        name: "credits", 
        message: "10. Please provide any credits or acknowledgements for your README's Credits section."
    }, 
    {
        type: "input", 
        name: "github", 
        message: "11. Please provide your GitHub username."
    }, 
    {
        type: "input", 
        name: "email", 
        message: "12. Please provide your email address."
    }
];


// The init() function calls inquirer's prompt method and helps handle the creation of the README.
function init() {
    inquirer
        .prompt(questions)
        // In the answers object, the name for each question in the original questions array will be the key, and the user's response to that particular question will be the value of that key. 
        .then((answers) => {
            console.log(answers);
            // The content exported from generateMarkdown.js is the generateMarkdown function, and generateMarkdown is the name of the variable storing the function from generateMarkdown.js, so we can use generateMarkdown as a function here and pass it the answers object. 
            let template = generateMarkdown(answers);
            // Now that the user's answers are stored in the variable template, we can pass the writeToFile function the name of the file to be written to (generated-README.md), as well as the content to be written (template).
            writeToFile("generated-README.md", template);
        })
        // .catch will catch any errors from .prompt or .then. 
        .catch((error) => {
            // If the error is a Tty error related to the environment the user is running the program in, a specific error will be thrown.
            if (error.isTtyError) {
            throw new Error(`Prompt couldn't be rendered in current environment`);
            } else {
            // If the error is not a Tty error, the error will appear in a console log in red.
            console.error(error);
            }
        });
}


// The function writeToFile, and the fs.writeFile() method within,  will receive the "generated-README.md" for the fileName parameter and the template variable for the data parameter. A file called generated-README.md will be created (or overwritten, if it already exists) with the content of the template. 
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function() {
        console.log("README was generated.");
    });
}


// Function call to initialize app.
init();