import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../components/PokedexElement.scss';
import PokedexUtils from '../components/shared/PokedexUtils';

class PokedexElement extends Component {

    render(){
        const id=this.props.id;
        const name= PokedexUtils.capitalizeName(this.props.pokemon.name);
        const spriteUrl=`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

        return (
            <Link className="card" to={`/pokemon/${id}`}>
                <img src={spriteUrl} className="card-img-top sprite-icon" alt="sprite" />
                <div className="card-body">
                    <p className="card-text">{name}</p>
                </div>
            </Link>
        );
    }
}

export default PokedexElement;