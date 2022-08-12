import React from "react";
import Pokemons from "./Data";
import PokeList from "./PokeList"; 
import Button from "./Button";

class Pokedex extends React.Component {

  render() {
     return(
      <div className="body">
      <h1>POKEDEX</h1>
      
      <div className="main">
      <PokeList pokemon= { Pokemons[0] } />
    
      </div>
      </div>
    )
  }
}

export default Pokedex;
