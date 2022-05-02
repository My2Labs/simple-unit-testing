const getCircleAreas = require("../src/6")

describe("getCircleAreas", () => {
    it("should exist", () => {
        expect(getCircleAreas).toBeDefined();
    });
    it("return area of circle", () => {
        expect(getCircleAreas("2")).toEqual(expect.arrayContaining([12.56]));
    });
})