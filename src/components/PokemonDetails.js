import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../store/actions/actions';
import '../components/PokemonDetails.scss';
import PokemonDetailElement from './PokemonDetailElement';

class PokemonDetails extends Component {

    state={
        id: '',
        spriteUrl: ''
    }

    componentDidMount(){
        this.fetchDetails();
    }

    fetchDetails= async()=>{
        const id=this.props.match.params.id;
        const spriteUrl='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'+id+'.png';
        await this.props.fetchPokemonDetails(id);
        await this.props.fetchSpeciesDetails(id);
        this.setState({
            ...this.state,
            id,
            spriteUrl,
        });
    }

    render(){
        return (
            <div className="container">
                {
                    this.props.loading && this.props.loading_species_details ?
                    (
                        <div>Loading...</div>
                    )
                    :
                    (
                        <PokemonDetailElement 
                        id={this.state.id} 
                        name={this.props.name} 
                        types={this.props.types}
                        stats={this.props.stats}
                        abilities={this.props.abilities} 
                        height={this.props.height} 
                        weight={this.props.weight} 
                        description={this.props.description}
                        spriteUrl={this.state.spriteUrl}
                        />
                    )
                }
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        name: state.pokemonDetailsReducer.name,
        types: state.pokemonDetailsReducer.types,
        height: state.pokemonDetailsReducer.height,
        weight: state.pokemonDetailsReducer.weight,
        description: state.pokemonDetailsReducer.description,
        stats: state.pokemonDetailsReducer.stats,
        abilities: state.pokemonDetailsReducer.abilities,
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