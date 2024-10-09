import React, { useState } from "react";
import Axios from "axios";
import './App.css';
import logo from '../src/logo.png'

function App() {
  const [pokemonName, setPokemonName] = useState("");
  const [pokemon, setPokemon] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const searchPokemon = () => {
    setLoading(true);
    setError("");
    setPokemon({}); 

    Axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`)
      .then((response) => {
        const id = response.data.id;
        if (id >= 152 && id <= 251) {
          setPokemon({
            name: capitalizeFirstLetter(response.data.name),
            species: capitalizeFirstLetter(response.data.species.name),
            img: response.data.sprites.other.dream_world.front_default,
            hp: response.data.stats[0].base_stat,
            attack: response.data.stats[1].base_stat,
            defense: response.data.stats[2].base_stat,
            type: capitalizeFirstLetter(response.data.types[0].type.name),
            weight: parseFloat(response.data.weight * 0.1).toFixed(1),
            height: parseFloat(response.data.height* 0.10).toFixed(1)
          });
        } else {
          setError("This Pokémon is not from Gen 1.");
        }
      })
      .catch(() => {
        setError("Who's dat Pokemon---Music Enters");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <>
    <div className="Pokedex">
    <div className="Dex">
    <img src={logo} alt="Pokedex"/>
      <input
        type="text"
        onChange={(event) => setPokemonName(event.target.value)}
        placeholder="Enter Pokémon Name"
      />
      <button className='Search' onClick={searchPokemon}>Search Pokémon</button>

      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}
      </div>
      <div className="Information">
      {pokemon.name && !loading && !error && (
        <>
          <h2>{pokemon.name}</h2>
          <img src={pokemon.img} alt={pokemon.name} />
          <p>Species: {pokemon.species}</p>
          <p>HP: {pokemon.hp}</p>
          <p>Attack: {pokemon.attack}</p>
          <p>Defense: {pokemon.defense}</p>
          <p>Type: {pokemon.type}</p>
          <p>Weight: {pokemon.weight} kg</p>
          <p>Height: {pokemon.height} m</p>
        </>
      )}
        </div>
      </div>
    </>
  );
}

export default App;
