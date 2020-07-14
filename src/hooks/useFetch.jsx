import { useState, useEffect, useRef } from 'react';

const useFetch = (url) => {
  const initialState = {
    data: [],
    loading: true,
    error: null,
  };

  const isMounted = useRef(true);
  const [state, setState] = useState(initialState);

  useEffect(() => (() => { isMounted.current = false; }), []);
  const clearState = () => setState({ ...initialState });

  useEffect(() => {
    clearState();

    fetch(url)
      .then(
        (response) => response.json(),
      )
      .then((data) => {
        if (isMounted.current) {
          setState({
            ...initialState,
            loading: false,
            data,
          });
        }
      });
  }, [url]);

  return state;
};

export default useFetch;
