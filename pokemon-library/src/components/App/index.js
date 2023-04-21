import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import the axios library to make API calls
import '../App/index.css';

import Card from '../Card'; // Import the Card component
// import MainCard from '../MainCard'; // Import the PokemonList component

function App() {
	// create a state variable 'searchTerm'
	const [search, setSearch] = useState('');
	const [pokemonList, setPokemonList] = useState([]); // Set up state to hold the list of Pokemon

	useEffect(() => {
		const getPokemonList = async () => {
			const promises = []; // Create an empty array to hold promises for each API call
			for (let i = 1; i <= 1000; i++) {
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

	// create function to update the search term whenever user types in the search input
	const handleSearch = event => {
		setSearch(event.target.value);
	};
	// filter the pokemonList to only show pokemon whose name starts with the search term
	// 'pi' => pikachu etc
	const filteredList = pokemonList.filter(pokemon =>
		pokemon.name.toLowerCase().startsWith(search.toLowerCase())
	);

	return (
		<main className='container'>
			{/* <MainCard /> */}
			{/* Render the PokemonList component */}
			<div className='search-container'>
				<h1 className='center'>Choose your Pokemon</h1>
				<label htmlFor='search' className='center'>
					Search:
				</label>
				<input type='text' id='search' value={search} onChange={handleSearch} />
			</div>
			<div className='card-container'>
				{filteredList.map(pokemon => (
					<Card key={pokemon.id} pokemon={pokemon} /> // Map over the list of Pokemon data and render a Card component for each one
				))}
			</div>
		</main>
	);
}

export default App;
