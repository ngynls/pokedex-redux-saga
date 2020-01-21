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
    }

    render(){
        const {id, name}= this.props.pokemonDetails;
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