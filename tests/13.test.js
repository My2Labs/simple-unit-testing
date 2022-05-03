const getLargestNumber = require("../src/13")

describe("getLargestNumber", () => {
    it("should exist", () => {
        expect(getLargestNumber).toBeDefined();
    });
    it("Test", () => {
        expect(getLargestNumber([17, 18, 19, 20])).toEqual([18, 19, 20, 21])
    });

})