const Intern = require("../lib/Intern");

test("Set school from constructor", () => {
    const value = "someSchool";
    const m = new Intern("test", 1, "test@testmail.com", value);
    expect(m.school).toBe(value);
});

test("getJob() should return \"Intern\"", () => {
    const value = "Intern";
    const m = new Intern("test", 1, "test@testmail.com", value);
    expect(m.getJob()).toBe(value);
});

test("Get school from getSchool()", () => {
    const value = "someSchool";
    const m = new Intern("test", 1, "test@testmail.com", value);
    expect(m.getSchool()).toBe(value);
});