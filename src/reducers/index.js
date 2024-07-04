import { gamesReducer } from "./gamesReducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  games: gamesReducer,
});

export default allReducers;
