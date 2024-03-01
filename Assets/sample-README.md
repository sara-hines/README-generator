# Work Day Planner | Local Storage & Third Party APIs

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## Description

This Work Day Planner app uses local storage, jQuery, Day.js, Bootstrap, and of course, JavaScript, CSS, and HTML to provide a convenient way to schedule and save events for a 9am - 5pm work day. During the creation of this project, it was evident how useful libraries, third party APIs, CSS frameworks, and other tools can be for simplifying tasks and accessing rich resources which would otherwise be unavailable.<br/><br/>As I expand my tool set and building upon my skills in development, I am learning to approach problems from different angles, and am using objects, functions, event listeners, and even unassuming string methods in new ways. Different applications of local storage are also proving to be opportunities for better understanding JavaScript functions. This work day planner has helped further my understanding of appropriate scenarios for passing a function, calling a function, passing a parameter to a function, and passing a function as a parameter to another function.<br/><br/>The most important feature of this particular app is its relevance and usefulness for everyday life. The product of incorporating quite a few tools and libraries is a calendar which: dynamically displays the current date; color codes hours of the workday based on whether they have passed, are the current hour, or are in the future; and allows the user to input, save, and view their own events for each hour of the day. Since calendar apps are so widely and so often used throughout the day, it is a very relevant skill to be able to replicate and build upon the functionality of a basic workday calendar.

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

No installation is required to use this application. 

## Usage

When the user navigates to the application at https://sara-hines.github.io/work-day-planner, they will see a calendar with the title "Work Day Planner," the current date displayed under the subheading "A simple calendar app for scheduling your work day," and a work day calendar with one section (or, time block, as it will be referred to going forward) for each of the hours from 9am through 5pm. To enter and save an event, click inside the time block for the hour of the event, type the text for the event, and click the blue save button to the right of the time block. The event will persist in local storage so that the user can navigate elsewhere in the browser and view their saved events again when returning to the calendar. 

## Features

To further explain and explore the functionality of this work day planner, the features will be depicted through images and GIFs.<br/><br/>Upon navigating to the site for the first time, the calendar will have an appearance similar to the below.<br/><br/>![img1](https://github.com/sara-hines/work-day-planner/assets/90005274/bfa150d5-f1c7-4c22-8fe2-8d9c163083bf)<br/><br/>When the user enters text inside a time block and hovers over the save button to the right of the time block, the save icon inside the save button enlarges and darkens. This visual cue, depicted on the 9am save button in the below screenshot, helps to guide the user interaction.<br/><br/>![img2](https://github.com/sara-hines/work-day-planner/assets/90005274/d560f1e8-7e5c-4ae0-8b72-9daa50f2216b)<br/><br/>When the user enters text and clicks the save button, the message, "Appointment added to local storage ✅" will briefly appear just under the displayed date, as in the below screenshot.<br/><br/>![img3](https://github.com/sara-hines/work-day-planner/assets/90005274/467f2ba6-a760-492c-a9f4-82abab9a999f)<br/><br/>If the user refreshes the page, leaves the page, or closes the browser, upon returning, the saved events will still be displayed on the calendar. Depending on the current hour of the day, time blocks which have passed will have a grey background color, the current hour will have a red background color, and future time blocks will have a green background color. An example of saved events, with color coding assuming that the current hour is 12pm, can be viewed below.<br/><br/>![img4](https://github.com/sara-hines/work-day-planner/assets/90005274/52922787-3907-4e82-8dd2-4dbf9de649a6)

## Tests

No tests have been developed for this application as of yet, but this could be a promising area for future development. If you would like to contribute with writing tests, take a look at the contribution guidelines below, and feel free to dive in. 

## Contributing

This is a small personal project, but could grow in complexity and features over time. If you would like to contribute, feel free to email me at sara.marie.hines1@gmail.com with any ideas on new features or improved functionality, create an Issue, or even submit a pull request! If you create an issue, please @ me. If you would like to make a pull request, please request a pull request review from me so that I can review your proposed changes. I look forward to collaborating with you!

## Credits

Many thanks to my instructor Stephen Woosley and teaching assistant Nick S., who helped to troubleshoot issues I was having with causing local storage persist, and guided the use of a string method where I hadn't considered how helpful it would be. They also helped me to start using bracket notation to work with object key value pairs in a dynamic way. I so appreciate Stephen and Nick's guidance!<br/><br/>Squash Labs. (2023, October 13). How to Get an Object Value by Dynamic Keys in TypeScript. Squash; Squash Labs Inc. https://www.squash.io/tutorial-getting-object-value-by-dynamic-key-in-typescript/<br/><br/>Stack Overflow. (2016, March 22). jQuery fadeOut without display none? Stack Overflow; Stack Exchange Inc. https://stackoverflow.com/questions/4549389/jquery-fadeout-without-display-none<br/><br/>Stack Overflow. (2014, January 28). jQuery .val() not working for input fields. Stack Overflow; Stack Exchange Inc. https://stackoverflow.com/questions/21407017/jquery-val-not-working-for-input-fields (Referenced to help figure out how to successfully get and set value using .val(). The .val() method works on input elements which have a name attribute and value added.)<br/><br/>Stack Overflow. (2017, August 15). Prevent child elements from being the target when parent element is clicked. Stack Overflow; Stack Exchange Inc. https://stackoverflow.com/questions/45697607/prevent-child-elements-from-being-the-target-when-parent-element-is-clicked (I referenced T.J. Crowder's Aug 15, 2017 suggestion to use event.currentTarget instead of event.target to prevent child elements from being the target when parent element is clicked. I used this for the \<button> elements with the \<i> elements within which were sometimes becoming event.target.)

## Questions

My GitHub username is sara-hines if you would like to connect or view my other projects. Feel free to reach out to me at https://github.com/sara-hines/ or sara.marie.hines1@gmail.com if you have any further questions about this project, and I'll be glad to assist.

## License

This project is covered under the MIT License. You can learn more about this license and its coverage and permissions [here](https://opensource.org/licenses/MIT).