import React from "react";
import Pokemons from "./Data";
import PokeList from "./PokeList"; 

class App extends React.Component {
  render() {
    return(
      <div className="body">
      <h1>POKEDEX</h1>
      <div className="main">
      { Pokemons.map ((i) => 
      <PokeList pokemon= { i } />
      )}
      </div>
      </div>
    )
  }
}

export default App;
