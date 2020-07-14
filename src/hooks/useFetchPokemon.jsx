import useFetch from './useFetch';
import { pokemonURL } from '../helpers/urls';

const useFetchPokemon = (pokemonID) => (
  useFetch(pokemonURL(pokemonID))
);

export default useFetchPokemon;
