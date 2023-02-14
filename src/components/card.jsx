import React from "react";
import "../css/card.scss";
import Tilt from "react-parallax-tilt";
import { useGetPokemonByNameQuery } from "../fromAPI/pokemonApi";
import { useSelector } from "react-redux";


export default function Card() {

    const name = useSelector((state) => state.pokemonName);
    console.log(name);
    

   
   

    const { data, error, isLoading } = useGetPokemonByNameQuery(name);











    return (
    <div className="card-container">
        <Tilt
          glareEnable={true}
          glareBorderRadius="8px"
          glareMaxOpacity={0.2}
          glareColor="#ffffff"
          glarePosition="all"
          
        >
          <div
            className="card"
            style={{
              width: "490px",
              height: "622px",
              zIndex: "2",
            }}
          >
            <span><div className="card-id">{name == "bulbasaur" ? "#1" : `#${data.id}`}</div><i className="fa fa-info-circle info-circle"></i></span>
            <span><img className="card-image" src={name == "bulbasaur" ? "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" : `${data.sprites.other["official-artwork"].front_default}`} /></span>
            <span>{name == "bulbasaur" ? "bulbasur" : data.name}</span>
          </div>
        </Tilt>
      </div>
)
    
}
