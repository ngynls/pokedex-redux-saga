import React from "react";
import renderer from "react-test-renderer";
import PokemonDetailElement from "./PokemonDetailElement";

test("matches snapshot of PokedexDetailElement", () => {
    const id = 1;
    const name = "Bulbasaur";
    const types = [
        {type: {name: "Poison"}},
        {type: {name: "Grass"}}
    ];
    const stats = [
        {
            base_stat: 45,
            stat:{name: "Speed"}
        },
        {
            base_stat: 65,
            stat:{name: "Special-defense"}
        },
        {
            base_stat: 65,
            stat:{name: "Special-attack"}
        },
        {
            base_stat: 49,
            stat:{name: "Defense"}
        },
        {
            base_stat: 49,
            stat:{name: "Attack"}
        },
        {
            base_stat: 45,
            stat:{name: "Hp"}
        }
    ];
    const abilities = [
        {ability: {name: "Chlorophyll"}},
        {ability: {name: "Overgrow"}}
    ];
    const height = 0.7;
    const weight = 6.9;
    const description = "Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun’s rays, the seed grows progressively larger.";
    const spriteUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png";
    const tree = renderer.create(<PokemonDetailElement 
        id={id} 
        name={name} 
        types={types}
        stats={stats}
        abilities={abilities} 
        height={height} 
        weight={weight} 
        description={description}
        spriteUrl={spriteUrl}
        />).toJSON();
    expect(tree).toMatchSnapshot();
});