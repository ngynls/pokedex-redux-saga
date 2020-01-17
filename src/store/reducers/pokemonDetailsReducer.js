import * as ACTION_TYPES from '../actions/action_types';

const initialState={
    pokemonDetails:[],
    loading: false,
    error: false
};

const pokemonDetailsReducer=(state=initialState, action)=>{
    switch(action.type){
        case ACTION_TYPES.FETCH_POKEMON_DETAILS_SUCCESS:
            return {
                ...state,
                loading: false,
                pokemonDetails: action.payload
            };
        case ACTION_TYPES.FETCH_POKEMON_DETAILS_FAILURE:
            return {
                ...state,
                loading: false,
                error: true
            }
        case ACTION_TYPES.FETCH_POKEMON_DETAILS_REQUESTED:
            return {
                ...state,
                loading: true
            }
        default:
            return state;
    }
};

export default pokemonDetailsReducer;