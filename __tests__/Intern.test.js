
const Intern = require('../lib/Intern');



test('creates an Intern object', () => {
    const intern = new Intern(1, 'Noah', 'noahbeckercoding@gmail.com', 'The New School');

    expect(intern.id).toBe(1);
    expect(intern.name).toBe('Noah');
    expect(intern.email).toBe('noahbeckercoding@gmail.com');
    expect(intern.school).toBe('The New School');
    expect(intern.role).toBe('Intern');
});


test('gets ID of intern', () => {
    const intern = new Intern(1, 'Noah', 'noahbeckercoding@gmail.com', 'The New School');

    expect(intern.getID()).toBe(1);
});


test('gets name of intern', () => {
    const intern = new Intern(1, 'Noah', 'noahbeckercoding@gmail.com', 'The New School');

    expect(intern.getName()).toBe('Noah');
});


test('gets email of intern', () => {
    const intern = new Intern(1, 'Noah', 'noahbeckercoding@gmail.com', 'The New School');

    expect(intern.getEmail()).toBe('noahbeckercoding@gmail.com');
});


test('gets school of intern', () => {
    const intern = new Intern(1, 'Noah', 'noahbeckercoding@gmail.com', 'The New School');

    expect(intern.getSchool()).toBe('The New School');
});


test('gets role of intern', () => {
    const intern = new Intern(1, 'Noah', 'noahbeckercoding@gmail.com', 'The New School');

    expect(intern.getRole()).toBe('Intern');
});