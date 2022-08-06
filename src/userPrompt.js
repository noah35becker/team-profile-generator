
// IMPORTS
const inquirer = require('inquirer');
const [Engineer, Intern, Manager] = [require('../lib/Engineer'), require('../lib/Intern'), require('../lib/Manager')];



// GLOBAL VARIABLES
const TAB = '    '; // 4 spaces
const ANSI = {
    weight: {
        bold: '\033[1m',
        normal: '\033[0m'
    },
    color: {
        yellow: '\u001b[33m',
        magenta: '\u001b[35m',
        cyan: '\u001b[36m',
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


// Make a new Employee object, and add it to the employees[] array
const makeNewEmployee = (role) => new Promise(resolve => {
    console.log(`${ANSI.weight.bold}${ANSI.color.magenta}${role}:${ANSI.weight.normal}${ANSI.color.normal}`);
    
    inquirerPrompt([
        {
            type: 'input',
            name: 'name',
            message: `${TAB}Enter name:`
        },
        {
            type: 'input',
            name: 'id',
            message: `${TAB}Enter employee ID:`
        },
        {
            type: 'input',
            name: 'email',
            message: `${TAB}Enter email address:`
        },
    ]).then(resultsSoFar => {
        if (role === 'Manager')
            return inquirerPrompt({
                type: 'input',
                name: 'officeNumber',
                message: `${TAB}Enter office number:`
            }, resultsSoFar);
        else if (role === 'Engineer')
            return inquirerPrompt({
                type: 'input',
                name: 'github',
                message: `${TAB}Enter GitHub account:`
            }, resultsSoFar);
        else if (role === 'Intern')
            return inquirerPrompt({
                type: 'input',
                name: 'school',
                message: `${TAB}Enter school:`
            }, resultsSoFar);
    }).then(({id, name, email, ...other}) => {
        if (role === 'Manager')
            employees.push(new Manager(id, name, email, other.officeNumber));
        else if (role === 'Engineer')
            employees.push(new Engineer(id, name, email, other.github));
        else if (role === 'Intern')
            employees.push(new Intern(id, name, email, other.school));
        
        resolve(menu());
    });
    ;
});


// Show the menu to the user
const menu = () => new Promise(resolve => {
    inquirerPrompt({
        type: 'list',
        name: 'next',
        message: `${ANSI.color.yellow}What would you like to do next?${ANSI.color.normal}`,
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


// Prompt user: first for manager info, then take them to the menu
const userPrompt = () => new Promise(resolve => {
    console.log(`${ANSI.weight.bold}${ANSI.color.cyan}** Welcome! **${ANSI.weight.normal}${ANSI.color.normal}`)

    makeNewEmployee('Manager') // automatically proceeds to call menu() thereafter
    .then(() => resolve(employees));
});



// EXPORT
module.exports = userPrompt;