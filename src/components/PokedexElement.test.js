import React from 'react';
import renderer from 'react-test-renderer';
import PokedexElement from './PokedexElement';

test('matches snapshot of PokedexElement', ()=>{
    const id= 0;
    const pokemon={
        name: 'bulbasaur'
    };
    const tree=renderer.create(<PokedexElement id={id + 1} pokemon={pokemon}/>).toJSON();
    expect(tree).toMatchSnapshot();
});