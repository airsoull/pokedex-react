import React from 'react';

import Loading from './Loading';
import useFetchPokemon from '../hooks/useFetchPokemon';
import PokemonDetailCard from './pokemon-detail/PokemonDetailCard';

const PokemonDetail = ({ match }) => {
  const { pokemonid } = match.params;
  const { loading, data } = useFetchPokemon(pokemonid);

  return (
    <>
      {
        loading
          ? <div className="text-center"><Loading /></div>
          : <PokemonDetailCard pokemon={data} />
      }
    </>
  );
};

export default PokemonDetail;
