import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import SearchResults from './pages/SearchResults';
import PodcastOverview from './pages/PodcastOverview';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import ListEpisodes from './pages/Dashboard/ListEpisodes';

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/busca" component={SearchResults} />
      <Route path="/sign-in" component={SignIn} />
      <Route path="/sign-up" component={SignUp} />
      <Route path="/podcast/:id" component={PodcastOverview} />
      <Route path="/dashboard/episodes" component={ListEpisodes} />
    </Switch>
  );
}

export default Routes;
