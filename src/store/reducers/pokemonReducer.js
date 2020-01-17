import * as ACTION_TYPES from '../actions/action_types';

const initialState={
    pokemons:[],
    loading: false,
    error: false
};

const pokemonReducer=(state=initialState, action)=>{
    switch(action.type){
        case ACTION_TYPES.FETCH_POKEMON_SUCCESS:
            return {
                ...state,
                loading: false,
                pokemons: action.payload
            };
        case ACTION_TYPES.FETCH_POKEMON_FAILURE:
            return {
                ...state,
                loading: false,
                error: true
            }
        case ACTION_TYPES.FETCH_POKEMON_REQUESTED:
            return {
                ...state,
                loading: true
            }
        default:
            return state;
    }
};

export default pokemonReducer;