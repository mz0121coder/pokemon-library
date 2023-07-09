import React, { useState } from 'react';
import './index.css';
function Card({ pokemon }) {
	// State to track whether to show details or not
	const [showDetails, setShowDetails] = useState(false);
	// Function to handle button click
	const handleClick = () => {
		setShowDetails(!showDetails);
	};
	return (
		<div className='card'>
			{/* Display the capitalized name of the pokemon */}
			<h2>{pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}</h2>
			{/* Display the image of the pokemon */}
			<img
				src={pokemon.sprites.front_default}
				alt={pokemon.name}
				className='card-image'></img>
			{/* Button to toggle showing/hiding details */}
			<button className='card-button' onClick={handleClick}>
				{showDetails ? 'hide details' : 'view details'}
			</button>
			{/* Show details if showDetails is true */}
			{showDetails && (
				<div className='card-details'>
					{/* Display the types of the pokemon */}
					<ul className='card-types'>
						<h5>Types:</h5>
						{pokemon.types.map((type, index) => (
							<li key={index}>
								{/* Capitalize the type name */}
								{type.type.name[0].toUpperCase() + type.type.name.slice(1)}
							</li>
						))}
					</ul>
					{/* Display the abilities of the pokemon */}
					<ul className='card-abilities'>
						<h5>Abilities:</h5>
						{pokemon.abilities.map((ability, index) => (
							<li key={index}>
								{/* Capitalize the ability name */}
								{ability.ability.name[0].toUpperCase() +
									ability.ability.name.slice(1)}
							</li>
						))}
					</ul>
					{/* Display the height and weight of the pokemon */}
					<ul className='card-height-weight'>
						<li>Height: {pokemon.height / 10} m</li>
						<li>Weight: {pokemon.weight} kg</li>
					</ul>
				</div>
			)}
		</div>
	);
}
export default Card;
