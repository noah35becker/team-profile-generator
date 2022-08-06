
const Employee = require('../lib/Employee');



test('creates an Employee object', () => {
    const employee = new Employee(1, 'Noah', 'noahbeckercoding@gmail.com');

    expect(employee.id).toBe(1);
    expect(employee.name).toBe('Noah');
    expect(employee.email).toBe('noahbeckercoding@gmail.com');
    expect(employee.role).toBe('Employee');
});


test('gets ID of employee', () => {
    const employee = new Employee(1, 'Noah', 'noahbeckercoding@gmail.com');

    expect(employee.getID()).toBe(1);
});


test('gets name of employee', () => {
    const employee = new Employee(1, 'Noah', 'noahbeckercoding@gmail.com');

    expect(employee.getName()).toBe('Noah');
});


test('gets email of employee', () => {
    const employee = new Employee(1, 'Noah', 'noahbeckercoding@gmail.com');

    expect(employee.getEmail()).toBe('noahbeckercoding@gmail.com');
});


test('gets role of employee', () => {
    const employee = new Employee(1, 'Noah', 'noahbeckercoding@gmail.com');

    expect(employee.getRole()).toBe('Employee');
});