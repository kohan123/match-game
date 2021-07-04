import { generateCards } from "../common/game.helper";

export const gameStart = (difficulty) => {
    return {
        type: "START_GAME",
        cards: generateCards(difficulty)
    }
};