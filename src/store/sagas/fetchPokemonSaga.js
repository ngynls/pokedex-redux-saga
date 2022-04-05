import {call, put, takeLatest, all} from "redux-saga/effects";
import * as ACTION_TYPES from "../actions/action_types";
import * as actions from "../actions/actions";
import {api} from "../../api/pokemonApi";

function* fetchDefaultPokemons(){
    try {
        const data = yield call(api.getDefaultPokemons);
        yield put(actions.fetch_pokemon_success(data));
    } catch (error){
        yield put(actions.fetch_pokemon_failure());
        return;
    }
}

export default function* watchFetchPokemon(){
    yield all([
        takeLatest(ACTION_TYPES.FETCH_POKEMON_REQUESTED, fetchDefaultPokemons)
    ]);
}