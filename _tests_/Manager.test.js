const Manager = require('../lib/Manager');

test('creates a manager object', () => {
    const manager = new Manager('Jim', '123', 'emp@test.com', '112');

    expect(manager.name).toBe('Jim');
    expect(manager.id).toBe('123');
    expect(manager.email).toBe('emp@test.com');
    expect(manager.officeNumber).toBe('112');
});

test('retrieves manager properties', () => {
    const manager = new Manager('Jim', '123', 'emp@test.com', '112');

    expect(manager.getName()).toBe('Jim');
    expect(manager.getId()).toBe('123');
    expect(manager.getEmail()).toBe('emp@test.com');
    expect(manager.getOffice()).toBe('112');
    expect(manager.getRole()).toBe('Manager');
});