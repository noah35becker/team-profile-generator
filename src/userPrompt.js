
const inquirer = require('inquirer');
const [Engineer, Intern, Manager] = [require('../lib/Engineer'), require('../lib/Intern'), require('../lib/Manager')];

const TAB = '    '; // 4 spaces
const ANSI = {
    bold: {
        set: '\033[1m',
        reset: '\033[0m'
    },
    color: {
        yellow: '\u001b[33m',
        magenta: '\u001b[35m',
        reset: '\u001b[0m'
    }
};

var employees = [];




// Inquirer prompt, prepending results so far
const inquirerPrompt = (resultsSoFar, questions) => new Promise(resolve => {
    inquirer.prompt(questions)
    .then(theseResults => resolve({...resultsSoFar, ...theseResults}));
});


const makeNewEmployee = (role) => new Promise(resolve => {
    console.log(`${ANSI.bold.set}${ANSI.color.magenta}${role}:${ANSI.bold.reset}${ANSI.color.reset}`);
    
    inquirerPrompt({}, [
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
            return inquirerPrompt(resultsSoFar, {
                type: 'input',
                name: 'officeNumber',
                message: `${TAB}Enter office number:`
            });
        else if (role === 'Engineer')
            return inquirerPrompt(resultsSoFar, {
                type: 'input',
                name: 'github',
                message: `${TAB}Enter GitHub account:`
            });
        else if (role === 'Intern')
            return inquirerPrompt(resultsSoFar, {
                type: 'input',
                name: 'school',
                message: `${TAB}Enter school:`
            });
    }).then(({id, name, email, ...other}) => {
        if (role === 'Manager')
            resolve(employees.push(new Manager(id, name, email, other.officeNumber)));
        else if (role === 'Engineer')
            resolve(employees.push(new Engineer(id, name, email, other.github)));
        else if (role === 'Intern')
            resolve(employees.push(new Intern(id, name, email, other.school)));
    });
    ;
});


const menu = () => new Promise(resolve => {
    inquirerPrompt({}, {
        type: 'list',
        name: 'next',
        message: `${ANSI.color.yellow}What would you like to do next?${ANSI.color.reset}`,
        choices: ['Enter an engineer', 'Enter an intern', "I've finished building my team"]
    })
    .then(({next}) => {
        if (next === 'Enter an engineer')
            resolve(makeNewEmployee('Engineer'));
        else if (next === 'Enter an intern')
            resolve(makeNewEmployee('Intern'));
        else
            ; // ADD CODE FOR "FINISHED BUILDING MY TEAM"
    });
});


menu();