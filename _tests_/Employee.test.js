const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    const employee = new Employee('Jim', '123', 'emp@test.com');

    expect(employee.name).toBe('Jim');
    expect(employee.id).toBe('123');
    expect(employee.email).toBe('emp@test.com');

});

test('retrieves employee properties', () => {
    const employee = new Employee('Jim', '123', 'emp@test.com');

    expect(employee.getName()).toBe('Jim');
    expect(employee.getId()).toBe('123');
    expect(employee.getEmail()).toBe('emp@test.com');
    expect(employee.getRole()).toBe('Employee');
});