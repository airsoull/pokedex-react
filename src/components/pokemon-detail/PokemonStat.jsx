import React from 'react';

const PokemonStat = ({ stat }) => {
  const { base_stat } = stat;
  return (
    <span className="pokemon-data-label data-pokemon">
      {stat.stat.name}
      <span className="badge-number">
        {base_stat}
      </span>
    </span>
  );
};

export default PokemonStat;
