import React, { useState } from "react";

import Card from "../Card";
import PokemonList from "../PokemonList";

function App() {
  const [pokemon, setPokemon] = useState({}); //set as empty pokemon object

  return (
    <main>
      <Card pokemon={pokemon} />
      <PokemonList />
    </main>
  );
}

export default App;
