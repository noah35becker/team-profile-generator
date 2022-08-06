
const Manager = require('../lib/Manager');



test('creates a Manager object', () => {
    const manager = new Manager(1, 'Noah', 'noahbeckercoding@gmail.com', 40);

    expect(manager.id).toBe(1);
    expect(manager.name).toBe('Noah');
    expect(manager.email).toBe('noahbeckercoding@gmail.com');
    expect(manager.officeNumber).toBe(40);
    expect(manager.role).toBe('Manager');
});


test('gets ID of manager', () => {
    const manager = new Manager(1, 'Noah', 'noahbeckercoding@gmail.com', 40);

    expect(manager.getID()).toBe(1);
});


test('gets name of manager', () => {
    const manager = new Manager(1, 'Noah', 'noahbeckercoding@gmail.com', 40);

    expect(manager.getName()).toBe('Noah');
});


test('gets email of manager', () => {
    const manager = new Manager(1, 'Noah', 'noahbeckercoding@gmail.com', 40);

    expect(manager.getEmail()).toBe('noahbeckercoding@gmail.com');
});


test('gets office # of manager', () => {
    const manager = new Manager(1, 'Noah', 'noahbeckercoding@gmail.com', 40);

    expect(manager.getOfficeNumber()).toBe(40);
});


test('gets role of manager', () => {
    const manager = new Manager(1, 'Noah', 'noahbeckercoding@gmail.com', 40);

    expect(manager.getRole()).toBe('Manager');
});