const gameState = {
    cards: [],
    time: new Date(),
    isStarted: false
};

export const game = (state = gameState, action) => {
    switch (action.type) {
        case "START_GAME":
            return {
                cards: action.cards,
                time: new Date(),
                isStarted: true 
            };   
    
        default:
            return state;
    }
};