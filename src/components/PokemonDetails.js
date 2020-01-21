import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../store/actions/actions';

class PokemonDetails extends Component {

    componentDidMount(){
        this.fetchDetails();
    }

    fetchDetails= async()=>{
        const id=this.props.match.params.id;
        await this.props.fetchPokemonDetails(id);
        await this.props.fetchSpeciesDetails(id);
    }

    render(){
        const {id, name}= this.props.pokemonDetails;
        //const description=this.props.speciesDetails.flavor_text_entries[1].flavor_text;
        const spriteUrl=`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
        return (
            <div>
                <div>Pokemon Details</div>
                <div>Id: {id}</div>
                <div>Name: {name}</div>
                <img src={spriteUrl} alt="sprite"/>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        pokemonDetails: state.pokemonDetailsReducer.pokemonDetails,
        speciesDetails: state.pokemonDetailsReducer.speciesDetails,
        loading: state.pokemonDetailsReducer.loading,
        error: state.pokemonDetailsReducer.error,
        loading_species_details: state.pokemonDetailsReducer.loading_species_details,
        error_species_details: state.pokemonDetailsReducer.error_species_details
    }
}

function mapDispatchToProps(dispatch){
    return {
        fetchPokemonDetails: (id)=> dispatch(actions.fetch_pokemon_details_requested(id)),
        fetchSpeciesDetails: (id)=> dispatch(actions.fetch_species_details_requested(id))
    }
}

export default connect(mapStateToProps , mapDispatchToProps)(PokemonDetails);