const Engineer = require("../lib/Engineer");

test("Set github profile from constructor", () => {
    const value = "GithubProfile";
    const m = new Engineer("test", 1, "test@testmail.com", value);
    expect(m.github).toBe(value);
});

test("getJob() should return \"Engineer\"", () => {
    const value = "Engineer";
    const m = new Engineer("test", 1, "test@testmail.com", "GithubProfile");
    expect(m.getJob()).toBe(value);
});

test("Get github username from getUser()", () => {
    const value = "GithubProfile";
    const m = new Engineer("test", 1, "test@testmail.com", value);
    expect(m.getUser()).toBe(value);
});