import PropTypes from "prop-types";
import { useEffect, useState } from "react";

const getPokemon = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export const PokemonItem = ({ pokemon }) => {
  const [pokemonData, setPokemonData] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    setError(false);
    getPokemon(pokemon.url)
      .then((data) => setPokemonData(data))
      .catch(() => setError(true));
  }, [pokemon]);

  if (error) return <span>No se encontró este pokemón</span>;
  if (!pokemonData) return null;

  return (
    <div>
      <p>{pokemonData.name}</p>
      <img src={pokemonData.sprites.front_default} alt={pokemonData.name} />
    </div>
  );
};

PokemonItem.propTypes = {
  pokemon: PropTypes.object,
};
