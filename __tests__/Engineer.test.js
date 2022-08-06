
const Engineer = require('../lib/Engineer');



test('creates an Engineer object', () => {
    const engineer = new Engineer(1, 'Noah', 'noahbeckercoding@gmail.com', 'noah35becker');

    expect(engineer.id).toBe(1);
    expect(engineer.name).toBe('Noah');
    expect(engineer.email).toBe('noahbeckercoding@gmail.com');
    expect(engineer.github).toBe('noah35becker');
    expect(engineer.role).toBe('Engineer');
});


test('gets ID of engineer', () => {
    const engineer = new Engineer(1, 'Noah', 'noahbeckercoding@gmail.com', 'noah35becker');

    expect(engineer.getID()).toBe(1);
});


test('gets name of engineer', () => {
    const engineer = new Engineer(1, 'Noah', 'noahbeckercoding@gmail.com', 'noah35becker');

    expect(engineer.getName()).toBe('Noah');
});


test('gets email of engineer', () => {
    const engineer = new Engineer(1, 'Noah', 'noahbeckercoding@gmail.com', 'noah35becker');

    expect(engineer.getEmail()).toBe('noahbeckercoding@gmail.com');
});


test('gets GitHub username of engineer', () => {
    const engineer = new Engineer(1, 'Noah', 'noahbeckercoding@gmail.com', 'noah35becker');

    expect(engineer.getGithub()).toBe('noah35becker');
});


test('gets role of engineer', () => {
    const engineer = new Engineer(1, 'Noah', 'noahbeckercoding@gmail.com', 'noah35becker');

    expect(engineer.getRole()).toBe('Engineer');
});