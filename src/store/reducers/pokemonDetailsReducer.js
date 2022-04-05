import * as ACTION_TYPES from "../actions/action_types";
import PokedexUtils from "../../components/shared/PokedexUtils";

const initialState = {
    pokemonDetails:[],
    speciesDetails:[],
    name: "",
    description: "",
    types: [],
    stats: [],
    abilities: [],
    height: 0,
    weight: 0,
    loading: false,
    error: false,
    loading_species_details: false,
    error_species_details: false
};

const pokemonDetailsReducer = (state = initialState, action) => {
    switch (action.type){
        case ACTION_TYPES.FETCH_POKEMON_DETAILS_SUCCESS:
            return {
                ...state,
                loading: false,
                pokemonDetails: action.payload,
                name: PokedexUtils.capitalizeName(action.payload.name),
                height: PokedexUtils.convertHeightToMeters(action.payload.height),
                weight: PokedexUtils.convertWeightToKg(action.payload.weight),
                types: action.payload.types,
                stats: action.payload.stats,
                abilities: action.payload.abilities
            };
        case ACTION_TYPES.FETCH_POKEMON_DETAILS_FAILURE:
            return {
                ...state,
                loading: false,
                error: true
            };
        case ACTION_TYPES.FETCH_POKEMON_DETAILS_REQUESTED:
            return {
                ...state,
                loading: true
            };
        case ACTION_TYPES.FETCH_SPECIES_DETAILS_SUCCESS:
            const en_description = action.payload.flavor_text_entries.filter((desc) => desc.language.name === "en" && desc.version.name === "omega-ruby")[0].flavor_text;
            return {
                ...state,
                speciesDetails: action.payload,
                description: en_description,
                loading_species_details:false,
                error_species_details:false
            };
        case ACTION_TYPES.FETCH_SPECIES_DETAILS_FAILURE:
            return {
                ...state,
                loading_species_details:false,
                error_species_details:true
            };
        case ACTION_TYPES.FETCH_SPECIES_DETAILS_REQUESTED:
            return {
                ...state,
                loading_species_details:true
            };
        default:
            return state;
    }
};

export default pokemonDetailsReducer;