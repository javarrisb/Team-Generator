const Intern = require('../lib/Intern');

test('creates an intern object', () => {
    const intern = new Intern('Jim', '123', 'emp@test.com', 'UNC');

    expect(intern.name).toBe('Jim');
    expect(intern.id).toBe('123');
    expect(intern.email).toBe('emp@test.com');
    expect(intern.school).toBe('UNC');
});

test('retrieves intern properties', () => {
    const intern = new Intern('Jim', '123', 'emp@test.com', 'UNC');

    expect(intern.getName()).toBe('Jim');
    expect(intern.getId()).toBe('123');
    expect(intern.getEmail()).toBe('emp@test.com');
    expect(intern.getSchool()).toBe('UNC');
    expect(intern.getRole()).toBe('Intern');
})