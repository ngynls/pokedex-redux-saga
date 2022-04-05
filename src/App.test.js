import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import rootReducer from "./store/reducers";
import { Provider } from "react-redux";
import { createStore } from "redux";

test("renders without crashing", () => {
  const div = document.createElement("div");
  const store = createStore(rootReducer);
  ReactDOM.render(<Provider store={ store }><App /></Provider>, div);
});
