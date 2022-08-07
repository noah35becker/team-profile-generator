
const open = require('open');

const terminal = require('./src/terminal');
const writeToFile = require('./src/writeToFile');



const filepath = './dist/my-team.html';


terminal.userPrompt()
.then(employees => writeToFile(filepath, employees))
.then(results => {
    if (results.ok)
        return terminal.successWaitForEnter();
    else
        throw 'File creation error | Please try again';
}).then(() => open(filepath))
.catch(err => terminal.logError(err));