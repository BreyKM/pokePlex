import React from "react";
import { useDispatch } from "react-redux";
import  { searchSlice } from "../slices/searchSlice.js";

import "../css/searchbar.scss";


export default function Searchbar() {

    const dispatch = useDispatch();
    

    const [name, setName] = React.useState("");
    
    const handleChange = (e) => {
        setName(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(searchSlice.actions.setName(name));
    }

    
    
    return (
        <form className="search-container" onSubmit={handleSubmit}>
        <input
          id="search-box"
          type="text"
          className="search-box"
          name="search"
          value={name}
          onChange={handleChange}
          placeholder="Search Pokemon"
          
        />
        <label htmlFor="search-box">
          
        </label>
        <input type="submit" id="search-submit" value=""  />
      </form>
    )
}


