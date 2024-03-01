// The below function generates the markdown for the license badge, incorporating the abbreviation for the correct license into the markdown.
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
  // If we have data on the user's chosen license, the variable licenseBadge will contain the markdown to generate the badge. If there is no data on the user's preferred license, an empty string will be returned for the licenseBadge.
  let licenseBadge =
    answers.license ?
      `[![License: ${answers.licenseAbbrev}](https://img.shields.io/badge/License-${answers.licenseAbbrev}-${answers.licenseColor}.svg)]`
      : ""
  return licenseBadge;
}


// Function renderLicenseLink will return the correct link for the user's chosen license (or, an empty string, if the user somehow did not provide a response for their chosen license).
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


// Function renderLicenseSection returns the markdown for the license section.
function renderLicenseSection(license) {
  // Calling the renderLicenseLink(license) function allows us to use its return value, the appropriate license link, to create the license section.
  let licenseLink = renderLicenseLink(license);
  // If we have data on the user's license choice, the customized licenseSection will be created. Otherwise, licenseSection will be an empty string.
  let licenseSection =
    license ?
      `This project is covered under the ${license}. You can learn more about this license and its coverage and permissions [here](${licenseLink}).`
      : ""
  return licenseSection;
}


// Function generateMarkdown incorporates the return values of function renderLicenseBadge, function renderLicenseLink, and function renderLicenseSection, as well as the user's input on other README components from the answers object, and returns the content for the customized README.
function generateMarkdown(answers) {
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

[Features](#features)

[Tests](#tests)

[Contributing](#contributing)

[Credits](#credits)

[Questions](#questions)

[License](#license)

## Installation

${answers.installation}

## Usage

${answers.usage}

## Features

${answers.features}

## Tests

${answers.tests}

## Contributing

${answers.contributing}

## Credits

${answers.credits}

## Questions

My GitHub username is ${answers.github} if you would like to connect or view my other projects. Feel free to reach out to me at https://github.com/${answers.github}/ or ${answers.email} if you have any further questions about this project, and I'll be glad to assist.

## License

${licenseSection}`
}


// The below line exports the function generateMarkdown so that it can be accessed by the index.js file.
module.exports = generateMarkdown;