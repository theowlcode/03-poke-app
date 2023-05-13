import PropTypes from "prop-types";
import { PokemonItem } from "../pokemon-list/pokemon-item";

const getUrl = (query) => {
  return "https://pokeapi.co/api/v2/pokemon/" + query;
};

export const PokemonCard = ({ query }) => {
  if (!query) return <span>No se ha buscado un pokemón</span>;
  return <PokemonItem pokemon={{ url: getUrl(query) }} />;
};

PokemonCard.propTypes = {
  query: PropTypes.string.isRequired,
};
