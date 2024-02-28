// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(answers) {
  if (answers.license === "MIT License") {
      answers.licenseAbbrev = "MIT";
    } else if (answers.license === "Apache 2.0 License") {
      answers.licenseAbbrev = "Apache_2.0"; 
    } else if (answers.license === "GNU GPL v3 License") {
      answers.licenseAbbrev = "GPLv3";
    } else if (answers.license === "Mozilla Public License 2.0") {
      answers.licenseAbbrev = "MPL_2.0"; 
    } else if (answers.license === "BSD 3-Clause License") {
      answers.licenseAbbrev = "BSD_3--Clause"; 
    } else if (answers.license === "ISC License (ISC)") {
      answers.licenseAbbrev = "ISC";
    } else {
      answers.licenseAbbrev = "";
    }

  let licenseBadge = 
    answers.license ? 
    `[![License: ${answers.licenseAbbrev}](https://img.shields.io/badge/License-${answers.licenseAbbrev}-${answers.licenseColor}.svg)]` 
    : ""
  return licenseBadge;
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "MIT License") {
    return "https://opensource.org/licenses/MIT";
  } else if (license === "Apache 2.0 License") {
    return "https://opensource.org/licenses/Apache-2.0";
  } else if (license === "GNU GPL v3 License") {
    return "https://www.gnu.org/licenses/gpl-3.0";
  } else if (license === "Mozilla Public License 2.0") {
    return "https://opensource.org/licenses/MPL-2.0";
  } else if (license === "BSD 3-Clause License") {
    return "https://opensource.org/licenses/BSD-3-Clause";
  } else if (license === "ISC License (ISC)") {
    return "https://opensource.org/licenses/ISC";
  } else {
    return "";
  }
}


function renderLicenseSection(license) {
  // Calling the renderLicenseLink(license) function in the below line allows us to use its return value, the appropriate license link, to create the license section.
  let licenseLink = renderLicenseLink(license);
  // If we have data on the user's license choice, the customized licenseSection will be created. Otherwise, licenseSection will be an empty string.
  let licenseSection = 
    license ? 
    `This project is covered under the ${license}. You can learn more about this license and its coverage and permissions [here](${licenseLink}).` 
    : ""
  return licenseSection;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  console.log(answers);
  // The renderLicenseBadge function needs to receive the license and the licenseColor, so I passed in answers rather than answers.license.
  let licenseBadge = renderLicenseBadge(answers);
  // The renderlicenseLink function only needs to receive the license from the answers object, so I passed answers.license to the function.
  let licenseLink = renderLicenseLink(answers.license);
  // The renderLicenseSection function needs to receive the license from the answers object, so I passed answers.license to the function.
  let licenseSection = renderLicenseSection(answers.license);

  return `# ${answers.title}

${licenseBadge}(${licenseLink})

## Description

${answers.description}

## Table of Contents

[Installation](#installation)

[Usage](#usage)

[License](#license)

[Contributing](#contributing)

[Tests](#tests)

[Questions](#questions)

## Installation

${answers.installation}

## Usage

${answers.usage}

## License

${licenseSection}

## Contributing

${answers.contributing}

## Tests

${answers.tests}

## Questions

My GitHub username is ${answers.github} if you would like to connect or view my other projects. Feel free to reach out to me at https://github.com/${answers.github}/ or ${answers.email} if you have any further questions about this project, and I'll be glad to assist.`
}


module.exports = generateMarkdown;
