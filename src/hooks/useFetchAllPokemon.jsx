import { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

const cacheURL = {};

const useFetchAllPokemon = (url) => {
  const [load, setLoad] = useState(true);
  const [result, setResult] = useState({});
  const isMounted = useRef(true);

  const clearState = () => {
    setLoad(true);
    setResult({});
  };

  const getPokemon = async () => {
    if (url in cacheURL) {
      return cacheURL[url];
    }

    const { data } = await axios.get(url);
    await Promise.all(data.results.map(
      async (poke, i) => {
        const res = await axios.get(poke.url);
        data.results[i] = res.data;
      },
    ));
    return data;
  };

  useEffect(() => () => { isMounted.current = false; }, []);
  useEffect(() => {
    clearState();
    getPokemon()
      .then((data) => {
        if (isMounted.current) {
          setResult(data);
          setLoad(false);
          cacheURL[url] = data;
        }
      });
  }, [url]);

  return [load, result];
};

useFetchAllPokemon.propTypes = {
  url: PropTypes.string.isRequired,
};

export default useFetchAllPokemon;
