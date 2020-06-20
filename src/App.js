import React from 'react';

import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';

import './config/ReactotronConfig';

import Routes from './Routes';
import Header from './containers/Header';
import Sidebar from './containers/Sidebar';

import { store, persistor } from './store';
import history from './services/history';

import GlobalStyle from './assets/styled/global';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router history={history}>
          <GlobalStyle />
          <Header />
          <Sidebar />
          <Routes />
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
