import React from 'react';

import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

import './config/ReactotronConfig';

import Routes from './Routes';
import Header from './components/Header';
import Footer from './components/Footer';

import { store, persistor } from './store';

import GlobalStyle from './assets/styled/global';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <GlobalStyle />
        <Header />
        <Routes />
        <Footer />
      </PersistGate>
    </Provider>
  );
}

export default App;
