const Engineer = require('../lib/Engineer');

test('creates an engineer object', () => {
    const engineer = new Engineer('Jim', '123', 'emp@test.com', 'jimb100');

    expect(engineer.name).toBe('Jim');
    expect(engineer.id).toBe('123');
    expect(engineer.email).toBe('emp@test.com');
    expect(engineer.github).toBe('jimb100');
});

test('retrieves engineer properties', () => {
    const engineer = new Engineer('Jim', '123', 'emp@test.com', 'jimb100');

    expect(engineer.getName()).toBe('Jim');
    expect(engineer.getId()).toBe('123');
    expect(engineer.getEmail()).toBe('emp@test.com');
    expect(engineer.getGithub()).toBe('jimb100');
    expect(engineer.getRole()).toBe('Engineer');
})