import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      {/* <Route path="/" exact component={Home} />
      <Route path="/busca" component={SearchResults} />
      <Route path="/sign-in" component={SignIn} />
      <Route path="/sign-up" component={SignUp} />
      <Route path="/podcast/:id" component={PodcastOverview} />
      <Route path="/dashboard/episodes" component={ListEpisodes} /> */}
    </Switch>
  );
}

export default Routes;
