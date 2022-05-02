const getCircleAreas = require("../src/6")

describe("getCircleAreas", () => {
    it("should exist", () => {
        expect(getCircleAreas).toBeDefined();
    });
    it("when m is less than n", () => {
        expect(getCircleAreas("2")).toEqual(expect.arrayContaining([12.56]));
    });
})