const getEven = require("../src/14")

describe("getEven", () => {
    it("should exist", () => {
        expect(getEven).toBeDefined();
    });
    it("when array of numbers are entered, even numbers are returned.", () => {
        expect(getEven([17, 18, 19, 20])).toEqual([18, 20])
    });

})