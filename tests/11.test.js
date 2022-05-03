const number = require("../src/11")

describe("number", () => {
    it("should exist", () => {
        expect(number).toBeDefined();
    });
    it("when number is entered over 10, number is returned.", () => {
        expect(number([17])).toEqual([17])
    });

})