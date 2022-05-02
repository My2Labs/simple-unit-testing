const compareNumbers = require("../src/5")

describe("compareNumbers", () => {
    it("should exist", () => {
        expect(compareNumbers).toBeDefined();
    });
    it("when m is less than n", () => {
        expect(compareNumbers(10, 17)).toEqual("10 is smaller than 17");
    });
    it("when m is more than n", () => {
        expect(compareNumbers(17, 10)).toEqual("17 is bigger than or equal to 10");
    });
    it("when m is equal to n", () => {
        expect(compareNumbers(17, 17)).toEqual("17 is bigger than or equal to 17");
    });
});