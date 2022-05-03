const removeVowelsForWords = require("../src/10")

describe("removeVowelsForWords", () => {
    it("should exist", () => {
        expect(removeVowelsForWords).toBeDefined();
    });
    it("when words are entered, vowels are removed from the words and returned.", () => {
        expect(removeVowelsForWords(["Sharron", "was", "here"])).toEqual(["__a__o_", "_a_", "_e_e"])
    });

})