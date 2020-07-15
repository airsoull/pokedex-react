import React from 'react';
import PropTypes from 'prop-types';

import PokemonType from './PokemonType';
import PokemonStat from './PokemonStat';
import PokemonImage from './PokemonImage';

const PokemonDetailCard = ({ pokemon }) => {
  const {
    name,
    sprites,
    types,
    stats,
    weight,
    base_experience,
  } = pokemon;

  const spriteKeys = Object.keys(sprites);

  return (
    <div className="container pokemon pokemon-detail">
      {/* pokemon detail */}
      <div className="row justify-content-md-center">
        <div className="col-sm-12 col-md-4 justify-content-center">
          <PokemonImage imageURl={sprites.front_default} pokemonName={name} />
        </div>
        <div className="col-sm-12 col-md-4 mt-3 text-center">
          <span className="pokemon-name h5">{name}</span>
          <div className="types d-flex justify-content-center mt-3">
            {
              types.map(
                ({ type }) => (
                  <PokemonType key={type.name} type={type} />
                ),
              )
            }
          </div>
        </div>
      </div>

      {/* pokemon information */}
      <div className="row pokemon-info">
        <div className="col-sm-12 col-md-6">
          <span className="pokemon-data-label data-pokemon">
            weight
            <span className="badge-number">{weight}</span>
          </span>
        </div>
        <div className="col-sm-12 col-md-6">
          <span className="pokemon-data-label data-pokemon">
            base experience
            <span className="badge-number">
              {base_experience}
            </span>
          </span>
        </div>
      </div>

      {/* stats */}
      <div className="row pokemon-info mt-3">
        {
          stats.map(
            (s) => (
              <div className="col-sm-12 col-md-6" key={s.stat.name}>
                <PokemonStat key={s.stat.name} stat={s} />
              </div>
            ),
          )
        }
      </div>

      {/* pokemon images */}
      <div className="row">
        <div className="col-md-12 text-center">
          {spriteKeys.map((k) => (
            !!sprites[k] && <img src={sprites[k]} alt={name} key={k} loading="lazy" />
          ))}
        </div>
      </div>
    </div>
  );
};

PokemonDetailCard.propTypes = {
  pokemon: PropTypes.object.isRequired,
};

export default PokemonDetailCard;
