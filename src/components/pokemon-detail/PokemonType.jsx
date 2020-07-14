import React from 'react';

const PokemonType = ({ type }) => {
  const { name } = type;
  const className = `type ${name}`;
  return (<div className={className}>{name}</div>);
};

export default PokemonType;
