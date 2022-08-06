
const userPrompt = require('./src/userPrompt');
const generateHTML = require('./src/generateHTML');

const open = require('open');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');


const writeToFile = employees => new Promise((resolve, reject) => {
    fs.writeFile('./dist/my-team.html', generateHTML(employees), err => {
        if (err){
            reject(err);
            return;
        }

        resolve({
            ok: true,
            message: `Webpage sucessfully generated!`
        });
    })
});


// userPrompt()
// .then(employees => {
//     console.log(employees);
//     writeToFile(employees);
// });


// TEST EMPLOYEES
writeToFile([
    new Manager(1, 'Noah', 'noahbeckercoding@gmail.com', 35),
    new Intern(3, 'Jonah', 'jonahudall@gmail.com', 'Frost School of Music'),
    new Engineer(2, 'Steve', 'stevewilliamsbass@gmail.com', 'noah35becker')
]);