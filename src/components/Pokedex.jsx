import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './Header';
import PokemonList from './PokemonList';
import PokemonDetail from './PokemonDetail';

const Pokedex = () => (
  <Router>
    <Header />
    <Switch>
      <Route path="/pokemon/:pokemonid" component={PokemonDetail} />
      <Route exact path="/" component={PokemonList} />
    </Switch>
  </Router>
);

export default Pokedex;
