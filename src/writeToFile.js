
const fs = require('fs');
const generateHTML = require('./generateHTML');


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


module.exports = writeToFile;