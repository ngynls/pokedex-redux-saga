import * as ACTION_TYPES from '../actions/action_types';

const initialState={
    pokemons:[],
    loading: false,
    error: false,
    searchTerm: ''
};

const pokemonReducer=(state=initialState, action)=>{
    switch(action.type){
        case ACTION_TYPES.FETCH_POKEMON_SUCCESS:
            const addPokemonIds=action.payload.map((pokemon, i)=>{
                return {
                    ...pokemon,
                    id: i+1
                }
            });
            return {
                ...state,
                loading: false,
                pokemons: addPokemonIds
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
        case ACTION_TYPES.SEARCH_POKEMON_BY_NAME:
            return {
                ...state,
                searchTerm: action.payload
            }
        default:
            return state;
    }
};

export default pokemonReducer;