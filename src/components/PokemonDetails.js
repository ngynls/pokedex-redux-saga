import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../store/actions/actions';

class PokemonDetails extends Component {

    componentDidMount(){
        const id=this.props.match.params.id;
        this.props.fetchPokemonDetails(id);
    }

    render(){
        const {id, name}= this.props.pokemonDetails;
        return (
            <div>
                <div>Pokemon Details</div>
                <div>Id: {id}</div>
                <div>Name: {name}</div>
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} alt="sprite"/>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        pokemonDetails: state.pokemonDetailsReducer.pokemonDetails,
        loading: state.pokemonDetailsReducer.loading,
        error: state.pokemonDetailsReducer.error
    }
}

function mapDispatchToProps(dispatch){
    return {
        fetchPokemonDetails: (id)=> dispatch(actions.fetch_pokemon_details_requested(id))
    }
}

export default connect(mapStateToProps , mapDispatchToProps)(PokemonDetails);