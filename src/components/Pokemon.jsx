import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import PokemonType from './pokemon-detail/PokemonType';
import PokemonImage from './pokemon-detail/PokemonImage';

const Pokemon = React.memo(({ pokemon }) => {
  const {
    name,
    sprites,
    types,
    id,
  } = pokemon;

  return (
    <div className="pokemon">
      <figure className="figure">
        <Link to={() => `/pokemon/${id}`}>
          <PokemonImage imageURl={sprites.front_default} pokemonName={name} />
          <figcaption className="pokemon-name">{name}</figcaption>
        </Link>
      </figure>
      <div className="types d-flex justify-content-center">
        {
          types.map(
            ({ type }) => (
              <PokemonType key={type.name} type={type} />
            ),
          )
        }
      </div>
    </div>
  );
});

Pokemon.propTypes = {
  pokemon: PropTypes.object.isRequired,
};

export default Pokemon;
