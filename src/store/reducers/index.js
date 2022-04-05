import {combineReducers} from "redux";
import pokemonReducer from "./pokemonReducer";
import pokemonDetailsReducer from "./pokemonDetailsReducer";

const rootReducer = combineReducers({
    pokemonReducer,
    pokemonDetailsReducer
});

export default rootReducer;