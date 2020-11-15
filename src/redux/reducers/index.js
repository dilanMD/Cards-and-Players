import { combineReducers } from "redux";

import playerReducer from "./playerReducer";
import authReducer from "./authReducer";

const rootReducer = combineReducers({
    auth: authReducer,
    player: playerReducer
});

export default rootReducer;