import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Podcast from './pages/Podcast';
import Playlist from './pages/Playlist';
import Following from './pages/Following';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/podcast" component={Podcast} />
      <Route path="/playlists" component={Playlist} />
      <Route path="/following" component={Following} />
      <Route path="/signin" component={SignIn} />
      <Route path="/signup" component={SignUp} />
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
