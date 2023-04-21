import React from "react";

function Card({ pokemon }) {
  return (
    <div>
      <h1>{pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}</h1>
      <h2>ID: {pokemon.id}</h2>
      <img src={pokemon.sprites.front_default} alt={pokemon.name}></img>
      <ul>
        Types:
        {pokemon.types.map((type, index) => (
          <li key={index}>{type.type.name}</li>
        ))}
      </ul>

      <ul>
        <li> Height:{pokemon.height}</li>
        <li>Weight:{pokemon.weight} </li>
      </ul>

      <ul>
        Ability:{" "}
        {pokemon.abilities.map((ability, index) => (
          <li key={index}>{ability.ability.name}</li>
        ))}
      </ul>
    </div>
  );
}
export default Card;
