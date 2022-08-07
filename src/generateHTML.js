
// Title of page
const title = 'My Team';



// Sort by manager / engineer / intern, then sort by ascending ID within each
const sortEmployees = employees => {
    let [managers, engineers, interns] = [
        employees.filter(emp => emp.getRole() === 'Manager'),
        employees.filter(emp => emp.getRole() === 'Engineer'),
        employees.filter(emp => emp.getRole() === 'Intern')
    ]

    return [
        ...managers.sort((a, b) => a.getID() - b.getID()),
        ...engineers.sort((a, b) => a.getID() - b.getID()),
        ...interns.sort((a, b) => a.getID() - b.getID())
    ];
};


// Get icon for given role
const getIcon = role => {
    if (role === 'Manager')
        return '<i class="fa-solid fa-crown"></i>';
    if (role === 'Engineer')
        return '<i class="fa-solid fa-brain"></i>';
    if (role === 'Intern')
        return '<i class="fa-solid fa-graduation-cap"></i>';
}


// Get HTML (Bootstrap cards) for all employees
const getEmployeesHTML = (employees) => {
    let output = '';

    for (const employee of employees)
        output +=
            `<div class="card emp-wrapper my-4 mx-5 rounded border border-dark">
                <div
                    class="card-title rounded-top d-flex flex-column justify-content-center text-center mb-0 px-3 py-2
                        ${
                            employee.getRole() === 'Manager' ?
                                'bg-primary text-white'
                            : employee.getRole() === 'Engineer' ?
                                'bg-warning'
                            : // Intern
                                'bg-info text-white'
                        }
                ">
                    <h5 class="emp-name my-1">${employee.getName()}</h5>
                    <h5 class="emp-role my-1">${getIcon(employee.getRole())}&nbsp;&nbsp;${employee.getRole()}&nbsp;&nbsp;${getIcon(employee.getRole())}</h5>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="emp-data list-group-item"><span>ID:</span> ${employee.getID()}</li>
                    <li class="emp-data list-group-item"><a href="mailto:${employee.getEmail()}" target="_blank"><span>${employee.getEmail()}</span></a></li>
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


// Get ALL of webpage's HTML
const generateHTML = (employees) => {
    employees = sortEmployees(employees);

    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,400;0,600;1,400;1,600&display=swap" />

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css" integrity="sha512-1sCRPdkRXhBV2PBLUdRb4tMg1w2YPf37qatUFeS7zlBy7jJI8Lf4VHwWfZZfpXtYSLy85pkm9GaYVYMfw5BC1A==" crossorigin="anonymous" referrerpolicy="no-referrer" />

    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous" />
    <link rel="stylesheet" href="./assets/css/style.css" />

    <title>${title}</title>
</head>
<body class="d-flex flex-column">
    <header class="flex-grow-0 pt-4 pb-4">
        <h1 class="text-center">${title}</h1>
    </header>

    <main class="flex-grow-1 d-flex align-items-center justify-content-center pb-5">
        <div class="employees-container d-flex flex-row flex-wrap justify-content-center">
            ${getEmployeesHTML(employees)}
        </div>
    </main>
</body>
</html>`

};



// EXPORT
module.exports = generateHTML;