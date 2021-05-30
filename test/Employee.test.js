const Employee = require("../lib/Employee");
describe("Employee", () => {
    it("Can represent Employee", () => {
        const m = new Employee();
        expect(typeof(m)).toBe("object");
    });

    it("Can set name for constructor arguments", () => {
        const name = "Chris";
        const m = new Employee(name);
        expect(m.name).toBe(name);
    });

    it("Can set ID for constructor arguments",() => {
        const value = 100;
        const m = new Employee("test", value);
        expect(m.id).toBe(value);
    });

    it("Can set Emails for constructor arguments", () => {
        const value = "test@testmail.com";
        const m = new Employee("test", 1, value);
        expect(m.getName()).toBe(value);
    });

    describe("getName", () => {
        it("Get name from getName()", () => {
            const value = "Chris";
            const m = new Employee(value);
            expect(m.getName()).toBe(value);
        });
    });

    describe("getId", () => {
        it("Get ID from getID()", () => {
            const value = 100;
            const m = new Employee("test", value);
            expect(m.getId()).toBe(value);
        });
    });

    describe("getEmail", () => {
        it("Get Email from getEmail()", () => {
            const value = "test@testmail.com";
            const m = new Employee("test", 1, value);
            expect(m.getEmail()).toBe(value);
        });
    });

    describe("getJob", () => {
        it("getJob() should return \"Employee\"", () => {
            const value = "Employee";
            const m = new Employee("Chris", 1, "test@testmail.com");
            expect(m.getJob()).toBe(value);
        });
    });

});