import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../store/actions/actions';

class Home extends Component{

    componentDidMount(){
       this.props.fetchPokemons();
    }

    render(){
        return(
            <div>Homepage works!</div>
        );
    }
}

function mapStateToProps(state){
    return {
        pokemons: state.pokemonReducer.pokemons,
        loading: state.pokemonReducer.loading,
        error: state.pokemonReducer.error
    }
}

function mapDispatchToProps(dispatch){
    return {
        fetchPokemons: ()=> dispatch(actions.fetch_pokemon_requested())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);