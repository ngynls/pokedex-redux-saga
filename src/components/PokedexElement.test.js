import React from "react";
import renderer from "react-test-renderer";
import PokedexElement from "./PokedexElement";
import { BrowserRouter as Router } from "react-router-dom";

test("matches snapshot of PokedexElement", () => {
    const id = 0;
    const pokemon = {
        name: "bulbasaur"
    };
    const tree = renderer.create(<Router><PokedexElement id={ id + 1 } pokemon={ pokemon }/></Router>).toJSON();
    expect(tree).toMatchSnapshot();
});