import { levelList } from "./level-list";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    levelList: levelList
});

export default rootReducer;