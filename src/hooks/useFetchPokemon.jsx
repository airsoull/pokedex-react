import useFetch from './useFetch';
import { pokemonURL } from '../helpers/urls';

console.log(pokemonURL(1));
const useFetchPokemon = (pokemonID) => (
  useFetch(pokemonURL(pokemonID))
);

export default useFetchPokemon;
