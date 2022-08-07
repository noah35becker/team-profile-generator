
const fs = require('fs');
const generateHTML = require('./generateHTML');


const writeToFile = (filepath, employees) => new Promise((resolve, reject) => {
    fs.writeFile(filepath, generateHTML(employees), err => {
        if (err){
            reject(err);
            return;
        }

        resolve({
            ok: true,
            filepath: filepath
        });
    })
});


module.exports = writeToFile;