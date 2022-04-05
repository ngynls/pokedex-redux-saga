import React, { Component } from "react";
import PokedexUtils from "../components/shared/PokedexUtils";

class PokemonDetailElement extends Component {

    displayTypes= () => {
        return this.props.types.map((type, i) => {
            let typeColor = PokedexUtils.getTypeColor(type.type.name);
            return (
                <span 
                className="badge badge-pill badge-primary" 
                key={ i }
                style={ { backgroundColor: typeColor } }
                >
                        { PokedexUtils.capitalizeName(type.type.name) }
                </span>
            );
        });
    }
    
    displayStats= () => {
        return this.props.stats.map((stat, i) => {
            return (
                <div className="stat-element"  key={ i }>
                    <span><b>{ PokedexUtils.capitalizeName(stat.stat.name) }</b> : { stat.base_stat }</span>
                    <br/>
                </div>
            );
        });
    }

    displayAbilities= () => {
        return this.props.abilities.map((ability, i) => {
            return (
                <div className="ability-element" key={ i }>
                <span>{ PokedexUtils.capitalizeName(ability.ability.name) }</span>
                </div>
            );
        });
    }

    render() {
        const { id, name, types, height, weight, description, spriteUrl, stats, abilities } = this.props;
            return (
                <div className="details-container">
                    <div className="jumbotron">
                        <img src={ spriteUrl } alt="sprite"/>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <div className="name-section"><h2>{ name }</h2></div>
                            <div className="id-section"><b>Id:</b> #{ id }</div>
                            <div className="type-section"><b>Type: </b>{
                                types ? this.displayTypes() : null
                            }
                            </div>
                            <div className="height-section"><b>Height: </b>{ height } m</div>
                            <div className="weight-section"><b>Weight: </b>{ weight } kg</div>
                            <div className="description-section"><b>Description: </b>{ description }</div>
                            <br/>
                            <div className="stats-section">
                                <h3>Base Stats</h3>
                                <hr></hr>
                                {
                                    stats ? this.displayStats() : null
                                }
                            </div>
                            <br/>
                            <div className="abilities-section">
                                <h3>Abilities</h3>
                                <hr></hr>
                                {
                                    abilities ? this.displayAbilities() : null
                                }
                            </div>
                        </div>
                    </div>
                </div>
            );
    }
}


export default PokemonDetailElement;