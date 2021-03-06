const gameState = {
    cards: [],
    time: new Date(),
    isStarted: false,
    steps: []
};

export const game = (state = gameState, action) => {
    switch (action.type) {
        case "START_GAME":
            return {
                ...state,
                cards: action.cards,
                time: new Date(),
                isStarted: true,
            };
        case "ADD_STEP": {
            return {
            ...state,steps: [ ...state.steps, action.step ]
            };
        }
        case "СARDS_GUESSED" : {
            const [id1, id2] = action.cards;
            return {
                ...state,
                steps: [],
                cards: state.cards.map(card => {
                    if (card.id === id1 || card.id === id2) {
                        return {
                            ...card,
                            isGuessed: true
                        }
                    } else {
                        return card;
                    }
                })
            }
        }

        case "СARDS_NOT_GUESSED": {
            return {
                ...state,
                steps: []
            }
        }
      
    
        default:
            return state;
    }
};