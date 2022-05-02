const greetPeople = require("../src/8")

describe("greetPeople", () => {
    it("should exist", () => {
        expect(greetPeople).toBeDefined();
    });
    it("when name is entered, greeting returns", () => {
        expect(greetPeople(["Sharron"])).toEqual("Hello Sharron")
    });

})