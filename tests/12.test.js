const number = require("../src/12")

describe("number", () => {
    it("should exist", () => {
        expect(number).toBeDefined();
    });
    it("when an array of numbers are entered, the first and last numbers are removed, and the remaining numbers are returned.", () => {
        expect(number([17, 18, 19, 20])).toEqual([18, 19])
    });

})