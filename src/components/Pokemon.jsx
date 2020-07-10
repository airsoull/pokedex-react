import React from 'react';
import PropTypes from 'prop-types';

const Pokemon = React.memo(({ pokemon }) => {
  const { name, sprites, types } = pokemon;
  return (
    <div className="pokemon">
      <figure className="figure">
        <img src={sprites.front_default} alt={name} />
        <figcaption className="pokemon-name">{name}</figcaption>
      </figure>
      <div className="types d-flex justify-content-center">
        {
          types.map(({ type }) => {
            const className = `type ${type.name}`;
            return <div key={type.name} className={className}>{type.name}</div>;
          })
        }
      </div>
    </div >
  );
});

Pokemon.propTypes = {
  pokemon: PropTypes.object.isRequired,
};

export default Pokemon;
