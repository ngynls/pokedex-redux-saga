import { call, put, takeLatest, all } from "redux-saga/effects";
import * as ACTION_TYPES from '../actions/action_types';
import * as actions from '../actions/actions';
import { api } from '../../api/pokemonApi';

function* fetchPokemonDetails(action){
    try{
        const data= yield call(api.getPokemonDetails, action.payload);
        yield put(actions.fetch_pokemon_details_success(data));
    }
    catch(error){
        yield put(actions.fetch_pokemon_details_failure());
        return;
    }
}

function* fetchSpeciesDetails(action){
    try{
        const data=yield call(api.getSpeciesDetails, action.payload);
        yield put(actions.fetch_species_details_success(data));
    }
    catch(error){
        yield put(actions.fetch_species_details_failure());
        return;
    }
}

export default function* watchFetchPokemonDetails(){
    yield all([
        takeLatest(ACTION_TYPES.FETCH_POKEMON_DETAILS_REQUESTED, fetchPokemonDetails),
        takeLatest(ACTION_TYPES.FETCH_SPECIES_DETAILS_REQUESTED, fetchSpeciesDetails),
    ]);
}