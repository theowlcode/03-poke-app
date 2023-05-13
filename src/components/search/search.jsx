import { useRef } from "react";
import PropTypes from "prop-types";

export const Search = ({ setQuery }) => {
  const pokemonInputRef = useRef(null);

  const handleSubmit = () => {
    setQuery(pokemonInputRef.current.value);
  };

  return (
    <div className="search">
      <input type="text" placeholder="Ej: pikachu" ref={pokemonInputRef} />
      <button onClick={handleSubmit}>Buscar</button>
    </div>
  );
};

Search.propTypes = {
  setQuery: PropTypes.func.isRequired,
};
