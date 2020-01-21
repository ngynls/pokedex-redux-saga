import axios from 'axios';

const POKEAPI_BASE_URL= 'https://pokeapi.co/api/v2';

const getDefaultPokemons= async () =>{
    const data=await axios.get(`${POKEAPI_BASE_URL}/pokemon?limit=151`);
    return data;
}

const getPokemonDetails= async id =>{
    const data=await axios.get(`${POKEAPI_BASE_URL}/pokemon/${id}`);
    return data;
}

const getSpeciesDetails= async id =>{
    const data= await axios.get(`${POKEAPI_BASE_URL}/pokemon-species/${id}`);
    return data;
}

export const api={
    getDefaultPokemons,
    getPokemonDetails,
    getSpeciesDetails
};