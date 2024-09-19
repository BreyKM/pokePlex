import React from "react";
import "../css/card.scss";
import Tilt from "react-parallax-tilt";
import { useGetPokemonByNameQuery } from "../fromAPI/pokemonApi";
import { useDispatch, useSelector } from "react-redux";

import { openModal } from "../slices/modalSlice";



export default function Card() {

    const dispatch = useDispatch();
    
    const name = useSelector((state) => state.pokemonName);
    
    const { data, error, isLoading, isFetching } = useGetPokemonByNameQuery(name);
    

    
    

    return (
    <div className="card-container">
        <Tilt
          glareEnable={true}
          glareBorderRadius="8px"
          glareMaxOpacity={0.3}
          glareColor="#fff"
          glarePosition="all"
          
        >
          <div
            className={`card ${name == "bulbasaur" ? "grass": data.types[0].type.name}` }

            style={{
              width: "490px",
              height: "622px",
              zIndex: "2",

            }}
          >
            <span><div className="card-id">{name == "bulbasaur" ? "#1" : `#${data.id}`}</div><div className="modal-info-btn"><i className="fa fa-info-circle info-circle" onClick={() => {
                dispatch(openModal());
            }}></i></div></span>
            <span><img className={"card-image"} src={name == "bulbasaur" ? "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" : `${data.sprites.other["official-artwork"].front_default}`} /></span>
            <span className="pokemon-name">{name == "bulbasaur" ? "bulbasaur" : data.name}</span>
            
            
            
          </div>
        </Tilt>
      </div>
)
    
}


