
const title = 'My team';


const sortEmployees = employees => [
    ...employees.filter(emp => emp.getRole() === 'Manager'),
    ...employees.filter(emp => emp.getRole() === 'Engineer'),
    ...employees.filter(emp => emp.getRole() === 'Intern')
];


const getEmployeesHTML = (employees) => {
    let output = '';

    for (const employee of employees)
        output +=
            `<div class="card employee-wrapper">
                <div class="card-title">
                    <h5 class="emp-name">${employee.getName()}</h5>
                    <h5 class="emp-role">[PUT ICON HERE] ${employee.getRole()}</h5>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="emp-data list-group-item"><span>ID:</span> ${employee.getID()}</li>
                    <li class="emp-data list-group-item"><a href="mailto:${employee.getEmail()}" target="_blank">${employee.getEmail()}</a></li>
                    <li class="emp-data list-group-item">${
                        employee.getRole() === 'Manager' ?
                            `<span>Office #:</span> ${employee.getOfficeNumber()}`
                        : employee.getRole() === 'Engineer' ?
                            `<span>GitHub:</span> <a href="https://github.com/${employee.getGithub()}" target="_blank">${employee.getGithub()}</a>`
                        : // Intern
                            `<span>School:</span> ${employee.getSchool()}`
                    }</li>
                </ul>
            </div>
            `
        ;
    
    return output;
};


const generateHTML = (employees) => {
    console.log(employees);
    
    employees = sortEmployees(employees);

    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="./assets/css/style.css">

    <title>${title}</title>
</head>
<body>
    <header>
        <h1 class="text-center">${title}</h1>
    </header>

    <main class="employees-container">
        ${getEmployeesHTML(employees)}
    </main>
</body>
</html>`

};


module.exports = generateHTML;