const getEven = require("../src/15")

describe("getEven", () => {
    it("should exist", () => {
        expect(getEven).toBeDefined();
    });
    it("when array of numbers are entered, even numbers are returned.", () => {
        expect(getEven([15, 16, 17, 18, 19, 20, 21])).toEqual([16, 18, 20])
    });

})