import React from "react";
import "./App.scss";
import Routes from "./routes";
import NavigationBar from "./components/shared/Navbar";

function App() {
  return (
    <div className="App">
      <NavigationBar/>
      <Routes/>
    </div>
  );
}

export default App;
