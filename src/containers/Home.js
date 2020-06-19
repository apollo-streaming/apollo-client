import React from 'react';

import Search from './Search';
import RecentlyAdded from './RecentlyAdded';
import Recommended from './Recommended';

function Home() {
  return (
    <>
      <Search />
      <Recommended />
      <RecentlyAdded />
    </>
  );
}

export default Home;
