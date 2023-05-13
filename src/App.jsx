import { useState } from "react";
import "./App.css";
import { PokemonCard } from "./components/pokemon-card/pokemonCard";
import { PokemonsList } from "./components/pokemon-list/pokemon-list";
import { Search } from "./components/search/search";

function App() {
  const [query, setQuery] = useState("");

  return (
    <div>
      <PokemonCard query={query} />
      <hr />
      <Search setQuery={setQuery} />
      <PokemonsList />
    </div>
  );
}

export default App;
