import React, { useState } from 'react';
import useFetch from '../hooks/useFetch';
import PokemonCard from './PokemonCard';
import Loading from './Loading';

import { baseURL } from '../helpers/urls';

const PokemonList = React.memo(() => {
  const [baseUrl, setBaseUrl] = useState(`${baseURL()}?limit=153`);
  const { loading, data } = useFetch(baseUrl);
  const { previous, next, results } = !!data && data;

  const nextUrl = () => !!next && setBaseUrl(next);
  const previousUrl = () => !!previous && setBaseUrl(previous);

  return (
    <div className="container">
      <div className="d-flex justify-content-center mb-3">
        <button
          type="button"
          className="btn btn-success btn-lg m-1"
          onClick={previousUrl}
        >
          Previous
        </button>
        <button
          type="button"
          className="btn btn-success btn-lg m-1"
          onClick={nextUrl}
        >
          Next
        </button>
      </div>
      <div className="row justify-content-center">
        {
          loading
            ? <Loading />
            : results.map(
              ({ name, url }) => (
                <div className="col-sm-12 col-md-6 col-lg-4" key={name}>
                  <PokemonCard
                    key={name}
                    url={url}
                  />
                </div>
              ),
            )
        }
      </div>
    </div>
  );
});

export default PokemonList;
