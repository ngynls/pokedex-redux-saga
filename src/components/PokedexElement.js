import React, { Component } from 'react';
import '../components/PokedexElement.scss';

class PokedexElement extends Component {

    capitalizeName = name =>{
        return name.charAt(0).toUpperCase() + name.slice(1);
    }

    render(){
        const id=this.props.id;
        const name= this.capitalizeName(this.props.pokemon.name);
        const spriteUrl=`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

        return (
            <a className="card" href={`/pokemon/${id}`}>
                <img src={spriteUrl} className="card-img-top" alt="sprite" />
                <div className="card-body">
                    <p className="card-text">{name}</p>
                </div>
            </a>
        );
    }
}

export default PokedexElement;