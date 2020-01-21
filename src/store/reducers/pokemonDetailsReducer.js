import * as ACTION_TYPES from '../actions/action_types';

const initialState={
    pokemonDetails:[],
    speciesDetails:[],
    loading: false,
    error: false,
    loading_species_details: false,
    error_species_details: false
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
        case ACTION_TYPES.FETCH_SPECIES_DETAILS_SUCCESS:
            return {
                ...state,
                speciesDetails: action.payload,
                loading_species_details:false,
                error_species_details:false
            }
        case ACTION_TYPES.FETCH_SPECIES_DETAILS_FAILURE:
            return {
                ...state,
                loading_species_details:false,
                error_species_details:true
            }
        case ACTION_TYPES.FETCH_SPECIES_DETAILS_REQUESTED:
            return {
                ...state,
                loading_species_details:true
            }
        default:
            return state;
    }
};

export default pokemonDetailsReducer;