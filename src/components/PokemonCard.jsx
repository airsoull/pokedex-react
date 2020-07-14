import React from 'react';
import PropTypes from 'prop-types';
import useFetch from '../hooks/useFetch';
import Pokemon from './Pokemon';
import Loading from './Loading';

const PokemonCard = React.memo(({ url }) => {
  const { loading, data } = useFetch(url);

  return (
    <div className="pokemon pokemon-card">
      {
        loading
          ? <Loading extraClass="mt-5" />
          : <Pokemon pokemon={data} />
      }
    </div>
  );
});

PokemonCard.propTypes = {
  url: PropTypes.string.isRequired,
};

export default PokemonCard;
