import { generateCards } from "../common/game.helper";

export const gameStart = () => {
    return {
        type: "START_GAME",
        cards: generateCards()
    }
};