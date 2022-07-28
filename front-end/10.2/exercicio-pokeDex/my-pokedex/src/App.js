import React from 'react';
import Pokedex from './components/Pokedex';
import './App.css'
import Pokemon from './components/Pokemon';
import pokemons from './data';

class App extends React.Component {
  render() {
    return(
      <div className='App'>
        <h1>Pokedex</h1>
        <Pokedex pokemonsPropApp={pokemons}/>
      </div>
    );
  }
}

export default App; 