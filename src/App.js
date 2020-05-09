import React from 'react';
import GlobalStyle from './assets/styled/global';
import Routes from './Routes';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Routes />
      <Footer />
    </>
  );
}

export default App;
