const whoWon = require("../src/2")

describe("whoWon", () => {
    it("should exist", () => {
        expect(whoWon).toBeDefined();
    });
    it("when player 1 equals player 2.`", () => {
        expect(whoWon("paper", "paper")).toBe("TIE!");
    });
    it("when player 1 equals rock and player 2 equals paper.`", () => {
        expect(whoWon("rock", "paper")).toBe("Player 2 wins!");
    });
    it("when player 1 equals paper and player 2 equals scissors.`", () => {
        expect(whoWon("paper", "scissors")).toBe("Player 2 wins!");
    });
    it("when player 1 equals scissors and player 2 equals rock.`", () => {
        expect(whoWon("scissors", "rock")).toBe("Player 2 wins!");
    });

})