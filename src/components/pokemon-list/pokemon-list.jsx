import { useEffect, useState } from "react";
import { Paginator } from "./paginator";
import { PokemonItem } from "./pokemon-item";

const getPokemons = async (offset = 0) => {
  const url = new URL("https://pokeapi.co/api/v2/pokemon");
  url.searchParams.set("limit", 6);
  url.searchParams.set("offset", 6 * offset);
  const response = await fetch(url.toString());
  const data = await response.json();
  return data.results;
};

export const PokemonsList = () => {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(false);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    setLoading(true);
    getPokemons(offset).then((data) => {
      setPokemons(data);
      setLoading(false);
    });
  }, [offset]);

  const handleOffset = (value) => {
    setOffset((prev) => Math.max(prev + value, 0));
  };

  return (
    <div className="pokemon-list">
      {loading && <div>...cargando datos</div>}
      {!loading && (
        <div className="list">
          {pokemons.map((pokemon, index) => {
            return <PokemonItem pokemon={pokemon} key={index} />;
          })}
        </div>
      )}
      <Paginator offset={offset} handleOffset={handleOffset} />
    </div>
  );
};
