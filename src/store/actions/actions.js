import * as ACTION_TYPES from './action_types';

export const fetch_pokemon_success= (pokemons) =>{
    return {
        type: ACTION_TYPES.FETCH_POKEMON_SUCCESS,
        payload: pokemons.data.results
    };
}

export const fetch_pokemon_failure= () =>{
    return {
        type: ACTION_TYPES.FETCH_POKEMON_FAILURE,
    };
}

export const fetch_pokemon_requested= () =>{
    return {
        type: ACTION_TYPES.FETCH_POKEMON_REQUESTED
    };
}

export const fetch_pokemon_details_success= pokemonDetails =>{
    return {
        type: ACTION_TYPES.FETCH_POKEMON_DETAILS_SUCCESS,
        payload: pokemonDetails.data
    };
}

export const fetch_pokemon_details_failure= () =>{
    return {
        type: ACTION_TYPES.FETCH_POKEMON_DETAILS_FAILURE,
    };
}

export const fetch_pokemon_details_requested= id =>{
    return {
        type: ACTION_TYPES.FETCH_POKEMON_DETAILS_REQUESTED,
        payload: id
    };
}

export const fetch_species_details_success= speciesDetails =>{
    return {
        type: ACTION_TYPES.FETCH_SPECIES_DETAILS_SUCCESS,
        payload: speciesDetails.data
    };
}

export const fetch_species_details_failure= () =>{
    return {
        type: ACTION_TYPES.FETCH_SPECIES_DETAILS_FAILURE,
    };
}

export const fetch_species_details_requested= id =>{
    return {
        type: ACTION_TYPES.FETCH_SPECIES_DETAILS_REQUESTED,
        payload: id
    };
}