import React from "react";
import Nav from "./components/nav";
import Card from "./components/card";
import Searchbar from "./components/searchbar";
import "./App.css";

function App() {
  return (
    <div className="app">
    <div className="nav">
      <Nav /></div>
      <Searchbar />
      <Card />
    </div>
  );
}

export default App;
