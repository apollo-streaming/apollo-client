import React from 'react';

import Search from './Search';
import RecentlyAdded from './RecentlyAdded';
import Recommended from './Recommended';
import SearchResults from './SearchResults';
import { useIsSearching } from '../store/modules/search/selector';

function Home() {
  const searching = useIsSearching();

  return (
    <>
      <Search />
      {!searching && (
        <>
          <Recommended />
          <RecentlyAdded />
        </>
      )}
      {searching && <SearchResults />}
    </>
  );
}

export default Home;
