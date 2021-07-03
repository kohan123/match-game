import { levelList } from "./level-list";
import { combineReducers } from "redux";
import { game } from "./game";

const rootReducer = combineReducers({
    levelList,
    game
});

export default rootReducer;