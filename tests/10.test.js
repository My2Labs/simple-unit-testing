const removeVowelsForWords = require("../src/10")

describe("removeVowelsForWords", () => {
    it("should exist", () => {
        expect(removeVowelsForWords).toBeDefined();
    });
    it("when word is entered, vowels are removed from the word and returned.", () => {
        expect(removeVowelsForWords(["Sharron was here"])).toEqual("ao a ee")
    });

})