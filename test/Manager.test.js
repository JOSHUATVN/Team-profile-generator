const Manager = require("../lib/Manager");

test("Can set Phone Number from constructor argument", () => {
    const value = 100;
    const m = new Manager("test", 1, "test@testmail.com", value);
    expect(m.phoneNumber).toBe(value);
});

test("getJob() should return \"Manager\"", () => {
    const value = "Manager";
    const m = new Manager("test", 1, "test@testmail.com", 100);
    expect(m.getJob()).toBe(value);
});

test("Get phone number from phoneNumber()", () => {
    const value = 100;
    const m = new Manager("test", 1, "test@testmail.com", value);
    expect(m.getPhoneNumber()).toBe(value);
});