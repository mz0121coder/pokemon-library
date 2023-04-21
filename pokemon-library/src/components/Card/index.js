import React, { useState } from "react";
import "./index.css";

function Card({ pokemon }) {
  const [showDetails, setShowDetails] = useState(false);

  const handleClick = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="card">
      <h2>{pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}</h2>

      <img
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
        className="card-image"
      ></img>

      <button className="card-button" onClick={handleClick}>
        {showDetails ? "hide details" : "view details"}
      </button>

      {showDetails && (
        <div className="card-details">
          <ul className="card-types">
            <h5>Types:</h5>

            {pokemon.types.map((type, index) => (
              <li key={index}>
                {type.type.name[0].toUpperCase() + type.type.name.slice(1)}
              </li>
            ))}
          </ul>

          <ul className="card-abilities">
            <h5>Abilities:</h5>

            {pokemon.abilities.map((ability, index) => (
              <li key={index}>
                {ability.ability.name[0].toUpperCase() +
                  ability.ability.name.slice(1)}
              </li>
            ))}
          </ul>
          <br />
          <ul className="card-height-weight">
            <li>Height: {pokemon.height / 10} m</li>
            <li>Weight: {pokemon.weight} kg</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Card;
