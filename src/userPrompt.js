
const inquirer = require('inquirer');
const [Engineer, Intern, Manager] = [require('../lib/Engineer'), require('../lib/Intern'), require('../lib/Manager')];


const TAB = '    '; // 4 spaces


// Inquirer prompt, prepending results so far
const inquirerPrompt = (resultsSoFar, questions) => new Promise(resolve => {
    inquirer.prompt(questions)
    .then(theseResults => resolve({...resultsSoFar, ...theseResults}));
});


const makeNewEmployee = (role) => new Promise(resolve => {
    console.log(role + ':');
    
    inquirerPrompt({}, [
        {
            type: 'input',
            name: 'name',
            message: `${TAB}What's your name?`
        },
        {
            type: 'input',
            name: 'id',
            message: `${TAB}What's your employee ID?`
        },
        {
            type: 'input',
            name: 'email',
            message: `${TAB}What's your email address?`
        },
    ]).then(resultsSoFar => {
        if (role === 'Manager')
            return inquirerPrompt(resultsSoFar, {
                type: 'input',
                name: 'officeNumber',
                message: `${TAB}What's your office number?`
            });
        else if (role === 'Engineer')
            return inquirerPrompt(resultsSoFar, {
                type: 'input',
                name: 'github',
                message: `${TAB}What's your GitHub account?`
            });
        else if (role === 'Intern')
            return inquirerPrompt(resultsSoFar, {
                type: 'input',
                name: 'school',
                message: `${TAB}What's school did you attend?`
            });
    }).then(({id, name, email, ...other}) => {
        if (role === 'Manager')
            resolve(new Manager(id, name, email, other.officeNumber));
        else if (role === 'Engineer')
            resolve(new Engineer(id, name, email, other.github));
        else if (role === 'Intern')
            resolve(new Intern(id, name, email, other.school));
    });
    ;
});


makeNewEmployee('Intern')
.then(newObj => console.log(newObj));