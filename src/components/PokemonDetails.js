import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../store/actions/actions';
import '../components/PokemonDetails.scss';

class PokemonDetails extends Component {

    componentDidMount(){
        this.fetchDetails();
    }

    fetchDetails= async()=>{
        const id=this.props.match.params.id;
        await this.props.fetchPokemonDetails(id);
        await this.props.fetchSpeciesDetails(id);
    }

    displayTypes=(types)=>{
        types.map((type, i) => {
            return (
                <span className="badge badge-pill" key={i}>{type.type.name}</span>
            );
        });
    } 

    render(){
        const {id, name, height, weight}= this.props.pokemonDetails;
        //const description=this.props.speciesDetails.flavor_text_entries;
        const spriteUrl=`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
        return (
            <div className="container">
                {
                    this.props.loading && this.props.loading_species_details ?
                    (
                        <div>Loading...</div>
                    )
                    :
                    (
                        <div className="details-container">
                            <div className="jumbotron">
                                <img src={spriteUrl} alt="sprite"/>
                            </div>
                            <div className="id-section">Id: {id}</div>
                            <div className="name-section">Name: {name}</div>
                            <div className="type-section">
                            </div>
                            <div className="height-section">Height: {height} dm</div>
                            <div className="weight-section">Weight: {weight} hg</div>
                        </div>
                    )
                }
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