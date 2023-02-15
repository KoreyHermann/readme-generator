// license badge
function renderLicenseBadge(license) {
  const badges ={
    MIT: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
    Apache: '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
    Boost: '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)'
  }
  return badges[license]
 }

// license links
function renderLicenseLink(license) {
  const licenseLinks ={
    MIT: 'https://choosealicense.com/licenses/mit/',
    Apache: 'https://choosealicense.com/licenses/apache-2.0/',
    Boost: 'https://choosealicense.com/licenses/bsl-1.0/'
  }
  return licenseLinks[license]
}

// populates license section of readme
function renderLicenseSection(license) {
  if (license){
    return 'Licensed under the ${this.renderLicenseLink(license)} license'
  } else {
    return ""
  }
}

// creates readme with sections populated with strings from the inquirer prompt
function generateMarkdown(answers) {
  return `
  # ${answers.title}

  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  - [github](#github)
  - [email](#email)

  ## Description
  ${answers.description}

  ## Installation
  ${answers.installation}

  ## Usage
  ${answers.usage}

  ## License
  ${renderLicenseSection(answers.license)}

  ## Contributing
  ${answers.contributing}

  ## Tests
  ${answers.tests}

  ## Questions
  ${answers.questions}

  ## github
  ${answers.github}

  ## email
  ${answers.email}








`;
}

module.exports = generateMarkdown;
