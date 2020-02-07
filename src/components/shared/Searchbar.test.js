import React from 'react';
import renderer from 'react-test-renderer';
import SearchBar from './Searchbar'

test('matches snapshot of SearchBar component', ()=>{
    const tree=renderer.create(<SearchBar />).toJSON();
    expect(tree).toMatchSnapshot();
});