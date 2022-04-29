const whoWon = require("../src/2")

describe("whoWon", (player1, player2) => {
    it("should exist", () => {
        expect(whoWon).toBeDefined();
    });
    it("when player 1 equals rock and player 2 equals paper.`", () => {
        expect(whoWon(player1 === 'rock' && player2 === 'paper')).toBe("Player 1 wins!");
    });
    it("when player 1 equals paper and player 2 equals scissors.`", () => {
        expect(whoWon(player1 === 'paper' && player2 === 'scissors')).toBe("Player 1 wins!");
    });
    it("when player 1 equals scissors and player 2 equals rock.`", () => {
        expect(whoWon(player1 === 'scissors' && player2 === 'rock ')).toBe("Player 1 wins!");
    });

})