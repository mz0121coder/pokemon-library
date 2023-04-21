import React, { useState } from "react";

function Card({ pokemon }) {
  const [showDetails, setShowDetails] = useState(false);
  console.log(showDetails);

  const handleClick = () => {
    setShowDetails(!showDetails);
    console.log(showDetails);
  };

  return (
    <div>
      <h1>{pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}</h1>

      <img src={pokemon.sprites.front_default} alt={pokemon.name}></img>

      {showDetails && (
        <>
          <h4>ID: {pokemon.id}</h4>
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
        </>
      )}

      <button onClick={handleClick}>
        {showDetails ? "hide details" : "view details"}
      </button>
    </div>
  );
}
export default Card;
