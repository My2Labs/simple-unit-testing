const checkFive = require("../src/1")

describe("checkFive", () => {
    it("should exist", () => {
        expect(checkFive).toBeDefined();
    });
    it("when number > 5 it should return `${num} is greater than 5.`", () => {
        expect(checkFive(6)).toBe("6 is greater than 5.");
    });
    it("when number < 5 it should return `${num} is less than 5.`", () => {
        expect(checkFive(4)).toBe("4 is less than 5.");
    });
    it("when number = 5 it should return `${num} is equal to 5.`", () => {
        expect(checkFive(5)).toBe("5 is equal to 5.");
    });

})