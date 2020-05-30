import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import SearchResults from './pages/SearchResults';
import PodcastOverview from './pages/PodcastOverview';

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/busca" component={SearchResults} />
      <Route path="/podcast/:id" component={PodcastOverview} />
    </Switch>
  );
}

export default Routes;
