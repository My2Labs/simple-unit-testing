const getLargestNumber = require("../src/13")

describe("getLargestNumber", () => {
    it("should exist", () => {
        expect(getLargestNumber).toBeDefined();
    });
    it('when array of numbers is entered, largest number is returned.', () => {
        expect(getLargestNumber([13, 14, 15, 16, 17])).toEqual([17])
    })

})