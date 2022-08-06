
const Manager = require('../lib/Manager');



test('gets name of manager', () => {
    const manager = new Manager('Noah', 'noahbeckercoding@gmail.com', 1);

    expect(manager.getName()).toBe('Noah');
});


test('gets ID of manager', () => {
    const manager = new Manager('Noah', 'noahbeckercoding@gmail.com', 1);

    expect(manager.getID()).toBe(1);
});


test('gets email of manager', () => {
    const manager = new Manager('Noah', 'noahbeckercoding@gmail.com', 1);

    expect(manager.getEmail()).toBe('noahbeckercoding@gmail.com');
});


test('gets role of manager', () => {
    const manager = new Manager('Noah', 'noahbeckercoding@gmail.com', 1);

    expect(manager.getRole()).toBe('Manager');
});


test('gets office # of manager', () => {
    const manager = new Manager('Noah', 'noahbeckercoding@gmail.com', 40, 1);

    expect(manager.getOfficeNumber()).toBe(40);
});