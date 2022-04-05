import React from "react";
import renderer from "react-test-renderer";
import Home from "./Home";
import rootReducer from "../store/reducers";
import { Provider } from "react-redux";
import { createStore } from "redux";

test("matches snapshot of Home component", () => {
    const store = createStore(rootReducer);
    const tree = renderer.create(<Provider store={ store }><Home /></Provider>).toJSON();
    expect(tree).toMatchSnapshot();
});