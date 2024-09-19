import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Nav from "./components/nav";
import Searchbar from "./components/searchbar";
import Card from "./components/card";
import Modal from "./components/modal";
import "./App.css";

function App() {
  const { isOpen } = useSelector((store) => store.modal);
  

  return (
    <div className="app">
      {isOpen && <Modal />}
      <div className="nav">
        <Nav />
      </div>
      <Searchbar />
      <Card />
    </div>
  );
}

export default App;
