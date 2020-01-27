import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../store/actions/actions';
import PokedexElement from './PokedexElement';

class Home extends Component{

    componentDidMount(){
       this.props.fetchPokemons();
    }

    render(){
        const pokemonList=this.props.pokemons.map( (pokemon, i) => {
            return (
                <div className="col-xl-4 col-lg-6 col-md-4" key={i+1}>
                    <PokedexElement key={i+1} id={i+1} pokemon={pokemon} />
                </div>
            );
        });
        return(
            <div className="container">
                <div className="row">
                    {
                        pokemonList
                    }
                </div>
            </div>
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
        fetchPokemons: ()=> dispatch(actions.fetch_pokemon_requested()),
        searchPokemonByName: (name)=>dispatch(actions.search_by_name(name))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);