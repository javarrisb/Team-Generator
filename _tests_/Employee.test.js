test('creates an employee object', () => {
    const employee = new Employee('Jim', 1, 'emp@test.com');

    expect(employee.name).toBe('Jim');
    expect(employee.id).toBe(value);
    expect(employee.email).toBe(value);
});