const removeVowels = require("../src/9")

describe("removeVowels", () => {
    it("should exist", () => {
        expect(removeVowels).toBeDefined();
    });
    it("when word is entered, vowels are removed from the word and returned.", () => {
        expect(removeVowels("Sharron")).toEqual("__a__o_")
    });

})