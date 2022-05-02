const myFunction = require("../src/4")

describe("myFunction", () => {
    it("should exist", () => {
        expect(myFunction).toBeDefined();
    });
    it("when tax code equals 1150L, salary is multiplied by 0.1", () => {
        expect(myFunction(50000, "1150L", 2000, 3000)).toEqual("Your gross income is £50000, and your net income is £37099.75.")
    });
    it("when tax code equals 1150L, salary is multiplied by 0.08", () => {
        expect(myFunction(50000, "ST", 2000, 3000)).toEqual("Your gross income is £50000, and your net income is £39599.75.")
    });
    it("when tax code equals 1150L, salary is multiplied by 0.05", () => {
        expect(myFunction(50000, "anythingElse", 2000, 3000)).toEqual("Your gross income is £50000, and your net income is £38099.75.")
    });
})