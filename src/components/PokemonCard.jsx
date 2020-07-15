import React from 'react';
import PropTypes from 'prop-types';
import Pokemon from './Pokemon';

const PokemonCard = React.memo(({ pokemon }) => (
  <div className="pokemon pokemon-card">
    <Pokemon pokemon={pokemon} />
  </div>
));

PokemonCard.propTypes = {
  pokemon: PropTypes.object.isRequired,
};

export default PokemonCard;
