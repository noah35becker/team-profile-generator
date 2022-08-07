
// IMPORTS
const inquirer = require('inquirer');
const [Engineer, Intern, Manager] = [require('../lib/Engineer'), require('../lib/Intern'), require('../lib/Manager')];



// GLOBAL VARIABLES

const TAB = '    '; // 4 spaces
const ANSI = { // Used to colorize console.log()s
    weight: {
        bold: '\033[1m',
        normal: '\033[0m'
    },
    color: {
        yellow: '\u001b[33m',
        magenta: '\u001b[35m',
        cyan: '\u001b[36m',
        red: '\u001b[31m',
        green: '\u001b[32m',
        normal: '\u001b[0m'
    }
};

var employees = [];



// FUNCTIONS

// Inquirer prompt, prepending results so far
const inquirerPrompt = (questions, resultsSoFar) => new Promise(resolve => 
    inquirer.prompt(questions)
    .then(theseResults => resolve({...resultsSoFar, ...theseResults}))
);


// Log error message in console (w/ appropriate formatting)
const logError = errMsg => 
    console.log(`  ${ANSI.color.red}${errMsg}`);


// Check if input is blank, log error message if so
const isBlank = input => {
    if (input === ''){
        logError("Don't leave this blank!");
        return true;
    }

    return false;
}


// Check if input is valid number, log error message if not
const isValidNumber = input => {
    if (!(input == Math.round(input))){
        logError('Please enter a valid number!');
        return false;
    }

    return true;
}


// Get last index at a which a given character appears in a string
const getLastIndex = (string, char) => {
    let reversedIndex = string.split('').reverse().join('').indexOf(char);

    if (reversedIndex === -1)
        return NaN;

    return string.length - 1 - reversedIndex;
}


// Make a new Employee object, and add it to the employees[] array
const makeNewEmployee = (role) => new Promise(resolve => {
    console.log(`${ANSI.weight.bold}${ANSI.color.magenta}${role}:`);
    
    inquirerPrompt([
        {
            type: 'input',
            name: 'id',
            message: `${TAB}Enter employee ID:`,
            validate: input => {
                if (isBlank(input) || !isValidNumber(input))
                    return false;
                
                for (const employee of employees)
                    if (employee.getID() === input){
                        logError('An employee with this ID has already been logged!');
                        return false;
                    }
                
                return true;
            }
        },
        {
            type: 'input',
            name: 'name',
            message: `${TAB}Enter name:`,
            validate: input => !isBlank(input)
        },
        {
            type: 'input',
            name: 'email',
            message: `${TAB}Enter email address:`,
            validate: input => {
                if (isBlank(input))
                    return false;
                
                let
                    atSignFirstIndex = input.indexOf('@'),
                    atSignLastIndex = getLastIndex(input, '@');
                    periodLastIndex = getLastIndex(input, '.');

                if (
                    atSignFirstIndex >= 1 // there's an @ sign, as the second character or later
                    && atSignFirstIndex === atSignLastIndex // there's only one @ sign
                    && periodLastIndex >= atSignFirstIndex + 2 // there's a period, w/ at least one character between it and the @ sign
                    && input.length - 1 > periodLastIndex // the last character is not a period
                )
                    return true;

                logError('Please enter a valid email address!');
                return false;
            }
        },
    ]).then(resultsSoFar => {
        if (role === 'Manager')
            return inquirerPrompt({
                type: 'input',
                name: 'officeNumber',
                message: `${TAB}Enter office number:`,
                validate: input => {
                    if (isBlank(input) || !isValidNumber(input))
                        return false;

                    return true;
                }
            }, resultsSoFar);
        else if (role === 'Engineer')
            return inquirerPrompt({
                type: 'input',
                name: 'github',
                message: `${TAB}Enter GitHub account:`,
                validate: input => !isBlank(input)
            }, resultsSoFar);
        else if (role === 'Intern')
            return inquirerPrompt({
                type: 'input',
                name: 'school',
                message: `${TAB}Enter school:`,
                validate: input => !isBlank(input)
            }, resultsSoFar);
    }).then(({id, name, email, ...other}) => {
        if (role === 'Manager')
            employees.push(new Manager(id.trim(), name.trim(), email.trim(), other.officeNumber.trim()));
        else if (role === 'Engineer')
            employees.push(new Engineer(id.trim(), name.trim(), email.trim(), other.github.trim()));
        else if (role === 'Intern')
            employees.push(new Intern(id.trim(), name.trim(), email.trim(), other.school.trim()));
        
        resolve(menu());
    });
    ;
});


// Show the menu to the user
const menu = () => new Promise(resolve => {
    inquirerPrompt({
        type: 'list',
        name: 'next',
        message: `${ANSI.color.yellow}What would you like to do next?`,
        choices: ['Enter an engineer', 'Enter an intern', "I've finished building my team"]
    })
    .then(({next}) => {
        if (next === 'Enter an engineer')
            resolve(makeNewEmployee('Engineer'));
        else if (next === 'Enter an intern')
            resolve(makeNewEmployee('Intern'));
        else
            resolve();
    });
});


// Prompt user: first for manager info, then for further employees as needed
// When they're done, return the populated employees array
const userPrompt = () => new Promise(resolve => {
    console.clear();
    console.log(
`${ANSI.weight.bold}${ANSI.color.cyan}** Welcome to Team Profile Generator! **
Enter members of your work team here.
When you're done, a webpage containing all their information will be generated.
`
    );

    makeNewEmployee('Manager') // automatically proceeds to further calls of menu() and makeNewEmployee() as needed
    .then(() => resolve(employees));
});


// Wait for user to press Enter
const successWaitForEnter = () => new Promise(resolve => {
    console.log(
        `${ANSI.weight.bold}${ANSI.color.green}Webpage successfully generated! Press${ANSI.color.normal}${ANSI.weight.bold} Enter${ANSI.weight.bold}${ANSI.color.green} to open when ready.`)
    ;

    inquirer.prompt(
        {
            type: 'input',
            name: 'justPressEnter',
            message: ' ',
            prefix: ''
        }
    ).then(() => resolve());
});



// EXPORT
module.exports = {userPrompt, successWaitForEnter, logError};