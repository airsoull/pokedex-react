const baseURL = () => (
  'https://pokeapi.co/api/v2/pokemon/'
);

const pokemonURL = (pokemonID) => (
  `${baseURL()}${pokemonID}`
);

export { baseURL, pokemonURL };
