import React from 'react';
import PropTypes from 'prop-types';

const PokemonImage = ({ imageURl, pokemonName }) => (
  <div className="pokemon-image mx-auto">
    <img src={imageURl} alt={pokemonName} loading="lazy" />
  </div>
);

PokemonImage.propTypes = {
  imageURl: PropTypes.string.isRequired,
  pokemonName: PropTypes.string.isRequired,
};

export default PokemonImage;
