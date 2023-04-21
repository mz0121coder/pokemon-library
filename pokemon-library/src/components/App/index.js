import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import the axios library to make API calls

import Card from '../Card'; // Import the Card component
import PokemonList from '../PokemonList'; // Import the PokemonList component

function App() {
	const [pokemonList, setPokemonList] = useState([]); // Set up state to hold the list of Pokemon

	useEffect(() => {
		const getPokemonList = async () => {
			const promises = []; // Create an empty array to hold promises for each API call
			for (let i = 1; i <= 100; i++) {
				// Loop 100 times to get 100 random Pokemon
				const url = `https://pokeapi.co/api/v2/pokemon/${i}`; // Generate the first 100 Pokemon's URL
				promises.push(axios.get(url)); // Add a promise for the API call to the promises array
			}
			const responses = await Promise.all(promises); // Wait for all promises to resolve
			// console.log(responses);
			const data = responses.map(response => response.data); // Extract the data from each response
			console.log(data);
			setPokemonList(data); // Set the state with the list of Pokemon data
		};
		getPokemonList(); // Call the function to get the list of Pokemon
	}, []); // Only run this effect once, when the component mounts

	return (
		<main>
			{pokemonList.map(pokemon => (
				<Card key={pokemon.id} pokemon={pokemon} /> // Map over the list of Pokemon data and render a Card component for each one
			))}
			<PokemonList />
			{/* Render the PokemonList component */}
		</main>
	);
}

export default App;
