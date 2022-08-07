
const userPrompt = require('./src/userPrompt');
const writeToFile = require('./src/writeToFile');

// const open = require('open');


userPrompt()
.then(employees => {
    console.log(employees);
    writeToFile(employees);
});