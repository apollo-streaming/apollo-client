import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/busca" component={SearchResults} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
