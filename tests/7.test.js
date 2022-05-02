const getCircleArea = require("../src/7")

describe("getCircleArea", () => {
    it("should exist", () => {
        expect(getCircleArea).toBeDefined();
    });
    it("return area of circle", () => {
        expect(getCircleArea("2")).toEqual(12.566370614359172);
    });
})