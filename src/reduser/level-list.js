export const levelList = (state = "", action) => {
    switch (action.type) {
        case "LEVEL_CHANGE":
            return action.payload;   
    
        default:
            return state;
    }
};