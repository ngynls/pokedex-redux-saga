import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../store/actions/actions";
import PokedexElement from "./PokedexElement";
import SearchBar from "./shared/Searchbar";

class Home extends Component{

    componentDidMount() {
       this.props.fetchPokemons();
    }

    render() {
        const filteredPokemons = this.props.pokemons.filter((pokemon) => {
            return pokemon.name.toLowerCase().indexOf(this.props.searchTerm.toLowerCase()) !== -1;
        });
        return (
            <div className="container">
                <SearchBar setSearchTerm={ this.props.onSearch }/>
                <div className="row">
                    {
                        filteredPokemons.map( (pokemon, i) => {
                            return (
                                <div className="col-xl-4 col-lg-6 col-md-4" key={ i + 1 }>
                                    <PokedexElement key={ i + 1 } id={ pokemon.id } pokemon={ pokemon } />
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        pokemons: state.pokemonReducer.pokemons,
        loading: state.pokemonReducer.loading,
        error: state.pokemonReducer.error,
        searchTerm: state.pokemonReducer.searchTerm
    };
}

function mapDispatchToProps(dispatch) {
    return {
        fetchPokemons: () => dispatch(actions.fetch_pokemon_requested()),
        onSearch: (e) => dispatch(actions.search_pokemon_by_name(e.target.value))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);