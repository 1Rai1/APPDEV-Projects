import React, { useState, useEffect } from "react";
import Axios from "axios";
import { motion } from "framer-motion"; // Import Framer Motion
import './AllPoke.css';

const typeColors = {
    normal: '#A8A878',
    fire: '#F08030',
    water: '#6890F0',
    electric: '#F8D030',
    grass: '#78C850',
    ice: '#98D8D8',
    fighting: '#C03028',
    poison: '#A040B0',
    ground: '#E0C068',
    flying: '#A890F0',
    psychic: '#F85888',
    bug: '#A8B820',
    rock: '#B8A038',
    ghost: '#705898',
    dragon: '#7038F8',
    dark: '#705848',
    steel: '#B8B8D0',
    fairy: '#F4A6B8',
};

export default function AllPoke() {
    const [pokemonList, setPokemonList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedPokemon, setSelectedPokemon] = useState(null);

    useEffect(() => {
        const fetchPokemon = async () => {
            try {
                const response = await Axios.get("https://pokeapi.co/api/v2/pokemon?limit=1000");
                const gen2Pokemon = response.data.results.slice(151, 251);

                const pokemonData = await Promise.all(
                    gen2Pokemon.map(async (pokemon) => {
                        const pokeDetails = await Axios.get(pokemon.url);
                        const speciesDetails = await Axios.get(pokeDetails.data.species.url);
                        const description = speciesDetails.data.flavor_text_entries.find(entry => 
                            entry.language.name === 'en'
                        )?.flavor_text.replace(/[\f\n\r]/g, ' ');

                        return {
                            name: pokeDetails.data.name,
                            id: pokeDetails.data.id,
                            sprite: pokeDetails.data.sprites.front_default,
                            height: pokeDetails.data.height,
                            weight: pokeDetails.data.weight,
                            types: pokeDetails.data.types.map(type => type.type.name),
                            description: description || 'No description available.',
                        };
                    })
                );

                setPokemonList(pokemonData);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching Pokémon data:", error);
                setLoading(false);
            }
        };

        fetchPokemon();
    }, []);

    const handlePokemonClick = (pokemon) => {
        setSelectedPokemon(pokemon);
    };

    const getGradientBackground = (types) => {
        if (types.length === 1) {
            return typeColors[types[0]];
        }
        if (types.length > 1) {
            const color1 = typeColors[types[0]];
            const color2 = typeColors[types[1]];
            return `linear-gradient(45deg, ${color1} 50%, ${color2} 50%)`;
        }
        return '#FFFFFF'; // Default fallback color
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>Johto Region</h1>
            <div className="List">
                {pokemonList.map(pokemon => (
                    <motion.div 
                        key={pokemon.id} 
                        onClick={() => handlePokemonClick(pokemon)} 
                        whileHover={{ scale: 1.1 }} // Scale up on hover
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <img src={pokemon.sprite} alt={pokemon.name} />
                        <div>
                            {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
                        </div>
                    </motion.div>
                ))}
            </div>

            {selectedPokemon && (
                <div className="modal">
                    <div className="modal-content" style={{ background: getGradientBackground(selectedPokemon.types) }}>
                        <h2>
                            <strong>{selectedPokemon.name.charAt(0).toUpperCase() + selectedPokemon.name.slice(1)}</strong>
                        </h2>
                        <img src={selectedPokemon.sprite} alt={selectedPokemon.name} />
                        <p>ID: {selectedPokemon.id}</p>
                        <p>Height: {selectedPokemon.height}</p>
                        <p>Weight: {selectedPokemon.weight}</p>
                        <p>Type: 
                            {selectedPokemon.types.map(type => (
                                <span 
                                    key={type} 
                                    className="type" 
                                    style={{ 
                                        backgroundColor: typeColors[type] || '#FFFFFF',
                                        color: '#FFFFFF'
                                    }}
                                >
                                    {type.charAt(0).toUpperCase() + type.slice(1)}
                                </span>
                            ))}
                        </p>
                        <p>Description: {selectedPokemon.description}</p>
                        <button onClick={() => setSelectedPokemon(null)}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
}
