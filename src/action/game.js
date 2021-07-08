import { generateCards } from "../common/game.helper";

export const gameStart = (difficulty) => {
    return {
        type: "START_GAME",
        cards: generateCards(difficulty)
    }
};

export const addStep = (id, image, steps) => {
    if (steps.length === 0) {
        return {
            type: "ADD_STEP",
            step: { id, image }
        };
    } else if (steps[0].image === image) {
        return {
            type: "СARDS_GUESSED",
            cards: [ steps[0].id, id ]
        } 
    } else {
      return {
        type: "СARDS_NOT_GUESSED"
      }
    }
};