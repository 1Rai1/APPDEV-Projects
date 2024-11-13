import React, { useState, useEffect } from "react";
import Axios from "axios";
import { motion } from "framer-motion";
import './CSS/AllPoke.css';
import logo from './IMG/logo.png';


const typeColors = {
    normal: '#A8A77A',
    fire: '#EE8130',
    water: '#6390F0',
    electric: '#F7D02C',
    grass: '#7AC74C',
    ice: '#96D9D6',
    fighting: '#C22E28',
    poison: '#A33EA1',
    ground: '#E2BF65',
    flying: '#A98FF3',
    psychic: '#F95587',
    bug: '#A6B91A',
    rock: '#B6A136',
    ghost: '#735797',
    steel: '#B7B7CE',
    dragon: '#6F35FC',
    dark: '#705746',
    fairy: '#D685AD',
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
                        
                        const speciesName = speciesDetails.data.genera.find(genus =>
                            genus.language.name === 'en'
                        )?.genus || 'Unknown Species';

                        return {
                            name: pokeDetails.data.name,
                            id: pokeDetails.data.id,
                            sprite: pokeDetails.data.sprites.other['official-artwork'].front_default,
                            height: pokeDetails.data.height,
                            weight: pokeDetails.data.weight,
                            types: pokeDetails.data.types.map(type => type.type.name),
                            stats: pokeDetails.data.stats.map(stat => ({
                                name: stat.stat.name,
                                value: stat.base_stat,
                            })),
                            description: description || 'No description available.',
                            species: speciesName
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
            return typeColors[types[0].toLowerCase()];
        }
        if (types.length > 1) {
            const color1 = typeColors[types[0].toLowerCase()];
            const color2 = typeColors[types[1].toLowerCase()];
            return `linear-gradient(45deg, ${color1} 50%, ${color2} 50%)`;
        }
        return '#FFFFFF';
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <img src={logo} alt="Logo" className="logo" />
            <div className="List">
                {pokemonList.map(pokemon => (
                    <motion.div 
                        key={pokemon.id} 
                        onClick={() => handlePokemonClick(pokemon)} 
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        style={{ background: getGradientBackground(pokemon.types) }} 
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
                        <p>
                            {selectedPokemon.types.map(type => (
                                <span 
                                    key={type} 
                                    className="type" 
                                    style={{ 
                                        backgroundColor: typeColors[type] || '#FFFFFF',
                                        color: '#FFFFFF',
                                        border: '1px solid #808080', 
                                        borderRadius: '5px',
                                        padding: '2px 5px'
                                    }}
                                >
                                    <strong>{type.charAt(0).toUpperCase() + type.slice(1)}</strong>
                                </span>
                            ))}
                        </p>
                    </h2>

                    <img src={selectedPokemon.sprite} alt={selectedPokemon.name}   />
                    <p><strong>National ID:</strong> {selectedPokemon.id}</p>
                    <p><strong>Height:</strong> {(selectedPokemon.height / 10).toFixed(1)} m</p>
                    <p><strong>Weight:</strong> {(selectedPokemon.weight / 10).toFixed(1)} kg</p>
                    <p><strong>Species:</strong> {selectedPokemon.species}</p>
                    <p><strong>Stats:</strong></p>

                    <ul className="stats-list">
                        {selectedPokemon.stats.map(stat => (
                            <li key={stat.name}>
                                <strong>{stat.name.charAt(0).toUpperCase() + stat.name.slice(1)}:</strong> {stat.value}
                            </li>
                        ))}
                    </ul>
                    <p><strong style={{ textAlign: 'center' }}>About:</strong> {selectedPokemon.description}</p>
                    <button onClick={() => setSelectedPokemon(null)}>Close</button>
                </div>
            </div>
            )}
            
        </div>
        
    );
}